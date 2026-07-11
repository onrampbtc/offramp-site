import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Shared Open Graph card for offrampgold.com — Verdant register.
 * Deep hunter ground, champagne rules, bone type, Source Serif 4.
 * Used by the route-level opengraph-image files and /api/og.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const HUNTER_DEEP = "#0E2015";
const BONE = "#EDE8D8";
const BONE_DIM = "rgba(237, 232, 216, 0.62)";
const CHAMPAGNE = "#D9BC82";
const CHAMPAGNE_DEEP = "#A98D4B";
const RULE = "rgba(217, 188, 130, 0.34)";

async function loadFonts() {
  const dir = path.join(process.cwd(), "src/assets/fonts");
  const [regular, semibold] = await Promise.all([
    readFile(path.join(dir, "SourceSerif4-Regular.ttf")),
    readFile(path.join(dir, "SourceSerif4-SemiBold.ttf")),
  ]);
  return [
    { name: "Source Serif 4", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Source Serif 4", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

export async function renderOgCard({
  kicker,
  headline,
}: {
  kicker?: string;
  headline: string;
}) {
  const fonts = await loadFonts();
  const long = headline.length > 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: HUNTER_DEEP,
          padding: "64px 76px 56px",
          fontFamily: '"Source Serif 4"',
        }}
      >
        {/* Wordmark row */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 58,
              height: 58,
              borderRadius: 29,
              border: `2px solid ${CHAMPAGNE_DEEP}`,
              color: BONE,
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            O
          </div>
          <div style={{ display: "flex", color: BONE, fontSize: 40, fontWeight: 600, letterSpacing: "0.01em" }}>
            Offramp
          </div>
          <div style={{ display: "flex", flex: 1, height: 1, backgroundColor: RULE }} />
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 980 }}>
          {kicker ? (
            <div
              style={{
                display: "flex",
                color: CHAMPAGNE,
                fontSize: 24,
                fontWeight: 400,
                letterSpacing: "0.32em",
              }}
            >
              {kicker.toUpperCase()}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              color: BONE,
              fontSize: long ? 58 : 68,
              fontWeight: 600,
              lineHeight: 1.16,
              letterSpacing: "-0.01em",
            }}
          >
            {headline}
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", width: 44, height: 1, backgroundColor: CHAMPAGNE_DEEP }} />
          <div
            style={{
              display: "flex",
              color: BONE_DIM,
              fontSize: 21,
              letterSpacing: "0.26em",
            }}
          >
            OFFRAMPGOLD.COM
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
