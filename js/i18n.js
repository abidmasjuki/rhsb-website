/**
 * RPWP Healthcare i18n Language Controller (v1.0.8)
 * Complete Bilingual EN / BM Dictionary & DOM Translator
 * Default Language: EN (English)
 * Persistent Storage Key: 'rpwp_lang'
 */

(function () {
  const TRANSLATIONS = {
    en: {
      // Nav & Header
      "nav_home": "Home",
      "nav_mobile_audio": "Mobile Audiometry",
      "nav_ppe": "PPE Story & Products",
      "nav_hearing": "Hearing Aids",
      "nav_eecp": "EECP Therapy",
      "nav_supplies": "Medical Supplies",
      "nav_advisory": "Advisory Panel",
      "nav_whatsapp": "WhatsApp Consultant",
      "search_placeholder": "Search hearing aids, DrMas sanitisers, EECP therapy...",
      "btn_request_quote": "Request Factory Quote",
      "btn_book_eecp": "Book EECP Session",
      "btn_whatsapp_ppe": "WhatsApp PPE Sales",

      // Hero Banner
      "hero_tag": "CLINICAL AUDIOLOGY, INDUSTRIAL HEALTH & CARDIOVASCULAR CARE",
      "hero_title": "HEARING PROBLEM IS BIG ?",
      "hero_subtitle": "WE MAY MAKE IT SMALL FOR YOU",
      "hero_text": "RPWP Healthcare provides clinically proven Enhanced External Counterpulsation (EECP) cardiac therapy, diagnostic audiology, Mobile Industrial Audiometric Testing (YAPEL Ref: JKKP/2024/11-03/00014), and DrMas medical supplies. Reinvesting 100% of profits to sustain the RPWP social community.",
      "btn_browse_hearing": "Browse Hearing Aids",
      "btn_eecp_details": "EECP Therapy Details",
      "btn_schedule_hearing": "Schedule Hearing Test",

      // GDPMD
      "gdpmd_badge": "GDPMD CERTIFIED ESTABLISHMENT",
      "gdpmd_title": "GDPMD Certified Establishment",
      "gdpmd_desc": "GOOD DISTRIBUTION PRACTICE FOR MEDICAL DEVICES to ensure an establishment's ability to maintain the quality, safety and performance of medical devices. Audited and certified by Leader Certification Body (LeaderCB — leadercb.com).",

      // 3 Steps For Better Hearing
      "steps_title": "3 Steps For Better Hearing",
      "steps_subtitle": "Reconnecting Loved Ones to the Sound of Life — A simple, structured journey to clear sound and restored communication",
      "steps_intro": "Behind every hearing evaluation is a family story. Hearing loss subtly isolates parents and grandparents from family conversations, laughter, and prayer. Our clinical audiology practice was established to bridge that silence and reconnect loved ones to the joyful voices of their children and grandchildren.",
      "step1_title": "1. Visit Our Hearing Center",
      "step1_desc": "Schedule a consultation with our certified clinical audiologists.",
      "step2_title": "2. Hearing Assessment",
      "step2_desc": "Comprehensive Pure-Tone Audiometry (PTA), Otoscopy, and diagnostic ear canal evaluations.",
      "step3_title": "3. Try Our Hearing Solutions",
      "step3_desc": "Experience digital prescription hearing aids and custom-fit earmolds tailored to your individual needs.",

      // Hearing Thresholds
      "threshold_tag": "AUDIOMETRIC THRESHOLDS",
      "hearing_degrees_title": "Degrees of Hearing Perception & Clinical Hearing Loss",
      "hearing_degrees_subtitle": "Understanding decibel sound levels and how hearing impairment affects daily life",
      "mild_tag": "26 - 40 dB",
      "mild_title": "Mild Hearing Loss",
      "mild_desc": "Difficulty hearing soft sounds like dripping water, rustling leaves, or quiet whispers in quiet environments.",
      "moderate_tag": "41 - 60 dB",
      "moderate_title": "Moderate Hearing Loss",
      "moderate_desc": "Difficulty understanding normal conversation or soft musical tones over ambient room background noise.",
      "severe_tag": "61 - 85 dB",
      "severe_title": "Severe Hearing Loss",
      "severe_desc": "Speech is inaudible without amplification. Only loud shouting, heavy traffic engines, or alarms are heard.",
      "profound_tag": "86+ dB",
      "profound_title": "Profound Hearing Loss",
      "profound_desc": "Extreme hearing difficulty. Only extremely loud industrial sounds like jackhammers or jet engines are felt.",
      "pta_banner_text": "Unsure where your hearing perception falls? Our certified clinical audiologists conduct comprehensive Pure Tone Audiometry (PTA) in diagnostic acoustic suites.",
      "btn_book_pta": "Book Pure Tone Audiometry Test →",

      // Screener
      "screener_badge": "Quick Clinical Self-Check",
      "screener_title": "Interactive Hearing Self-Assessment Screener",
      "screener_desc": "Answer these 5 simple clinical questions to evaluate hearing health for yourself or family members and receive immediate recommendations.",
      "btn_screener_book": "Book Hearing Test at Innohear Kajang ↗",
      "btn_screener_reset": "Retake Screener",

      // Innohear Branch & Reviews
      "innohear_subtitle": "also known as",
      "innohear_title": "Innohear Kajang Branch",
      "innohear_desc": "Our dedicated clinical audiology practice at Kajang, Selangor. Equipped with advanced diagnostic acoustic suites, ear canal otoscopy, and custom earmold fitting under certified clinical audiologists.",
      "btn_book_consultation": "Book Hearing Consultation",
      "btn_gmaps_location": "Google Maps Location",
      "reviews_title": "Customer Reviews & Feedback",
      "verified_customer": "Verified Customer • Google Maps Review",
      "view_gmaps_review": "View Review on Google Maps ↗",

      // Pillars Showcase
      "pillar_section_title": "Core Healthcare Services & Solutions",
      "pillar_section_subtitle": "Integrated medical diagnostic pillars delivering clinical excellence and social impact",
      "pillar_hearing_title": "1. Clinical Hearing Care & Hearing Aids",
      "pillar_hearing_desc": "Certified audiology testing, Pure Tone Audiometry (PTA), ear canal otoscopy, and hearing aid fitting from global leading brands (Phonak, Oticon, ReSound, Interton) at Innohear Kajang.",
      "pillar_mobile_title": "2. YAPEL Mobile Industrial Audiometric Unit",
      "pillar_mobile_desc": "DOSH Approved Centre (Ref: JKKP/2024/11-03/00014) delivering on-site factory hearing conservation, OHD medical examination, and statutory JKKP 7 reporting with zero factory downtime.",
      "pillar_eecp_title": "3. EECP Therapy & Cardiovascular Care",
      "pillar_eecp_desc": "Non-invasive counterpulsation therapy enhancing coronary perfusion pressure, Shear Stress (WSS), Nitric Oxide release, and angiogenesis for heart health.",
      "pillar_supplies_title": "4. DrMas Medical Supplies & Protective Wear",
      "pillar_supplies_desc": "Ethanol sanitisers, non-woven protective gowns, and protective face shields birthed during frontline emergency response.",

      // Products & Brands
      "brands_title": "Hearing Aids & Accessories",
      "brands_subtitle": "World-renowned audiology brands available through our clinical practice with full warranty and fitting customization.",
      "eecp_story_tag": "CARDIOVASCULAR CARE STORY",
      "eecp_story_title": "Empowering Hearts & Restoring Active Living Without Surgery",
      "eecp_story_desc": "EECP (Enhanced External Counterpulsation) is a US-FDA cleared non-invasive cardiac therapy that enhances arterial shear stress, releases Nitric Oxide, and stimulates natural collateral vessel growth.",
      "supplies_catalog_title": "DrMas Medical Supplies & PPE Catalog",
      "supplies_catalog_subtitle": "Born from frontline emergency response during COVID-19 to protect our medical frontliners and community.",

      // Social Mission
      "mission_badge": "Social Enterprise & Community Mission",
      "mission_title": "Sustaining the RPWP Community",
      "mission_desc": "RPWP Healthcare Sdn Bhd operates as the sustainable business arm for RPWP. 100% of generated corporate profits are directly reinvested into community welfare, orphan care, education, and healthcare support.",
      "btn_more_rpwp": "More About RPWP (prihatin.net.my) ↗",

      // Advisory Panel
      "advisory_badge": "Medical & Clinical Governance",
      "advisory_title": "Advisory Panel & Leadership",
      "advisory_subtitle": "Guided by experienced medical doctors, biomedical engineers, microbiologists, and clinical audiologists",

      // Footer
      "footer_tagline": "Official provider of Clinical Hearing Services, DrMas Medical Supplies, Mobile Industrial Audiometry (DOSH Ref: JKKP/2024/11-03/00014), and EECP Therapy. Sustaining the RPWP community.",
      "footer_quick_links": "Quick Navigation",
      "footer_contact": "Contact & Location",
      "footer_address": "Kajang, Selangor, Malaysia",
      "footer_copyright": "© 2020 - 2026 RPWP Healthcare Sdn Bhd. All Rights Reserved. | Version v1.0.0",

      // Sub-page Specific: Mobile Audiometry
      "audio_hero_title": "Mobile Industrial Audiometric Testing Service",
      "audio_hero_subtitle": "YAPEL Mobile Audiometric Unit — Hospital-Grade On-Site Clinic at Your Doorstep",
      "audio_hero_desc": "Excellence in Occupational Hearing Conservation and Diagnostics. Full statutory compliance under the OSH Act 1994 (Amendments 2022) & OSH (Noise Exposure) Regulations 2019. Zero production line downtime.",
      "btn_return_home": "Return to Home Page",
      "compliance_tag": "LEGAL COMPLIANCE & REGULATIONS",
      "compliance_title": "Compliance is Not Optional",
      "compliance_desc": "Responsibilities to ensure safety & health at the workplace lie with those who create the risks and work with them. DOSH enforcement mandates annual baseline and monitoring audiograms for noise-exposed workers.",
      "clinical_adv_tag": "CLINICAL ADVANTAGE",
      "clinical_adv_title": "We Don't Just Screen. We Diagnose.",
      "clinical_adv_desc": "Audiologist-led testing and immediate diagnostic Pure Tone Audiometry (PTA) on-site with OHD physician sign-off.",

      // Sub-page Specific: EECP Therapy
      "eecp_hero_title": "Enhanced External Counterpulsation (EECP)",
      "eecp_hero_subtitle": "Empowering Hearts & Restoring Active Living Without Surgery",
      "eecp_mech_title": "Mechanism of Action & Clinical Benefits",
      "eecp_mech_desc": "How EECP cuffs synchronized with ECG cardiac cycles enhance microvascular circulation and myocardial perfusion.",
      "eecp_proto_title": "35-Hour Treatment Protocol",
      "eecp_proto_desc": "Structured 1-hour daily sessions over 7 weeks to stimulate lasting angiogenesis and nitric oxide release.",

      // Sub-page Specific: PPE
      "ppe_hero_title": "From Frontline Emergency Response to Healthcare Excellence",
      "ppe_genesis_title": "The Genesis Story of RPWP Healthcare",
      "ppe_genesis_desc": "How the RPWP social community answered the nation's call during Malaysia's COVID-19 PPE shortage by sewing over 130 kilometers of protective fabric.",
      "ppe_catalog_title": "Medical Supplies & PPE Product Catalog",
      "ppe_catalog_desc": "DrMas Ethanol Sanitisers, Non-Woven Isolation Gowns & Protective Equipment engineered for clinical and industrial safety."
    },

    bm: {
      // Nav & Header
      "nav_home": "Utama",
      "nav_mobile_audio": "Audiometri Bergerak",
      "nav_ppe": "Kisah PPE & Produk",
      "nav_hearing": "Alat Pendengaran",
      "nav_eecp": "Terapi EECP",
      "nav_supplies": "Bekalan Perubatan",
      "nav_advisory": "Panel Penasihat",
      "nav_whatsapp": "Konsultan WhatsApp",
      "search_placeholder": "Cari alat pendengaran, pembersih DrMas, terapi EECP...",
      "btn_request_quote": "Minta Sebut Harga Kilang",
      "btn_book_eecp": "Tempah Sesi EECP",
      "btn_whatsapp_ppe": "WhatsApp Jualan PPE",

      // Hero Banner
      "hero_tag": "AUDIOLOGI KLINIKAL, KESIHATAN INDUSTRI & PENJAGAAN KARDIOVASUKLAR",
      "hero_title": "MASALAH PENDENGARAN TERLALU BESAR ?",
      "hero_subtitle": "KAMI BOLEH MENGECILKANNYA UNTUK ANDA",
      "hero_text": "RPWP Healthcare menyediakan terapi jantung Enhanced External Counterpulsation (EECP) terbukti secara klinikal, audiologi diagnostik, Ujian Audiometri Industri Bergerak (YAPEL Ref: JKKP/2024/11-03/00014), dan bekalan perubatan DrMas. Melabur semula 100% keuntungan untuk menampung komuniti RPWP.",
      "btn_browse_hearing": "Lihat Alat Pendengaran",
      "btn_eecp_details": "Maklumat Terapi EECP",
      "btn_schedule_hearing": "Tempah Ujian Pendengaran",

      // GDPMD
      "gdpmd_badge": "PREMIS DI-SIJILKAN GDPMD",
      "gdpmd_title": "Premis Terlibat Yang Disahkan GDPMD",
      "gdpmd_desc": "AMALAN PENGEDARAN BAIK UNTUK PERANTI PERUBATAN bagi memastikan keupayaan premis menjaga kualiti, keselamatan dan prestasi peranti perubatan. Diaudit dan disahkan oleh Leader Certification Body (LeaderCB — leadercb.com).",

      // 3 Steps For Better Hearing
      "steps_title": "3 Langkah Ke Arah Pendengaran Lebih Baik",
      "steps_subtitle": "Menghubungkan Semula Insan Tersayang Kepada Bunyi Kehidupan — Perjalanan mudah & teratur ke arah kejelasan suara",
      "steps_intro": "Di sebalik setiap penilaian pendengaran wujud kisah kekeluargaan. Masalah pendengaran secara perlahan memisahkan ibu bapa dan datuk nenek daripada perbualan keluarga, gelak tawa, dan doa bersama. Amalan audiologi klinikal kami ditubuhkan untuk merapatkan jurang kesunyian itu dan menghubungkan semula insan tersayang kepada suara gembira anak cucu mereka.",
      "step1_title": "1. Lawati Pusat Pendengaran Kami",
      "step1_desc": "Tempah konsultasi bersama pegawai audiologi klinikal bertauliah kami.",
      "step2_title": "2. Penilaian Pendengaran",
      "step2_desc": "Penilaian komprehensif Audiometri Nada Tulen (PTA), Otoskopi, dan penilaian diagnostik salur telinga.",
      "step3_title": "3. Uji Penyelesaian Pendengaran Kami",
      "step3_desc": "Rasai pengalaman alat pendengaran preskripsi digital dan acuan telinga khas yang disesuaikan khas untuk anda.",

      // Hearing Thresholds
      "threshold_tag": "AMBANG AUDIOMETRIK",
      "hearing_degrees_title": "Tahap Persepsi Pendengaran & Masalah Pendengaran Klinikal",
      "hearing_degrees_subtitle": "Memahami tahap desibel bunyi dan bagaimana masalah pendengaran mempengaruhi kehidupan seharian",
      "mild_tag": "26 - 40 dB",
      "mild_title": "Kurang Pendengaran Ringan",
      "mild_desc": "Kesukaran mendengar bunyi perlahan seperti titisan air, bisikan, atau geseran daun dalam suasana tenang.",
      "moderate_tag": "41 - 60 dB",
      "moderate_title": "Kurang Pendengaran Sederhana",
      "moderate_desc": "Kesukaran memahami perbualan biasa atau nada muzik lembut dalam suasana bising latar belakang.",
      "severe_tag": "61 - 85 dB",
      "severe_title": "Kurang Pendengaran Teruk",
      "severe_desc": "Percakapan tidak dapat didengar tanpa pembesaran suara. Hanya jeritan kuat, enjin kenderaan berat, atau penggera yang kedengaran.",
      "profound_tag": "86+ dB",
      "profound_title": "Kurang Pendengaran Sangat Teruk",
      "profound_desc": "Kesukaran pendengaran melampau. Hanya bunyi industri yang amat kuat seperti mesin pemecah jalan atau jet yang dirasai.",
      "pta_banner_text": "Keliru di mana tahap persepsi pendengaran anda? Pegawai audiologi klinikal bertauliah kami menjalankan penilaian komprehensif Audiometri Nada Tulen (PTA) di bilik akustik diagnostik.",
      "btn_book_pta": "Tempah Ujian Audiometri Nada Tulen →",

      // Screener
      "screener_badge": "Semakan Kendiri Klinikal Pantas",
      "screener_title": "Ujian Saringan Pendengaran Interaktif",
      "screener_desc": "Jawab 5 soalan klinikal mudah ini untuk menilai kesihatan pendengaran anda atau ahli keluarga dan dapatkan cadangan diagnostik secara serta-merta.",
      "btn_screener_book": "Tempah Ujian Pendengaran di Innohear Kajang ↗",
      "btn_screener_reset": "Ulang Ujian Saringan",

      // Innohear Branch & Reviews
      "innohear_subtitle": "juga dikenali sebagai",
      "innohear_title": "Cawangan Innohear Kajang",
      "innohear_desc": "Pusat audiologi klinikal kami di Kajang, Selangor. Dilengkapi dengan bilik akustik diagnostik canggih, otoskopi salur telinga, dan acuan telinga khas di bawah Pegawai Audiologi bertauliah.",
      "btn_book_consultation": "Tempah Konsultasi Pendengaran",
      "btn_gmaps_location": "Lokasi Google Maps",
      "reviews_title": "Ulasan & Maklum Balas Pelanggan",
      "verified_customer": "Pelanggan Disahkan • Ulasan Google Maps",
      "view_gmaps_review": "Lihat Ulasan di Google Maps ↗",

      // Pillars Showcase
      "pillar_section_title": "Perkhidmatan & Penyelesaian Utama Kesihatan",
      "pillar_section_subtitle": "Teras diagnostik perubatan bersepadu yang menyampaikan kecemerlangan klinikal dan impak sosial",
      "pillar_hearing_title": "1. Penjagaan Pendengaran Klinikal & Audiologi",
      "pillar_hearing_desc": "Ujian audiologi bertauliah, Audiometri Nada Tulen (PTA), otoskopi salur telinga, dan pemadanan alat pendengaran jenama terkemuka dunia (Phonak, Oticon, ReSound, Interton) di Innohear Kajang.",
      "pillar_mobile_title": "2. Pusat Audiometrik Bergerak YAPEL",
      "pillar_mobile_desc": "Pusat Diluluskan DOSH (Ref: JKKP/2024/11-03/00014) menyediakan pemeliharaan pendengaran kilang, pemeriksaan perubatan OHD, dan pelaporan rasmi JKKP 7 tanpa mengganggu operasi kilang.",
      "pillar_eecp_title": "3. Terapi EECP & Penjagaan Kardiovaskular",
      "pillar_eecp_desc": "Terapi kontra-denyutan tanpa pembedahan yang meningkatkan tekanan perfusi koronari, Shear Stress (WSS), pembebasan Nitrik Oksida, dan angiogenesis untuk kesihatan jantung.",
      "pillar_supplies_title": "4. Bekalan Perubatan DrMas & Pakaian Pelindung",
      "pillar_supplies_desc": "Pembersih tangan etanol, gaun pelindung bukan tenunan, dan perisai muka pelindung yang dihasilkan semasa tindakan kecemasan barisan hadapan.",

      // Products & Brands
      "brands_title": "Alat Pendengaran & Aksesori",
      "brands_subtitle": "Jenama audiologi terkemuka dunia yang boleh didapati melalui amalan klinikal kami dengan jaminan penuh dan pemadanan khas.",
      "eecp_story_tag": "KISAH PENJAGAAN KARDIOVASUKLAR",
      "eecp_story_title": "Memperkasakan Jantung & Mengembalikan Kehidupan Aktif Tanpa Pembedahan",
      "eecp_story_desc": "EECP (Enhanced External Counterpulsation) adalah terapi jantung tanpa pembedahan diluluskan US-FDA yang meningkatkan tekanan perfusi dan merangsang pembentukan saluran darah kolateral semula jadi.",
      "supplies_catalog_title": "Katalog Bekalan Perubatan & PPE DrMas",
      "supplies_catalog_subtitle": "Dilahirkan daripada tindakan kecemasan barisan hadapan semasa COVID-19 untuk melindungi petugas kesihatan dan komuniti.",

      // Social Mission
      "mission_badge": "Perusahaan Sosial & Misi Komuniti",
      "mission_title": "Menampung Komuniti RPWP",
      "mission_desc": "RPWP Healthcare Sdn Bhd beroperasi sebagai syarikat perniagaan mampan bagi RPWP. 100% keuntungan korporat dilaburkan semula secara terus untuk kebajikan komuniti, penjagaan anak yatim, pendidikan, dan bantuan kesihatan.",
      "btn_more_rpwp": "Ketahui Lebih Lanjut RPWP (prihatin.net.my) ↗",

      // Advisory Panel
      "advisory_badge": "Tata Kelola Perubatan & Klinikal",
      "advisory_title": "Panel Penasihat & Kepimpinan",
      "advisory_subtitle": "Diterajui oleh doktor perubatan berpengalaman, jurutera biomedikal, pakar mikrobiologi, dan pegawai audiologi klinikal",

      // Footer
      "footer_tagline": "Pembekal rasmi Perkhidmatan Audiologi Klinikal, Bekalan Perubatan DrMas, Audiometri Industri Bergerak (DOSH Ref: JKKP/2024/11-03/00014), dan Terapi EECP. Menampung komuniti RPWP.",
      "footer_quick_links": "Navigasi Pantas",
      "footer_contact": "Hubungi & Lokasi",
      "footer_address": "Kajang, Selangor, Malaysia",
      "footer_copyright": "© 2020 - 2026 RPWP Healthcare Sdn Bhd. Hak Cipta Terelihara. | Versi v1.0.0",

      // Sub-page Specific: Mobile Audiometry
      "audio_hero_title": "Perkhidmatan Ujian Audiometri Industri Bergerak",
      "audio_hero_subtitle": "Unit Audiometri Bergerak YAPEL — Klinik Bergerak Gred Hospital di Pintu Kilang Anda",
      "audio_hero_desc": "Kecemerlangan dalam Pemeliharaan Pendengaran Industri & Diagnostik. Memenuhi sepenuhnya Akta KKP 1994 (Pindaan 2022) & Peraturan KKP (Pendedahan Bising) 2019. Tanpa menghentikan operasi kilang.",
      "btn_return_home": "Kembali ke Laman Utama",
      "compliance_tag": "PATUH UNDANG-UNDANG & PERATURAN",
      "compliance_title": "Kepatuhan Adalah Wajib",
      "compliance_desc": "Tanggungjawab memastikan keselamatan & kesihatan di tempat kerja terletak pada pihak yang mewujudkan risiko. Penguatkuasaan DOSH mewajibkan audiogram asas dan pemantauan tahunan bagi pekerja terdedah bising.",
      "clinical_adv_tag": "KELEBIHAN KLINIKAL",
      "clinical_adv_title": "Kami Bukan Sekadar Menyaring. Kami Mendiagnosis.",
      "clinical_adv_desc": "Ujian diterajui Pegawai Audiologi dan penilaian diagnostik Audiometri Nada Tulen (PTA) serta-merta di tapak dengan pengesahan Doktor OHD.",

      // Sub-page Specific: EECP Therapy
      "eecp_hero_title": "Enhanced External Counterpulsation (EECP)",
      "eecp_hero_subtitle": "Memperkasakan Jantung & Mengembalikan Kehidupan Aktif Tanpa Pembedahan",
      "eecp_mech_title": "Mekanisme Tindakan & Manfaat Klinikal",
      "eecp_mech_desc": "Bagaimana kaf EECP yang diselaraskan dengan kitaran jantung ECG meningkatkan peredaran mikrovaskular dan perfusi miokardium.",
      "eecp_proto_title": "Protokol Rawatan 35 Jam",
      "eecp_proto_desc": "Sesi harian 1 jam yang teratur selama 7 minggu untuk merangsang angiogenesis yang berkekalan dan pembebasan nitrik oksida.",

      // Sub-page Specific: PPE
      "ppe_hero_title": "Daripada Tindakan Kecemasan Barisan Hadapan Ke Kecemerlangan Perubatan",
      "ppe_genesis_title": "Kisah Penubuhan RPWP Healthcare",
      "ppe_genesis_desc": "Bagaimana komuniti sosial RPWP menyahut seruan negara semasa krisis kekurangan PPE COVID-19 dengan menjahit lebih 130 kilometer kain pelindung.",
      "ppe_catalog_title": "Katalog Bekalan Perubatan & Produk PPE",
      "ppe_catalog_desc": "Pembersih Tangan Etanol DrMas, Gaun Pelindung Bukan Tenunan & Peralatan Pelindung yang direka untuk keselamatan klinikal dan industri."
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
