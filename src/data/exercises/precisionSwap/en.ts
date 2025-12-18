import { SwapChallenge } from "../../types";

export const enQuestions: SwapChallenge[] = [
    {
        id: "en-1",
        sentence: "The project manager gave a good presentation that impressed the board.",
        targetWord: "good",
        targetWordIndex: 0,
        options: [
            { word: "compelling", score: 100, feedback: "Perfect! 'Compelling' emphasizes the persuasive power of the presentation." },
            { word: "fine", score: 40, feedback: "'Fine' is too weak for a high-stakes board meeting." },
            { word: "okay", score: 20, feedback: "'Okay' sounds indifferent or mediocre." },
            { word: "nice", score: 30, feedback: "'Nice' is overly casual and vague." }
        ],
        bestAnswer: "compelling",
        explanation: "In a professional setting, 'compelling' captures the impact and persuasive nature of a successful presentation better than the generic 'good'."
    },
    {
        id: "en-2",
        sentence: "The sudden storm caused big waves that crashed against the harbor wall.",
        targetWord: "big",
        targetWordIndex: 0,
        options: [
            { word: "monstrous", score: 100, feedback: "Excellent! 'Monstrous' conveys both the size and the threatening nature of the waves." },
            { word: "large", score: 50, feedback: "'Large' is a simple synonym but lacks descriptive power." },
            { word: "tall", score: 40, feedback: "'Tall' only describes height properly, not the overall mass of a wave." },
            { word: "wide", score: 30, feedback: "'Wide' doesn't capture the power of waves crashing." }
        ],
        bestAnswer: "monstrous",
        explanation: "When describing a storm at sea, 'monstrous' adds a layer of scale and intensity that 'big' lacks."
    },
    {
        id: "en-3",
        sentence: "The old library was filled with the smell of aging paper and leather.",
        targetWord: "old",
        targetWordIndex: 0,
        options: [
            { word: "venerable", score: 100, feedback: "Perfect! 'Venerable' suggests something old that is also respected and dignified." },
            { word: "ancient", score: 60, feedback: "'Ancient' usually refers to thousands of years, which might be too extreme for a library." },
            { word: "worn", score: 40, feedback: "'Worn' focuses only on the physical decay without the dignity." },
            { word: "used", score: 20, feedback: "'Used' is far too mundane for a historic library." }
        ],
        bestAnswer: "venerable",
        explanation: "'Venerable' conveys a sense of history and deep respect that suits a library better than just 'old'."
    },
    {
        id: "en-4",
        sentence: "After the long hike, the water from the mountain stream tasted very cold.",
        targetWord: "cold",
        targetWordIndex: 0,
        options: [
            { word: "glacial", score: 100, feedback: "Perfect! 'Glacial' vividly describes the intense, biting cold of mountain water." },
            { word: "cool", score: 40, feedback: "'Cool' is too mild for mountain stream water." },
            { word: "chilly", score: 50, feedback: "'Chilly' often describes air or a feeling, less often water." },
            { word: "frozen", score: 30, feedback: "If it's a stream, it's liquid, so 'frozen' is inaccurate." }
        ],
        bestAnswer: "glacial",
        explanation: "'Glacial' specifically invokes the mountain source and the extreme temperature in a way 'cold' cannot."
    },
    {
        id: "en-5",
        sentence: "The detective noticed a small crack in the window that everyone else missed.",
        targetWord: "small",
        targetWordIndex: 0,
        options: [
            { word: "imperceptible", score: 100, feedback: "Perfect! 'Imperceptible' explains why others missed it." },
            { word: "little", score: 30, feedback: "'Little' is just as vague as 'small'." },
            { word: "minor", score: 50, feedback: "'Minor' describes importance rather than physical size here." },
            { word: "short", score: 20, feedback: "'Short' refers to length, not the thickness or visibility of a crack." }
        ],
        bestAnswer: "imperceptible",
        explanation: "'Imperceptible' justifies the detective's skill by suggesting the crack was almost impossible to see."
    },
    {
        id: "en-6",
        sentence: "The sunset over the desert was a nice sight to behold.",
        targetWord: "nice",
        targetWordIndex: 1,
        options: [
            { word: "fair", score: 40, feedback: "'Fair' is weak and sounds somewhat indifferent." },
            { word: "sublime", score: 100, feedback: "Perfect! 'Sublime' describes something of such excellence it inspires awe." },
            { word: "pleasant", score: 60, feedback: "'Pleasant' is okay, but doesn't capture the grandeur of a sunset." },
            { word: "tidy", score: 10, feedback: "'Tidy' is completely irrelevant for a nature scene." }
        ],
        bestAnswer: "sublime",
        explanation: "'Sublime' captures the transcendental beauty and awe of a desert sunset, far exceeding 'nice'."
    },
    {
        id: "en-7",
        sentence: "The athlete showed a fast reaction to the starting pistol.",
        targetWord: "fast",
        targetWordIndex: 1,
        options: [
            { word: "brisk", score: 50, feedback: "'Brisk' is more about pace than immediate reaction." },
            { word: "instantaneous", score: 100, feedback: "Perfect! 'Instantaneous' emphasizes the zero-lag response." },
            { word: "hasty", score: 30, feedback: "'Hasty' implies a lack of care or too much rush." },
            { word: "nimble", score: 60, feedback: "'Nimble' describes agility, not necessarily the speed of a single reflex." }
        ],
        bestAnswer: "instantaneous",
        explanation: "For a reflex or reaction, 'instantaneous' is the most precise way to describe the lack of delay."
    },
    {
        id: "en-8",
        sentence: "The empty hallway felt scary in the middle of the night.",
        targetWord: "scary",
        targetWordIndex: 1,
        options: [
            { word: "weird", score: 40, feedback: "'Weird' is too informal and vague." },
            { word: "ominous", score: 100, feedback: "Perfect! 'Ominous' suggests that something bad is about to happen." },
            { word: "bad", score: 20, feedback: "'Bad' is extremely imprecise." },
            { word: "dark", score: 30, feedback: "It's likely already dark; 'dark' doesn't describe the feeling." }
        ],
        bestAnswer: "ominous",
        explanation: "'Ominous' adds a sense of foreboding and threat that 'scary' doesn't fully articulate."
    },
    {
        id: "en-9",
        sentence: "The chef prepared a hot soup that was perfect for the winter evening.",
        targetWord: "hot",
        targetWordIndex: 1,
        options: [
            { word: "warm", score: 40, feedback: "'Warm' is too tepid for a winter soup." },
            { word: "piping", score: 100, feedback: "Perfect! 'Piping' (as in piping hot) is the classic, vivid descriptor for very hot food." },
            { word: "baked", score: 20, feedback: "Soup is usually simmered or boiled, not baked." },
            { word: "spicy", score: 50, feedback: "'Spicy' refers to flavor, not temperature." }
        ],
        bestAnswer: "piping",
        explanation: "'Piping' specifically describes the high temperature of food or liquid, especially when served."
    },
    {
        id: "en-10",
        sentence: "His smart strategy led the company to record profits.",
        targetWord: "smart",
        targetWordIndex: 1,
        options: [
            { word: "bright", score: 40, feedback: "'Bright' is more common for people than for abstract strategies." },
            { word: "ingenious", score: 100, feedback: "Perfect! 'Ingenious' implies cleverness, originality, and effectiveness." },
            { word: "slick", score: 50, feedback: "'Slick' can sometimes imply deceit or superficiality." },
            { word: "fast", score: 20, feedback: "Strategy isn't necessarily fast; it's about the quality of the plan." }
        ],
        bestAnswer: "ingenious",
        explanation: "'Ingenious' highlights the brilliant and creative nature of the strategy in a way 'smart' doesn't."
    },
    {
        id: "en-11",
        sentence: "The child let out a loud cry when she saw the puppy.",
        targetWord: "loud",
        targetWordIndex: 2,
        options: [
            { word: "noisy", score: 40, feedback: "'Noisy' sounds like continuous irritation rather than a single cry." },
            { word: "big", score: 20, feedback: "'Big' is the wrong dimension for sound volume." },
            { word: "piercing", score: 100, feedback: "Perfect! 'Piercing' describes a sound that is both loud and sharp." },
            { word: "busy", score: 10, feedback: "'Busy' is completely unrelated to sound." }
        ],
        bestAnswer: "piercing",
        explanation: "'Piercing' adds physical intensity to the volume, making the description much more vivid."
    },
    {
        id: "en-12",
        sentence: "They found a quiet spot in the park to read their books.",
        targetWord: "quiet",
        targetWordIndex: 2,
        options: [
            { word: "still", score: 50, feedback: "'Still' refers more to lack of movement than lack of sound." },
            { word: "low", score: 30, feedback: "'Low' volume isn't the same as a quiet environment." },
            { word: "sequestered", score: 100, feedback: "Perfect! 'Sequestered' means isolated or hidden away from noise and crowds." },
            { word: "dull", score: 20, feedback: "'Dull' implies boring, which isn't the goal of finding a reading spot." }
        ],
        bestAnswer: "sequestered",
        explanation: "'Sequestered' implies they are physically separated from the rest of the park, ensuring peace."
    },
    {
        id: "en-13",
        sentence: "The new software update made the application very fast on older computers.",
        targetWord: "fast",
        targetWordIndex: 2,
        options: [
            { word: "quick", score: 40, feedback: "'Quick' is just a synonym for fast." },
            { word: "soon", score: 10, feedback: "'Soon' refers to time in the future." },
            { word: "responsive", score: 100, feedback: "Perfect! In computing, 'responsive' is the precise term for an app that reacts quickly." },
            { word: "ready", score: 20, feedback: "'Ready' doesn't describe the speed of execution." }
        ],
        bestAnswer: "responsive",
        explanation: "'Responsive' is a technical term that specifically describes the speed and smoothness of a user interface."
    },
    {
        id: "en-14",
        sentence: "He has a strong personality that usually dominates the room.",
        targetWord: "strong",
        targetWordIndex: 2,
        options: [
            { word: "hard", score: 30, feedback: "'Hard' sounds unyielding or mean rather than influential." },
            { word: "heavy", score: 20, feedback: "'Heavy' is the wrong adjective for personality." },
            { word: "commanding", score: 100, feedback: "Perfect! 'Commanding' describes someone who naturally leads or takes charge." },
            { word: "stiff", score: 40, feedback: "'Stiff' implies formality or lack of flexibility." }
        ],
        bestAnswer: "commanding",
        explanation: "'Commanding' perfectly describes the type of 'strong' personality that influences others in a social setting."
    },
    {
        id: "en-15",
        sentence: "The teacher gave a clear explanation of the complex theorem.",
        targetWord: "clear",
        targetWordIndex: 2,
        options: [
            { word: "plain", score: 40, feedback: "'Plain' can mean simple, but lacks the precision of a good explanation." },
            { word: "empty", score: 10, feedback: "'Empty' is the opposite of what an explanation should be." },
            { word: "lucid", score: 100, feedback: "Perfect! 'Lucid' means expressed clearly and easy to understand." },
            { word: "bright", score: 30, feedback: "'Bright' refers to light, not intellectual clarity." }
        ],
        bestAnswer: "lucid",
        explanation: "'Lucid' is a sophisticated way to describe clarity in speech or writing, specifically aimed at understanding."
    },
    {
        id: "en-16",
        sentence: "Writing a novel is a hard task that requires years of dedication.",
        targetWord: "hard",
        targetWordIndex: 3,
        options: [
            { word: "formidable", score: 100, feedback: "Perfect! 'Formidable' means inspiring fear or respect through being impressively large or difficult." },
            { word: "firm", score: 20, feedback: "'Firm' refers to texture or resolve, not difficulty." },
            { word: "rough", score: 40, feedback: "'Rough' might describe the quality of the writing, but not the effort." },
            { word: "stiff", score: 30, feedback: "'Stiff' is incorrect for describing a task." }
        ],
        bestAnswer: "formidable",
        explanation: "'Formidable' honors the scale of the challenge in a way that 'hard' simply cannot."
    },
    {
        id: "en-17",
        sentence: "The valley was very pretty in the morning mist.",
        targetWord: "pretty",
        targetWordIndex: 3,
        options: [
            { word: "picturesque", score: 100, feedback: "Perfect! 'Picturesque' means visually attractive, especially in a quaint or charming way." },
            { word: "fine", score: 40, feedback: "'Fine' is too weak for a scenic landscape." },
            { word: "cute", score: 20, feedback: "'Cute' is patronizing for a landscape." },
            { word: "nice", score: 30, feedback: "'Nice' is as vague as 'pretty'." }
        ],
        bestAnswer: "picturesque",
        explanation: "'Picturesque' is the ideal term for a landscape that looks like it belongs in a painting."
    },
    {
        id: "en-18",
        sentence: "The old car made a many strange noises as it climbed the hill.",
        targetWord: "many",
        targetWordIndex: 3,
        options: [
            { word: "myriad", score: 100, feedback: "Perfect! 'Myriad' means a countless or extremely great number." },
            { word: "some", score: 30, feedback: "'Some' is less than 'many'." },
            { word: "few", score: 10, feedback: "'Few' is the opposite of 'many'." },
            { word: "lots", score: 40, feedback: "'Lots' is too informal." }
        ],
        bestAnswer: "myriad",
        explanation: "'Myriad' emphasizes the variety and volume of noises in a sophisticated way."
    },
    {
        id: "en-19",
        sentence: "The company faces a bright future after the merger.",
        targetWord: "bright",
        targetWordIndex: 3,
        options: [
            { word: "prosperous", score: 100, feedback: "Perfect! 'Prosperous' specifically means successful in material terms; flourishing financially." },
            { word: "clear", score: 50, feedback: "'Clear' means certain, but not necessarily positive." },
            { word: "light", score: 30, feedback: "'Light' is too vague." },
            { word: "shiny", score: 20, feedback: "'Shiny' refers to light reflection, not the future." }
        ],
        bestAnswer: "prosperous",
        explanation: "While 'bright' is metaphorical, 'prosperous' is precise about the expected success of the business."
    },
    {
        id: "en-20",
        sentence: "He gave a weak excuse for missing the meeting.",
        targetWord: "weak",
        targetWordIndex: 3,
        options: [
            { word: "flimsy", score: 100, feedback: "Perfect! 'Flimsy' means fragile or unsubstantial, often used for weak arguments or excuses." },
            { word: "thin", score: 40, feedback: "'Thin' can describe an excuse, but it's less formal." },
            { word: "small", score: 20, feedback: "'Small' refers to size, not the convincing power." },
            { word: "soft", score: 30, feedback: "'Soft' doesn't describe the quality of an excuse." }
        ],
        bestAnswer: "flimsy",
        explanation: "'Flimsy' perfectly captures the lack of substance and credibility in a poor excuse."
    },
    {
        id: "en-21",
        sentence: "The mountain peak was hidden by big clouds.",
        targetWord: "big",
        targetWordIndex: 0,
        options: [
            { word: "towering", score: 100, feedback: "Perfect! 'Towering' emphasizes the height and massive scale of the clouds." },
            { word: "wide", score: 40, feedback: "'Wide' doesn't convey the height needed to hide a peak." },
            { word: "heavy", score: 60, feedback: "'Heavy' is good for rain, but 'towering' is better for scale." },
            { word: "fat", score: 10, feedback: "'Fat' is unpolished and informal for clouds." }
        ],
        bestAnswer: "towering",
        explanation: "'Towering' better describes the vertical scale of clouds obscuring a mountain top."
    },
    {
        id: "en-22",
        sentence: "The dancer's movements were very fast and graceful.",
        targetWord: "fast",
        targetWordIndex: 0,
        options: [
            { word: "mercurial", score: 100, feedback: "Perfect! 'Mercurial' suggests sudden, unpredictable, and rapid movement." },
            { word: "quick", score: 40, feedback: "'Quick' is just a synonym." },
            { word: "hasty", score: 20, feedback: "'Hasty' implies a lack of control." },
            { word: "active", score: 30, feedback: "'Active' is too general." }
        ],
        bestAnswer: "mercurial",
        explanation: "'Mercurial' adds a sense of brilliance and swift, shifting energy to the description."
    },
    {
        id: "en-23",
        sentence: "The old bridge was finally demolished after years of neglect.",
        targetWord: "old",
        targetWordIndex: 0,
        options: [
            { word: "dilapidated", score: 100, feedback: "Perfect! 'Dilapidated' specifically describes something in a state of disrepair due to age or neglect." },
            { word: "ancient", score: 50, feedback: "Bridges can be old without being 'ancient'." },
            { word: "used", score: 10, feedback: "'Used' is not why it was demolished." },
            { word: "past", score: 20, feedback: "'Past' is the wrong part of speech or meaning here." }
        ],
        bestAnswer: "dilapidated",
        explanation: "'Dilapidated' conveys the physical decay that led to the bridge being torn down."
    },
    {
        id: "en-24",
        sentence: "The room was very quiet during the final exam.",
        targetWord: "quiet",
        targetWordIndex: 1,
        options: [
            { word: "low", score: 20, feedback: "Volume is low, but the room itself is quiet." },
            { word: "pin-drop", score: 100, feedback: "Perfect! 'Pin-drop' is a classic idiom for absolute silence." },
            { word: "calm", score: 50, feedback: "'Calm' describes the students' state, not necessarily the sound." },
            { word: "dull", score: 10, feedback: "'Dull' sounds like it's uninteresting." }
        ],
        bestAnswer: "pin-drop",
        explanation: "In an exam context, 'pin-drop' silence highlights the concentration and total lack of noise."
    },
    {
        id: "en-25",
        sentence: "The bad weather forced them to cancel the outdoor concert.",
        targetWord: "bad",
        targetWordIndex: 1,
        options: [
            { word: "hard", score: 30, feedback: "'Hard' weather sounds unnatural compared to 'inclement'." },
            { word: "inclement", score: 100, feedback: "Perfect! 'Inclement' is the precise, formal term for weather that is unpleasantly cold or wet." },
            { word: "nasty", score: 50, feedback: "'Nasty' is informal and descriptive, but not as precise as 'inclement'." },
            { word: "wrong", score: 10, feedback: "Weather isn't 'wrong', it's just 'bad'." }
        ],
        bestAnswer: "inclement",
        explanation: "'Inclement' is the professional standard for describing weather that prevents activities."
    },
    {
        id: "en-26",
        sentence: "The little kitten was found shivering in the rain.",
        targetWord: "little",
        targetWordIndex: 1,
        options: [
            { word: "brief", score: 10, feedback: "'Brief' refers to duration, not size." },
            { word: "diminutive", score: 100, feedback: "Perfect! 'Diminutive' is a more sophisticated way to say unusually or extremely small." },
            { word: "small", score: 40, feedback: "'Small' is just a synonym." },
            { word: "short", score: 20, feedback: "'Short' refers to height, not the overall size of a kitten." }
        ],
        bestAnswer: "diminutive",
        explanation: "'Diminutive' sounds more caring and descriptive in a narrative context than 'little'."
    },
    {
        id: "en-27",
        sentence: "The company reported a big increase in year-over-year revenue.",
        targetWord: "big",
        targetWordIndex: 2,
        options: [
            { word: "large", score: 50, feedback: "'Large' is standard but plain." },
            { word: "wide", score: 20, feedback: "'Wide' is the wrong dimension for revenue data." },
            { word: "substantial", score: 100, feedback: "Perfect! 'Substantial' means of considerable importance, size, or worth." },
            { word: "tall", score: 10, feedback: "'Tall' is incorrect for financial growth." }
        ],
        bestAnswer: "substantial",
        explanation: "'Substantial' is the preferred professional term for significant business growth."
    },
    {
        id: "en-28",
        sentence: "The bright moonlight reflected off the frozen lake.",
        targetWord: "bright",
        targetWordIndex: 2,
        options: [
            { word: "shiny", score: 30, feedback: "'Shiny' describes the surface reflection, not the light source." },
            { word: "clear", score: 40, feedback: "'Clear' refers to the atmosphere, not the moon's intensity." },
            { word: "radiant", score: 100, feedback: "Perfect! 'Radiant' implies sending out light in all directions; glowing." },
            { word: "lit", score: 20, feedback: "'Lit' is too simple." }
        ],
        bestAnswer: "radiant",
        explanation: "'Radiant' elevates the description, making it feel more poetic and vivid."
    },
    {
        id: "en-29",
        sentence: "She has a nice way of explaining complicated topics.",
        targetWord: "nice",
        targetWordIndex: 2,
        options: [
            { word: "good", score: 40, feedback: "'Good' is just another vague word." },
            { word: "soft", score: 30, feedback: "'Soft' doesn't necessarily mean clear or effective." },
            { word: "eloquent", score: 100, feedback: "Perfect! 'Eloquent' means fluent or persuasive in speaking or writing." },
            { word: "funny", score: 50, feedback: "Humor isn't always part of explaining complexity." }
        ],
        bestAnswer: "eloquent",
        explanation: "For explaining topics, 'eloquent' captures the skill and clarity of communication perfectly."
    },
    {
        id: "en-30",
        sentence: "The strong wind nearly knocked him over.",
        targetWord: "strong",
        targetWordIndex: 3,
        options: [
            { word: "gale-force", score: 100, feedback: "Perfect! 'Gale-force' is the specific term for extremely strong, potentially damaging wind." },
            { word: "firm", score: 20, feedback: "'Firm' implies stability, not force." },
            { word: "thick", score: 10, feedback: "Wind isn't 'thick'." },
            { word: "hard", score: 40, feedback: "'Hard' is used for surfaces, though sometimes for wind it's 'blowing hard'." }
        ],
        bestAnswer: "gale-force",
        explanation: "'Gale-force' provides a specific level of intensity that 'strong' lacks."
    },
    {
        id: "en-31",
        sentence: "The task was easy for someone with her experience.",
        targetWord: "easy",
        targetWordIndex: 3,
        options: [
            { word: "elementary", score: 100, feedback: "Perfect! 'Elementary' means relating to the most basic aspects of a subject." },
            { word: "plain", score: 20, feedback: "'Plain' means simple in appearance, not effort." },
            { word: "ready", score: 10, feedback: "'Ready' is not a synonym for easy." },
            { word: "light", score: 30, feedback: "'Light' can mean low intensity, but not necessarily simple." }
        ],
        bestAnswer: "elementary",
        explanation: "'Elementary' suggests the task was so fundamental it presented no challenge."
    },
    {
        id: "en-32",
        sentence: "He felt sad after watching the emotional documentary.",
        targetWord: "sad",
        targetWordIndex: 3,
        options: [
            { word: "melancholy", score: 100, feedback: "Perfect! 'Melancholy' is a deep, pensive, and long-lasting sadness." },
            { word: "low", score: 40, feedback: "'Low' energy is different from sadness." },
            { word: "blue", score: 50, feedback: "'Blue' is an idiom, but 'melancholy' is more precise." },
            { word: "bad", score: 20, feedback: "'Bad' is too vague." }
        ],
        bestAnswer: "melancholy",
        explanation: "'Melancholy' captures the thoughtful, lingering sadness often caused by art or reflection."
    },
    {
        id: "en-33",
        sentence: "The runner was fast enough to win the gold medal.",
        targetWord: "fast",
        targetWordIndex: 0,
        options: [
            { word: "fleet-footed", score: 100, feedback: "Perfect! 'Fleet-footed' is a classic, descriptive way to say someone runs fast." },
            { word: "quick", score: 40, feedback: "A basic synonym." },
            { word: "soon", score: 10, feedback: "Incorrect usage." },
            { word: "ready", score: 20, feedback: "Doesn't describe speed." }
        ],
        bestAnswer: "fleet-footed",
        explanation: "'Fleet-footed' is highly specific to running, adding more character to the description."
    },
    {
        id: "en-34",
        sentence: "The kitchen was clean after hours of scrubbing.",
        targetWord: "clean",
        targetWordIndex: 0,
        options: [
            { word: "immaculate", score: 100, feedback: "Perfect! 'Immaculate' means perfectly clean, neat, or tidy." },
            { word: "clear", score: 30, feedback: "'Clear' usually refers to transparency or space, not cleanliness." },
            { word: "blank", score: 20, feedback: "'Blank' means empty of markings." },
            { word: "fresh", score: 50, feedback: "'Fresh' refers to smell/newness, not necessarily lack of dirt." }
        ],
        bestAnswer: "immaculate",
        explanation: "'Immaculate' emphasizes that the kitchen is *perfectly* clean, rewarding the 'hours of scrubbing'."
    },
    {
        id: "en-35",
        sentence: "The old man told a story about his youth.",
        targetWord: "old",
        targetWordIndex: 0,
        options: [
            { word: "elderly", score: 100, feedback: "Perfect! 'Elderly' is the polite and precise word for someone of old age." },
            { word: "ancient", score: 30, feedback: "'Ancient' can be offensive when applied to people." },
            { word: "past", score: 10, feedback: "Incorrect usage." },
            { word: "worn", score: 40, feedback: "'Worn' suggests exhaustion or decay rather than just age." }
        ],
        bestAnswer: "elderly",
        explanation: "'Elderly' is the standard respectful way to describe an older person."
    },
    {
        id: "en-36",
        sentence: "Her happy smile brightened the entire room.",
        targetWord: "happy",
        targetWordIndex: 1,
        options: [
            { word: "nice", score: 30, feedback: "'Nice' is too vague." },
            { word: "radiant", score: 100, feedback: "Perfect! 'Radiant' describes a smile that seems to give off light and warmth." },
            { word: "good", score: 20, feedback: "'Good' is indifferent." },
            { word: "bright", score: 60, feedback: "'Bright' is close, but 'radiant' is more evocative for a smile." }
        ],
        bestAnswer: "radiant",
        explanation: "'Radiant' perfectly complements the idea of 'brightening the room'."
    },
    {
        id: "en-37",
        sentence: "The dark forest was full of mysterious sounds.",
        targetWord: "dark",
        targetWordIndex: 1,
        options: [
            { word: "black", score: 40, feedback: "'Black' is a color, but 'dark' describes lighting conditions." },
            { word: "unfathomable", score: 100, feedback: "Perfect! 'Unfathomable' in this context means too deep or mysterious to understand." },
            { word: "low", score: 20, feedback: "'Low' light is correct but boring." },
            { word: "shaded", score: 50, feedback: "'Shaded' sounds like a nice place for a picnic, not a scary forest." }
        ],
        bestAnswer: "unfathomable",
        explanation: "'Unfathomable' adds to the mystery and depth of the forest description."
    },
    {
        id: "en-38",
        sentence: "He made a smart comment during the debate.",
        targetWord: "smart",
        targetWordIndex: 1,
        options: [
            { word: "bright", score: 40, feedback: "'Bright' is slightly too informal here." },
            { word: "astute", score: 100, feedback: "Perfect! 'Astute' means having an ability to accurately assess situations or people." },
            { word: "slick", score: 30, feedback: "'Slick' implies being clever but potentially untrustworthy." },
            { word: "fast", score: 20, feedback: "Doesn't describe intellectual depth." }
        ],
        bestAnswer: "astute",
        explanation: "'Astute' is the professional way to describe a clever or insightful comment."
    },
    {
        id: "en-39",
        sentence: "The new building stands out in the city skyline.",
        targetWord: "new",
        targetWordIndex: 2,
        options: [
            { word: "fresh", score: 40, feedback: "'Fresh' is better for food or air." },
            { word: "young", score: 30, feedback: "'Young' is for living things." },
            { word: "contemporary", score: 100, feedback: "Perfect! 'Contemporary' means belonging to or occurring in the present." },
            { word: "late", score: 20, feedback: "'Late' usually means after the expected time." }
        ],
        bestAnswer: "contemporary",
        explanation: "'Contemporary' is the correct architectural term for modern building styles."
    },
    {
        id: "en-40",
        sentence: "There were many flowers blooming in the garden.",
        targetWord: "many",
        targetWordIndex: 2,
        options: [
            { word: "lots", score: 30, feedback: "Too informal." },
            { word: "much", score: 20, feedback: "Used with uncountable nouns." },
            { word: "abundant", score: 100, feedback: "Perfect! 'Abundant' means existing or available in large quantities; plentiful." },
            { word: "few", score: 10, feedback: "The opposite meaning." }
        ],
        bestAnswer: "abundant",
        explanation: "'Abundant' provides a lush, descriptive feel to the garden scene."
    },
    {
        id: "en-41",
        sentence: "The slow traffic made him late for work.",
        targetWord: "slow",
        targetWordIndex: 2,
        options: [
            { word: "late", score: 20, feedback: "The traffic caused him to be late, but isn't 'late' itself." },
            { word: "long", score: 30, feedback: "'Long' describes the distance, not the speed." },
            { word: "congested", score: 100, feedback: "Perfect! 'Congested' specifically refers to traffic blocked by volume." },
            { word: "weak", score: 10, feedback: "Incorrect usage." }
        ],
        bestAnswer: "congested",
        explanation: "'Congested' is the most common and precise way to describe heavy, slow-moving traffic."
    },
    {
        id: "en-42",
        sentence: "She has a pretty face that attracts attention.",
        targetWord: "pretty",
        targetWordIndex: 2,
        options: [
            { word: "nice", score: 30, feedback: "Too vague." },
            { word: "good", score: 20, feedback: "Indifferent." },
            { word: "striking", score: 100, feedback: "Perfect! 'Striking' means attractively unusual or extreme; making a strong impression." },
            { word: "tidy", score: 10, feedback: "Nonsensical." }
        ],
        bestAnswer: "striking",
        explanation: "'Striking' explains *why* it attracts attention—it is more than just 'pretty'."
    },
    {
        id: "en-43",
        sentence: "The hard ground was difficult to dig into.",
        targetWord: "hard",
        targetWordIndex: 3,
        options: [
            { word: "stiff", score: 40, feedback: "'Stiff' is for fabrics or muscles." },
            { word: "firm", score: 50, feedback: "'Firm' is good, but 'impacted' or 'solid' might be better for soil." },
            { word: "rough", score: 30, feedback: "'Rough' is about texture, not density." },
            { word: "impacted", score: 100, feedback: "Perfect! 'Impacted' describes ground that has been packed down very tightly." }
        ],
        bestAnswer: "impacted",
        explanation: "'Impacted' ground explains the difficulty of digging better than the simple word 'hard'."
    },
    {
        id: "en-44",
        sentence: "The soft music helped him fall asleep.",
        targetWord: "soft",
        targetWordIndex: 3,
        options: [
            { word: "low", score: 50, feedback: "'Low' volume is technically correct but lacks mood." },
            { word: "thin", score: 20, feedback: "'Thin' music sounds low-quality." },
            { word: "weak", score: 30, feedback: "'Weak' sounds unimpressive." },
            { word: "ethereal", score: 100, feedback: "Perfect! 'Ethereal' describes something extremely delicate and light in a way that seems out of this world." }
        ],
        bestAnswer: "ethereal",
        explanation: "'Ethereal' adds a magical, calming quality to the description of the music."
    },
    {
        id: "en-45",
        sentence: "The small bird built its nest in the bush.",
        targetWord: "small",
        targetWordIndex: 3,
        options: [
            { word: "short", score: 20, feedback: "'Short' is about height." },
            { word: "brief", score: 10, feedback: "'Brief' is about time." },
            { word: "minor", score: 30, feedback: "'Minor' is about importance." },
            { word: "diminutive", score: 100, feedback: "Perfect! 'Diminutive' is a sophisticated synonym for small." }
        ],
        bestAnswer: "diminutive",
        explanation: "'Diminutive' fits well in a nature observation, providing a more formal and descriptive tone."
    },
    {
        id: "en-46",
        sentence: "The hot desert sun beat down on the travelers.",
        targetWord: "hot",
        targetWordIndex: 3,
        options: [
            { word: "warm", score: 20, feedback: "'Warm' is much too weak for a desert sun." },
            { word: "bright", score: 60, feedback: "'Bright' is true, but doesnt capture the heat." },
            { word: "baked", score: 40, feedback: "The sun doesn't 'bake', it 'scorches'." },
            { word: "scorching", score: 100, feedback: "Perfect! 'Scorching' describes extreme heat that can burn." }
        ],
        bestAnswer: "scorching",
        explanation: "'Scorching' emphasizes the dangerous intensity of the desert sun heat."
    },
    {
        id: "en-47",
        sentence: "The loud explosion could be heard for miles.",
        targetWord: "loud",
        targetWordIndex: 3,
        options: [
            { word: "noisy", score: 30, feedback: "'Noisy' is for annoying sounds, not powerful ones." },
            { word: "big", score: 40, feedback: "'Big' is a common but imprecise way to describe explosions." },
            { word: "high", score: 20, feedback: "'High' refers to pitch, not volume." },
            { word: "deafening", score: 100, feedback: "Perfect! 'Deafening' means so loud as to make it impossible to hear anything else." }
        ],
        bestAnswer: "deafening",
        explanation: "'Deafening' truly captures the overwhelming power of the explosion."
    },
    {
        id: "en-48",
        sentence: "The cold wind made the branches sway.",
        targetWord: "cold",
        targetWordIndex: 3,
        options: [
            { word: "cool", score: 30, feedback: "'Cool' is too pleasant." },
            { word: "chilly", score: 50, feedback: "'Chilly' is okay, but 'biting' is more vivid." },
            { word: "frozen", score: 40, feedback: "Wind can't be 'frozen'." },
            { word: "biting", score: 100, feedback: "Perfect! 'Biting' describes cold that is so intense it feels like it's nipping at the skin." }
        ],
        bestAnswer: "biting",
        explanation: "'Biting' conveys the physical sensation of the wind's coldness on the body."
    },
    {
        id: "en-49",
        sentence: "The smart puppy learned the trick in five minutes.",
        targetWord: "smart",
        targetWordIndex: 3,
        options: [
            { word: "bright", score: 50, feedback: "'Bright' is a common synonym for smart." },
            { word: "fast", score: 40, feedback: "The puppy learned fast, but its 'smartness' is better described as 'precocious'." },
            { word: "slick", score: 20, feedback: "'Slick' implies being devious." },
            { word: "precocious", score: 100, feedback: "Perfect! 'Precocious' means showing maturity or skill at an earlier age than usual." }
        ],
        bestAnswer: "precocious",
        explanation: "'Precocious' highlights that the puppy is exceptionally advanced for its age."
    },
    {
        id: "en-50",
        sentence: "The old house needed a lot of repairs.",
        targetWord: "old",
        targetWordIndex: 3,
        options: [
            { word: "ancient", score: 30, feedback: "Houses are rarely 'ancient' in a modern city context." },
            { word: "past", score: 10, feedback: "Nonsensical." },
            { word: "used", score: 20, feedback: "Every house is 'used'." },
            { word: "ramshackle", score: 100, feedback: "Perfect! 'Ramshackle' describes a building in a state of severe disrepair." }
        ],
        bestAnswer: "ramshackle",
        explanation: "'Ramshackle' perfectly explains *why* the house needs so many repairs."
    },
    {
        id: "en-51",
        sentence: "The surgeon performed a good operation under intense pressure.",
        targetWord: "good",
        targetWordIndex: 3,
        options: [
            { word: "peerless", score: 100, feedback: "Perfect! 'Peerless' suggests it was without equal, highlighting the surgeon's skill." },
            { word: "nice", score: 20, feedback: "'Nice' is extremely inappropriate for surgery." },
            { word: "okay", score: 10, feedback: "'Okay' sounds dangerously mediocre." },
            { word: "fine", score: 30, feedback: "'Fine' is too weak for a high-stakes procedure." }
        ],
        bestAnswer: "peerless",
        explanation: "In a medical context, 'peerless' emphasizes the elite level of performance required."
    },
    {
        id: "en-52",
        sentence: "The runner felt a strong pain in his leg during the sprint.",
        targetWord: "strong",
        targetWordIndex: 0,
        options: [
            { word: "excruciating", score: 100, feedback: "Perfect! 'Excruciating' describes intense, agonizing pain precisely." },
            { word: "hard", score: 30, feedback: "'Hard' isn't how we describe pain." },
            { word: "heavy", score: 20, feedback: "Pain isn't 'heavy' in this context." },
            { word: "firm", score: 10, feedback: "Incorrect usage." }
        ],
        bestAnswer: "excruciating",
        explanation: "'Excruciating' provides the high intensity required for an athlete's injury."
    },
    {
        id: "en-53",
        sentence: "The clean water in the mountain lake was beautiful.",
        targetWord: "clean",
        targetWordIndex: 0,
        options: [
            { word: "crystalline", score: 100, feedback: "Perfect! 'Crystalline' suggests water that is as clear as crystal." },
            { word: "empty", score: 10, feedback: "Nonsensical." },
            { word: "fresh", score: 60, feedback: "'Fresh' is okay, but doesn't describe the visual clarity." },
            { word: "blank", score: 20, feedback: "Nonsensical." }
        ],
        bestAnswer: "crystalline",
        explanation: "'Crystalline' emphasizes the purity and visual beauty of the mountain water."
    },
    {
        id: "en-54",
        sentence: "The fast growth of the startup surprised the investors.",
        targetWord: "fast",
        targetWordIndex: 0,
        options: [
            { word: "meteoric", score: 100, feedback: "Perfect! 'Meteoric' describes growth that is very rapid and successful." },
            { word: "quick", score: 40, feedback: "A basic synonym." },
            { word: "soon", score: 10, feedback: "Incorrect usage." },
            { word: "ready", score: 20, feedback: "Nonsensical." }
        ],
        bestAnswer: "meteoric",
        explanation: "In business, 'meteoric' is the standard way to describe exceptionally fast success."
    },
    {
        id: "en-55",
        sentence: "The bright light from the lighthouse guided the ships.",
        targetWord: "bright",
        targetWordIndex: 0,
        options: [
            { word: "incandescent", score: 100, feedback: "Perfect! 'Incandescent' describes something that emits light as a result of being heated." },
            { word: "shiny", score: 30, feedback: "'Shiny' is for surfaces." },
            { word: "clear", score: 20, feedback: "'Clear' refers to visibility." },
            { word: "lit", score: 40, feedback: "Too simple." }
        ],
        bestAnswer: "incandescent",
        explanation: "'Incandescent' provides a sense of the actual bulb's glowing power in the lighthouse."
    },
    {
        id: "en-56",
        sentence: "The nice breeze made the summer afternoon pleasant.",
        targetWord: "nice",
        targetWordIndex: 0,
        options: [
            { word: "balmy", score: 100, feedback: "Perfect! 'Balmy' describes weather that is pleasantly warm and fragrant." },
            { word: "fair", score: 40, feedback: "'Fair' is too indifferent." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "tidy", score: 10, feedback: "Nonsensical." }
        ],
        bestAnswer: "balmy",
        explanation: "'Balmy' is the ideal word for a gentle, pleasant summer breeze."
    },
    {
        id: "en-57",
        sentence: "The old statue in the town square was covered in ivy.",
        targetWord: "old",
        targetWordIndex: 0,
        options: [
            { word: "venerable", score: 100, feedback: "Perfect! 'Venerable' suggests something old that is also respected." },
            { word: "ancient", score: 60, feedback: "Statues can be old without being ancient." },
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Incorrect usage." }
        ],
        bestAnswer: "venerable",
        explanation: "'Venerable' adds a layer of dignity to the statue's age."
    },
    {
        id: "en-58",
        sentence: "The small bird chirped every morning at dawn.",
        targetWord: "small",
        targetWordIndex: 0,
        options: [
            { word: "diminutive", score: 100, feedback: "Perfect! 'Diminutive' means extremely or unusually small." },
            { word: "little", score: 40, feedback: "A basic synonym." },
            { word: "short", score: 20, feedback: "Refers to height." },
            { word: "brief", score: 10, feedback: "Refers to time." }
        ],
        bestAnswer: "diminutive",
        explanation: "'Diminutive' provides a more refined, descriptive tone for the bird."
    },
    {
        id: "en-59",
        sentence: "The heavy box was hard to move across the floor.",
        targetWord: "hard",
        targetWordIndex: 0,
        options: [
            { word: "cumbersome", score: 100, feedback: "Perfect! 'Cumbersome' means large or heavy and therefore difficult to carry or use." },
            { word: "stiff", score: 20, feedback: "Incorrect usage." },
            { word: "firm", score: 10, feedback: "Incorrect usage." },
            { word: "rough", score: 30, feedback: "Describes texture." }
        ],
        bestAnswer: "cumbersome",
        explanation: "'Cumbersome' captures both the weight and the awkwardness of moving the box."
    },
    {
        id: "en-60",
        sentence: "The dark room was filled with shadows.",
        targetWord: "dark",
        targetWordIndex: 0,
        options: [
            { word: "stygian", score: 100, feedback: "Perfect! 'Stygian' means very dark, relating to the River Styx." },
            { word: "black", score: 40, feedback: "Describes color." },
            { word: "low", score: 20, feedback: "Refers to level." },
            { word: "shaded", score: 50, feedback: "Too mild." }
        ],
        bestAnswer: "stygian",
        explanation: "'Stygian' adds a literary, intense depth to the darkness of the room."
    },
    {
        id: "en-61",
        sentence: "She has a happy personality that everyone loves.",
        targetWord: "happy",
        targetWordIndex: 0,
        options: [
            { word: "effervescent", score: 100, feedback: "Perfect! 'Effervescent' means vivacious and enthusiastic." },
            { word: "nice", score: 30, feedback: "Too vague." },
            { word: "good", score: 20, feedback: "Indifferent." },
            { word: "fine", score: 40, feedback: "Weak." }
        ],
        bestAnswer: "effervescent",
        explanation: "'Effervescent' describes a bubbly, joyful personality much better than 'happy'."
    },
    {
        id: "en-62",
        sentence: "The loud music echoed through the canyon.",
        targetWord: "loud",
        targetWordIndex: 0,
        options: [
            { word: "resonant", score: 100, feedback: "Perfect! 'Resonant' means deep and full in sound, suggestive of echoes." },
            { word: "noisy", score: 30, feedback: "Irritating, not powerful." },
            { word: "big", score: 20, feedback: "Incorrect dimension." },
            { word: "high", score: 40, feedback: "Pitch, not volume." }
        ],
        bestAnswer: "resonant",
        explanation: "'Resonant' perfectly describes sound echoing in a large, open space like a canyon."
    },
    {
        id: "en-63",
        sentence: "The athlete delivered a strong kick to score the goal.",
        targetWord: "strong",
        targetWordIndex: 0,
        options: [
            { word: "formidable", score: 100, feedback: "Perfect! 'Formidable' means inspiring fear through being impressively large or powerful." },
            { word: "hard", score: 40, feedback: "Standard synonym." },
            { word: "heavy", score: 20, feedback: "Incorrect usage." },
            { word: "firm", score: 30, feedback: "Refers to stability." }
        ],
        bestAnswer: "formidable",
        explanation: "'Formidable' emphasizes the power and effectiveness of the kick."
    },
    {
        id: "en-64",
        sentence: "The quiet night was only interrupted by the crickets.",
        targetWord: "quiet",
        targetWordIndex: 1,
        options: [
            { word: "low", score: 20, feedback: "Refers to volume levels." },
            { word: "placid", score: 100, feedback: "Perfect! 'Placid' means calm and peaceful, with little movement or activity." },
            { word: "still", score: 60, feedback: "'Still' is good, but 'placid' sounds more atmospheric." },
            { word: "dull", score: 10, feedback: "Boring." }
        ],
        bestAnswer: "placid",
        explanation: "'Placid' conveys the deep peace of the night beyond just the absence of noise."
    },
    {
        id: "en-65",
        sentence: "The bad smell coming from the kitchen was unbearable.",
        targetWord: "bad",
        targetWordIndex: 1,
        options: [
            { word: "nasty", score: 50, feedback: "Common, but not precise." },
            { word: "putrid", score: 100, feedback: "Perfect! 'Putrid' specifically means decaying or rotting and emitting a fetid smell." },
            { word: "wrong", score: 10, feedback: "Nonsensical." },
            { word: "hard", score: 20, feedback: "Incorrect usage." }
        ],
        bestAnswer: "putrid",
        explanation: "'Putrid' specifies the *kind* of bad smell, making the scene more visceral."
    },
    {
        id: "en-66",
        sentence: "The smart scholar spent years studying the ancient text.",
        targetWord: "smart",
        targetWordIndex: 1,
        options: [
            { word: "bright", score: 40, feedback: "A bit too informal for a scholar." },
            { word: "erudite", score: 100, feedback: "Perfect! 'Erudite' means having or showing great knowledge or learning." },
            { word: "slick", score: 20, feedback: "Deceptive." },
            { word: "fast", score: 30, feedback: "Speed, not depth." }
        ],
        bestAnswer: "erudite",
        explanation: "'Erudite' is the ultimate praise for an academic scholar's intelligence."
    },
    {
        id: "en-67",
        sentence: "The pretty flowers were arranged in a crystal vase.",
        targetWord: "pretty",
        targetWordIndex: 1,
        options: [
            { word: "nice", score: 30, feedback: "Vague." },
            { word: "exquisite", score: 100, feedback: "Perfect! 'Exquisite' means extremely beautiful and, typically, delicate." },
            { word: "good", score: 20, feedback: "Generic." },
            { word: "fine", score: 40, feedback: "Weak." }
        ],
        bestAnswer: "exquisite",
        explanation: "'Exquisite' matches the elegance of a crystal vase perfectly."
    },
    {
        id: "en-68",
        sentence: "The clear instructions made it easy to assemble the furniture.",
        targetWord: "clear",
        targetWordIndex: 1,
        options: [
            { word: "plain", score: 40, feedback: "'Plain' means simple, but not necessarily helpful." },
            { word: "unambiguous", score: 100, feedback: "Perfect! 'Unambiguous' means not open to more than one interpretation." },
            { word: "bright", score: 10, feedback: "Incorrect usage." },
            { word: "empty", score: 20, feedback: "Nonsensical." }
        ],
        bestAnswer: "unambiguous",
        explanation: "'Unambiguous' is the ideal word for instructions that cannot be misunderstood."
    },
    {
        id: "en-69",
        sentence: "The big mountain loomed over the small village.",
        targetWord: "big",
        targetWordIndex: 1,
        options: [
            { word: "large", score: 40, feedback: "A basic synonym." },
            { word: "imposing", score: 100, feedback: "Perfect! 'Imposing' means grand and impressive in appearance." },
            { word: "wide", score: 30, feedback: "Only describes breadth." },
            { word: "tall", score: 50, feedback: "Only describes height." }
        ],
        bestAnswer: "imposing",
        explanation: "'Imposing' captures the psychological effect of a massive mountain over a village."
    },
    {
        id: "en-70",
        sentence: "The fast car accelerated down the straightaway.",
        targetWord: "fast",
        targetWordIndex: 1,
        options: [
            { word: "brisk", score: 30, feedback: "Too slow for a sports car." },
            { word: "high-octane", score: 100, feedback: "Perfect! 'High-octane' implies intense energy and speed (literally relating to fuel quality)." },
            { word: "quick", score: 50, feedback: "Standard synonym." },
            { word: "soon", score: 10, feedback: "Incorrect usage." }
        ],
        bestAnswer: "high-octane",
        explanation: "'High-octane' adds a sense of power and mechanical excitement to the description."
    },
    {
        id: "en-71",
        sentence: "The old document was carefully preserved in a humidity-controlled box.",
        targetWord: "old",
        targetWordIndex: 1,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "archaic", score: 100, feedback: "Perfect! 'Archaic' means very old or old-fashioned." },
            { word: "past", score: 20, feedback: "Incorrect usage." },
            { word: "ancient", score: 60, feedback: "'Archaic' is slightly more specific for documents." }
        ],
        bestAnswer: "archaic",
        explanation: "'Archaic' implies the document uses old language or styles, adding depth."
    },
    {
        id: "en-72",
        sentence: "The small shop on the corner sold unique handmade jewelry.",
        targetWord: "small",
        targetWordIndex: 1,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "quaint", score: 100, feedback: "Perfect! 'Quaint' means attractively unusual or old-fashioned." },
            { word: "little", score: 40, feedback: "Generic." },
            { word: "brief", score: 10, feedback: "Time." }
        ],
        bestAnswer: "quaint",
        explanation: "'Quaint' better captures the charm of a small, unique jewelry shop."
    },
    {
        id: "en-73",
        sentence: "His strong leadership helped the team overcome the crisis.",
        targetWord: "strong",
        targetWordIndex: 2,
        options: [
            { word: "hard", score: 30, feedback: "Unyielding, but not necessarily good." },
            { word: "heavy", score: 20, feedback: "Incorrect usage." },
            { word: "stalwart", score: 100, feedback: "Perfect! 'Stalwart' means loyal, reliable, and hardworking." },
            { word: "stiff", score: 40, feedback: "Formal, not influential." }
        ],
        bestAnswer: "stalwart",
        explanation: "'Stalwart' emphasizes the reliability and strength of character needed in a crisis."
    },
    {
        id: "en-74",
        sentence: "The bright star shone in the clear midnight sky.",
        targetWord: "bright",
        targetWordIndex: 2,
        options: [
            { word: "shiny", score: 30, feedback: "Surface reflection." },
            { word: "lit", score: 20, feedback: "Too simple." },
            { word: "luminous", score: 100, feedback: "Perfect! 'Luminous' means full of or shedding light; bright or shining, especially in the dark." },
            { word: "clear", score: 40, feedback: "Standard synonym." }
        ],
        bestAnswer: "luminous",
        explanation: "'Luminous' is the correct astronomical and poetic term for a star's brightness."
    },
    {
        id: "en-75",
        sentence: "The nice lady at the front desk was very helpful.",
        targetWord: "nice",
        targetWordIndex: 2,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "courteous", score: 100, feedback: "Perfect! 'Courteous' means polite, respectful, or considerate in manner." },
            { word: "tidy", score: 10, feedback: "Refers to appearance." }
        ],
        bestAnswer: "courteous",
        explanation: "'Courteous' is the precise professional term for the behavior of front desk staff."
    },
    {
        id: "en-76",
        sentence: "The clean room smelled of lavender and fresh linen.",
        targetWord: "clean",
        targetWordIndex: 2,
        options: [
            { word: "clear", score: 30, feedback: "Transparency/space." },
            { word: "blank", score: 20, feedback: "Empty of content." },
            { word: "pristine", score: 100, feedback: "Perfect! 'Pristine' means in its original condition; unspoiled." },
            { word: "fresh", score: 60, feedback: "'Fresh' is already in the sentence." }
        ],
        bestAnswer: "pristine",
        explanation: "'Pristine' conveys an extreme level of cleanliness and care."
    },
    {
        id: "en-77",
        sentence: "The fast pace of modern life can be overwhelming.",
        targetWord: "fast",
        targetWordIndex: 2,
        options: [
            { word: "quick", score: 40, feedback: "Standard synonym." },
            { word: "soon", score: 10, feedback: "Incorrect usage." },
            { word: "breakneck", score: 100, feedback: "Perfect! 'Breakneck' means dangerously or extremely fast." },
            { word: "ready", score: 20, feedback: "Nonsensical." }
        ],
        bestAnswer: "breakneck",
        explanation: "'Breakneck' captures the danger and intensity of a 'fast' pace of life."
    },
    {
        id: "en-78",
        sentence: "The quiet library was a refuge for students during finals week.",
        targetWord: "quiet",
        targetWordIndex: 2,
        options: [
            { word: "low", score: 20, feedback: "Volume level." },
            { word: "calm", score: 50, feedback: "Students should be calm, but the room is 'hushed'." },
            { word: "hushed", score: 100, feedback: "Perfect! 'Hushed' means very quiet because people are speaking in whispers or not at all." },
            { word: "dull", score: 10, feedback: "Boring." }
        ],
        bestAnswer: "hushed",
        explanation: "'Hushed' is the perfect term for the specific type of silence found in a library."
    },
    {
        id: "en-79",
        sentence: "The old ruins were once a grand palace.",
        targetWord: "old",
        targetWordIndex: 2,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Incorrect usage." },
            { word: "remnant", score: 100, feedback: "Perfect! 'Remnant' means a small remaining quantity of something." },
            { word: "worn", score: 40, feedback: "Refers to surface decay." }
        ],
        bestAnswer: "remnant",
        explanation: "'Remnant' is a sophisticated way to describe surviving pieces of history."
    },
    {
        id: "en-80",
        sentence: "The small insect crawled slowly across the leaf.",
        targetWord: "small",
        targetWordIndex: 2,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "minuscule", score: 100, feedback: "Perfect! 'Minuscule' means extremely small; tiny." },
            { word: "little", score: 40, feedback: "Generic." }
        ],
        bestAnswer: "minuscule",
        explanation: "'Minuscule' emphasizes the tiny scale of the insect on the leaf."
    },
    {
        id: "en-81",
        sentence: "The loud roar of the engine filled the garage.",
        targetWord: "loud",
        targetWordIndex: 2,
        options: [
            { word: "noisy", score: 30, feedback: "Irritating." },
            { word: "big", score: 40, feedback: "Imprecise." },
            { word: "thunderous", score: 100, feedback: "Perfect! 'Thunderous' means very loud, like thunder." },
            { word: "high", score: 20, feedback: "Pitch." }
        ],
        bestAnswer: "thunderous",
        explanation: "'Thunderous' captures the power and shaking volume of a roar perfectly."
    },
    {
        id: "en-82",
        sentence: "The smart idea solved the problem in record time.",
        targetWord: "smart",
        targetWordIndex: 2,
        options: [
            { word: "bright", score: 40, feedback: "Too informal." },
            { word: "slick", score: 30, feedback: "Deceptive." },
            { word: "ingenious", score: 100, feedback: "Perfect! 'Ingenious' means clever, original, and inventive." },
            { word: "fast", score: 50, feedback: "The time was fast, not necessarily the idea." }
        ],
        bestAnswer: "ingenious",
        explanation: "'Ingenious' highlights the brilliant creativity of the solution."
    },
    {
        id: "en-83",
        sentence: "The hard rock was difficult to break open.",
        targetWord: "hard",
        targetWordIndex: 2,
        options: [
            { word: "stiff", score: 30, feedback: "Incorrect usage." },
            { word: "firm", score: 40, feedback: "Stability." },
            { word: "adamantine", score: 100, feedback: "Perfect! 'Adamantine' means unbreakable or extremely hard (unbreakable like a diamond)." },
            { word: "rough", score: 20, feedback: "Texture." }
        ],
        bestAnswer: "adamantine",
        explanation: "'Adamantine' provides a mythological level of hardness and intensity."
    },
    {
        id: "en-84",
        sentence: "The happy children played in the sprinkler all afternoon.",
        targetWord: "happy",
        targetWordIndex: 3,
        options: [
            { word: "jubilant", score: 100, feedback: "Perfect! 'Jubilant' means feeling or expressing great happiness and triumph." },
            { word: "good", score: 20, feedback: "Indifferent." },
            { word: "fine", score: 40, feedback: "Weak." },
            { word: "nice", score: 30, feedback: "Too vague." }
        ],
        bestAnswer: "jubilant",
        explanation: "'Jubilant' captures the energetic, expressed joy of children playing."
    },
    {
        id: "en-85",
        sentence: "The soft pillow felt wonderful after the long trip.",
        targetWord: "soft",
        targetWordIndex: 3,
        options: [
            { word: "velvety", score: 100, feedback: "Perfect! 'Velvety' means having a smooth, soft appearance or texture like velvet." },
            { word: "thin", score: 40, feedback: "Lack of substance." },
            { word: "weak", score: 30, feedback: "Lack of strength." },
            { word: "low", score: 20, feedback: "Level." }
        ],
        bestAnswer: "velvety",
        explanation: "'Velvety' describes the texture and comfort of the pillow more vividly."
    },
    {
        id: "en-86",
        sentence: "The hot fire warmed the entire living room.",
        targetWord: "hot",
        targetWordIndex: 3,
        options: [
            { word: "blazing", score: 100, feedback: "Perfect! 'Blazing' means burning fiercely and brightly." },
            { word: "bright", score: 50, feedback: "True, but doesn't describe height of temperature." },
            { word: "baked", score: 20, feedback: "Incorrect usage." },
            { word: "warm", score: 30, feedback: "Too mild." }
        ],
        bestAnswer: "blazing",
        explanation: "'Blazing' describes the actual fire more precisely than just 'hot'."
    },
    {
        id: "en-87",
        sentence: "The cold ice felt refreshing against his forehead.",
        targetWord: "cold",
        targetWordIndex: 3,
        options: [
            { word: "frigid", score: 100, feedback: "Perfect! 'Frigid' means very cold in temperature." },
            { word: "chilly", score: 30, feedback: "Air/mood." },
            { word: "biting", score: 60, feedback: "Biting is for wind." },
            { word: "cool", score: 40, feedback: "Too mild." }
        ],
        bestAnswer: "frigid",
        explanation: "'Frigid' fits the extreme temperature of ice better than 'cold'."
    },
    {
        id: "en-88",
        sentence: "The new technology will change the way we live.",
        targetWord: "new",
        targetWordIndex: 3,
        options: [
            { word: "trailblazing", score: 100, feedback: "Perfect! 'Trailblazing' means introducing new methods or ideas; innovative." },
            { word: "young", score: 20, feedback: "Living beings." },
            { word: "late", score: 10, feedback: "Time." },
            { word: "fresh", score: 30, feedback: "Food/air." }
        ],
        bestAnswer: "trailblazing",
        explanation: "'Trailblazing' captures the revolutionary aspect of new technology."
    },
    {
        id: "en-89",
        sentence: "The many stars in the sky were beyond counting.",
        targetWord: "many",
        targetWordIndex: 3,
        options: [
            { word: "innumerable", score: 100, feedback: "Perfect! 'Innumerable' means too many to be counted." },
            { word: "much", score: 20, feedback: "Uncountable." },
            { word: "some", score: 40, feedback: "Less than many." },
            { word: "lots", score: 30, feedback: "Too informal." }
        ],
        bestAnswer: "innumerable",
        explanation: "'Innumerable' perfectly matches the phrase 'beyond counting' in the sentence."
    },
    {
        id: "en-90",
        sentence: "The bad experience left him feeling discouraged.",
        targetWord: "bad",
        targetWordIndex: 3,
        options: [
            { word: "nasty", score: 40, feedback: "Informal." },
            { word: "harrowing", score: 100, feedback: "Perfect! 'Harrowing' means acutely distressing." },
            { word: "wrong", score: 20, feedback: "Morality/incorrectness." },
            { word: "hard", score: 30, feedback: "Difficulty, but not quality." }
        ],
        bestAnswer: "harrowing",
        explanation: "'Harrowing' justifies why he feels 'discouraged' and distressed."
    },
    {
        id: "en-91",
        sentence: "The small town was famous for its apple pies.",
        targetWord: "small",
        targetWordIndex: 3,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "sleepy", score: 100, feedback: "Perfect! 'Sleepy' describes a quiet, inactive place like a small town." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "minor", score: 30, feedback: "Importance." }
        ],
        bestAnswer: "sleepy",
        explanation: "'Sleepy' adds more character to the description of a small town."
    },
    {
        id: "en-92",
        sentence: "The fast recovery of the patient amazed the doctors.",
        targetWord: "fast",
        targetWordIndex: 3,
        options: [
            { word: "quick", score: 40, feedback: "Standard synonym." },
            { word: "unprecedented", score: 100, feedback: "Perfect! 'Unprecedented' means never done or known before." },
            { word: "soon", score: 10, feedback: "Incorrect usage." },
            { word: "ready", score: 20, feedback: "Incorrect usage." }
        ],
        bestAnswer: "unprecedented",
        explanation: "'Unprecedented' justifies why the doctors were 'amazed'—it's beyond just 'fast'."
    },
    {
        id: "en-93",
        sentence: "The old legend has been passed down for generations.",
        targetWord: "old",
        targetWordIndex: 3,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "time-honored", score: 100, feedback: "Perfect! 'Time-honored' means respected or valued because of its long history." },
            { word: "past", score: 20, feedback: "Incorrect usage." },
            { word: "worn", score: 30, feedback: "Physical decay." }
        ],
        bestAnswer: "time-honored",
        explanation: "'Time-honored' matches the dignity of a legend passed down for generations."
    },
    {
        id: "en-94",
        sentence: "The nice music played softly in the background.",
        targetWord: "nice",
        targetWordIndex: 3,
        options: [
            { word: "good", score: 40, feedback: "Generic." },
            { word: "euphonious", score: 100, feedback: "Perfect! 'Euphonious' means pleasing to the ear." },
            { word: "fine", score: 30, feedback: "Weak." },
            { word: "tidy", score: 10, feedback: "Nonsensical." }
        ],
        bestAnswer: "euphonious",
        explanation: "'Euphonious' is the technical and precise word for 'nice' sounding music."
    },
    {
        id: "en-95",
        sentence: "The clean air of the countryside was a welcome change.",
        targetWord: "clean",
        targetWordIndex: 3,
        options: [
            { word: "clear", score: 30, feedback: "Visibility." },
            { word: "invigorating", score: 100, feedback: "Perfect! 'Invigorating' means making one feel strong, healthy, and full of energy." },
            { word: "blank", score: 10, feedback: "Empty." },
            { word: "fresh", score: 50, feedback: "In the sentence already as 'fresh air' usually." }
        ],
        bestAnswer: "invigorating",
        explanation: "'Invigorating' describes the *effect* of clean air, which is why it's a 'welcome change'."
    },
    {
        id: "en-96",
        sentence: "The bright future of the space program inspires millions.",
        targetWord: "bright",
        targetWordIndex: 3,
        options: [
            { word: "shiny", score: 30, feedback: "Surface reflection." },
            { word: "auspicious", score: 100, feedback: "Perfect! 'Auspicious' means conducive to success; favorable." },
            { word: "clear", score: 40, feedback: "Visibility." },
            { word: "lit", score: 10, feedback: "Nonsensical." }
        ],
        bestAnswer: "auspicious",
        explanation: "'Auspicious' is the formal way to describe a very positive future."
    },
    {
        id: "en-97",
        sentence: "The strong wall held firm against the floodwaters.",
        targetWord: "strong",
        targetWordIndex: 3,
        options: [
            { word: "hard", score: 30, feedback: "Texture." },
            { word: "impregnable", score: 100, feedback: "Perfect! 'Impregnable' means unable to be captured or broken into." },
            { word: "heavy", score: 40, feedback: "Mass, which helps, but strength is 'impregnable'." },
            { word: "stiff", score: 20, feedback: "Incorrect usage." }
        ],
        bestAnswer: "impregnable",
        explanation: "'Impregnable' is the ideal word for a wall that cannot be breached by the elements."
    },
    {
        id: "en-98",
        sentence: "The small amount of money was enough for a coffee.",
        targetWord: "small",
        targetWordIndex: 1,
        options: [
            { word: "pittance", score: 100, feedback: "Perfect! 'Pittance' refers to a very small amount of money." },
            { word: "short", score: 10, feedback: "Length." },
            { word: "minor", score: 30, feedback: "Importance." },
            { word: "brief", score: 20, feedback: "Time." }
        ],
        bestAnswer: "pittance",
        explanation: "'Pittance' is the precise term for a tiny financial sum."
    },
    {
        id: "en-99",
        sentence: "The good performance earned him a standing ovation.",
        targetWord: "good",
        targetWordIndex: 1,
        options: [
            { word: "virtuoso", score: 100, feedback: "Perfect! 'Virtuoso' describes a performance with exceptional technical skill." },
            { word: "nice", score: 20, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "clear", score: 10, feedback: "Logic." }
        ],
        bestAnswer: "virtuoso",
        explanation: "'Virtuoso' emphasizes the extraordinary mastery of the performer."
    },
    {
        id: "en-100",
        sentence: "The smart inventor created a machine that could clean the oceans.",
        targetWord: "smart",
        targetWordIndex: 3,
        options: [
            { word: "bright", score: 40, feedback: "Too informal." },
            { word: "visionary", score: 100, feedback: "Perfect! 'Visionary' means thinking about or planning the future with imagination or wisdom." },
            { word: "slick", score: 30, feedback: "Deceptive." },
            { word: "fast", score: 20, feedback: "Speed." }
        ],
        bestAnswer: "visionary",
        explanation: "'Visionary' highlights the grandiose, future-focused intelligence of the inventor."
    },
    {
        id: "en-101",
        sentence: "The big storm caused major power outages.",
        targetWord: "big",
        targetWordIndex: 0,
        options: [
            { word: "catastrophic", score: 100, feedback: "Perfect! 'Catastrophic' emphasizes the severe damage caused." },
            { word: "large", score: 40, feedback: "Generic." },
            { word: "wide", score: 20, feedback: "Incorrect." },
            { word: "tall", score: 10, feedback: "Incorrect." }
        ],
        bestAnswer: "catastrophic",
        explanation: "'Catastrophic' provides the high-stakes intensity needed for power outages."
    },
    {
        id: "en-102",
        sentence: "The fast change in policy surprised everyone.",
        targetWord: "fast",
        targetWordIndex: 0,
        options: [
            { word: "abrupt", score: 100, feedback: "Perfect! 'Abrupt' means sudden and unexpected." },
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." }
        ],
        bestAnswer: "abrupt",
        explanation: "'Abrupt' captures the sudden nature of the policy change."
    },
    {
        id: "en-103",
        sentence: "The small detail was the key to solving the puzzle.",
        targetWord: "small",
        targetWordIndex: 0,
        options: [
            { word: "minute", score: 100, feedback: "Perfect! 'Minute' (my-noot) means extremely small." },
            { word: "little", score: 40, feedback: "Synonym." },
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." }
        ],
        bestAnswer: "minute",
        explanation: "'Minute' emphasizes that the detail was extremely tiny yet important."
    },
    {
        id: "en-104",
        sentence: "The strong argument convinced the jury.",
        targetWord: "strong",
        targetWordIndex: 0,
        options: [
            { word: "compelling", score: 100, feedback: "Perfect! 'Compelling' means bringing about interest or conviction." },
            { word: "hard", score: 30, feedback: "Texture." },
            { word: "heavy", score: 20, feedback: "Weight." },
            { word: "firm", score: 40, feedback: "Stability." }
        ],
        bestAnswer: "compelling",
        explanation: "'Compelling' is the ideal word for an argument that wins a jury over."
    },
    {
        id: "en-105",
        sentence: "The bright future of the city depends on innovation.",
        targetWord: "bright",
        targetWordIndex: 0,
        options: [
            { word: "prosperous", score: 100, feedback: "Perfect! 'Prosperous' means successful and flourishing." },
            { word: "shiny", score: 20, feedback: "Light." },
            { word: "clear", score: 40, feedback: "Visibility." },
            { word: "lit", score: 10, feedback: "Nonsensical." }
        ],
        bestAnswer: "prosperous",
        explanation: "'Prosperous' is the precise way to describe a successful city future."
    },
    {
        id: "en-106",
        sentence: "The nice evening was perfect for a walk.",
        targetWord: "nice",
        targetWordIndex: 1,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "idyllic", score: 100, feedback: "Perfect! 'Idyllic' means extremely happy, peaceful, or picturesque." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "tidy", score: 10, feedback: "Appearance." }
        ],
        bestAnswer: "idyllic",
        explanation: "'Idyllic' captures the perfect, peaceful nature of the evening walk."
    },
    {
        id: "en-107",
        sentence: "The loud applause went on for minutes.",
        targetWord: "loud",
        targetWordIndex: 1,
        options: [
            { word: "big", score: 40, feedback: "Size." },
            { word: "thundering", score: 100, feedback: "Perfect! 'Thundering' describes very loud sound with power." },
            { word: "noisy", score: 30, feedback: "Irritating." },
            { word: "high", score: 20, feedback: "Pitch." }
        ],
        bestAnswer: "thundering",
        explanation: "'Thundering' emphasizes the power and volume of the applause."
    },
    {
        id: "en-108",
        sentence: "The smart choice was to wait for more data.",
        targetWord: "smart",
        targetWordIndex: 1,
        options: [
            { word: "bright", score: 40, feedback: "Informal." },
            { word: "judicious", score: 100, feedback: "Perfect! 'Judicious' means having or showing good judgment." },
            { word: "slick", score: 20, feedback: "Deceptive." },
            { word: "fast", score: 30, feedback: "Speed." }
        ],
        bestAnswer: "judicious",
        explanation: "'Judicious' is the formal word for a wise, well-judged choice."
    },
    {
        id: "en-109",
        sentence: "The old building was converted into modern apartments.",
        targetWord: "old",
        targetWordIndex: 1,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "historic", score: 100, feedback: "Perfect! 'Historic' means famous or important in history." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "worn", score: 40, feedback: "Surface." }
        ],
        bestAnswer: "historic",
        explanation: "'Historic' conveys the significance of the old building being preserved."
    },
    {
        id: "en-110",
        sentence: "The small amount of sugar was enough for the recipe.",
        targetWord: "small",
        targetWordIndex: 1,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "nominal", score: 100, feedback: "Perfect! 'Nominal' means existing in name only; very small." },
            { word: "little", score: 40, feedback: "Synonym." },
            { word: "brief", score: 10, feedback: "Time." }
        ],
        bestAnswer: "nominal",
        explanation: "'Nominal' is a sophisticated way to describe a very small quantity."
    },
    {
        id: "en-111",
        sentence: "The clear water reflected the blue sky.",
        targetWord: "clear",
        targetWordIndex: 1,
        options: [
            { word: "plain", score: 40, feedback: "Simple." },
            { word: "pellucid", score: 100, feedback: "Perfect! 'Pellucid' means translucently clear." },
            { word: "bright", score: 20, feedback: "Light." },
            { word: "empty", score: 10, feedback: "Space." }
        ],
        bestAnswer: "pellucid",
        explanation: "'Pellucid' is a refined literary term for extreme clarity."
    },
    {
        id: "en-112",
        sentence: "The fast pace of the game tired the players.",
        targetWord: "fast",
        targetWordIndex: 1,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "frenetic", score: 100, feedback: "Perfect! 'Frenetic' means fast and energetic in a wild way." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." }
        ],
        bestAnswer: "frenetic",
        explanation: "'Frenetic' captures the chaotic energy of a fast-paced game."
    },
    {
        id: "en-113",
        sentence: "The quiet whisper could barely be heard.",
        targetWord: "quiet",
        targetWordIndex: 1,
        options: [
            { word: "low", score: 30, feedback: "Volume." },
            { word: "inaudible", score: 100, feedback: "Perfect! 'Inaudible' means unable to be heard." },
            { word: "calm", score: 20, feedback: "State." },
            { word: "dull", score: 10, feedback: "Boring." }
        ],
        bestAnswer: "inaudible",
        explanation: "'Inaudible' precisely describes a whisper that is too quiet to hear."
    },
    {
        id: "en-114",
        sentence: "The bad weather delayed the flight.",
        targetWord: "bad",
        targetWordIndex: 1,
        options: [
            { word: "hard", score: 30, feedback: "Texture." },
            { word: "turbulent", score: 100, feedback: "Perfect! 'Turbulent' describes chaotic or unstable conditions." },
            { word: "wrong", score: 10, feedback: "Incorrect." },
            { word: "nasty", score: 50, feedback: "Informal." }
        ],
        bestAnswer: "turbulent",
        explanation: "'Turbulent' is the correct aviation term for flight-delaying weather."
    },
    {
        id: "en-115",
        sentence: "The strong foundation supported the skyscraper.",
        targetWord: "strong",
        targetWordIndex: 1,
        options: [
            { word: "hard", score: 30, feedback: "Texture." },
            { word: "unwavering", score: 100, feedback: "Perfect! 'Unwavering' means steady or resolute." },
            { word: "heavy", score: 40, feedback: "Weight." },
            { word: "stiff", score: 20, feedback: "Bending." }
        ],
        bestAnswer: "unwavering",
        explanation: "'Unwavering' describes the stability of a foundation perfectly."
    },
    {
        id: "en-116",
        sentence: "The bright colors of the painting stood out.",
        targetWord: "bright",
        targetWordIndex: 2,
        options: [
            { word: "shiny", score: 30, feedback: "Light." },
            { word: "clear", score: 40, feedback: "Visibility." },
            { word: "vibrant", score: 100, feedback: "Perfect! 'Vibrant' means full of energy and enthusiasm." },
            { word: "lit", score: 20, feedback: "Space." }
        ],
        bestAnswer: "vibrant",
        explanation: "'Vibrant' is the ideal word for intense, energetic colors."
    },
    {
        id: "en-117",
        sentence: "The nice smell of baking bread filled the house.",
        targetWord: "nice",
        targetWordIndex: 2,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "aromatic", score: 100, feedback: "Perfect! 'Aromatic' means having a pleasant and distinctive smell." },
            { word: "tidy", score: 10, feedback: "Appearance." }
        ],
        bestAnswer: "aromatic",
        explanation: "'Aromatic' provides a sophisticated way to describe the smell of baking."
    },
    {
        id: "en-118",
        sentence: "The clean lines of the design were impressive.",
        targetWord: "clean",
        targetWordIndex: 2,
        options: [
            { word: "clear", score: 40, feedback: "Visibility." },
            { word: "blank", score: 20, feedback: "Empty." },
            { word: "minimalist", score: 100, feedback: "Perfect! 'Minimalist' describes a style using simple elements." },
            { word: "fresh", score: 30, feedback: "Newness." }
        ],
        bestAnswer: "minimalist",
        explanation: "'Minimalist' is the correct design term for 'clean' lines."
    },
    {
        id: "en-119",
        sentence: "The old custom is still observed today.",
        targetWord: "old",
        targetWordIndex: 2,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "venerable", score: 100, feedback: "Perfect! 'Venerable' means accorded a great deal of respect." },
            { word: "worn", score: 30, feedback: "Surface." }
        ],
        bestAnswer: "venerable",
        explanation: "'Venerable' adds dignity to the long-standing custom."
    },
    {
        id: "en-120",
        sentence: "The small gap in the fence was hidden by leaves.",
        targetWord: "small",
        targetWordIndex: 2,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "unobtrusive", score: 100, feedback: "Perfect! 'Unobtrusive' means not conspicuous or attracting attention." },
            { word: "little", score: 40, feedback: "Generic." }
        ],
        bestAnswer: "unobtrusive",
        explanation: "'Unobtrusive' explains why the gap was hidden."
    },
    {
        id: "en-121",
        sentence: "The loud crash woke up the entire neighborhood.",
        targetWord: "loud",
        targetWordIndex: 2,
        options: [
            { word: "noisy", score: 30, feedback: "Irritating." },
            { word: "big", score: 40, feedback: "Size." },
            { word: "resonance", score: 100, feedback: "Perfect! 'Resonance' implies powerful, echoing sound." },
            { word: "high", score: 20, feedback: "Pitch." }
        ],
        bestAnswer: "resonance",
        explanation: "'Resonance' provides a sense of the scale of the crash."
    },
    {
        id: "en-122",
        sentence: "The smart solution saved the company millions.",
        targetWord: "smart",
        targetWordIndex: 2,
        options: [
            { word: "bright", score: 40, feedback: "Informal." },
            { word: "slick", score: 30, feedback: "Deceptive." },
            { word: "visionary", score: 100, feedback: "Perfect! 'Visionary' means thinking about the future with wisdom." },
            { word: "fast", score: 20, feedback: "Speed." }
        ],
        bestAnswer: "visionary",
        explanation: "'Visionary' highlights the future-focused impact of the solution."
    },
    {
        id: "en-123",
        sentence: "The hard task was finally completed by the team.",
        targetWord: "hard",
        targetWordIndex: 2,
        options: [
            { word: "stiff", score: 30, feedback: "Bending." },
            { word: "firm", score: 40, feedback: "Stability." },
            { word: "laborious", score: 100, feedback: "Perfect! 'Laborious' means requiring considerable effort and time." },
            { word: "rough", score: 20, feedback: "Texture." }
        ],
        bestAnswer: "laborious",
        explanation: "'Laborious' captures the effort and time required for the task."
    },
    {
        id: "en-124",
        sentence: "The happy mood of the party was infectious.",
        targetWord: "happy",
        targetWordIndex: 2,
        options: [
            { word: "nice", score: 30, feedback: "Vague." },
            { word: "good", score: 20, feedback: "Indifferent." },
            { word: "convivial", score: 100, feedback: "Perfect! 'Convivial' means cheerful and friendly; jovial." },
            { word: "fine", score: 40, feedback: "Weak." }
        ],
        bestAnswer: "convivial",
        explanation: "'Convivial' is the perfect word for a joyful, social atmosphere."
    },
    {
        id: "en-125",
        sentence: "The soft light filled the room at dusk.",
        targetWord: "soft",
        targetWordIndex: 2,
        options: [
            { word: "low", score: 40, feedback: "Level." },
            { word: "thin", score: 20, feedback: "Quality." },
            { word: "subdued", score: 100, feedback: "Perfect! 'Subdued' means quiet and rather reflective or depressed (but for light, it means soft)." },
            { word: "weak", score: 30, feedback: "Intensity." }
        ],
        bestAnswer: "subdued",
        explanation: "'Subdued' precisely describes the gentle, low light of dusk."
    },
    {
        id: "en-126",
        sentence: "The hot oven was ready for the cake.",
        targetWord: "hot",
        targetWordIndex: 3,
        options: [
            { word: "warm", score: 20, feedback: "Not enough for baking." },
            { word: "preheated", score: 100, feedback: "Perfect! 'Preheated' is the technical term for a hot oven ready for baking." },
            { word: "baked", score: 40, feedback: "Redundant." },
            { word: "bright", score: 30, feedback: "Light." }
        ],
        bestAnswer: "preheated",
        explanation: "'Preheated' is the precise state an oven needs to be in for a recipe."
    },
    {
        id: "en-127",
        sentence: "The cold beer was perfect after a long day.",
        targetWord: "cold",
        targetWordIndex: 3,
        options: [
            { word: "cool", score: 40, feedback: "Not cold enough." },
            { word: "chilly", score: 30, feedback: "Mood/air." },
            { word: "refreshing", score: 100, feedback: "Perfect! 'Refreshing' describes the effect of the temperature." },
            { word: "frozen", score: 10, feedback: "Undrinkable." }
        ],
        bestAnswer: "refreshing",
        explanation: "'Refreshing' captures the pleasure of the cold beverage perfectly."
    },
    {
        id: "en-128",
        sentence: "The new strategy will improve efficiency.",
        targetWord: "new",
        targetWordIndex: 3,
        options: [
            { word: "fresh", score: 40, feedback: "New, but vague." },
            { word: "young", score: 10, feedback: "Living beings." },
            { word: "innovative", score: 100, feedback: "Perfect! 'Innovative' means introducing new ideas; original." },
            { word: "late", score: 20, feedback: "Time." }
        ],
        bestAnswer: "innovative",
        explanation: "'Innovative' is the standard professional term for a 'new' strategy."
    },
    {
        id: "en-129",
        sentence: "The many options made it difficult to choose.",
        targetWord: "many",
        targetWordIndex: 3,
        options: [
            { word: "lots", score: 30, feedback: "Informal." },
            { word: "much", score: 10, feedback: "Uncountable." },
            { word: "multitudinous", score: 100, feedback: "Perfect! 'Multitudinous' means very numerous." },
            { word: "some", score: 20, feedback: "Few." }
        ],
        bestAnswer: "multitudinous",
        explanation: "'Multitudinous' adds a formal, intense layer to the volume of options."
    },
    {
        id: "en-130",
        sentence: "The bad habit was hard to break.",
        targetWord: "bad",
        targetWordIndex: 3,
        options: [
            { word: "nasty", score: 30, feedback: "Informal." },
            { word: "wrong", score: 20, feedback: "Moral." },
            { word: "ingrained", score: 100, feedback: "Perfect! 'Ingrained' means firmly established and difficult to change." },
            { word: "hard", score: 40, feedback: "Difficult." }
        ],
        bestAnswer: "ingrained",
        explanation: "'Ingrained' explains *why* the bad habit was so hard to break."
    },
    {
        id: "en-131",
        sentence: "The small space was enough for one person.",
        targetWord: "small",
        targetWordIndex: 3,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "compact", score: 100, feedback: "Perfect! 'Compact' means closely and neatly packed together." },
            { word: "minor", score: 30, feedback: "Importance." }
        ],
        bestAnswer: "compact",
        explanation: "'Compact' describes a small space that is nonetheless functional."
    },
    {
        id: "en-132",
        sentence: "The fast track to success is hard work.",
        targetWord: "fast",
        targetWordIndex: 3,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "accelerated", score: 100, feedback: "Perfect! 'Accelerated' means made faster or quicker." },
            { word: "ready", score: 20, feedback: "State." }
        ],
        bestAnswer: "accelerated",
        explanation: "'Accelerated' is the precise term for a fast-track process."
    },
    {
        id: "en-133",
        sentence: "The old painting was a masterpiece.",
        targetWord: "old",
        targetWordIndex: 3,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "timeless", score: 100, feedback: "Perfect! 'Timeless' means not affected by the passage of time." },
            { word: "worn", score: 30, feedback: "Physical." }
        ],
        bestAnswer: "timeless",
        explanation: "'Timeless' honors the painting's quality across generations."
    },
    {
        id: "en-134",
        sentence: "The nice gesture was appreciated by everyone.",
        targetWord: "nice",
        targetWordIndex: 3,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "tidy", score: 10, feedback: "Appearance." },
            { word: "magnanimous", score: 100, feedback: "Perfect! 'Magnanimous' means generous or forgiving." }
        ],
        bestAnswer: "magnanimous",
        explanation: "'Magnanimous' elevates the 'nice gesture' to a level of high character."
    },
    {
        id: "en-135",
        sentence: "The clean energy transition is essential.",
        targetWord: "clean",
        targetWordIndex: 3,
        options: [
            { word: "clear", score: 20, feedback: "Transparency." },
            { word: "blank", score: 10, feedback: "Empty." },
            { word: "fresh", score: 30, feedback: "New." },
            { word: "renewable", score: 100, feedback: "Perfect! 'Renewable' is the precise technical term for clean energy." }
        ],
        bestAnswer: "renewable",
        explanation: "'Renewable' is the correct term for energy that doesn't deplete resources."
    },
    {
        id: "en-136",
        sentence: "The bright star in the galaxy emitted much energy.",
        targetWord: "bright",
        targetWordIndex: 3,
        options: [
            { word: "shiny", score: 20, feedback: "Surface." },
            { word: "clear", score: 30, feedback: "Atmosphere." },
            { word: "lit", score: 10, feedback: "Nonsensical." },
            { word: "resplendent", score: 100, feedback: "Perfect! 'Resplendent' means attractive and impressive through being richly colorful or shining." }
        ],
        bestAnswer: "resplendent",
        explanation: "'Resplendent' describes the impressive brightness of a major celestial body."
    },
    {
        id: "en-137",
        sentence: "The strong bond between the friends lasted forever.",
        targetWord: "strong",
        targetWordIndex: 3,
        options: [
            { word: "hard", score: 20, feedback: "Texture." },
            { word: "heavy", score: 30, feedback: "Weight." },
            { word: "stiff", score: 10, feedback: "Bending." },
            { word: "unbreakable", score: 100, feedback: "Perfect! 'Unbreakable' means not able to be broken." }
        ],
        bestAnswer: "unbreakable",
        explanation: "'Unbreakable' perfectly describes a bond that lasts 'forever'."
    },
    {
        id: "en-138",
        sentence: "The smart robot can perform complex surgeries.",
        targetWord: "smart",
        targetWordIndex: 3,
        options: [
            { word: "bright", score: 20, feedback: "Informal." },
            { word: "slick", score: 10, feedback: "Deceptive." },
            { word: "fast", score: 30, feedback: "Speed." },
            { word: "autonomous", score: 100, feedback: "Perfect! 'Autonomous' means having the freedom to act independently." }
        ],
        bestAnswer: "autonomous",
        explanation: "'Autonomous' is the key technical descriptor for a smart robot."
    },
    {
        id: "en-139",
        sentence: "The hard shell of the nut protects the seed.",
        targetWord: "hard",
        targetWordIndex: 3,
        options: [
            { word: "stiff", score: 20, feedback: "Bending." },
            { word: "firm", score: 30, feedback: "Stability." },
            { word: "rough", score: 10, feedback: "Texture." },
            { word: "impenetrable", score: 100, feedback: "Perfect! 'Impenetrable' means impossible to pass through or enter." }
        ],
        bestAnswer: "impenetrable",
        explanation: "'Impenetrable' emphasizes the protective quality of the hard shell."
    },
    {
        id: "en-140",
        sentence: "The happy end of the movie left everyone smiling.",
        targetWord: "happy",
        targetWordIndex: 3,
        options: [
            { word: "nice", score: 20, feedback: "Vague." },
            { word: "good", score: 10, feedback: "Indifferent." },
            { word: "fine", score: 30, feedback: "Weak." },
            { word: "uplifting", score: 100, feedback: "Perfect! 'Uplifting' means morally or spiritually elevating; inspiring happiness." }
        ],
        bestAnswer: "uplifting",
        explanation: "'Uplifting' describes the *effect* of the happy ending on the audience."
    },
    {
        id: "en-141",
        sentence: "The soft fabric felt good against the skin.",
        targetWord: "soft",
        targetWordIndex: 3,
        options: [
            { word: "low", score: 10, feedback: "Level." },
            { word: "thin", score: 30, feedback: "Substance." },
            { word: "weak", score: 20, feedback: "Strength." },
            { word: "silken", score: 100, feedback: "Perfect! 'Silken' means smooth, soft, and lustrous like silk." }
        ],
        bestAnswer: "silken",
        explanation: "'Silken' provides a precise, tactile description of the soft fabric."
    },
    {
        id: "en-142",
        sentence: "The hot water was used for the bath.",
        targetWord: "hot",
        targetWordIndex: 3,
        options: [
            { word: "warm", score: 50, feedback: "Wait, steaming is better." },
            { word: "bright", score: 10, feedback: "Nonsensical." },
            { word: "baked", score: 20, feedback: "Nonsensical." },
            { word: "steaming", score: 100, feedback: "Perfect! 'Steaming' describes very hot water vividly." }
        ],
        bestAnswer: "steaming",
        explanation: "'Steaming' conveys the high temperature through a visual cue."
    },
    {
        id: "en-143",
        sentence: "The cold metal of the gate was freezing in winter.",
        targetWord: "cold",
        targetWordIndex: 3,
        options: [
            { word: "cool", score: 30, feedback: "Too mild." },
            { word: "chilly", score: 40, feedback: "Air." },
            { word: "biting", score: 20, feedback: "Wind." },
            { word: "icy", score: 100, feedback: "Perfect! 'Icy' means very cold; like ice." }
        ],
        bestAnswer: "icy",
        explanation: "'Icy' accurately describes the extreme cold of metal in winter."
    },
    {
        id: "en-144",
        sentence: "The new model of the phone is very popular.",
        targetWord: "new",
        targetWordIndex: 3,
        options: [
            { word: "fresh", score: 30, feedback: "Food." },
            { word: "young", score: 10, feedback: "Living." },
            { word: "late", score: 20, feedback: "Time." },
            { word: "cutting-edge", score: 100, feedback: "Perfect! 'Cutting-edge' means at the latest or most advanced stage of development." }
        ],
        bestAnswer: "cutting-edge",
        explanation: "'Cutting-edge' is the marketing term for new, advanced technology."
    },
    {
        id: "en-145",
        sentence: "The many trees in the forest provided shade.",
        targetWord: "many",
        targetWordIndex: 3,
        options: [
            { word: "lots", score: 30, feedback: "Informal." },
            { word: "much", score: 10, feedback: "Uncountable." },
            { word: "some", score: 40, feedback: "Few." },
            { word: "verdant", score: 100, feedback: "Perfect! 'Verdant' means green with grass or other rich vegetation." }
        ],
        bestAnswer: "verdant",
        explanation: "'Verdant' describes a forest full of trees in a way that emphasizes the growth."
    },
    {
        id: "en-146",
        sentence: "The bad luck followed him everywhere.",
        targetWord: "bad",
        targetWordIndex: 3,
        options: [
            { word: "nasty", score: 30, feedback: "Informal." },
            { word: "wrong", score: 20, feedback: "Moral." },
            { word: "hard", score: 40, feedback: "Difficulty." },
            { word: "calamitous", score: 100, feedback: "Perfect! 'Calamitous' means involving great misfortune or disaster." }
        ],
        bestAnswer: "calamitous",
        explanation: "'Calamitous' explains why the 'bad luck' feels so significant and destructive."
    },
    {
        id: "en-147",
        sentence: "The small chance of success didn't stop them.",
        targetWord: "small",
        targetWordIndex: 3,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "minor", score: 30, feedback: "Importance." },
            { word: "slender", score: 100, feedback: "Perfect! 'Slender' means small in degree; slight." }
        ],
        bestAnswer: "slender",
        explanation: "'Slender' is the classic way to describe a very small chance."
    },
    {
        id: "en-148",
        sentence: "The fast decision was made by the CEO.",
        targetWord: "fast",
        targetWordIndex: 3,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." },
            { word: "decisive", score: 100, feedback: "Perfect! 'Decisive' means settling an issue; producing a definite result." }
        ],
        bestAnswer: "decisive",
        explanation: "'Decisive' honors the leadership quality of the 'fast' decision."
    },
    {
        id: "en-149",
        sentence: "The old tradition is being revived this year.",
        targetWord: "old",
        targetWordIndex: 3,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "worn", score: 30, feedback: "Physical." },
            { word: "long-standing", score: 100, feedback: "Perfect! 'Long-standing' means having existed for a long time." }
        ],
        bestAnswer: "long-standing",
        explanation: "'Long-standing' is the neutral and precise way to describe an old tradition."
    },
    {
        id: "en-150",
        sentence: "The nice painting cost a fortune.",
        targetWord: "nice",
        targetWordIndex: 3,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "tidy", score: 10, feedback: "Appearance." },
            { word: "peerless", score: 100, feedback: "Perfect! 'Peerless' means unequaled; unrivaled." }
        ],
        bestAnswer: "peerless",
        explanation: "'Peerless' justifies why the painting would cost a fortune."
    },
    {
        id: "en-151",
        sentence: "The fast growth of the city brought new challenges.",
        targetWord: "fast",
        targetWordIndex: 0,
        options: [
            { word: "exponential", score: 100, feedback: "Perfect! 'Exponential' describes extremely rapid growth." },
            { word: "quick", score: 40, feedback: "Standard." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." }
        ],
        bestAnswer: "exponential",
        explanation: "'Exponential' is the precise term for compounding, extremely fast growth."
    },
    {
        id: "en-152",
        sentence: "The small amount of rain was not enough for the crops.",
        targetWord: "small",
        targetWordIndex: 0,
        options: [
            { word: "negligible", score: 100, feedback: "Perfect! 'Negligible' means so small or unimportant as to be not worth considering." },
            { word: "little", score: 40, feedback: "Synonym." },
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." }
        ],
        bestAnswer: "negligible",
        explanation: "'Negligible' explains why the rain was 'not enough'—it barely existed."
    },
    {
        id: "en-153",
        sentence: "The strong wind blew down several trees.",
        targetWord: "strong",
        targetWordIndex: 0,
        options: [
            { word: "gale-force", score: 100, feedback: "Perfect! 'Gale-force' is the precise term for very strong wind." },
            { word: "hard", score: 30, feedback: "Texture." },
            { word: "heavy", score: 20, feedback: "Weight." },
            { word: "firm", score: 10, feedback: "Stability." }
        ],
        bestAnswer: "gale-force",
        explanation: "'Gale-force' provides the specific intensity required to blow down trees."
    },
    {
        id: "en-154",
        sentence: "The bright light of the sun blinded him for a moment.",
        targetWord: "bright",
        targetWordIndex: 0,
        options: [
            { word: "radiant", score: 100, feedback: "Perfect! 'Radiant' means sending out light; shining or glowing brightly." },
            { word: "shiny", score: 20, feedback: "Reflection." },
            { word: "clear", score: 30, feedback: "Visibility." },
            { word: "lit", score: 10, feedback: "Nonsensical." }
        ],
        bestAnswer: "radiant",
        explanation: "'Radiant' describes the sun's natural, powerful light."
    },
    {
        id: "en-155",
        sentence: "The nice day was perfect for a picnic.",
        targetWord: "nice",
        targetWordIndex: 0,
        options: [
            { word: "splendid", score: 100, feedback: "Perfect! 'Splendid' means magnificent; very impressive." },
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Weak." },
            { word: "tidy", score: 10, feedback: "Appearance." }
        ],
        bestAnswer: "splendid",
        explanation: "'Splendid' adds a layer of excellence and enthusiasm to the description."
    },
    {
        id: "en-156",
        sentence: "The loud noise coming from the basement was scary.",
        targetWord: "loud",
        targetWordIndex: 1,
        options: [
            { word: "big", score: 40, feedback: "Size." },
            { word: "unearthly", score: 100, feedback: "Perfect! 'Unearthly' means unnatural or mysterious, which justified the fear." },
            { word: "noisy", score: 30, feedback: "Irritating." },
            { word: "high", score: 20, feedback: "Pitch." }
        ],
        bestAnswer: "unearthly",
        explanation: "'Unearthly' explains why the noise was 'scary' rather than just 'loud'."
    },
    {
        id: "en-157",
        sentence: "The smart strategy gave them a competitive edge.",
        targetWord: "smart",
        targetWordIndex: 1,
        options: [
            { word: "bright", score: 40, feedback: "Informal." },
            { word: "formidable", score: 100, feedback: "Perfect! 'Formidable' means inspiring fear or respect through being large or powerful." },
            { word: "slick", score: 20, feedback: "Deceptive." },
            { word: "fast", score: 30, feedback: "Speed." }
        ],
        bestAnswer: "formidable",
        explanation: "'Formidable' describes a strategy that wins by being superior and respected."
    },
    {
        id: "en-158",
        sentence: "The old book shop was a treasure trove of knowledge.",
        targetWord: "old",
        targetWordIndex: 1,
        options: [
            { word: "used", score: 30, feedback: "Function." },
            { word: "antiquarian", score: 100, feedback: "Perfect! 'Antiquarian' refers to old and rare books." },
            { word: "past", score: 10, feedback: "Time." },
            { word: "worn", score: 20, feedback: "Physical." }
        ],
        bestAnswer: "antiquarian",
        explanation: "'Antiquarian' is the precise term for a shop specializing in old, rare books."
    },
    {
        id: "en-159",
        sentence: "The small town was very quiet at night.",
        targetWord: "small",
        targetWordIndex: 1,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "tranquil", score: 100, feedback: "Perfect! 'Tranquil' means free from disturbance; calm." },
            { word: "little", score: 40, feedback: "Generic." },
            { word: "brief", score: 10, feedback: "Time." }
        ],
        bestAnswer: "tranquil",
        explanation: "'Tranquil' describes the specific type of 'quiet' found in a peaceful town."
    },
    {
        id: "en-160",
        sentence: "The clean room was ready for the guest.",
        targetWord: "clean",
        targetWordIndex: 1,
        options: [
            { word: "clear", score: 30, feedback: "Space." },
            { word: "immaculate", score: 100, feedback: "Perfect! 'Immaculate' means perfectly clean, neat, or tidy." },
            { word: "blank", score: 10, feedback: "Empty." },
            { word: "fresh", score: 50, feedback: "Newness." }
        ],
        bestAnswer: "immaculate",
        explanation: "'Immaculate' conveys the highest standard of cleanliness for a guest."
    },
    {
        id: "en-161",
        sentence: "The fast pace of the lecture was hard to follow.",
        targetWord: "fast",
        targetWordIndex: 1,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "torrential", score: 100, feedback: "Perfect! 'Torrential' implies an overwhelming, fast flow (often for words)." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." }
        ],
        bestAnswer: "torrential",
        explanation: "'Torrential' captures the overwhelming volume and speed of the lecture."
    },
    {
        id: "en-162",
        sentence: "The quiet forest was only disturbed by the wind.",
        targetWord: "quiet",
        targetWordIndex: 1,
        options: [
            { word: "low", score: 20, feedback: "Volume." },
            { word: "serene", score: 100, feedback: "Perfect! 'Serene' means calm, peaceful, and untroubled." },
            { word: "still", score: 60, feedback: "Motionless." },
            { word: "dull", score: 10, feedback: "Boring." }
        ],
        bestAnswer: "serene",
        explanation: "'Serene' describes the peaceful, untouched quality of the forest."
    },
    {
        id: "en-163",
        sentence: "The bad smell of the smoke filled the hallway.",
        targetWord: "bad",
        targetWordIndex: 1,
        options: [
            { word: "wrong", score: 10, feedback: "Moral." },
            { word: "acrid", score: 100, feedback: "Perfect! 'Acrid' means having an irritatingly strong and unpleasant taste or smell." },
            { word: "hard", score: 20, feedback: "Difficulty." },
            { word: "nasty", score: 40, feedback: "Informal." }
        ],
        bestAnswer: "acrid",
        explanation: "'Acrid' is the precise term for the irritating, sharp smell of smoke."
    },
    {
        id: "en-164",
        sentence: "The strong wall protected the city from invaders.",
        targetWord: "strong",
        targetWordIndex: 1,
        options: [
            { word: "hard", score: 30, feedback: "Texture." },
            { word: "fortified", score: 100, feedback: "Perfect! 'Fortified' means provided with defensive works as protection." },
            { word: "heavy", score: 40, feedback: "Weight." },
            { word: "stiff", score: 20, feedback: "Bending." }
        ],
        bestAnswer: "fortified",
        explanation: "'Fortified' is the correct military and architectural term."
    },
    {
        id: "en-165",
        sentence: "The bright light of the lighthouse shone for miles.",
        targetWord: "bright",
        targetWordIndex: 1,
        options: [
            { word: "shiny", score: 30, feedback: "Surface." },
            { word: "piercing", score: 100, feedback: "Perfect! 'Piercing' describes light that is very sharp and intense." },
            { word: "clear", score: 40, feedback: "Visibility." },
            { word: "lit", score: 20, feedback: "Space." }
        ],
        bestAnswer: "piercing",
        explanation: "'Piercing' describes how the lighthouse light cuts through the darkness."
    },
    {
        id: "en-166",
        sentence: "The nice music relaxed the crowd.",
        targetWord: "nice",
        targetWordIndex: 2,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "soothing", score: 100, feedback: "Perfect! 'Soothing' means having a gently calming effect." },
            { word: "tidy", score: 10, feedback: "Appearance." }
        ],
        bestAnswer: "soothing",
        explanation: "'Soothing' explains *why* the music relaxed the crowd."
    },
    {
        id: "en-167",
        sentence: "The clean water flows from the mountain spring.",
        targetWord: "clean",
        targetWordIndex: 2,
        options: [
            { word: "clear", score: 40, feedback: "Visibility." },
            { word: "blank", score: 10, feedback: "Empty." },
            { word: "untainted", score: 100, feedback: "Perfect! 'Untainted' means not contaminated or polluted." },
            { word: "fresh", score: 50, feedback: "Newness." }
        ],
        bestAnswer: "untainted",
        explanation: "'Untainted' emphasizes the natural purity of the spring water."
    },
    {
        id: "en-168",
        sentence: "The fast recovery of the stocks surprised everyone.",
        targetWord: "fast",
        targetWordIndex: 2,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "instantaneous", score: 100, feedback: "Perfect! 'Instantaneous' means occurring or done in an instant." },
            { word: "ready", score: 20, feedback: "State." }
        ],
        bestAnswer: "instantaneous",
        explanation: "'Instantaneous' captures the extreme speed of the market recovery."
    },
    {
        id: "en-169",
        sentence: "The quiet library was filled with students.",
        targetWord: "quiet",
        targetWordIndex: 2,
        options: [
            { word: "low", score: 20, feedback: "Volume." },
            { word: "calm", score: 40, feedback: "Mood." },
            { word: "studious", score: 100, feedback: "Perfect! 'Studious' describes a quiet, serious atmosphere focused on learning." },
            { word: "dull", score: 10, feedback: "Boring." }
        ],
        bestAnswer: "studious",
        explanation: "'Studious' captures the intellectual quiet of a library better than 'quiet'."
    },
    {
        id: "en-170",
        sentence: "The old building was a landmark in the city.",
        targetWord: "old",
        targetWordIndex: 2,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "iconic", score: 100, feedback: "Perfect! 'Iconic' means very famous and well-known as a representative." },
            { word: "worn", score: 30, feedback: "Physical." }
        ],
        bestAnswer: "iconic",
        explanation: "'Iconic' explains why the old building is a 'landmark'."
    },
    {
        id: "en-171",
        sentence: "The small bird flew over the garden.",
        targetWord: "small",
        targetWordIndex: 2,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "delicate", score: 100, feedback: "Perfect! 'Delicate' means very fine in texture or structure." },
            { word: "little", score: 40, feedback: "Generic." }
        ],
        bestAnswer: "delicate",
        explanation: "'Delicate' describes the beauty and scale of a small bird beautifully."
    },
    {
        id: "en-172",
        sentence: "The loud roar echoed through the jungle.",
        targetWord: "loud",
        targetWordIndex: 2,
        options: [
            { word: "noisy", score: 30, feedback: "Irritating." },
            { word: "big", score: 40, feedback: "Size." },
            { word: "visceral", score: 100, feedback: "Perfect! 'Visceral' means felt in or as if in the internal organs of the body." },
            { word: "high", score: 20, feedback: "Pitch." }
        ],
        bestAnswer: "visceral",
        explanation: "'Visceral' captures the raw, powerful physical impact of the roar."
    },
    {
        id: "en-173",
        sentence: "The smart inventor won the Nobel Prize.",
        targetWord: "smart",
        targetWordIndex: 2,
        options: [
            { word: "bright", score: 40, feedback: "Informal." },
            { word: "slick", score: 20, feedback: "Deceptive." },
            { word: "revolutionary", score: 100, feedback: "Perfect! 'Revolutionary' means involving or causing a complete or dramatic change." },
            { word: "fast", score: 30, feedback: "Speed." }
        ],
        bestAnswer: "revolutionary",
        explanation: "'Revolutionary' justifies the win of a prestigious prize."
    },
    {
        id: "en-174",
        sentence: "The hard journey took them across the desert.",
        targetWord: "hard",
        targetWordIndex: 2,
        options: [
            { word: "stiff", score: 20, feedback: "Bending." },
            { word: "firm", score: 30, feedback: "Stability." },
            { word: "treacherous", score: 100, feedback: "Perfect! 'Treacherous' means guilty of or involving betrayal or deception (but also dangerous)." },
            { word: "rough", score: 40, feedback: "Texture." }
        ],
        bestAnswer: "treacherous",
        explanation: "'Treacherous' captures the extreme danger and difficulty of the desert journey."
    },
    {
        id: "en-175",
        sentence: "The happy children celebrated their victory.",
        targetWord: "happy",
        targetWordIndex: 2,
        options: [
            { word: "nice", score: 30, feedback: "Vague." },
            { word: "good", score: 20, feedback: "Indifferent." },
            { word: "exultant", score: 100, feedback: "Perfect! 'Exultant' means triumphantly happy." },
            { word: "fine", score: 40, feedback: "Weak." }
        ],
        bestAnswer: "exultant",
        explanation: "'Exultant' is the precise word for being happy *because of* a victory."
    },
    {
        id: "en-176",
        sentence: "The soft pillow was a relief after the hike.",
        targetWord: "soft",
        targetWordIndex: 3,
        options: [
            { word: "low", score: 30, feedback: "Level." },
            { word: "thin", score: 20, feedback: "Quality." },
            { word: "weak", score: 10, feedback: "Strength." },
            { word: "plush", score: 100, feedback: "Perfect! 'Plush' means richly luxurious and soft." }
        ],
        bestAnswer: "plush",
        explanation: "'Plush' conveys the high degree of luxury and comfort."
    },
    {
        id: "en-177",
        sentence: "The hot sand burned her feet.",
        targetWord: "hot",
        targetWordIndex: 3,
        options: [
            { word: "warm", score: 20, feedback: "Not enough to burn." },
            { word: "bright", score: 30, feedback: "Light." },
            { word: "baked", score: 40, feedback: "Redundant." },
            { word: "scorching", score: 100, feedback: "Perfect! 'Scorching' means very hot; causing a burning sensation." }
        ],
        bestAnswer: "scorching",
        explanation: "'Scorching' describes the heat that physically burns the skin."
    },
    {
        id: "en-178",
        sentence: "The cold winter air was refreshing.",
        targetWord: "cold",
        targetWordIndex: 3,
        options: [
            { word: "cool", score: 40, feedback: "Too mild." },
            { word: "chilly", score: 50, feedback: "Generic." },
            { word: "frozen", score: 10, feedback: "Solid." },
            { word: "bracing", score: 100, feedback: "Perfect! 'Bracing' means fresh and invigorating." }
        ],
        bestAnswer: "bracing",
        explanation: "'Bracing' explains why the cold air was 'refreshing'."
    },
    {
        id: "en-179",
        sentence: "The new technology will change the future.",
        targetWord: "new",
        targetWordIndex: 3,
        options: [
            { word: "fresh", score: 30, feedback: "New, but vague." },
            { word: "young", score: 10, feedback: "Living." },
            { word: "late", score: 20, feedback: "Time." },
            { word: "disruptive", score: 100, feedback: "Perfect! 'Disruptive' means innovative in a way that displaces old methods." }
        ],
        bestAnswer: "disruptive",
        explanation: "'Disruptive' is the precise term for technology that changes a whole industry."
    },
    {
        id: "en-180",
        sentence: "The many stars in the sky were beautiful.",
        targetWord: "many",
        targetWordIndex: 3,
        options: [
            { word: "lots", score: 30, feedback: "Informal." },
            { word: "much", score: 10, feedback: "Uncountable." },
            { word: "some", score: 40, feedback: "Few." },
            { word: "starlit", score: 100, feedback: "Perfect! 'Starlit' describes the scene created by many stars." }
        ],
        bestAnswer: "starlit",
        explanation: "'Starlit' elegantly captures the beauty of many stars in a single word."
    },
    {
        id: "en-181",
        sentence: "The bad experience taught him a lesson.",
        targetWord: "bad",
        targetWordIndex: 3,
        options: [
            { word: "nasty", score: 40, feedback: "Informal." },
            { word: "wrong", score: 20, feedback: "Moral." },
            { word: "hard", score: 30, feedback: "Difficulty." },
            { word: "formative", score: 100, feedback: "Perfect! 'Formative' means having a profound influence on character." }
        ],
        bestAnswer: "formative",
        explanation: "'Formative' explains why the bad experience 'taught him a lesson'."
    },
    {
        id: "en-182",
        sentence: "The small bird built a nest in the tree.",
        targetWord: "small",
        targetWordIndex: 3,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "minor", score: 30, feedback: "Importance." },
            { word: "songbird", score: 100, feedback: "Perfect! 'Songbird' is a precise noun that replaces a weak adjective-noun combo." }
        ],
        bestAnswer: "songbird",
        explanation: "'Songbird' adds specificity to the type of bird."
    },
    {
        id: "en-183",
        sentence: "The fast recovery of the athlete was impressive.",
        targetWord: "fast",
        targetWordIndex: 3,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." },
            { word: "meteoric", score: 100, feedback: "Perfect! 'Meteoric' means very rapid and successful." }
        ],
        bestAnswer: "meteoric",
        explanation: "'Meteoric' emphasizes the impressive, rapid nature of the recovery."
    },
    {
        id: "en-184",
        sentence: "The old legend is told every year at the festival.",
        targetWord: "old",
        targetWordIndex: 3,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "worn", score: 30, feedback: "Physical." },
            { word: "mythic", score: 100, feedback: "Perfect! 'Mythic' means of or relating to myths or legends." }
        ],
        bestAnswer: "mythic",
        explanation: "'Mythic' is the professional way to describe a legendary tradition."
    },
    {
        id: "en-185",
        sentence: "The nice gesture was appreciated by the host.",
        targetWord: "nice",
        targetWordIndex: 3,
        options: [
            { word: "good", score: 40, feedback: "Vague." },
            { word: "fine", score: 30, feedback: "Generic." },
            { word: "tidy", score: 10, feedback: "Appearance." },
            { word: "hospitable", score: 100, feedback: "Perfect! 'Hospitable' means friendly and welcoming to guests." }
        ],
        bestAnswer: "hospitable",
        explanation: "'Hospitable' is the precise term for a good gesture from a host."
    },
    {
        id: "en-186",
        sentence: "The clean energy goal is within reach.",
        targetWord: "clean",
        targetWordIndex: 3,
        options: [
            { word: "clear", score: 20, feedback: "Visibility." },
            { word: "blank", score: 10, feedback: "Empty." },
            { word: "fresh", score: 30, feedback: "New." },
            { word: "sustainable", score: 100, feedback: "Perfect! 'Sustainable' is the broad, precise term for clean goals." }
        ],
        bestAnswer: "sustainable",
        explanation: "'Sustainable' is the correct term for goals that preserve resources."
    },
    {
        id: "en-187",
        sentence: "The bright future of the space program is clear.",
        targetWord: "bright",
        targetWordIndex: 3,
        options: [
            { word: "shiny", score: 20, feedback: "Surface." },
            { word: "clear", score: 30, feedback: "Visibility." },
            { word: "lit", score: 10, feedback: "Nonsensical." },
            { word: "promising", score: 100, feedback: "Perfect! 'Promising' means showing signs of future success." }
        ],
        bestAnswer: "promising",
        explanation: "'Promising' is the standard way to describe a very positive future."
    },
    {
        id: "en-188",
        sentence: "The strong wall held against the storm.",
        targetWord: "strong",
        targetWordIndex: 3,
        options: [
            { word: "hard", score: 20, feedback: "Texture." },
            { word: "heavy", score: 30, feedback: "Mass." },
            { word: "stiff", score: 10, feedback: "Bending." },
            { word: "impervious", score: 100, feedback: "Perfect! 'Impervious' means not allowing fluid to pass through." }
        ],
        bestAnswer: "impervious",
        explanation: "'Impervious' explains *why* the wall held against the storm."
    },
    {
        id: "en-189",
        sentence: "The smart inventor created a new engine.",
        targetWord: "smart",
        targetWordIndex: 3,
        options: [
            { word: "bright", score: 20, feedback: "Informal." },
            { word: "slick", score: 10, feedback: "Deceptive." },
            { word: "fast", score: 30, feedback: "Speed." },
            { word: "pioneer", score: 100, feedback: "Perfect! 'Pioneer' describes a person who is among those who first develop." }
        ],
        bestAnswer: "pioneer",
        explanation: "'Pioneer' is the ideal noun to replace 'smart inventor'."
    },
    {
        id: "en-190",
        sentence: "The hard rock was impossible to move.",
        targetWord: "hard",
        targetWordIndex: 3,
        options: [
            { word: "stiff", score: 20, feedback: "Bending." },
            { word: "firm", score: 30, feedback: "Stability." },
            { word: "rough", score: 10, feedback: "Texture." },
            { word: "unyielding", score: 100, feedback: "Perfect! 'Unyielding' means not giving way to pressure." }
        ],
        bestAnswer: "unyielding",
        explanation: "'Unyielding' explains why the rock was impossible to move."
    },
    {
        id: "en-191",
        sentence: "The happy children played in the snow.",
        targetWord: "happy",
        targetWordIndex: 3,
        options: [
            { word: "nice", score: 20, feedback: "Vague." },
            { word: "good", score: 10, feedback: "Indifferent." },
            { word: "fine", score: 30, feedback: "Weak." },
            { word: "frolicking", score: 100, feedback: "Perfect! 'Frolicking' means play or move about in a cheerful and lively way." }
        ],
        bestAnswer: "frolicking",
        explanation: "'Frolicking' captures the specific joy of playing in the snow."
    },
    {
        id: "en-192",
        sentence: "The soft light of the moon shone on the lake.",
        targetWord: "soft",
        targetWordIndex: 3,
        options: [
            { word: "low", score: 10, feedback: "Level." },
            { word: "thin", score: 20, feedback: "Substance." },
            { word: "weak", score: 30, feedback: "Strength." },
            { word: "ethereal", score: 100, feedback: "Perfect! 'Ethereal' means extremely light and delicate in a way that seems too perfect for this world." }
        ],
        bestAnswer: "ethereal",
        explanation: "'Ethereal' captures the magical quality of moonlight."
    },
    {
        id: "en-193",
        sentence: "The hot fire burned bright in the fireplace.",
        targetWord: "hot",
        targetWordIndex: 3,
        options: [
            { word: "warm", score: 20, feedback: "Too mild." },
            { word: "bright", score: 30, feedback: "Light." },
            { word: "baked", score: 40, feedback: "Redundant." },
            { word: "incandescent", score: 100, feedback: "Perfect! 'Incandescent' describes something that emits light intensely." }
        ],
        bestAnswer: "incandescent",
        explanation: "'Incandescent' describes the intense glowing power of the fire."
    },
    {
        id: "en-194",
        sentence: "The cold winter night was very long.",
        targetWord: "cold",
        targetWordIndex: 3,
        options: [
            { word: "cool", score: 30, feedback: "Too mild." },
            { word: "chilly", score: 40, feedback: "Air." },
            { word: "biting", score: 20, feedback: "Wind." },
            { word: "arctic", score: 100, feedback: "Perfect! 'Arctic' means very cold, relating to the regions around the North Pole." }
        ],
        bestAnswer: "arctic",
        explanation: "'Arctic' conveys the extreme, biting cold of a deep winter night."
    },
    {
        id: "en-195",
        sentence: "The new technology revolutionized the industry.",
        targetWord: "new",
        targetWordIndex: 3,
        options: [
            { word: "fresh", score: 30, feedback: "New, but vague." },
            { word: "young", score: 10, feedback: "Living." },
            { word: "late", score: 20, feedback: "Time." },
            { word: "transformative", score: 100, feedback: "Perfect! 'Transformative' means causing a marked change in someone or something." }
        ],
        bestAnswer: "transformative",
        explanation: "'Transformative' justifies why it 'revolutionized' the industry."
    },
    {
        id: "en-196",
        sentence: "The many stars in the sky were uncountable.",
        targetWord: "many",
        targetWordIndex: 3,
        options: [
            { word: "lots", score: 30, feedback: "Informal." },
            { word: "much", score: 10, feedback: "Uncountable." },
            { word: "some", score: 40, feedback: "Few." },
            { word: "myriad", score: 100, feedback: "Perfect! 'Myriad' means a countless or extremely great number." }
        ],
        bestAnswer: "myriad",
        explanation: "'Myriad' is the most sophisticated way to say 'many'."
    },
    {
        id: "en-197",
        sentence: "The bad experience left her feeling sad.",
        targetWord: "bad",
        targetWordIndex: 3,
        options: [
            { word: "nasty", score: 30, feedback: "Informal." },
            { word: "wrong", score: 20, feedback: "Moral." },
            { word: "hard", score: 40, feedback: "Difficulty." },
            { word: "melancholy", score: 100, feedback: "Perfect! 'Melancholy' means a feeling of pensive sadness." }
        ],
        bestAnswer: "melancholy",
        explanation: "'Melancholy' describes the specific type of sadness resulting from the experience."
    },
    {
        id: "en-198",
        sentence: "The small room was filled with furniture.",
        targetWord: "small",
        targetWordIndex: 3,
        options: [
            { word: "short", score: 20, feedback: "Height." },
            { word: "brief", score: 10, feedback: "Time." },
            { word: "minor", score: 30, feedback: "Importance." },
            { word: "claustrophobic", score: 100, feedback: "Perfect! 'Claustrophobic' describes a small space that feels cramped." }
        ],
        bestAnswer: "claustrophobic",
        explanation: "'Claustrophobic' explains why the furniture made the room feel so small."
    },
    {
        id: "en-199",
        sentence: "The fast track to success is hard work and dedication.",
        targetWord: "fast",
        targetWordIndex: 3,
        options: [
            { word: "quick", score: 40, feedback: "Synonym." },
            { word: "soon", score: 10, feedback: "Time." },
            { word: "ready", score: 20, feedback: "State." },
            { word: "expedited", score: 100, feedback: "Perfect! 'Expedited' means happened or done more quickly." }
        ],
        bestAnswer: "expedited",
        explanation: "'Expedited' is the professional term for a fast-track process."
    },
    {
        id: "en-200",
        sentence: "The old painting was a family heirloom.",
        targetWord: "old",
        targetWordIndex: 3,
        options: [
            { word: "used", score: 10, feedback: "Nonsensical." },
            { word: "past", score: 20, feedback: "Time." },
            { word: "worn", score: 30, feedback: "Physical." },
            { word: "ancestral", score: 100, feedback: "Perfect! 'Ancestral' means relating to or inherited from an ancestor." }
        ],
        bestAnswer: "ancestral",
        explanation: "'Ancestral' honors the history of the family heirloom."
    }
];

