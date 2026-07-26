/**
 * Clinical Hearing Self-Assessment Wizard
 * Version: 1.0.0
 */

class HearingWizard {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 5;
    this.answers = {
      challenge: "",
      ear: "",
      environment: "",
      preference: ""
    };
  }

  init() {
    this.render();
  }

  open() {
    this.currentStep = 1;
    this.answers = { challenge: "", ear: "", environment: "", preference: "" };
    const modal = document.getElementById("hearing-wizard-modal");
    if (modal) {
      modal.classList.add("active");
      this.render();
    }
  }

  close() {
    const modal = document.getElementById("hearing-wizard-modal");
    if (modal) {
      modal.classList.remove("active");
    }
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.render();
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.render();
    }
  }

  render() {
    const body = document.getElementById("hearing-wizard-body");
    if (!body) return;

    let contentHTML = "";

    if (this.currentStep === 1) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 1 of 5: Main Challenge</div>
          <h3 class="wizard-title">What is your main hearing difficulty?</h3>
          <p class="wizard-subtitle">Select the option that best describes your everyday experience.</p>
          <div class="wizard-options-grid">
            <button class="wizard-opt-btn ${this.answers.challenge === 'crowds' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('challenge', 'crowds')">
              <span class="opt-icon">🗣️</span>
              <span class="opt-text">Understanding speech in noisy restaurants & group gatherings</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.challenge === 'tv' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('challenge', 'tv')">
              <span class="opt-icon">📺</span>
              <span class="opt-text">Needing higher TV/radio volume than family members</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.challenge === 'tinnitus' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('challenge', 'tinnitus')">
              <span class="opt-icon">🔔</span>
              <span class="opt-text">Constant ringing, buzzing, or roaring in ears (Tinnitus)</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.challenge === 'repeat' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('challenge', 'repeat')">
              <span class="opt-icon">👂</span>
              <span class="opt-text">Frequently asking people to repeat themselves or mumble</span>
            </button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 2) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 2 of 5: Affected Side</div>
          <h3 class="wizard-title">Which ear is affected?</h3>
          <p class="wizard-subtitle">Help us understand the bilateral or unilateral nature of your hearing.</p>
          <div class="wizard-options-grid">
            <button class="wizard-opt-btn ${this.answers.ear === 'both' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('ear', 'both')">
              <span class="opt-icon">🎧</span>
              <span class="opt-text">Both Ears (Bilateral)</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.ear === 'right' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('ear', 'right')">
              <span class="opt-icon">👉</span>
              <span class="opt-text">Right Ear Only</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.ear === 'left' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('ear', 'left')">
              <span class="opt-icon">👈</span>
              <span class="opt-text">Left Ear Only</span>
            </button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 3) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 3 of 5: Environment</div>
          <h3 class="wizard-title">What is your primary daily listening environment?</h3>
          <p class="wizard-subtitle">This helps us determine necessary noise suppression levels.</p>
          <div class="wizard-options-grid">
            <button class="wizard-opt-btn ${this.answers.environment === 'quiet' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('environment', 'quiet')">
              <span class="opt-icon">🏡</span>
              <span class="opt-text">Quiet Home & Small Family Conversations</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.environment === 'active' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('environment', 'active')">
              <span class="opt-icon">🏢</span>
              <span class="opt-text">Active Workplaces, Meetings & Restaurants</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.environment === 'noisy' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('environment', 'noisy')">
              <span class="opt-icon">🚜</span>
              <span class="opt-text">Noisy Outdoor, Machinery, or Industrial Workplaces</span>
            </button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 4) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 4 of 5: Tech Features</div>
          <h3 class="wizard-title">Which feature matters most to you?</h3>
          <p class="wizard-subtitle">Select your top technology preference for a modern hearing solution.</p>
          <div class="wizard-options-grid">
            <button class="wizard-opt-btn ${this.answers.preference === 'rechargeable' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('preference', 'rechargeable')">
              <span class="opt-icon">🔋</span>
              <span class="opt-text">Lithium-Ion Rechargeable Battery (No disposable batteries)</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.preference === 'bluetooth' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('preference', 'bluetooth')">
              <span class="opt-icon">📱</span>
              <span class="opt-text">Direct Smartphone Bluetooth Music & Hands-free Calls</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.preference === 'discreet' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('preference', 'discreet')">
              <span class="opt-icon">✨</span>
              <span class="opt-text">Maximum Discretion & Sleek Ergonomic Fit</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.preference === 'value' ? 'selected' : ''}" onclick="window.hearingWizard.selectAns('preference', 'value')">
              <span class="opt-icon">💎</span>
              <span class="opt-text">Reliable Performance at Best Value Price Point</span>
            </button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 5) {
      let recommendedProduct = RPWP_DATA.products.find(p => p.id === "prod-resound-linx");
      if (this.answers.preference === 'bluetooth') recommendedProduct = RPWP_DATA.products.find(p => p.id === "prod-phonak-audeo");
      if (this.answers.environment === 'noisy' || this.answers.preference === 'discreet') recommendedProduct = RPWP_DATA.products.find(p => p.id === "prod-oticon-real");
      if (this.answers.preference === 'value') recommendedProduct = RPWP_DATA.products.find(p => p.id === "prod-interton-move");

      contentHTML = `
        <div class="wizard-step-content result-step">
          <div class="wizard-step-badge">Step 5 of 5: Personalized Recommendation</div>
          <div class="result-card success">
            <div class="result-icon">👂</div>
            <h3>Recommended Solution: ${recommendedProduct.name}</h3>
            <p>${recommendedProduct.shortDesc}</p>
            <div class="rec-product-box">
              <div class="rec-badge">${recommendedProduct.badge}</div>
              <div class="rec-price">RM ${recommendedProduct.priceMYR.toLocaleString()}</div>
              <ul class="rec-specs-list">
                ${recommendedProduct.specs.map(s => `<li>✓ ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="action-buttons">
              <button class="btn btn-primary" onclick="window.hearingWizard.close(); window.bookingModal.open('hearing', 'Diagnostic Hearing Assessment');">Book Free Hearing Assessment at INNOHEAR Kajang</button>
              <button class="btn btn-outline" onclick="window.cartManager.addItem('${recommendedProduct.id}')">Add Device to Wishlist/Cart</button>
            </div>
          </div>
        </div>
      `;
    }

    let controlsHTML = `
      <div class="wizard-footer-controls">
        ${this.currentStep > 1 && this.currentStep < 5 ? `<button class="btn btn-secondary" onclick="window.hearingWizard.prevStep()">Back</button>` : '<span></span>'}
        ${this.currentStep < 5 ? `<button class="btn btn-primary" ${this.isStepValid() ? '' : 'disabled'} onclick="window.hearingWizard.nextStep()">Continue</button>` : ''}
      </div>
    `;

    body.innerHTML = contentHTML + controlsHTML;
  }

  selectAns(key, val) {
    this.answers[key] = val;
    this.render();
  }

  isStepValid() {
    if (this.currentStep === 1) return !!this.answers.challenge;
    if (this.currentStep === 2) return !!this.answers.ear;
    if (this.currentStep === 3) return !!this.answers.environment;
    if (this.currentStep === 4) return !!this.answers.preference;
    return true;
  }
}

window.hearingWizard = new HearingWizard();
