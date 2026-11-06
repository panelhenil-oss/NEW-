/* ============================================================
   EDIT THIS LINE ONLY
   ------------------------------------------------------------
   Replace the text between the quotes below with your real URL.
   Keep the quotes and the semicolon exactly as they are.

   Example:
   const NEW_LINK = "https://example.com/latest-script";
   ============================================================ */
const NEW_LINK = "https://link-target.net/1239053/018ycTlqQkND";
/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   ============================================================ */

function initScriptUpdatePage() {
  const btn = document.getElementById("openLinkBtn");
  if (!btn) return;

  btn.addEventListener("click", async function () {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(NEW_LINK);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = NEW_LINK;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
    } catch (error) {
      // Clipboard access can be restricted by the browser.
      console.error("Unable to copy the link:", error);
    }
  });
}

// Run immediately if the page is already ready, otherwise wait for it.
// This makes the script work correctly no matter how or when it's loaded.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScriptUpdatePage);
} else {
  initScriptUpdatePage();
}
