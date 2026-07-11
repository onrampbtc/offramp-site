"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
  Ask Offramp — Learn skill UI (Phase B).
  "Or just ask" below the valuation flow: one question in, one grounded
  answer out, with source links. Cache-first on the server; suggested
  chips come from the top cached questions (GET /api/ask/chat).
*/

interface Source {
  title: string;
  url: string;
}

interface ChatResponse {
  answer?: string;
  sources?: Source[];
  cached?: boolean;
  error?: string;
}

interface Exchange {
  question: string;
  answer: string;
  sources: Source[];
}

const FALLBACK_CHIPS = [
  "How much is gold worth?",
  "Where to sell gold?",
  "How much do pawn shops pay for gold?",
  "Is selling gold taxable?",
];

export function AskChat({ brand = "offramp" }: { brand?: string }) {
  const [question, setQuestion] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [chips, setChips] = useState<string[]>(FALLBACK_CHIPS);
  const inFlight = useRef(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/ask/chat")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { questions?: string[] } | null) => {
        if (alive && d?.questions && d.questions.length >= 4) setChips(d.questions.slice(0, 4));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const ask = useCallback(
    async (q: string) => {
      const trimmed = q.trim();
      if (trimmed.length < 3 || inFlight.current) return;
      inFlight.current = true;
      setPending(true);
      setError(null);
      try {
        const res = await fetch("/api/ask/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: trimmed.slice(0, 400), brand }),
        });
        const data = (await res.json()) as ChatResponse;
        if (res.ok && data.answer) {
          setExchanges((prev) => [
            { question: trimmed, answer: data.answer as string, sources: data.sources ?? [] },
            ...prev,
          ]);
          setQuestion("");
        } else {
          setError(data.error ?? "Something went wrong — try again.");
        }
      } catch {
        setError("Something went wrong — try again.");
      } finally {
        inFlight.current = false;
        setPending(false);
      }
    },
    [brand]
  );

  return (
    <div className="mt-8 rounded-xl border border-line bg-raise p-6">
      <p className="label-maison text-gold-400">Or just ask</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
        Questions before you value anything?
      </h2>

      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          ask(question);
        }}
      >
        <input
          type="text"
          value={question}
          maxLength={400}
          placeholder="Is selling gold taxable? What does 585 mean?"
          onChange={(e) => setQuestion(e.target.value)}
          aria-label="Ask a question about selling gold"
          className="w-full rounded-lg border border-line-2 bg-white px-4 py-3 font-body text-sm text-ink focus:border-ink focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending || question.trim().length < 3}
          className="shrink-0 rounded-full bg-ink px-7 py-3 font-body text-sm font-semibold text-paper hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {pending ? "Thinking…" : "Ask"}
        </button>
      </form>

      {/* Suggested questions — the top cached answers, served at $0 */}
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            disabled={pending}
            onClick={() => {
              setQuestion(c);
              ask(c);
            }}
            className="rounded-full border border-line-2 px-4 py-2 font-body text-xs text-ink-2 hover:border-ink hover:text-ink disabled:opacity-40"
          >
            {c}
          </button>
        ))}
      </div>

      {error && <p className="mt-4 font-body text-sm text-coral">{error}</p>}

      {exchanges.map((ex, i) => (
        <div key={`${ex.question}-${i}`} className="mt-5 border-t border-line pt-4">
          <p className="font-body text-sm font-semibold text-ink">{ex.question}</p>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{ex.answer}</p>
          {ex.sources.length > 0 && (
            <p className="mt-2 font-body text-xs text-ink-3">
              From:{" "}
              {ex.sources.map((s, j) => (
                <span key={s.url}>
                  {j > 0 && " · "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-ink"
                  >
                    {s.title}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
      ))}

      <p className="mt-4 font-body text-xs text-ink-3">
        Answers come from our published guides — the free consult is a person.
      </p>
    </div>
  );
}
