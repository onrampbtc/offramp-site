import { ImageResponse } from "next/og";

// Apple touch icon — the assay seal on bone, matching src/app/icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6F2E9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 134,
            height: 134,
            borderRadius: 67,
            border: "7px solid #A98D4B",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 104,
              height: 104,
              borderRadius: 52,
              border: "2.5px solid rgba(169, 141, 75, 0.55)",
              color: "#232019",
              fontSize: 74,
              fontWeight: 600,
              fontFamily: "Georgia, 'Times New Roman', serif",
              paddingBottom: 8,
            }}
          >
            O
          </div>
        </div>
      </div>
    ),
    size
  );
}
