// src/utils/questionSelector.ts
/**
 * Weighted random selector for exercise questions.
 * Prioritizes unseen questions and those not seen recently.
 * Uses a simple decay model based on attempt timestamps.
 */
import { ExerciseMaster } from "../data/types";

interface QuestionRecord {
    id: string;
    lastSeen?: number; // Unix timestamp of last attempt
    attempts: number; // total attempts
}

/**
 * Build a map of question records from attempt history.
 * `history` is an array of objects {questionId: string, timestamp: number}
 */
export function buildQuestionRecords(
    questionIds: string[],
    history: { questionId: string; timestamp: number }[]
): Record<string, QuestionRecord> {
    const records: Record<string, QuestionRecord> = {};
    questionIds.forEach((id) => {
        records[id] = { id, attempts: 0 };
    });
    history.forEach((h) => {
        if (records[h.questionId]) {
            records[h.questionId].attempts += 1;
            records[h.questionId].lastSeen = h.timestamp;
        }
    });
    return records;
}

/**
 * Compute weight for a question. Unseen => high weight (100).
 * Seen => weight decays with attempts and recency.
 */
function computeWeight(record: QuestionRecord, now: number): number {
    if (!record.lastSeen) return 100; // never seen
    const age = now - record.lastSeen; // ms since last seen
    // Decay: recent seen gets lower weight, older gets higher
    const recencyFactor = Math.max(1, Math.min(50, Math.floor(age / (1000 * 60 * 60)))); // hours
    const attemptFactor = Math.max(1, 20 - record.attempts); // fewer attempts => higher
    return recencyFactor * attemptFactor;
}

/**
 * Select a question ID based on weighted random.
 */
export function selectQuestion(
    records: Record<string, QuestionRecord>
): string {
    const now = Date.now();
    const entries = Object.values(records);
    const weights = entries.map((r) => computeWeight(r, now));
    const total = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * total;
    for (let i = 0; i < entries.length; i++) {
        if (rand < weights[i]) return entries[i].id;
        rand -= weights[i];
    }
    // fallback
    return entries[0].id;
}
