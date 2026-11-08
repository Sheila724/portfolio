/**
 * Pequeno script inline de melhoria progressiva. O site funciona sem ele
 * (popovers são nativos); aqui só entram conveniências:
 *  - abrir o projeto direto pelo link (#noc-horizon) e manter o hash em sincronia
 *  - fechar o menu mobile ao escolher uma seção
 *  - copiar o e-mail
 *  - registrar o service worker (PWA)
 */
export const enhanceScript = `(() => {
  const setHash = (h) => { try { history.replaceState(null, "", h ? "#" + h : location.pathname + location.search); } catch (_) {} };
  const sheets = document.querySelectorAll(".sheet[popover]");
  sheets.forEach((el) => {
    el.addEventListener("toggle", (e) => {
      if (e.newState === "open") setHash(el.id);
      else if (location.hash === "#" + el.id) setHash("");
    });
  });
  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (el && el.classList.contains("sheet") && el.showPopover && !el.matches(":popover-open")) el.showPopover();
  };
  openFromHash();
  addEventListener("hashchange", openFromHash);

  document.querySelectorAll("[data-close-menu]").forEach((a) => {
    a.addEventListener("click", () => { const m = document.getElementById("menu"); if (m && m.hidePopover) m.hidePopover(); });
  });

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const label = btn.querySelector("[data-copy-label]");
      const original = label ? label.textContent : "";
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        if (label) { label.textContent = btn.dataset.copiedLabel; setTimeout(() => { label.textContent = original; }, 1800); }
      } catch (_) {
        const r = document.createRange(); if (label) { r.selectNodeContents(label); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      }
    });
  });

  if ("serviceWorker" in navigator && location.protocol === "https:" && !document.documentElement.hasAttribute("data-no-sw")) {
    addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
  }
})();`;
