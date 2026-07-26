/**
 * RPWP Healthcare Data Repository
 * Version: 1.0.0
 * Contains complete isolated mock data for products, OMAY EECP technology specs,
 * hearing services, advisory panel profiles, branch details, and currency rates.
 */

const RPWP_DATA = {
  version: "1.0.0",
  currencies: {
    MYR: { symbol: "RM", rate: 1.0, label: "MYR (RM)" },
    SGD: { symbol: "$", rate: 0.29, label: "SGD ($)" },
    USD: { symbol: "$", rate: 0.22, label: "USD ($)" }
  },
  company: {
    name: "RPWP Healthcare Sdn Bhd",
    acronym: "RPWP",
    fullAcronymMeaning: "Rumah Pengasih Warga Prihatin",
    tagline: "Empowering Lives Through Innovation & Compassionate Care",
    foundedYear: 2005,
    certifications: [
      {
        code: "GDPMD",
        name: "Good Distribution Practice for Medical Devices",
        auditor: "Leader Certification Sdn. Bhd. (LeaderCB)",
        auditorUrl: "https://leadercb.com/",
        logo: "https://leadercb.com/wp-content/uploads/2023/05/Logo-LCB.jpeg",
        desc: "Audited and certified by Leader Certification Body (LeaderCB - leadercb.com) ensuring strict adherence to medical device quality, safety, and distribution standards."
      },
      {
        code: "MDA",
        name: "Malaysian Medical Device Authority Registered",
        desc: "Enforcing statutory regulations and registration for healthcare products."
      }
    ],
    socialImpact: {
      community: "Rumah Pengasih Warga Prihatin (Home for Love & Compassionate Community)",
      residentsCount: 260,
      impactDesc: "100% of RPWP Healthcare profits are reinvested to sustain a 260 pax sustainable community comprising all types of charity members, staff, students, and co-founders without depending on external alms."
    },
    ecosystemVentures: [
      { name: "RPWP Healthcare", icon: "🩺", url: "#", desc: "OMAY EECP Therapy Systems, INNOHEAR Kajang & DrMas Medical Supplies" },
      { name: "SARC Menswear Fashion", icon: "👔", url: "https://sarc.my", desc: "Exclusive men's apparel and executive fashion" },
      { name: "WERDA Muslimah Wear", icon: "🧕", url: "https://werda.my", desc: "Modest fashion, hijab & Umrah apparel" },
      { name: "SNAP Academy", icon: "🎓", url: "https://snap.my", desc: "Saiful Nang Academy of Professional creative & media training" },
      { name: "Rarecation Travel", icon: "✈️", url: "https://rarecation.com", desc: "Experiential global travel & photography expeditions" },
      { name: "ProjekPelangi Charity", icon: "🌈", url: "https://projekpelangi.com", desc: "Community welfare & education outreach initiatives" },
      { name: "AmalMall", icon: "🛍️", url: "https://amalmall.com", desc: "Ethical online marketplace supporting social enterprises" }
    ]
  },
  branches: [
    {
      id: "kajang",
      name: "INNOHEAR Kajang & EECP Therapy Center",
      address: "A-01-05, Jalan Seri Kenari 10, Taman Seri Kenari, 43000 Kajang, Selangor, Malaysia",
      phone: "+60 19-680 8697",
      phoneRaw: "+60196808697",
      whatsapp: "https://wa.me/60196808697/?text=Salam%20RPWP%20Healthcare.%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
      waze: "https://waze.com/ul/hw2835bc0x",
      googleMaps: "https://maps.app.goo.gl/cFwsAmJaWG55oCTE8",
      operatingHours: "Mon - Sat: 9:00 AM - 6:00 PM (Sunday by appointment)",
      services: ["OMAY EECP Therapy", "Adult & Child Hearing Screening", "Hearing Aid Fitting & Tuning", "Custom Ear Molds", "Tinnitus Therapy"]
    }
  ],
  advisoryBoard: [
    {
      id: "dr-masjuki",
      name: "Dr. Masjuki",
      title: "Executive Chairman",
      credentials: "DVM (UPM) | Serial Tech & Healthcare Entrepreneur",
      bio: "Graduated in Veterinary Medicine from UPM and founded numerous international enterprises. Leads RPWP Healthcare's strategic growth and medical technology vision."
    },
    {
      id: "dr-ruzaini",
      name: "Dr. Ruzaini Ikram",
      title: "Public Health Consultant & Advisory Board Member",
      credentials: "MD (USM) | Public Health Specialist",
      bio: "Practicing medical physician with extensive expertise in community medicine, preventative cardiovascular care, and epidemiology."
    },
    {
      id: "dr-intan",
      name: "Dr. Intan Salwani",
      title: "Director of Research & Technical Standards",
      credentials: "PhD Chemical Engineering (Cambridge University, UK)",
      bio: "Leads chemical formulation compliance, sterile medical product standards, and clinical quality assurance across RPWP Healthcare divisions."
    },
    {
      id: "dr-madihah",
      name: "Dr. Madihah Junid",
      title: "Product Planning & Clinical Advisory",
      credentials: "MD (USM Kubang Kerian)",
      bio: "Specializes in clinical product alignment, non-invasive therapeutic evaluation, and hospital procurement specifications."
    },
    {
      id: "dr-syazana",
      name: "Dr. Syazana Umar",
      title: "Senior Research Scientist",
      credentials: "PhD Science & Technology in Community Health (USIM)",
      bio: "Active scientist leading clinical trial validation, vascular shear stress research, and community health outcome metrics."
    },
    {
      id: "khairunnisa",
      name: "Khairunnisa Aqilah",
      title: "Head of R&D Laboratory",
      credentials: "BSc Microbiology (University of Malaya)",
      bio: "Directs bio-compatibility testing, antimicrobial efficacy validation for DrMas series, and quality control systems."
    },
    {
      id: "natasha",
      name: "Nurul Natasha Mohd Razdi",
      title: "Lead Clinical Audiologist (INNOHEAR Kajang)",
      credentials: "Bachelor of Audiology (Hons) (USM)",
      bio: "Expert in pediatric and adult diagnostic audiometry, hearing rehabilitation, ABR/OAE testing, and advanced digital hearing aid programming."
    },
    {
      id: "mohd-abid",
      name: "Mohd Abid",
      title: "Biomedical Engineering Specialist (Prosthetics & Orthotics)",
      credentials: "B.Eng Biomedical Engineering (P&O) (University of Malaya, 2016)",
      bio: "Focuses on biomechanical ergonomics, medical device engineering, pneumatic pressure synchronization, and customized orthotic molds."
    }
  ],
  eecpSystem: {
    brand: "OMAY",
    manufacturer: "OMAY (Guangzhou) Medical Technologies Co., Ltd",
    pioneers: [
      { name: "Dr. Zhou Shao Chun, PhD", role: "Technical Director, OMAY Medical Technologies" },
      { name: "Late Dr. Zheng Zhen Shen", role: "EECP Pioneer & Inventor (Father of Modern Air-Cuff Counterpulsation)" }
    ],
    headline: "OMAY Latest-Generation Enhanced External Counterpulsation (EECP)",
    subheading: "The Non-Invasive 'Natural Bypass' Therapy for Cardiovascular Renewal, Vitality, and Organ Perfusion",
    description: "OMAY EECP is a FDA & MDA-recognized, non-surgical treatment that enhances blood circulation, stimulates microvascular collateral vessel growth (natural bypasses), and reduces cardiac workload through heart-rate synchronized sequential pneumatic compression.",
    keySpecs: [
      { feature: "Heart Sync", detail: "Real-time 3-lead ECG synchronization with 50ms sequential calf → thigh → gluteal cuff inflation" },
      { feature: "Pulse Oximetry", detail: "Continuous SpO2 digital finger probe monitoring with Peak Ratio & Area Ratio waveforms" },
      { feature: "Patient Safety", detail: "Dual manual emergency trigger & auto-cutoff safety triggers (HR < 40 bpm or > 120 bpm)" },
      { feature: "Comfort Bed", detail: "Ergonomic clinical recliner with medical-grade hypoallergenic multi-size pneumatic cuffs" },
      { feature: "Mode Flexibility", detail: "AF Mode support (1:1 & 1:2 inflation ratios) for complex heart rhythms" }
    ],
    mechanisms: [
      {
        title: "Wall Shear Stress (WSS)",
        icon: "🌊",
        desc: "Sequential compression increases arterial blood flow velocity, generating frictional Wall Shear Stress along the endothelial lining of blood vessels."
      },
      {
        title: "Nitric Oxide (NO) Boost",
        icon: "🧪",
        desc: "Shear stress activates endothelial mechanosensors to release Nitric Oxide (NO), dilating blood vessels, improving elasticity, and lowering systemic vascular resistance."
      },
      {
        title: "VEGF & Angiogenesis (Natural Bypass)",
        icon: "🌱",
        desc: "Triggers Vascular Endothelial Growth Factor (VEGF) secretion, promoting angiogenesis—the development of new collateral blood vessels around blocked coronary arteries."
      },
      {
        title: "Cardiac Workload Reduction & LVEF",
        icon: "🫀",
        desc: "Augments diastolic blood pressure for cardiac perfusion while rapidly deflating during systole to drop afterload, boosting Left Ventricular Ejection Fraction (LVEF)."
      }
    ],
    indications: [
      { category: "Cardiac & Vascular", item: "Coronary Heart Disease (CAD) & Angina Pectoris (including refractory angina)" },
      { category: "Cardiac & Vascular", item: "Congestive Heart Failure (CHF) & Post-Myocardial Infarction Recovery" },
      { category: "Neurological & Brain", item: "Cerebral Arteriosclerosis, Post-Stroke Rehab & Memory Vitality" },
      { category: "Metabolic & Systemic", item: "Diabetes with Arteriosclerosis & Renal Ischemia Management" },
      { category: "Sensory & Specialized", item: "Sudden Sensorineural Hearing Loss & Tinnitus (Inner Ear Ischemia)" },
      { category: "Wellness & Performance", item: "Sports Recovery, Executive Fatigue, Vitality & Longevity Enhancement" }
    ],
    regimen: {
      sessions: 35,
      durationPerSession: "45 - 60 minutes",
      frequency: "5 days / week for 7 weeks",
      nature: "100% Non-invasive, painless, outpatient therapy. Patients can rest, read, or listen to music during treatment."
    }
  },
  hearingServices: [
    {
      id: "adult-hearing",
      name: "Adult Diagnostic Audiometry",
      desc: "Pure Tone Audiometry (PTA) and speech discrimination testing to detect early to severe hearing impairment.",
      category: "Assessment"
    },
    {
      id: "child-hearing",
      name: "Pediatric Hearing Screening (OAE & VRA)",
      desc: "Otoacoustic Emissions (OAE) & Visual Reinforcement Audiometry designed specifically for infants and young children.",
      category: "Assessment"
    },
    {
      id: "abr-test",
      name: "Auditory Brainstem Response (ABR)",
      desc: "Objective electrophysiological assessment measuring nerve pathway signals from inner ear to brainstem.",
      category: "Specialized"
    },
    {
      id: "pre-employment",
      name: "Pre-Employment & Industrial Noise Checkup",
      desc: "Occupational hearing conservation checks for industrial workers and corporate health screening.",
      category: "Assessment"
    },
    {
      id: "hearing-aid-fitting",
      name: "Digital Hearing Aid Prescription & Tuning",
      desc: "Precision Real-Ear Measurement (REM) fitting, wireless pairing, and individualized acoustic programming.",
      category: "Rehabilitation"
    },
    {
      id: "custom-earmold",
      name: "Custom Ear Molds (Water & Noise Protection)",
      desc: "Custom-fit silicone and acrylic earmolds for hearing aids, noise protection, swimming, and sleeping.",
      category: "Rehabilitation"
    }
  ],
  products: [
    {
      id: "prod-eecp-system",
      name: "OMAY Latest-Gen EECP Therapy System",
      category: "eecp",
      categoryLabel: "EECP Therapy Systems",
      badge: "Clinical Equipment & Therapy",
      priceMYR: 125000.00,
      isTherapyPackage: true,
      packagePriceMYR: 3500.00,
      image: "eecp_omay_system",
      shortDesc: "OMAY latest-generation ECG-synchronized Enhanced External Counterpulsation system with touchscreen console & 3-lead monitoring.",
      fullDesc: "The flagship OMAY EECP System is engineered by OMAY (Guangzhou) Medical Technologies. Features 3-stage sequential pneumatic cuffs (calves, lower thighs, upper thighs), real-time ECG synchronization, SpO2 finger pulse sensor, Peak/Area ratio analytics, emergency cut-offs, and custom clinical recliner. Ideal for medical centers, cardiology clinics, and wellness institutes.",
      specs: ["Touchscreen GUI Console", "3-Lead ECG Sync", "SpO2 Pulse Oximeter", "3-Stage Cuff Set Included", "35-Session Clinical Warranty"]
    },
    {
      id: "prod-eecp-package-35",
      name: "OMAY EECP 35-Session Complete Therapy Regimen",
      category: "eecp",
      categoryLabel: "EECP Therapy Packages",
      badge: "Full Clinical Regimen",
      priceMYR: 3800.00,
      isTherapyPackage: true,
      image: "eecp_therapy_session",
      shortDesc: "Full 35-session outpatient EECP cardiac renewal program conducted at INNOHEAR Kajang / RPWP Medical Center.",
      fullDesc: "Includes comprehensive Pre-EECP cardiologist evaluation, blood pressure & SpO2 tracking, 35 daily 45-60 minute sessions (5 days/week over 7 weeks), and post-regimen cardiac endurance assessment.",
      specs: ["35 Clinical Sessions", "Pre & Post Vitals Assessment", "Dedicated Senior Paramedic", "Progress Reporting"]
    },
    {
      id: "prod-resound-linx",
      name: "ReSound LiNX Quattro Rechargeable Hearing Aid",
      category: "hearing",
      categoryLabel: "Hearing Aids",
      badge: "Premium Audiology",
      priceMYR: 4200.00,
      image: "resound_linx_quattro",
      shortDesc: "Advanced 2.4 GHz Bluetooth rechargeable hearing aid with spatial sensing & direct streaming for iOS and Android.",
      fullDesc: "Delivers unmatched sound quality, layers of detail, and high-frequency resolution. Suitable for mild, moderate, severe, to profound hearing loss. Includes portable charging case and 3-year warranty.",
      specs: ["Rechargeable Lithium-Ion", "Direct Audio Streaming", "Spatial Sense Technology", "IP68 Nano-Coated Waterproof"]
    },
    {
      id: "prod-oticon-real",
      name: "Oticon Real 1 MiniRITE R",
      category: "hearing",
      categoryLabel: "Hearing Aids",
      badge: "BrainHearing™ Tech",
      priceMYR: 4800.00,
      image: "oticon_real_1",
      shortDesc: "Powered by Polaris R™ chip with Deep Neural Network processing to reduce disruptive wind & handling noise.",
      fullDesc: "Oticon Real gives you access to the full sound scene with real-world clarity while suppressing sudden harsh noises. Designed for seamless connectivity and natural acoustic awareness.",
      specs: ["Deep Neural Network 2.0", "Wind & Handling Stabilizer", "Hands-free Calls", "Desktop Smart Charger"]
    },
    {
      id: "prod-phonak-audeo",
      name: "Phonak Audéo Lumity L90-R",
      category: "hearing",
      categoryLabel: "Hearing Aids",
      badge: "AutoSense OS™ 5.0",
      priceMYR: 5100.00,
      image: "phonak_audeo_lumity",
      shortDesc: "Smart speech enhancement technology designed for noisy conversations with universal Bluetooth connectivity.",
      fullDesc: "Phonak Lumity focuses on understanding speech in challenging listening environments. Automatically adapts to ambient noise levels and connects directly to smartphones, TVs, and tablets.",
      specs: ["StereoZoom 2.0 Beamforming", "Tap Control Sensors", "Universal Bluetooth Pairing", "Health Data Tracking"]
    },
    {
      id: "prod-interton-move",
      name: "Interton Move 4 Digital Hearing Aid",
      category: "hearing",
      categoryLabel: "Hearing Aids",
      badge: "Essential Value",
      priceMYR: 2200.00,
      image: "interton_move_4",
      shortDesc: "Ergonomic, reliable digital hearing aid delivering clear sound and ease of use for everyday conversations.",
      fullDesc: "Designed in Denmark, Interton Move offers robust Swiss-Danish audio engineering at an accessible price. Weatherproof nanocoating and simple smartphone app control.",
      specs: ["Nanocoated Protection", "App Volume Control", "Feedback Manager", "Extended Battery Life"]
    },
    {
      id: "prod-drmas-sanitiser-500",
      name: "DrMas 85% Ethanol Hand Sanitiser (500ml Pump)",
      category: "sanitiser",
      categoryLabel: "Medical Supplies",
      badge: "MDA Registered",
      priceMYR: 25.00,
      image: "drmas_sanitiser_500ml",
      shortDesc: "Medical-grade 85% ethanol rinse-free hand sanitiser. Kills 99.99% of bacteria, viruses, and pathogens.",
      fullDesc: "Formulated specifically for clinical environments during the COVID-19 pandemic and everyday hygiene. Odorless, fragrance-free, fast-drying, and non-sticky formula registered with Malaysian MDA.",
      specs: ["85% Bio-Ethanol Base", "Rinse-Free & Non-Sticky", "Kills 99.99% Germs", "MDA Reg: GA5192020-48201"]
    },
    {
      id: "prod-drmas-sanitiser-5l",
      name: "DrMas Hospital-Grade Hand Sanitiser (5L Bulk Refill)",
      category: "sanitiser",
      categoryLabel: "Medical Supplies",
      badge: "Bulk Clinical Supply",
      priceMYR: 160.00,
      image: "drmas_sanitiser_5l",
      shortDesc: "5-Liter bulk refill container for hospitals, clinics, schools, and corporate institutions.",
      fullDesc: "Cost-effective bulk refill canister. Formulated under strict chemical engineering standards (supervised by Dr. Intan Salwani, PhD Cambridge). Safe for frequent daily application.",
      specs: ["5000ml Refill Canister", "85% Ethanol Concentration", "Non-Corrosive Formula", "Commercial & Hospital Ready"]
    },
    {
      id: "prod-drmas-water-based",
      name: "DrMas Water-Based Antimicrobial Mist (100ml Travel)",
      category: "sanitiser",
      categoryLabel: "Medical Supplies",
      badge: "Alcohol-Free",
      priceMYR: 18.00,
      image: "drmas_water_based",
      shortDesc: "Non-flammable, alcohol-free water-based sanitising spray suitable for sensitive skin and children.",
      fullDesc: "Gentle yet powerful quaternary ammonium complex spray. Provides persistent micro-layer barrier protection on skin and surfaces for up to 4 hours.",
      specs: ["0% Alcohol / Non-Flammable", "Child & Sensitive Skin Safe", "Persistent 4hr Protection", "Pocket Travel Size"]
    },
    {
      id: "prod-ppe-faceshield-set",
      name: "RPWP Medical Face Shield & 3-Ply Mask Combo Set",
      category: "sanitiser",
      categoryLabel: "PPE & Protection",
      badge: "Frontliner Grade",
      priceMYR: 35.00,
      image: "rpwp_ppe_combo",
      shortDesc: "High-clarity anti-fog protective face shield set with 50 pcs high-filtration BFE ≥ 99% surgical masks.",
      fullDesc: "Produced originally in RPWP's emergency manufacturing facilities for the Ministry of Health. Ergonomic headband with crystal-clear PET shield and comfortable elastic ear-loops.",
      specs: ["Anti-Fog Optic Shield", "BFE ≥ 99% Filtration", "Fluid Resistant", "50 Masks + 2 Shields"]
    }
  ],
  faqs: [
    {
      q: "What is EECP and how does OMAY technology work?",
      a: "EECP (Enhanced External Counterpulsation) is a non-invasive, outpatient treatment for heart disease and poor circulation. OMAY EECP uses three sets of pneumatic cuffs wrapped around your calves, thighs, and buttocks. Synchronized with your heart's ECG, the cuffs inflate sequentially during heart relaxation (diastole) to pump blood to coronary arteries and deflates quickly before heart contraction (systole). This stimulates Nitric Oxide release, boosts VEGF for natural bypass growth, and reduces heart workload."
    },
    {
      q: "Is EECP therapy painful or invasive?",
      a: "No! EECP is 100% non-invasive, non-surgical, and painless. You lie comfortably on an ergonomic therapy bed while the cuffs compress firmly in rhythm with your heartbeat. Most patients watch TV, listen to music, or sleep during their 45-60 minute sessions."
    },
    {
      q: "Who is eligible for OMAY EECP therapy?",
      a: "EECP is recommended for individuals with angina chest pain, coronary artery disease, heart failure recovery, diabetes microvascular complications, stroke rehabilitation, inner ear ischemia (tinnitus/sudden deafness), or those seeking executive vitality & sports recovery. Our clinical team conducts a free pre-evaluation check prior to starting."
    },
    {
      q: "Where is INNOHEAR Kajang located and how do I book a hearing test?",
      a: "INNOHEAR Kajang is located at A-01-05, Jalan Seri Kenari 10, Taman Seri Kenari, 43000 Kajang, Selangor. You can book an appointment directly through our online booking button, or contact us via WhatsApp (+6019-680 8697)."
    },
    {
      q: "How does my purchase support RPWP (Rumah Pengasih Warga Prihatin)?",
      a: "RPWP Healthcare was founded as a self-sustaining social enterprise. 100% of our business profits channel directly to sustaining a 260 pax sustainable community comprising all types of charity members, staff, students, and co-founders at RPWP without depending on public donations."
    }
  ]
};
