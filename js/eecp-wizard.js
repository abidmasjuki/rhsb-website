/**
 * OMAY EECP Interactive Suitability Checker & Wizard
 * Version: 1.0.0
 */

class EECPWizard {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 4;
    this.answers = {
      objective: "",
      symptoms: [],
      safetyFlags: []
    };
  }

  init() {
    const modalContainer = document.getElementById("eecp-wizard-modal");
    if (!modalContainer) return;
    this.render();
  }

  open() {
    this.currentStep = 1;
    this.answers = { objective: "", symptoms: [], safetyFlags: [] };
    const modal = document.getElementById("eecp-wizard-modal");
    if (modal) {
      modal.classList.add("active");
      this.render();
    }
  }

  close() {
    const modal = document.getElementById("eecp-wizard-modal");
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
    const body = document.getElementById("eecp-wizard-body");
    if (!body) return;

    let contentHTML = "";

    if (this.currentStep === 1) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 1 of 4: Primary Goal</div>
          <h3 class="wizard-title">What is your primary health goal for OMAY EECP Therapy?</h3>
          <p class="wizard-subtitle">Select the main condition or health objective you wish to address.</p>
          <div class="wizard-options-grid">
            <button class="wizard-opt-btn ${this.answers.objective === 'angina' ? 'selected' : ''}" onclick="window.eecpWizard.selectObjective('angina')">
              <span class="opt-icon">🫀</span>
              <span class="opt-text">Angina Pectoris / Coronary Heart Disease (Chest Pain)</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.objective === 'heart_failure' ? 'selected' : ''}" onclick="window.eecpWizard.selectObjective('heart_failure')">
              <span class="opt-icon">🏥</span>
              <span class="opt-text">Post-Heart Attack / Congestive Heart Failure Rehab</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.objective === 'stroke_vitality' ? 'selected' : ''}" onclick="window.eecpWizard.selectObjective('stroke_vitality')">
              <span class="opt-icon">🧠</span>
              <span class="opt-text">Post-Stroke Circulation, Brain Fog & Memory</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.objective === 'diabetes_circulation' ? 'selected' : ''}" onclick="window.eecpWizard.selectObjective('diabetes_circulation')">
              <span class="opt-icon">🩸</span>
              <span class="opt-text">Diabetes Microvascular Ischemia & Numbness</span>
            </button>
            <button class="wizard-opt-btn ${this.answers.objective === 'wellness_vitality' ? 'selected' : ''}" onclick="window.eecpWizard.selectObjective('wellness_vitality')">
              <span class="opt-icon">⚡</span>
              <span class="opt-text">Executive Vitality, Longevity & Sports Recovery</span>
            </button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 2) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 2 of 4: Symptoms & History</div>
          <h3 class="wizard-title">Select any symptoms or history that apply to you:</h3>
          <p class="wizard-subtitle">Choose all options that reflect your current health status.</p>
          <div class="wizard-checkbox-list">
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.symptoms.includes('chest_pain') ? 'checked' : ''} onchange="window.eecpWizard.toggleSymptom('chest_pain')">
              <span>Chest tightness or exertion shortness of breath</span>
            </label>
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.symptoms.includes('fatigue') ? 'checked' : ''} onchange="window.eecpWizard.toggleSymptom('fatigue')">
              <span>Chronic fatigue, low stamina, or slow physical recovery</span>
            </label>
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.symptoms.includes('medication_use') ? 'checked' : ''} onchange="window.eecpWizard.toggleSymptom('medication_use')">
              <span>Taking nitroglycerin, anti-anginals, or blood pressure medication</span>
            </label>
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.symptoms.includes('tinnitus') ? 'checked' : ''} onchange="window.eecpWizard.toggleSymptom('tinnitus')">
              <span>Ringing in ears (tinnitus) or sudden hearing reduction</span>
            </label>
          </div>
        </div>
      `;
    } else if (this.currentStep === 3) {
      contentHTML = `
        <div class="wizard-step-content">
          <div class="wizard-step-badge">Step 3 of 4: Clinical Safety Check</div>
          <h3 class="wizard-title">Please review safety screening criteria according to OMAY manual:</h3>
          <p class="wizard-subtitle">Do any of the following contraindications apply to you?</p>
          <div class="wizard-checkbox-list warning-list">
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.safetyFlags.includes('uncontrolled_bp') ? 'checked' : ''} onchange="window.eecpWizard.toggleSafety('uncontrolled_bp')">
              <span>Severe uncontrolled hypertension (Blood Pressure > 180 / 110 mmHg)</span>
            </label>
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.safetyFlags.includes('dvt') ? 'checked' : ''} onchange="window.eecpWizard.toggleSafety('dvt')">
              <span>Active deep vein thrombosis (DVT), phlebitis, or severe peripheral vascular disease</span>
            </label>
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.safetyFlags.includes('pregnancy') ? 'checked' : ''} onchange="window.eecpWizard.toggleSafety('pregnancy')">
              <span>Currently pregnant</span>
            </label>
            <label class="wizard-check-item">
              <input type="checkbox" ${this.answers.safetyFlags.includes('aortic') ? 'checked' : ''} onchange="window.eecpWizard.toggleSafety('aortic')">
              <span>Severe aortic valve insufficiency</span>
            </label>
          </div>
        </div>
      `;
    } else if (this.currentStep === 4) {
      const isContraindicated = this.answers.safetyFlags.length > 0;
      contentHTML = `
        <div class="wizard-step-content result-step">
          <div class="wizard-step-badge">Step 4 of 4: Assessment Result</div>
          ${isContraindicated ? `
            <div class="result-card warning">
              <div class="result-icon">⚠️</div>
              <h3>Specialist Physician Evaluation Required</h3>
              <p>Based on your selected safety flags, an in-depth cardiologist review is required before starting pneumatic counterpulsation therapy to ensure maximum safety.</p>
              <div class="action-buttons">
                <button class="btn btn-primary" onclick="window.bookingModal.open('eecp', 'Physician Consultation')">Book Medical Consultation</button>
                <button class="btn btn-secondary" onclick="window.eecpWizard.close()">Close Assessment</button>
              </div>
            </div>
          ` : `
            <div class="result-card success">
              <div class="result-icon">✅</div>
              <h3>Excellent Candidate for OMAY EECP Therapy!</h3>
              <p>Your responses match the primary indications for <strong>OMAY Latest-Gen EECP Natural Bypass Therapy</strong>. A 35-session regimen can significantly improve collateral circulation, Nitric Oxide release, and cardiac ejection fraction.</p>
              <div class="result-summary-box">
                <div class="sum-item"><strong>Recommended Regimen:</strong> 35 Sessions (45-60 min daily)</div>
                <div class="sum-item"><strong>Location:</strong> INNOHEAR Kajang / RPWP Medical Center</div>
                <div class="sum-item"><strong>Pre-Screening:</strong> Free Vitals & ECG Baseline Included</div>
              </div>
              <div class="action-buttons">
                <button class="btn btn-primary" onclick="window.eecpWizard.close(); window.bookingModal.open('eecp', 'OMAY EECP Therapy Session');">Book Free Initial Trial Session</button>
                <a href="${RPWP_DATA.branches[0].whatsapp}" target="_blank" class="btn btn-outline">WhatsApp Audiologist / Consultant</a>
              </div>
            </div>
          `}
        </div>
      `;
    }

    // Controls
    let controlsHTML = `
      <div class="wizard-footer-controls">
        ${this.currentStep > 1 && this.currentStep < 4 ? `<button class="btn btn-secondary" onclick="window.eecpWizard.prevStep()">Back</button>` : '<span></span>'}
        ${this.currentStep < 4 ? `<button class="btn btn-primary" ${this.currentStep === 1 && !this.answers.objective ? 'disabled' : ''} onclick="window.eecpWizard.nextStep()">Continue</button>` : ''}
      </div>
    `;

    body.innerHTML = contentHTML + controlsHTML;
  }

  selectObjective(obj) {
    this.answers.objective = obj;
    this.render();
  }

  toggleSymptom(sym) {
    const idx = this.answers.symptoms.indexOf(sym);
    if (idx > -1) this.answers.symptoms.splice(idx, 1);
    else this.answers.symptoms.push(sym);
  }

  toggleSafety(flag) {
    const idx = this.answers.safetyFlags.indexOf(flag);
    if (idx > -1) this.answers.safetyFlags.splice(idx, 1);
    else this.answers.safetyFlags.push(flag);
  }

  openRoiCalculator() {
    const modal = document.getElementById("eecp-wizard-modal");
    const body = document.getElementById("eecp-wizard-body");
    if (!modal || !body) return;

    this.renderRoiCalc();
    modal.classList.add("active");
  }

  renderRoiCalc() {
    const body = document.getElementById("eecp-wizard-body");
    if (!body) return;

    const units = parseInt(document.getElementById("roi-units")?.value || "1");
    const sessionsPerDay = parseInt(document.getElementById("roi-sessions")?.value || "6");
    const pricePerRegimen = parseFloat(document.getElementById("roi-price")?.value || "3500");

    const patientsPerMonth = Math.floor((units * sessionsPerDay * 25) / 35);
    const monthlyRevenue = patientsPerMonth * pricePerRegimen;
    const annualRevenue = monthlyRevenue * 12;

    const machineCostPerUnit = 125000;
    const totalInvestment = units * machineCostPerUnit;
    const paybackMonths = (totalInvestment / (monthlyRevenue * 0.65)).toFixed(1);

    body.innerHTML = `
      <div class="wizard-step-content">
        <div class="wizard-step-badge">Clinic & Medical Center Tool</div>
        <h3 class="wizard-title">OMAY EECP Clinical Throughput & ROI Calculator</h3>
        <p class="wizard-subtitle">Estimate patient capacity, revenue outcomes, and social impact contributions for your facility.</p>

        <div class="form-grid mt-3">
          <div class="form-group">
            <label>OMAY EECP Units Acquired</label>
            <select id="roi-units" class="form-control" onchange="window.eecpWizard.renderRoiCalc()">
              <option value="1" ${units === 1 ? 'selected' : ''}>1 Unit</option>
              <option value="2" ${units === 2 ? 'selected' : ''}>2 Units</option>
              <option value="3" ${units === 3 ? 'selected' : ''}>3 Units</option>
              <option value="5" ${units === 5 ? 'selected' : ''}>5 Units (Regional Center)</option>
            </select>
          </div>

          <div class="form-group">
            <label>Daily Sessions per Machine</label>
            <select id="roi-sessions" class="form-control" onchange="window.eecpWizard.renderRoiCalc()">
              <option value="4" ${sessionsPerDay === 4 ? 'selected' : ''}>4 Sessions / day</option>
              <option value="6" ${sessionsPerDay === 6 ? 'selected' : ''}>6 Sessions / day (Standard)</option>
              <option value="8" ${sessionsPerDay === 8 ? 'selected' : ''}>8 Sessions / day (High Throughput)</option>
            </select>
          </div>
        </div>

        <div class="result-summary-box mt-3" style="background: var(--bg-primary); padding: 20px; border-radius: 12px; border: 1px solid var(--accent-green);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; text-align: center;">
            <div>
              <span class="text-muted" style="font-size: 0.8rem;">Monthly Patient Capacity:</span>
              <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-green);">${patientsPerMonth} Patients / mo</div>
            </div>
            <div>
              <span class="text-muted" style="font-size: 0.8rem;">Est. Annual Revenue (MYR):</span>
              <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-teal);">RM ${annualRevenue.toLocaleString()}</div>
            </div>
          </div>

          <div class="mt-3 pt-3" style="border-top: 1px solid var(--border-color); font-size: 0.85rem;">
            ⏱️ <strong>Est. Payback Timeline:</strong> ~${paybackMonths} Months | 🌱 <strong>RPWP 260-Pax Community Contribution:</strong> Fully GDPMD Certified Quality Assurance & Maintenance Included.
          </div>
        </div>

        <div class="action-buttons mt-3">
          <button class="btn btn-primary btn-block" onclick="window.eecpWizard.close(); window.bookingModal.open('eecp', 'OMAY EECP Equipment Procurement Inquiry');">Inquire for Equipment Procurement & Leasing</button>
          <button class="btn btn-secondary btn-block mt-2" onclick="window.eecpWizard.close()">Close Calculator</button>
        </div>
      </div>
    `;
  }

  openVideoLibrary() {
    const modal = document.getElementById("eecp-wizard-modal");
    const body = document.getElementById("eecp-wizard-body");
    if (!modal || !body) return;

    body.innerHTML = `
      <div class="wizard-step-content">
        <div class="wizard-step-badge">Clinical Operator Resource</div>
        <h3 class="wizard-title">OMAY EECP Operator Manual & Video Protocols</h3>
        <p class="wizard-subtitle">Technical guidelines for physicians, paramedical operators, and biomedical engineers.</p>

        <div class="video-playlist-container mt-3">
          <div class="video-card" style="background: var(--bg-primary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="font-size: 2.2rem;">📹</div>
              <div>
                <h4 style="font-size: 1rem; color: var(--accent-green);">1. 3-Lead ECG Synchronization & R-Wave Timing</h4>
                <p class="text-secondary" style="font-size: 0.85rem;">Positioning electrodes for artifact-free ECG tracking & peak ratio calculation.</p>
              </div>
            </div>
          </div>

          <div class="video-card" style="background: var(--bg-primary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="font-size: 2.2rem;">🦵</div>
              <div>
                <h4 style="font-size: 1rem; color: var(--accent-green);">2. Sequential Pneumatic Cuff Wrap (Calf → Thigh → Gluteal)</h4>
                <p class="text-secondary" style="font-size: 0.85rem;">Distal-to-proximal 50ms delayed inflation technique for maximal venous return.</p>
              </div>
            </div>
          </div>

          <div class="video-card" style="background: var(--bg-primary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="font-size: 2.2rem;">📊</div>
              <div>
                <h4 style="font-size: 1rem; color: var(--accent-green);">3. SpO2 Oximeter & Peak/Area Ratio Waveform Analytics</h4>
                <p class="text-secondary" style="font-size: 0.85rem;">Adjusting cuff pressure (28-36 kPa) based on digital finger plethysmogram waveforms.</p>
              </div>
            </div>
          </div>

          <div class="video-card" style="background: var(--bg-primary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="font-size: 2.2rem;">🚨</div>
              <div>
                <h4 style="font-size: 1rem; color: var(--accent-green);">4. Emergency Cutoff Protocol & Safety Triggers</h4>
                <p class="text-secondary" style="font-size: 0.85rem;">Auto-stop safety limits (HR < 40 / > 120 bpm) and manual emergency button reset.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="action-buttons mt-4">
          <button class="btn btn-primary btn-block" onclick="window.eecpWizard.close(); window.bookingModal.open('eecp', 'OMAY Technical Operator Training Inquiry');">Request In-Person Clinical Training</button>
          <button class="btn btn-secondary btn-block mt-2" onclick="window.eecpWizard.close()">Close Library</button>
        </div>
      </div>
    `;

    modal.classList.add("active");
  }
}

window.eecpWizard = new EECPWizard();
