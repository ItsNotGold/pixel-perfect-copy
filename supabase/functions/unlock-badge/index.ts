import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization") || "";
    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: authError } = await supabaseClient.auth.getUser(token);
    if (authError) throw authError;
    const user = userData?.user;
    if (!user || !user.id) throw new Error("Not authenticated");

    const body = await req.json();
    const badgeId: string = body?.badge_id;
    if (!badgeId) throw new Error("badge_id is required");

    // Check if already unlocked
    const { data: existing } = await supabaseClient
      .from("user_badges")
      .select("id, user_id, badge_id, unlocked_at, metadata")
      .eq("user_id", user.id)
      .eq("badge_id", badgeId)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ alreadyUnlocked: true, row: existing }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const { data: inserted, error: insertErr } = await supabaseClient.from("user_badges").insert([
      { user_id: user.id, badge_id: badgeId },
    ]).select().single();

    if (insertErr) throw insertErr;

    return new Response(JSON.stringify({ alreadyUnlocked: false, row: inserted }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    // Log full error object for debugging
    console.error("[UNLOCK-BADGE] ERROR", err);

    let message: string;
    if (err instanceof Error) {
      message = err.message;
    } else if (err && typeof err === "object") {
      try {
        message = JSON.stringify(err);
      } catch (e) {
        message = String(err);
      }
    } else {
      message = String(err);
    }

    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
