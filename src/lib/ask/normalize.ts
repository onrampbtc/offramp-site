// Question normalization for the Learn skill: the cache key and the
// question_log flywheel key. Lowercase, strip punctuation, drop a light
// stopword list (question words like where/when/how stay — they carry
// intent: "where to sell gold" ≠ "when to sell gold").

const STOPWORDS = new Set([
  "a", "an", "the", "of", "to", "for", "in", "on", "at", "and", "or",
  "is", "are", "am", "be", "was", "were", "do", "does", "did",
  "can", "could", "should", "would", "will", "i", "my", "your", "you", "it",
]);

export function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w))
    .join(" ")
    .slice(0, 200);
}
