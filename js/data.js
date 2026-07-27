/**
 * RPWP Healthcare Data Repository
 * Version: 1.0.0
 * Contains all original digital assets, sections, images, and content from www.rpwphealthcare.com
 */

const RPWP_DATA = {
  version: "1.0.0",
  logos: {
    rpwp: "https://www.rpwphealthcare.com/img/cms/LOGO/RPWPHC/RPWPHC 21x9 150.png",
    innohear: "https://www.rpwphealthcare.com/img/cms/LOGO/INNOHEAR/INNOHEAR-500.png",
    leadercb: "https://leadercb.com/wp-content/uploads/2023/05/Logo-LCB.jpeg",
    mda: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/logo-mda-350.png",
    promoBanner: "https://www.rpwphealthcare.com/modules/ps_banner/img/sale70.png"
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
        desc: "Audited and certified under Good Distribution Practice for Medical Devices (GDPMD) by Leader Certification Sdn. Bhd. (leadercb.com)."
      },
      {
        code: "MDA",
        name: "Malaysian Medical Device Authority Registered",
        logo: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/logo-mda-350.png",
        desc: "Registered with the Malaysian Medical Device Authority (MDA)."
      }
    ],
    socialImpact: {
      community: "Rumah Pengasih Warga Prihatin (Home for Love & Compassionate Community)",
      residentsCount: 260,
      impactDesc: "100% of RPWP Healthcare profits are reinvested to sustain a 260 pax sustainable community comprising all types of charity members, staff, students, and co-founders without depending on external alms."
    }
  },
  branches: [
    {
      id: "kajang",
      name: "RPWP HEALTHCARE (INNOHEAR Kajang)",
      address: "A-01-05, Jalan Seri Kenari 10, Taman Seri Kenari, 43000 Kajang, Selangor, Malaysia",
      phone: "(+60) 19-680 8697",
      phoneAlt: "(+60) 019-5588520",
      whatsapp: "https://wa.me/60196808697/?text=Salam%20RPWP%20Healthcare",
      waze: "https://waze.com/ul/hw2835bc0x",
      googleMaps: "https://maps.app.goo.gl/cFwsAmJaWG55oCTE8",
      facebook: "https://www.facebook.com/RPWPHealthcare/"
    }
  ],
  betterHearingSteps: [
    {
      step: "1",
      title: "1. Visit Our Hearing Center",
      desc: "Schedule a comfortable consultation at INNOHEAR Kajang with our certified audiologists."
    },
    {
      step: "2",
      title: "2. Hearing Assessment",
      desc: "Comprehensive Pure-Tone Audiometry (PTA), Otoscopy, and diagnostic ear evaluations."
    },
    {
      step: "3",
      title: "3. Try Our Hearing Solutions",
      desc: "Experience digital prescription hearing aids and custom-fit earmolds tailored to your lifestyle."
    }
  ],
  hearingLossTypes: [
    {
      level: "Mild Hearing Loss",
      decibels: "26 - 40 dB",
      desc: "Difficulty hearing soft sounds like dripping water, rustling leaves, or quiet whispers.",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/photo/Dripping-Water-750x500.jpg"
    },
    {
      level: "Moderate Hearing Loss",
      decibels: "41 - 55 dB",
      desc: "Difficulty understanding conversation or soft musical tones over background room noise.",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/photo/piano-beginner-750x500.jpg"
    },
    {
      level: "Severe Hearing Loss",
      decibels: "71 - 90 dB",
      desc: "Speech is inaudible without amplification. Only loud shouting or crying sounds can be heard.",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/photo/crying-kid-750x500.jpg"
    },
    {
      level: "Profound Hearing Loss",
      decibels: "91+ dB",
      desc: "Extreme hearing difficulty. Only extremely loud industrial sounds like jackhammers are felt.",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/photo/jack-hammer-750x500.jpg"
    }
  ],
  eecpService: {
    title: "State-of-the-Art High Premium EECP Therapy Service",
    subtitle: "Advanced Non-Invasive Cardiovascular Counterpulsation Therapy",
    desc: "Our medical center provides non-invasive, outpatient Enhanced External Counterpulsation (EECP) therapy using state-of-the-art high premium cardiac equipment. Guided by ECG synchronization, sequential pneumatic pressure cuffs promote natural collateral circulation ('Natural Bypass') without surgery or downtime.",
    mechanisms: [
      {
        title: "Wall Shear Stress (WSS)",
        desc: "Sequential pressure pulses generate shear stress along blood vessel walls to activate mechanosensors."
      },
      {
        title: "Nitric Oxide (NO) Boost",
        desc: "Stimulates endothelial Nitric Oxide release to relax vascular smooth muscle and restore vessel elasticity."
      },
      {
        title: "VEGF Angiogenesis",
        desc: "Promotes Vascular Endothelial Growth Factor for natural collateral blood vessel formation."
      },
      {
        title: "LVEF Augmentation",
        desc: "Rapid cuff deflation during systole reduces cardiac afterload workload and boosts Left Ventricular Ejection Fraction."
      }
    ]
  },
  advisoryBoard: [
    {
      id: "dr-masjuki",
      name: "Dr. Masjuki",
      role: "Executive Chairman",
      qualifications: "Graduated from UPM in Veterinary | Established numbers of businesses worldwide",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/drmasjuki 500.jpg",
      bio: "Executive Chairman of RPWP Healthcare. Directs global business strategy and technology expansion."
    },
    {
      id: "dr-ruzaini",
      name: "Dr. Ruzaini Ikram",
      role: "Public Health Consultant",
      qualifications: "MD (Medical School, USM) | Vast experience in healthcare & public health",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/ruzaini 500.jpg",
      bio: "Practicing doctor in healthcare with deep expertise in public health and preventative medicine."
    },
    {
      id: "dr-madihah",
      name: "Dr. Madihah Junid",
      role: "Product Planning Advisory",
      qualifications: "MD (Kubang Kerian School, USM)",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/madihah 500.jpg",
      bio: "Product planning advisory and practicing doctor guiding clinical device specifications."
    },
    {
      id: "dr-intan",
      name: "Dr. Intan Salwani",
      role: "Director of RPWP Healthcare",
      qualifications: "Ph.D in Chemical Engineering (Cambridge University, UK)",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/dr intan 500.jpg",
      bio: "Director overseeing chemical engineering formulations and medical device manufacturing quality."
    },
    {
      id: "dr-syazana",
      name: "Dr. Syazana Umar",
      role: "Active Scientist",
      qualifications: "PhD Science & Technology in Community Health (USIM)",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/syazana 500.jpg",
      bio: "Active scientist leading community health research, clinical studies, and product efficacy."
    },
    {
      id: "khairunnisa",
      name: "Khairunnisa Aqilah",
      role: "R&D Team Lead",
      qualifications: "Microbiologist (University of Malaya)",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/aqilah 500.jpg",
      bio: "RPWP Healthcare's Research & Development Team lead in charge of antimicrobial formulations."
    },
    {
      id: "natasha",
      name: "Nurul Natasha Mohd Razdi",
      role: "Lead Clinical Audiologist",
      qualifications: "Bachelor of Audiology (Hons) (USM)",
      img: "https://www.rpwphealthcare.com/img/cms/LOGO/INNOHEAR/INNOHEAR-500.png",
      bio: "Leads clinical hearing assessments, hearing aid prescription tuning, and earmold fitting at INNOHEAR Kajang."
    },
    {
      id: "mohd-abid",
      name: "Mohd Abid",
      role: "Biomedical Engineer (P&O)",
      qualifications: "B.Eng Biomedical Engineering (Prosthetics & Orthotics) (University of Malaya, 2016)",
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Advisories/Abid.png",
      bio: "Biomedical engineering lead specializing in pneumatic pressure synchronization and customized orthotics."
    }
  ],
  brands: [
    { name: "Oticon", logo: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/Oticon/images.png", link: "https://www.oticon.com/" },
    { name: "Phonak", logo: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/Phonak/Phonak Logo.jpg", link: "https://www.phonak.com/en-int" },
    { name: "ReSound", logo: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/General/logo-resound-350x150.png", link: "https://www.resound.com/en/" },
    { name: "Interton", logo: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/General/logo-internton-350x15000.png", link: "https://www.interton.com/en/" }
  ],
  products: [
    {
      id: "prod-high-premium-eecp",
      name: "State-of-the-Art High Premium EECP Therapy Service",
      category: "eecp",
      badge: "Cardiac Service",
      priceMYR: 12500.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/photo/piano-beginner-750x500.jpg",
      shortDesc: "High Premium Non-Invasive Cardiovascular Counterpulsation Therapy (35-session treatment regimen).",
      fullDesc: "ECG-synchronized high premium EECP therapy to stimulate Nitric Oxide release, VEGF angiogenesis, Wall Shear Stress, and LVEF augmentation."
    },
    {
      id: "prod-resound-quattro",
      name: "ReSound LiNX Quattro Rechargeable Hearing Aid",
      category: "hearing",
      badge: "ReSound Official",
      priceMYR: 4200.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/General/logo-resound-350x150.png",
      shortDesc: "Covers mild, moderate, severe, or profound hearing loss. Superior sound quality & direct audio streaming.",
      fullDesc: "ReSound LiNX Quattro offers a complete hearing solution option to suit different hearing needs and lifestyles with pristine acoustic clarity."
    },
    {
      id: "prod-oticon-real",
      name: "Oticon Real 1 Digital Hearing Aid",
      category: "hearing",
      badge: "Oticon Official",
      priceMYR: 4800.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/Oticon/images.png",
      shortDesc: "Advanced real-world speech understanding in noisy environments with wind & handling noise stabilizer.",
      fullDesc: "Powered by Polaris R platform for access to the complete natural sound scene."
    },
    {
      id: "prod-phonak-audeo",
      name: "Phonak Audéo Lumity Digital Hearing Aid",
      category: "hearing",
      badge: "Phonak Official",
      priceMYR: 5100.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/Phonak/Phonak Logo.jpg",
      shortDesc: "Smart speech enhancement and universal Bluetooth connectivity to smartphones and TVs.",
      fullDesc: "AutoSense OS technology automatically adapts to challenging acoustic environments."
    },
    {
      id: "prod-interton-move",
      name: "Interton Move Digital Hearing Aid",
      category: "hearing",
      badge: "Interton Denmark",
      priceMYR: 2200.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/HearingAid/General/logo-internton-350x15000.png",
      shortDesc: "Danish audio engineering at an accessible price. Weatherproof nanocoating and clear sound.",
      fullDesc: "Ergonomic, reliable digital hearing aid designed for active daily communication."
    },
    {
      id: "prod-drmas-500ml",
      name: "DrMas 85% Ethanol Hand Sanitiser (500ml)",
      category: "sanitiser",
      badge: "MDA Registered",
      priceMYR: 25.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Sanitizer/liquid-hand-sanitiser-500ml[1].jpg",
      shortDesc: "85% ethanol based rinse-free hand sanitiser. Kills 99.99% germs and bacteria. Fragrance free.",
      fullDesc: "Formulated under strict chemical engineering standards (supervised by Dr. Intan Salwani, PhD Cambridge). MDA registered product."
    },
    {
      id: "prod-ppe-gown",
      name: "RPWP Medical PPE Isolation Gown",
      category: "sanitiser",
      badge: "MOH Emergency Grade",
      priceMYR: 35.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/PPE/Isolation-Gown-PPE-Projek-Pelangi-015.jpg",
      shortDesc: "Fluid-resistant medical isolation gown manufactured in RPWP community facilities for frontliners.",
      fullDesc: "Produced originally during the emergency COVID-19 outbreak for the Ministry of Health."
    }
  ]
};
