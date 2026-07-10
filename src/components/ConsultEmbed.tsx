"use client";

import { useEffect, useRef } from "react";

/**
 * HubSpot Meetings booking embed (Michael's calendar), Estate Paper framed.
 * Free, no-requirement gold consults. Script injected client-side once.
 */
export function ConsultEmbed() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const s = document.createElement("script");
    s.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-raise">
      <div
        className="meetings-iframe-container min-h-[640px]"
        data-src="https://meetings-na2.hubspot.com/michael-tanguma?embed=true"
      />
      <p className="border-t border-line px-5 py-3 text-center font-body text-xs text-ink-3">
        Free consult · no fee, no requirement to sell · powered by Offramp Gold
      </p>
    </div>
  );
}
