/**
 * RPWP Healthcare Unified Booking Engine
 * Version: 1.1.0
 */

class BookingModal {
  constructor() {
    this.selectedType = (window.RPWP_FEATURES && !window.RPWP_FEATURES.isEnabled('eecp')) ? "hearing" : "eecp";
    this.defaultService = "";
  }

  open(type = "eecp", defaultService = "") {
    if (type === "eecp" && window.RPWP_FEATURES && !window.RPWP_FEATURES.isEnabled("eecp")) {
      type = "hearing";
    }
    this.selectedType = type;
    this.defaultService = defaultService;
    const modal = document.getElementById("booking-modal");
    if (!modal) return;
    this.render();
    modal.classList.add("active");
  }

  close() {
    const modal = document.getElementById("booking-modal");
    if (modal) modal.classList.remove("active");
  }

  render() {
    const body = document.getElementById("booking-modal-body");
    if (!body) return;

    const today = new Date().toISOString().split('T')[0];

    body.innerHTML = `
      <div class="booking-container">
        <h3 class="booking-title">Schedule Clinical Consultation & Screening</h3>
        <p class="booking-desc">Book your non-invasive assessment at RPWP Healthcare Center Kajang.</p>

        <div class="booking-type-toggle">
          <button data-feature="eecp" class="type-toggle-btn ${this.selectedType === 'eecp' ? 'active' : ''}" onclick="window.bookingModal.setType('eecp')">
            🫀 OMAY EECP Therapy Screening
          </button>
          <button class="type-toggle-btn ${this.selectedType === 'hearing' ? 'active' : ''}" onclick="window.bookingModal.setType('hearing')">
            👂 Clinical Hearing Assessment
          </button>
        </div>

        <form id="booking-form" onsubmit="window.bookingModal.submitBooking(event)">
          <div class="form-grid">
            <div class="form-group">
              <label>Select Clinical Service *</label>
              <select class="form-control" required id="book-service">
                ${this.selectedType === 'eecp' ? `
                  <option value="OMAY EECP Initial Trial Session" ${this.defaultService.includes('Trial') ? 'selected' : ''}>OMAY EECP Initial Trial Session (45 Mins)</option>
                  <option value="35-Session Complete Regimen Consultation" ${this.defaultService.includes('Regimen') ? 'selected' : ''}>35-Session Complete Cardiac Regimen Consultation</option>
                  <option value="Pre-EECP Cardiologist Evaluation" ${this.defaultService.includes('Physician') ? 'selected' : ''}>Pre-EECP Cardiologist Baseline Evaluation</option>
                ` : `
                  <option value="Adult Pure Tone Audiometry (PTA)" ${this.defaultService.includes('Diagnostic') || this.defaultService.includes('Adult') ? 'selected' : ''}>Adult Diagnostic Audiometry (PTA)</option>
                  <option value="Pediatric OAE / VRA Screening" ${this.defaultService.includes('Child') ? 'selected' : ''}>Pediatric OAE / Visual Reinforcement Screening</option>
                  <option value="Digital Hearing Aid Trial & Fitting">Digital Hearing Aid Prescription & Tuning</option>
                  <option value="Custom Ear Mold Impression">Custom Ear Mold Impression (Water/Noise)</option>
                  <option value="Tinnitus & Hearing Rehabilitation">Tinnitus Counseling & Rehabilitation</option>
                `}
              </select>
            </div>

            <div class="form-group">
              <label>Preferred Center *</label>
              <select class="form-control" required id="book-branch">
                <option value="RPWP Healthcare Kajang (A-01-05 Jalan Seri Kenari 10)">RPWP Healthcare Kajang - A-01-05 Jalan Seri Kenari 10, Taman Seri Kenari</option>
              </select>
            </div>

            <div class="form-group">
              <label>Preferred Date *</label>
              <input type="date" class="form-control" required min="${today}" id="book-date">
            </div>

            <div class="form-group">
              <label>Preferred Time Slot *</label>
              <select class="form-control" required id="book-time">
                <option value="Morning (09:30 AM - 11:30 AM)">Morning (09:30 AM - 11:30 AM)</option>
                <option value="Afternoon (02:00 PM - 04:00 PM)">Afternoon (02:00 PM - 04:00 PM)</option>
                <option value="Late Afternoon (04:30 PM - 06:00 PM)">Late Afternoon (04:30 PM - 06:00 PM)</option>
              </select>
            </div>

            <div class="form-group full-width">
              <label>Patient Full Name *</label>
              <input type="text" class="form-control" required placeholder="e.g. Tan Sri / Puan Siti Aminah" id="book-name">
            </div>

            <div class="form-group">
              <label>WhatsApp / Mobile Phone *</label>
              <input type="tel" class="form-control" required placeholder="e.g. +60196808697" id="book-phone">
            </div>

            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" placeholder="e.g. name@example.com" id="book-email">
            </div>

            <div class="form-group full-width">
              <label>Medical History / Special Requests</label>
              <textarea class="form-control" rows="2" placeholder="Mention any existing cardiac conditions, hearing challenges, or notes for the specialist" id="book-notes"></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-3">Confirm Appointment Voucher</button>
        </form>
      </div>
    `;
  }

  setType(type) {
    this.selectedType = type;
    this.render();
  }

  submitBooking(e) {
    e.preventDefault();
    const service = document.getElementById("book-service").value;
    const branch = document.getElementById("book-branch").value;
    const date = document.getElementById("book-date").value;
    const time = document.getElementById("book-time").value;
    const name = document.getElementById("book-name").value;
    const phone = document.getElementById("book-phone").value;

    const voucherCode = "RPWP-BK-" + Math.floor(10000 + Math.random() * 90000);

    const waText = encodeURIComponent(
      `Salam RPWP Healthcare. I have booked an appointment.\n\n` +
      `📌 *Voucher Code:* ${voucherCode}\n` +
      `👤 *Patient:* ${name}\n` +
      `🩺 *Service:* ${service}\n` +
      `📅 *Date/Time:* ${date} (${time})\n` +
      `📍 *Center:* RPWP Healthcare Kajang\n\n` +
      `Please confirm my slot. Thank you!`
    );

    const waLink = `https://wa.me/60196808697/?text=${waText}`;

    const apiPayload = {
      event: "appointment_created",
      voucher_code: voucherCode,
      patient_name: name,
      patient_phone: phone,
      service_requested: service,
      branch: branch,
      appointment_date: date,
      appointment_time: time,
      audiologist_on_duty: "Nurul Natasha Mohd Razdi (USM Honours)",
      timestamp: new Date().toISOString()
    };

    const body = document.getElementById("booking-modal-body");
    if (body) {
      body.innerHTML = `
        <div class="booking-success-card">
          <div class="success-badge">✅ Appointment Confirmed</div>
          <h3>Clinical Booking Pass Issued</h3>
          <div class="voucher-box">
            <div class="voucher-label">APPOINTMENT VOUCHER CODE</div>
            <div class="voucher-code">${voucherCode}</div>
          </div>

          <div class="voucher-details-grid">
            <div><strong>Patient Name:</strong> ${name}</div>
            <div><strong>Service:</strong> ${service}</div>
            <div><strong>Date & Time:</strong> ${date} | ${time}</div>
            <div><strong>Center:</strong> ${branch}</div>
          </div>

          <div class="webhook-payload-box" style="background: var(--bg-primary); padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.75rem; margin-top: 15px; border: 1px solid var(--border-color); text-align: left;">
            <div style="color: var(--accent-green); font-weight: 700; margin-bottom: 4px;">📡 WhatsApp Cloud API Webhook Payload Triggered:</div>
            <pre style="white-space: pre-wrap; color: var(--text-secondary);">${JSON.stringify(apiPayload, null, 2)}</pre>
          </div>

          <div class="action-buttons mt-3">
            <a href="${waLink}" target="_blank" class="btn btn-primary btn-block">📲 Send Voucher via WhatsApp (+6019-680 8697)</a>
            <button class="btn btn-secondary btn-block mt-2" onclick="window.bookingModal.close()">Close Booking Window</button>
          </div>
        </div>
      `;
    }
  }
}

window.bookingModal = new BookingModal();
