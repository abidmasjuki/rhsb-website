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

// Interactive Hearing Screener Logic (Bilingual EN / BM)
const screenerQuestionsData = {
  en: [
    {
      title: "1. Do you frequently struggle to understand conversations in noisy environments (restaurants, gatherings, or family events)?",
      options: [
        { text: "Yes, very frequently / always", points: 2 },
        { text: "Sometimes", points: 1 },
        { text: "Rarely / Never", points: 0 }
      ]
    },
    {
      title: "2. Do family members or friends often complain that your TV, radio, or phone volume is too loud?",
      options: [
        { text: "Yes, frequently complained about", points: 2 },
        { text: "A few times", points: 1 },
        { text: "Never", points: 0 }
      ]
    },
    {
      title: "3. Do you find yourself frequently asking people to repeat themselves or feeling that others are mumbling?",
      options: [
        { text: "Yes, very often", points: 2 },
        { text: "Sometimes", points: 1 },
        { text: "Never", points: 0 }
      ]
    },
    {
      title: "4. Do you experience ringing, buzzing, or hissing sounds in your ears (tinnitus)?",
      options: [
        { text: "Yes, persistent ringing", points: 2 },
        { text: "Occasional ringing", points: 1 },
        { text: "None at all", points: 0 }
      ]
    },
    {
      title: "5. Do you have difficulty hearing phone calls or online meetings clearly?",
      options: [
        { text: "Yes, difficult to hear calls", points: 2 },
        { text: "Moderate difficulty", points: 1 },
        { text: "Clear with no issues", points: 0 }
      ]
    }
  ],
  bm: [
    {
      title: "1. Adakah anda kerap menghadapi kesukaran memahami perbualan di tempat berbunyi bising (restoran, kenduri, atau majlis keluarga)?",
      options: [
        { text: "Ya, sangat kerap / selalu", points: 2 },
        { text: "Kadang-kadang", points: 1 },
        { text: "Jarang / Tidak pernah", points: 0 }
      ]
    },
    {
      title: "2. Adakah ahli keluarga atau rakan sering menegur bahawa bunyi TV, radio, atau telefon anda terlalu kuat?",
      options: [
        { text: "Ya, selalu ditegur", points: 2 },
        { text: "Pernah beberapa kali", points: 1 },
        { text: "Tidak pernah", points: 0 }
      ]
    },
    {
      title: "3. Adakah anda kerap meminta orang lain mengulang perbualan atau merasakan orang sekeliling bercakap perlahan/bergumam?",
      options: [
        { text: "Ya, kerap sangat", points: 2 },
        { text: "Kadang-kadang", points: 1 },
        { text: "Tidak pernah", points: 0 }
      ]
    },
    {
      title: "4. Adakah anda mengalami bunyi berdesing, berdengung, atau berdesir dalam telinga (tinnitus)?",
      options: [
        { text: "Ya, ada berbunyi", points: 2 },
        { text: "Kadang-kadang berbunyi", points: 1 },
        { text: "Tiada langsung", points: 0 }
      ]
    },
    {
      title: "5. Adakah anda sukar mendengar suara panggil atau perbualan melalui telefon dengan jelas?",
      options: [
        { text: "Ya, sukar mendengar di telefon", points: 2 },
        { text: "Sederhana", points: 1 },
        { text: "Jelas dan tiada masalah", points: 0 }
      ]
    }
  ]
};

let currentScreenerStep = 0;
let totalScreenerPoints = 0;

function renderScreenerQuestion() {
  const qBox = document.getElementById("screenerQuestionBox");
  const stepText = document.getElementById("screenerStepText");
  const percentText = document.getElementById("screenerProgressPercent");
  const progressBar = document.getElementById("screenerProgressBar");
  const optContainer = document.getElementById("screenerOptionsContainer");
  const qTitle = document.getElementById("screenerQuestionTitle");

  const lang = localStorage.getItem("rpwp_lang") || "en";
  const questions = screenerQuestionsData[lang] || screenerQuestionsData.en;

  if (!qBox || currentScreenerStep >= questions.length) return;

  const q = questions[currentScreenerStep];
  const percent = Math.round(((currentScreenerStep + 1) / questions.length) * 100);

  const stepPrefix = lang === "bm" ? "Soalan" : "Question";
  const stepOf = lang === "bm" ? "daripada" : "of";

  if (stepText) stepText.textContent = `${stepPrefix} ${currentScreenerStep + 1} ${stepOf} ${questions.length}`;
  if (percentText) percentText.textContent = `${percent}%`;
  if (progressBar) progressBar.style.width = `${percent}%`;

  if (qTitle) qTitle.textContent = q.title;
  if (optContainer) {
    optContainer.innerHTML = q.options.map(opt => `
      <button onclick="handleScreenerAnswer(${opt.points})" class="screener-opt-btn">
        ${opt.text}
      </button>
    `).join('');
  }
}

function handleScreenerAnswer(points) {
  totalScreenerPoints += points;
  currentScreenerStep++;

  const lang = localStorage.getItem("rpwp_lang") || "en";
  const questions = screenerQuestionsData[lang] || screenerQuestionsData.en;

  if (currentScreenerStep < questions.length) {
    renderScreenerQuestion();
  } else {
    showScreenerResults();
  }
}

function showScreenerResults() {
  const qBox = document.getElementById("screenerQuestionBox");
  const pBox = document.getElementById("screenerProgressBox");
  const rBox = document.getElementById("screenerResultBox");

  const rBadge = document.getElementById("screenerResultBadge");
  const rTitle = document.getElementById("screenerResultTitle");
  const rDesc = document.getElementById("screenerResultDesc");
  const rBtn = document.getElementById("screenerResultWhatsappBtn");

  if (qBox) qBox.style.display = "none";
  if (pBox) pBox.style.display = "none";
  if (rBox) rBox.style.display = "block";

  const lang = localStorage.getItem("rpwp_lang") || "en";

  let riskLevel = "";
  let titleText = "";
  let descText = "";
  let badgeBg = "";
  let badgeColor = "#FFFFFF";

  if (totalScreenerPoints >= 6) {
    badgeBg = "#EF4444";
    if (lang === "bm") {
      riskLevel = "Tahap Risiko Tinggi (High Clinical Indication)";
      titleText = "⚠️ Indikasi Masalah Pendengaran Klinikal";
      descText = "Jawapan anda menunjukkan tanda-tanda signifikan penurunan pendengaran. Sangat disyorkan untuk menjalani Ujian Pendengaran Nada Tulen (Pure Tone Audiometry) rasmi di cawangan Innohear Kajang bersama Pegawai Audiologi bertauliah.";
    } else {
      riskLevel = "High Risk Level (High Clinical Indication)";
      titleText = "⚠️ Clinical Hearing Loss Indication";
      descText = "Your answers indicate significant signs of hearing strain or impairment. It is strongly recommended to schedule an official Pure Tone Audiometry (PTA) evaluation at Innohear Kajang with a certified clinical audiologist.";
    }
  } else if (totalScreenerPoints >= 3) {
    badgeBg = "#F59E0B";
    if (lang === "bm") {
      riskLevel = "Tahap Risiko Sederhana (Moderate Risk)";
      titleText = "⚡ Tanda-tanda Keletihan & Beban Pendengaran";
      descText = "Anda mempunyai beberapa simptom penurunan pendengaran ringan/sederhana. Pemeriksaan diagnostik awal amat digalakkan bagi memelihara kejelasan pendengaran anda.";
    } else {
      riskLevel = "Moderate Risk Level (Hearing Strain)";
      titleText = "⚡ Mild to Moderate Hearing Strain";
      descText = "You are experiencing mild to moderate hearing difficulty symptoms. An early diagnostic hearing assessment is recommended to maintain speech clarity and prevent further loss.";
    }
  } else {
    badgeBg = "#10B981";
    if (lang === "bm") {
      riskLevel = "Tahap Sihat / Risiko Rendah (Low Risk)";
      titleText = "✅ Pendengaran Dalam Keadaan Baik";
      descText = "Tahniah! Keputusan anda menunjukkan risiko yang sangat rendah. Kekalkan amalan penjagaan pendengaran yang sihat dan lakukan ujian berkala tahunan.";
    } else {
      riskLevel = "Healthy / Low Risk Level";
      titleText = "✅ Good Hearing Health";
      descText = "Congratulations! Your results indicate a low risk of hearing loss. Maintain healthy hearing habits and schedule routine annual audiometry checks.";
    }
  }

  if (rBadge) {
    rBadge.textContent = riskLevel;
    rBadge.style.background = badgeBg;
    rBadge.style.color = badgeColor;
  }
  if (rTitle) rTitle.textContent = titleText;
  if (rDesc) rDesc.textContent = descText;

  if (rBtn) {
    const waText = encodeURIComponent(
      lang === "bm"
        ? `Salam RPWP Healthcare. Saya telah melengkapkan Ujian Saringan Pendengaran Interaktif di laman web (Keputusan: ${riskLevel}, Markah: ${totalScreenerPoints}/10). Saya ingin membuat temjanji ujian pendengaran di Innohear Kajang.`
        : `Hello RPWP Healthcare. I completed the Interactive Hearing Self-Assessment Screener on your website (Result: ${riskLevel}, Score: ${totalScreenerPoints}/10). I would like to book a clinical hearing diagnostic test at Innohear Kajang.`
    );
    rBtn.href = `https://wa.me/60196808697/?text=${waText}`;
    rBtn.textContent = lang === "bm" ? "Tempah Ujian Pendengaran di Innohear Kajang ↗" : "Book Hearing Test at Innohear Kajang ↗";
  }
}

function resetScreener() {
  currentScreenerStep = 0;
  totalScreenerPoints = 0;

  const qBox = document.getElementById("screenerQuestionBox");
  const pBox = document.getElementById("screenerProgressBox");
  const rBox = document.getElementById("screenerResultBox");

  if (qBox) qBox.style.display = "block";
  if (pBox) pBox.style.display = "block";
  if (rBox) rBox.style.display = "none";

  renderScreenerQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  renderScreenerQuestion();
});
