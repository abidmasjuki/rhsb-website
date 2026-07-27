/**
 * RPWP Healthcare Controller
 * Version: 1.0.0
 * Renders all dynamic sections from original site assets & RPWP_DATA
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!window.RPWP_DATA) return;

  // Render 3 Steps For Better Hearing
  const stepsGrid = document.getElementById("steps-grid");
  if (stepsGrid) {
    stepsGrid.innerHTML = RPWP_DATA.betterHearingSteps.map(step => `
      <div class="feature-card text-center" style="padding: 30px;">
        <div style="width: 50px; height: 50px; background: #3483C6; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.3rem; margin: 0 auto 16px auto;">${step.step}</div>
        <h3 style="color: #2B6CB0; font-size: 1.2rem; margin-bottom: 8px;">${step.title}</h3>
        <p class="text-secondary" style="font-size: 0.9rem;">${step.desc}</p>
      </div>
    `).join('');
  }

  // Render Types of Hearing Loss Grid
  const lossGrid = document.getElementById("hearing-loss-grid");
  if (lossGrid) {
    lossGrid.innerHTML = RPWP_DATA.hearingLossTypes.map(type => `
      <div class="product-card">
        <div class="product-img-box" style="height: 180px; padding: 0;">
          <img src="${type.img}" alt="${type.level}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="product-body" style="padding: 16px;">
          <span class="product-badge">${type.decibels}</span>
          <h4 class="product-name" style="font-size: 1.05rem;">${type.level}</h4>
          <p class="product-desc" style="font-size: 0.85rem;">${type.desc}</p>
          <div style="margin-top: 12px;">
            <a href="https://wa.me/60196808697/?text=Salam%20RPWP%20Healthcare.%20I%20want%20to%20test%20my%20hearing%20for%20${encodeURIComponent(type.level)}" target="_blank" class="btn btn-sm btn-outline" style="width: 100%;">Schedule Assessment</a>
          </div>
        </div>
      </div>
    `).join('');
  }

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
