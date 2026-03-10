document.addEventListener("DOMContentLoaded", () => {
  const triggers = Array.from(document.querySelectorAll(".pm-image-trigger[data-lightbox-src]"));
  if (!triggers.length) return;

  const overlay = document.createElement("div");
  overlay.className = "pm-lightbox";
  overlay.setAttribute("hidden", "");
  overlay.innerHTML = `
    <div class="pm-lightbox-backdrop" data-lightbox-close="true"></div>
    <div class="pm-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
      <button type="button" class="pm-lightbox-close" aria-label="Close image preview">&times;</button>
      <img class="pm-lightbox-image" alt="">
    </div>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector(".pm-lightbox-image");
  const closeButton = overlay.querySelector(".pm-lightbox-close");

  const closeLightbox = () => {
    overlay.setAttribute("hidden", "");
    document.body.classList.remove("pm-lightbox-open");
    image.removeAttribute("src");
    image.removeAttribute("alt");
  };

  const openLightbox = (src, alt) => {
    image.src = src;
    image.alt = alt || "";
    overlay.removeAttribute("hidden");
    document.body.classList.add("pm-lightbox-open");
    closeButton.focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt);
    });
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.dataset.lightboxClose === "true") {
      closeLightbox();
    }
  });

  closeButton.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hasAttribute("hidden")) {
      closeLightbox();
    }
  });
});
