/*!
 * Ask Offramp — embeddable valuation widget (Phase A).
 * One line:
 *   <script src="https://offrampgold.com/embed/ask.js"
 *           data-cta="What's your gold worth?"
 *           data-brand="goldbuyer"
 *           data-mode="launcher"        (launcher | inline)
 *           data-accent="#B45309"
 *           async></script>
 * Zero dependencies. All styles injected + scoped. The modal iframes
 * offrampgold.com/ask?embed=1&brand={data-brand}; the page inside posts
 * {type:'ask-offramp:close'} to close.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  if (!script) return;

  var CTA = script.getAttribute("data-cta") || "What's your gold worth?";
  var BRAND = script.getAttribute("data-brand") || "offramp";
  var MODE = script.getAttribute("data-mode") || "launcher"; // launcher | inline | manual
  var ACCENT = script.getAttribute("data-accent") || "#B45309";

  // Local dev: serve the flow from the same origin so the demo works
  // without touching production.
  var host = window.location.hostname;
  var ORIGIN =
    host === "localhost" || host === "127.0.0.1"
      ? window.location.origin
      : "https://offrampgold.com";
  var ASK_URL = ORIGIN + "/ask?embed=1&brand=" + encodeURIComponent(BRAND);

  var Z = 2147483000;
  var PREFIX = "askofframp";
  var reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── styles (scoped by prefix, injected once) ── */
  if (!document.getElementById(PREFIX + "-styles")) {
    var css = [
      "." + PREFIX + "-btn{",
      "  box-sizing:border-box;display:inline-flex;align-items:center;gap:8px;",
      "  padding:14px 22px;border:none;border-radius:12px;cursor:pointer;",
      "  color:#fff;",
      "  font:600 15px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;",
      "  letter-spacing:.01em;box-shadow:0 2px 12px rgba(0,0,0,.18);",
      reducedMotion ? "" : "  transition:transform .15s ease,box-shadow .15s ease;",
      "}",
      "." + PREFIX + "-btn:hover{box-shadow:0 4px 16px rgba(0,0,0,.24);" +
        (reducedMotion ? "" : "transform:translateY(-1px);") + "}",
      "." + PREFIX + "-btn:focus-visible{outline:2px solid #fff;outline-offset:2px;}",
      "." + PREFIX + "-launcher{position:fixed;right:24px;bottom:24px;z-index:" + Z + ";}",
      "." + PREFIX + "-scrim{",
      "  position:fixed;inset:0;background:rgba(14,32,21,.62);z-index:" + (Z + 1) + ";",
      reducedMotion ? "" : "  animation:" + PREFIX + "-fade .18s ease-out;",
      "}",
      "." + PREFIX + "-modal{",
      "  position:fixed;inset:0;z-index:" + (Z + 2) + ";display:flex;",
      "  align-items:center;justify-content:center;padding:16px;box-sizing:border-box;",
      "}",
      "." + PREFIX + "-frame-wrap{",
      "  position:relative;width:100%;max-width:560px;height:min(720px,calc(100vh - 48px));",
      "  background:#fff;border-radius:16px;overflow:hidden;",
      "  box-shadow:0 12px 48px rgba(0,0,0,.35);",
      reducedMotion ? "" : "  animation:" + PREFIX + "-rise .2s ease-out;",
      "}",
      "." + PREFIX + "-iframe{width:100%;height:100%;border:0;display:block;}",
      "@keyframes " + PREFIX + "-fade{from{opacity:0}to{opacity:1}}",
      "@keyframes " + PREFIX + "-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}",
    ].join("\n");
    var styleEl = document.createElement("style");
    styleEl.id = PREFIX + "-styles";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }

  /* ── modal ── */
  var openState = { scrim: null, modal: null, restoreFocus: null, keyHandler: null };

  function closeModal() {
    if (openState.scrim) openState.scrim.remove();
    if (openState.modal) openState.modal.remove();
    if (openState.keyHandler) document.removeEventListener("keydown", openState.keyHandler, true);
    if (openState.restoreFocus && openState.restoreFocus.focus) openState.restoreFocus.focus();
    openState = { scrim: null, modal: null, restoreFocus: null, keyHandler: null };
  }

  function openModal() {
    if (openState.modal) return;

    var scrim = document.createElement("div");
    scrim.className = PREFIX + "-scrim";
    scrim.addEventListener("click", closeModal);

    var modal = document.createElement("div");
    modal.className = PREFIX + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Ask Offramp — what is your gold worth?");
    // clicks on the modal padding (outside the frame) also close
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

    var wrap = document.createElement("div");
    wrap.className = PREFIX + "-frame-wrap";

    var iframe = document.createElement("iframe");
    iframe.className = PREFIX + "-iframe";
    iframe.src = ASK_URL;
    iframe.title = "Ask Offramp gold valuation";
    iframe.setAttribute("allow", "camera");

    wrap.appendChild(iframe);
    modal.appendChild(wrap);
    document.body.appendChild(scrim);
    document.body.appendChild(modal);

    // Focus trap: keep Tab inside the dialog (the iframe manages its own
    // internal order; the frame is the single tab stop out here).
    var keyHandler = function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault();
        iframe.focus();
      }
    };
    document.addEventListener("keydown", keyHandler, true);

    openState = {
      scrim: scrim,
      modal: modal,
      restoreFocus: document.activeElement,
      keyHandler: keyHandler,
    };
    iframe.addEventListener("load", function () {
      iframe.focus();
    });
  }

  // The /ask embed page posts this when its close control is used.
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGIN) return;
    if (e.data && e.data.type === "ask-offramp:close") closeModal();
  });

  /* ── trigger button ── */
  function makeButton() {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = PREFIX + "-btn";
    btn.style.background = ACCENT; // per-instance accent (styles are shared)
    btn.textContent = CTA;
    btn.addEventListener("click", openModal);
    return btn;
  }

  function mount() {
    if (MODE === "manual") {
      // no button — the host page calls window.AskOfframp.open()
    } else if (MODE === "launcher") {
      var holder = document.createElement("div");
      holder.className = PREFIX + "-launcher";
      holder.appendChild(makeButton());
      document.body.appendChild(holder);
    } else {
      // inline: render where the script tag sits
      script.parentNode.insertBefore(makeButton(), script);
    }
  }

  // Public API for host pages (e.g. the flagship hero CTA).
  window.AskOfframp = window.AskOfframp || {};
  window.AskOfframp.open = openModal;

  if (document.body) {
    mount();
  } else {
    document.addEventListener("DOMContentLoaded", mount);
  }
})();
