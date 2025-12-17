declare const Deno: any;

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    let systemPrompt = "";
    let userPrompt = "";
    
    const langName = language === "fr" ? "French" : language === "es" ? "Spanish" : "English";

    switch (type) {
      case "filler-words":
        systemPrompt = `You are a speech coach analyzing spoken text for filler words. Analyze the transcript and identify filler words.
For ${langName}, common filler words include: ${getFillerWords(language).join(", ")}.
Return a JSON object with: { fillerWords: { word: count }, totalFillers: number, score: number (0-100, where 100 is no fillers), feedback: string }`;
        userPrompt = `Analyze this transcript for filler words: "${data.transcript}"`;
        break;

      case "tone-transform":
        systemPrompt = `You are a communication expert evaluating tone transformations in ${langName}.
The user transformed a neutral sentence into a target tone.
Rate the transformation on accuracy (how well it matches the target tone), creativity, and grammar.
Return JSON: { score: number (0-100), accuracy: number, creativity: number, grammar: number, feedback: string, suggestion: string }`;
        userPrompt = `Original: "${data.original}"
Target tone: ${data.targetTone}
User's transformation: "${data.userAnswer}"`;
        break;

      case "question-crafting":
        systemPrompt = `You are a communication expert evaluating question quality in ${langName}.
The user crafted a question based on a statement.
Evaluate: clarity, depth (does it probe deeper?), appropriateness for the question type, and grammar.
Return JSON: { score: number (0-100), clarity: number, depth: number, appropriateness: number, feedback: string, improvedVersion: string }`;
        userPrompt = `Statement: "${data.statement}"
Question type requested: ${data.questionType}
User's question: "${data.userQuestion}"`;
        break;

      case "repair-rephrase":
        systemPrompt = `You are a writing coach evaluating sentence improvements in ${langName}.
The user rephrased a clunky sentence to make it better.
Evaluate: conciseness, clarity, natural flow, and whether the original meaning is preserved.
Return JSON: { score: number (0-100), conciseness: number, clarity: number, naturalFlow: number, feedback: string, alternativeVersion: string }`;
        userPrompt = `Original clunky sentence: "${data.original}"
User's improved version: "${data.userAnswer}"`;
        break;

      case "narrative-puzzle":
        systemPrompt = `You are a creative writing coach evaluating micro-stories in ${langName}.
The user wrote a short narrative using required words.
Evaluate: creativity, coherence, proper use of all required words, and grammar.
Return JSON: { score: number (0-100), creativity: number, coherence: number, wordUsage: number, grammar: number, feedback: string, missingWords: string[] }`;
        userPrompt = `Required words: ${data.requiredWords.join(", ")}
Theme: ${data.theme}
User's story: "${data.story}"`;
        break;

            case "word-incorporation":
        systemPrompt = `You are a speech coach evaluating whether the user incorporated a list of target words into their spoken response in ${langName}.
      For each target word, determine if it was used (including reasonable morphological variations like plurals, -ing, -ed, or common contractions) and return which words were used and which were missed.
      Return JSON: { score: number (0-100), wordsUsed: string[], wordsMissed: string[], feedback: string }`;
        userPrompt = `Target words: ${data.targetWords.join(", ")}
      Transcript: "${data.transcript}"`;
        break;

      case "one-minute-talk":
        systemPrompt = `You are a speech coach analyzing a one-minute talk in ${langName}.
Evaluate the content for: coherence, vocabulary richness, topic relevance, and overall fluency.
Return JSON: { score: number (0-100), coherence: number, vocabulary: number, relevance: number, fluency: number, feedback: string, keyStrengths: string[], areasToImprove: string[] }`;
        userPrompt = `Topic: "${data.topic}"
Transcript: "${data.transcript}"
Word count: ${data.wordCount}
Duration: ${data.duration} seconds`;
        break;

      case "context-switch":
        systemPrompt = `You are a communication expert evaluating context-appropriate word usage in ${langName}.
The user used a target word in different contexts. Evaluate how well each sentence fits its intended context.
Return JSON: { scores: { contextName: number }[], overallScore: number, feedback: string, suggestions: { contextName: string }[] }`;
        userPrompt = `Target word: "${data.targetWord}"
User's sentences: ${JSON.stringify(data.sentences)}`;
        break;

      default:
        throw new Error("Unknown evaluation type");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Usage limit reached." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("AI gateway error");
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content;
    
    let evaluation;
    try {
      evaluation = JSON.parse(content);
    } catch {
      evaluation = { score: 50, feedback: content };
    }

    return new Response(JSON.stringify(evaluation), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Evaluation error:", error);
    const errorMessage = error instanceof Error ? error.message : "Evaluation failed";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function getFillerWords(language: string): string[] {
  switch (language) {
    case "fr":
      return ["euh", "ben", "genre", "en fait", "du coup", "voilà", "quoi", "tu vois", "bah", "enfin"];
    case "es":
      return ["eh", "este", "pues", "o sea", "bueno", "como", "sabes", "entonces", "básicamente", "tipo"];
    default:
      return ["um", "uh", "like", "you know", "basically", "literally", "actually", "sort of", "kind of", "I mean"];
  }
}