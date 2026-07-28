/**
 * RPWP Healthcare i18n Language Controller
 * Default Language: EN (English)
 * Persistent Storage Key: 'rpwp_lang'
 */

(function () {
  const TRANSLATIONS = {
    en: {
      // Navigation
      "nav_home": "Home",
      "nav_mobile_audio": "Mobile Audiometry",
      "nav_ppe": "PPE Story & Products",
      "nav_hearing": "Hearing Aids",
      "nav_eecp": "EECP Therapy",
      "nav_supplies": "Medical Supplies",
      "nav_advisory": "Advisory Panel",
      "nav_whatsapp": "WhatsApp Consultant",
      "search_placeholder": "Search hearing aids, DrMas sanitisers, EECP therapy...",

      // Hero Banner
      "hero_tag": "CLINICAL AUDIOLOGY, INDUSTRIAL HEALTH & CARDIOVASCULAR CARE",
      "hero_title": "HEARING PROBLEM IS BIG ?",
      "hero_subtitle": "WE MAY MAKE IT SMALL FOR YOU",
      "hero_text": "RPWP Healthcare provides clinically proven Enhanced External Counterpulsation (EECP) cardiac therapy, diagnostic audiology, Mobile Industrial Audiometric Testing (YAPEL Ref: JKKP/2024/11-03/00014), and DrMas medical supplies. Reinvesting 100% of profits to sustain the RPWP social community.",
      "btn_browse_hearing": "Browse Hearing Aids",
      "btn_eecp_details": "EECP Therapy Details",
      "btn_schedule_hearing": "Schedule Hearing Test",

      // Pillars
      "pillar_hearing_title": "1. Clinical Hearing Services & Hearing Aids",
      "pillar_hearing_desc": "Certified audiology testing, Pure Tone Audiometry (PTA), ear canal otoscopy, and hearing aid fitting from global leading brands (Phonak, Oticon, ReSound, Interton) at INNOHEAR Kajang.",
      "pillar_mobile_title": "2. YAPEL Mobile Industrial Audiometric Unit",
      "pillar_mobile_desc": "DOSH Approved Centre (Ref: JKKP/2024/11-03/00014) delivering on-site factory hearing conservation, OHD medical examination, and statutory JKKP 7 reporting with zero factory downtime.",
      "pillar_eecp_title": "3. EECP Therapy & Cardiovascular Care",
      "pillar_eecp_desc": "Non-invasive counterpulsation therapy enhancing coronary perfusion pressure, Shear Stress (WSS), Nitric Oxide release, and angiogenesis for heart health.",
      "pillar_supplies_title": "4. DrMas Medical Supplies & Protective Wear",
      "pillar_supplies_desc": "Ethanol sanitisers, non-woven protective gowns, and protective face shields birthed during frontline emergency response.",

      // GDPMD
      "gdpmd_title": "GDPMD CERTIFIED & MDA REGISTERED MEDICAL DISTRIBUTOR",
      "gdpmd_subtitle": "RPWP Healthcare operates under Good Distribution Practice for Medical Devices (GDPMD) guidelines certified by LeaderCB (Cert: LCB-GDPMD2502008).",

      // Hearing Loss Degrees
      "hearing_degrees_title": "Degrees of Hearing Perception & Clinical Hearing Loss",
      "hearing_degrees_subtitle": "Understanding severity levels measured in decibels (dB HL) during Pure Tone Audiometry (PTA) evaluation.",
      "btn_book_pta": "Book Pure Tone Audiometry Test →",

      // Screener Quiz
      "screener_badge": "Quick Clinical Self-Check",
      "screener_title": "Interactive Hearing Self-Assessment Screener",
      "screener_desc": "Answer these 5 simple clinical questions to evaluate hearing health for yourself or family members and receive immediate recommendations.",
      "btn_screener_book": "Book Hearing Test at INNOHEAR Kajang ↗",
      "btn_screener_reset": "Retake Screener",

      // Innohear Branch
      "innohear_subtitle": "also known as",
      "innohear_title": "INNOHEAR Kajang Branch",
      "innohear_desc": "Our dedicated clinical audiology practice at Kajang, Selangor. Equipped with advanced diagnostic acoustic suites, ear canal otoscopy, and custom earmold fitting under certified clinical audiologists.",
      "btn_book_consultation": "Book Hearing Consultation",
      "btn_gmaps_location": "Google Maps Location",
      "reviews_title": "Customer Reviews & Feedback",

      // Mission
      "mission_badge": "Social Enterprise & Community Mission",
      "mission_title": "Sustaining the RPWP Community",
      "mission_desc": "RPWP Healthcare Sdn Bhd operates as the sustainable business arm for RPWP. 100% of generated corporate profits are directly reinvested into community welfare, orphan care, education, and healthcare support.",
      "btn_more_rpwp": "More About RPWP (prihatin.net.my) ↗",

      // Footer
      "footer_tagline": "Official provider of Clinical Hearing Services, DrMas Medical Supplies, Mobile Industrial Audiometry (DOSH Ref: JKKP/2024/11-03/00014), and EECP Therapy. Sustaining the RPWP community.",
      "footer_copyright": "© 2026 RPWP Healthcare Sdn Bhd. All Rights Reserved."
    },

    bm: {
      // Navigation
      "nav_home": "Utama",
      "nav_mobile_audio": "Audiometri Bergerak",
      "nav_ppe": "Kisah PPE & Produk",
      "nav_hearing": "Alat Pendengaran",
      "nav_eecp": "Terapi EECP",
      "nav_supplies": "Bekalan Perubatan",
      "nav_advisory": "Panel Penasihat",
      "nav_whatsapp": "Konsultan WhatsApp",
      "search_placeholder": "Cari alat pendengaran, pembersih DrMas, terapi EECP...",

      // Hero Banner
      "hero_tag": "AUDIOLOGI KLINIKAL, KESIHATAN INDUSTRI & PENJAGAAN KARDIOVASUKLAR",
      "hero_title": "MASALAH PENDENGARAN TERLALU BESAR ?",
      "hero_subtitle": "KAMI BOLEH MENGECILKANNYA UNTUK ANDA",
      "hero_text": "RPWP Healthcare menyediakan terapi jantung Enhanced External Counterpulsation (EECP) terbukti secara klinikal, audiologi diagnostik, Ujian Audiometri Industri Bergerak (YAPEL Ref: JKKP/2024/11-03/00014), dan bekalan perubatan DrMas. Melabur semula 100% keuntungan untuk menampung komuniti RPWP.",
      "btn_browse_hearing": "Lihat Alat Pendengaran",
      "btn_eecp_details": "Maklumat Terapi EECP",
      "btn_schedule_hearing": "Tempah Ujian Pendengaran",

      // Pillars
      "pillar_hearing_title": "1. Perkhidmatan Audiologi & Alat Pendengaran",
      "pillar_hearing_desc": "Ujian audiologi bertauliah, Audiometri Nada Tulen (PTA), otoskopi salur telinga, dan pemadanan alat pendengaran jenama terkemuka dunia (Phonak, Oticon, ReSound, Interton) di INNOHEAR Kajang.",
      "pillar_mobile_title": "2. Pusat Audiometrik Bergerak YAPEL",
      "pillar_mobile_desc": "Pusat Diluluskan DOSH (Ref: JKKP/2024/11-03/00014) menyediakan pemeliharaan pendengaran kilang, pemeriksaan perubatan OHD, dan pelaporan rasmi JKKP 7 tanpa mengganggu operasi kilang.",
      "pillar_eecp_title": "3. Terapi EECP & Penjagaan Kardiovaskular",
      "pillar_eecp_desc": "Terapi kontra-denyutan tanpa pembedahan yang meningkatkan tekanan perfusi koronari, Shear Stress (WSS), pembebasan Nitrik Oksida, dan angiogenesis untuk kesihatan jantung.",
      "pillar_supplies_title": "4. Bekalan Perubatan DrMas & Pakaian Pelindung",
      "pillar_supplies_desc": "Pembersih tangan etanol, gaun pelindung bukan tenunan, dan perisai muka pelindung yang dihasilkan semasa tindakan kecemasan barisan hadapan.",

      // GDPMD
      "gdpmd_title": "PENGEDAR PERUBATAN DENGAN SIJIL GDPMD & DENGAN MDA",
      "gdpmd_subtitle": "RPWP Healthcare beroperasi di bawah garis panduan Amalan Pengedaran Baik untuk Peranti Perubatan (GDPMD) yang disahkan oleh LeaderCB (Sijil: LCB-GDPMD2502008).",

      // Hearing Loss Degrees
      "hearing_degrees_title": "Tahap Persepsi Pendengaran & Masalah Pendengaran Klinikal",
      "hearing_degrees_subtitle": "Memahami tahap keterukan yang diukur dalam desibel (dB HL) semasa penilaian Audiometri Nada Tulen (PTA).",
      "btn_book_pta": "Tempah Ujian Audiometri Nada Tulen →",

      // Screener Quiz
      "screener_badge": "Semakan Kendiri Klinikal Pantas",
      "screener_title": "Ujian Saringan Pendengaran Interaktif",
      "screener_desc": "Jawab 5 soalan klinikal mudah ini untuk menilai kesihatan pendengaran anda atau ahli keluarga dan dapatkan cadangan diagnostik secara serta-merta.",
      "btn_screener_book": "Tempah Ujian Pendengaran di INNOHEAR Kajang ↗",
      "btn_screener_reset": "Ulang Ujian Saringan",

      // Innohear Branch
      "innohear_subtitle": "juga dikenali sebagai",
      "innohear_title": "Cawangan INNOHEAR Kajang",
      "innohear_desc": "Pusat audiologi klinikal kami di Kajang, Selangor. Dilengkapi dengan bilik akustik diagnostik canggih, otoskopi salur telinga, dan acuan telinga khas di bawah Pegawai Audiologi bertauliah.",
      "btn_book_consultation": "Tempah Konsultasi Pendengaran",
      "btn_gmaps_location": "Lokasi Google Maps",
      "reviews_title": "Ulasan & Maklum Balas Pelanggan",

      // Mission
      "mission_badge": "Perusahaan Sosial & Misi Komuniti",
      "mission_title": "Menampung Komuniti RPWP",
      "mission_desc": "RPWP Healthcare Sdn Bhd beroperasi sebagai syarikat perniagaan mampan bagi RPWP. 100% keuntungan korporat dilaburkan semula secara terus untuk kebajikan komuniti, penjagaan anak yatim, pendidikan, dan bantuan kesihatan.",
      "btn_more_rpwp": "Ketahui Lebih Lanjut RPWP (prihatin.net.my) ↗",

      // Footer
      "footer_tagline": "Pembekal rasmi Perkhidmatan Audiologi Klinikal, Bekalan Perubatan DrMas, Audiometri Industri Bergerak (DOSH Ref: JKKP/2024/11-03/00014), dan Terapi EECP. Menampung komuniti RPWP.",
      "footer_copyright": "© 2026 RPWP Healthcare Sdn Bhd. Hak Cipta Terelihara."
    }
  };

  // Get saved language or default to 'en'
  function getCurrentLang() {
    return localStorage.getItem("rpwp_lang") || "en";
  }

  // Set language and update DOM
  function setLanguage(lang) {
    if (lang !== "en" && lang !== "bm") lang = "en";
    localStorage.setItem("rpwp_lang", lang);

    const dict = TRANSLATIONS[lang];

    // Update elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update toggle button styling
    const btnEN = document.getElementById("langLabelEN");
    const btnBM = document.getElementById("langLabelBM");
    if (btnEN && btnBM) {
      if (lang === "en") {
        btnEN.classList.add("active-lang");
        btnBM.classList.remove("active-lang");
      } else {
        btnBM.classList.add("active-lang");
        btnEN.classList.remove("active-lang");
      }
    }

    // Set html lang attribute
    document.documentElement.lang = lang;

    // Re-render screener if function exists
    if (typeof renderScreenerQuestion === "function") {
      renderScreenerQuestion();
    }
  }

  // Toggle function
  window.toggleLanguage = function () {
    const current = getCurrentLang();
    const next = current === "en" ? "bm" : "en";
    setLanguage(next);
  };

  // Auto-init on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getCurrentLang());
  });
})();
