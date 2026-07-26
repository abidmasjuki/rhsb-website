/**
 * RPWP Healthcare Clean Landing Page Controller
 * Version: 1.0.0
 */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");
  if (!grid || !window.RPWP_DATA) return;

  grid.innerHTML = RPWP_DATA.products.map(p => `
    <div class="product-card">
      <div class="product-badge-wrap">
        <span class="product-badge">${p.badge}</span>
      </div>
      <div class="product-card-body">
        <span class="product-category-label">${p.categoryLabel}</span>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-short-desc">${p.shortDesc}</p>
        <div class="product-specs-chips mt-2">
          ${p.specs.slice(0, 2).map(s => `<span class="spec-chip">✓ ${s}</span>`).join('')}
        </div>
      </div>
      <div class="product-card-footer">
        <div class="product-price">
          <span class="price-val">RM ${p.priceMYR.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
        </div>
        <a href="https://wa.me/60196808697/?text=Salam%20RPWP%20Healthcare.%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}" target="_blank" class="btn btn-sm btn-primary">Inquire</a>
      </div>
    </div>
  `).join('');
});
