/**
 * RPWP Healthcare Classic Controller
 * Version: 1.0.0
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!window.RPWP_DATA) return;

  // Render Product Catalog Grid
  const prodGrid = document.getElementById("product-grid");
  if (prodGrid) {
    prodGrid.innerHTML = RPWP_DATA.products.map(p => `
      <div class="product-card">
        <div class="product-img-box">
          <img src="${p.img}" alt="${p.name}" class="product-img" onerror="this.src='${RPWP_DATA.logos.rpwp}'">
        </div>
        <div class="product-body">
          <span class="product-badge">${p.badge}</span>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.shortDesc}</p>
          <div class="product-footer">
            <div class="product-price">RM ${p.priceMYR.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
            <a href="https://wa.me/60196808697/?text=Salam%20RPWP%20Healthcare.%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}" target="_blank" class="btn btn-sm btn-primary">Inquire Now</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Advisory Board Grid
  const advGrid = document.getElementById("advisory-grid");
  if (advGrid) {
    advGrid.innerHTML = RPWP_DATA.advisoryBoard.map(member => `
      <div class="advisory-card">
        <img src="${member.img}" alt="${member.name}" class="advisory-img" onerror="this.src='${RPWP_DATA.logos.rpwp}'">
        <h4 class="advisory-name">${member.name}</h4>
        <div class="advisory-role">${member.role}</div>
        <div class="advisory-qual">${member.qualifications}</div>
        <p class="advisory-bio">${member.bio}</p>
      </div>
    `).join('');
  }

  // Render Hearing Aid Brands
  const brandGrid = document.getElementById("brand-grid");
  if (brandGrid) {
    brandGrid.innerHTML = RPWP_DATA.brands.map(b => `
      <a href="${b.link}" target="_blank" class="brand-card">
        <img src="${b.logo}" alt="${b.name}" class="brand-img" onerror="this.alt='${b.name}'">
      </a>
    `).join('');
  }
});
