import { APP_NAME } from "@askwell/shared/constants";

(function initAskwellWidget() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const currentScript =
    (document.currentScript as HTMLScriptElement) ||
    document.querySelector("script[data-key]");

  const publicKey = currentScript?.getAttribute("data-key");
  if (!publicKey || !publicKey.startsWith("pk_")) {
    console.warn(`[${APP_NAME}] Missing or invalid data-key attribute.`);
    return;
  }

  // Shadow DOM container to isolate styles
  const container = document.createElement("div");
  container.id = "askwell-widget-root";
  const shadow = container.attachShadow({ mode: "open" });

  const button = document.createElement("button");
  button.textContent = "Chat";
  button.setAttribute("aria-label", "Open chat");
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2147483647;
    padding: 12px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 9999px;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, opacity 0.2s ease;
  `;

  button.addEventListener("click", () => {
    // Phase 2 will wire up the iframe /embed panel and postMessage
    console.log(`[${APP_NAME}] Opening widget for key:`, publicKey);
  });

  shadow.appendChild(button);
  document.body.appendChild(container);
})();
