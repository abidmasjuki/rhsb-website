/**
 * RPWP Healthcare Data Repository
 * Version: 1.0.0
 * Contains isolated mock data and original digital assets from rpwphealthcare.com
 */

const RPWP_DATA = {
  version: "1.0.0",
  logos: {
    rpwp: "https://www.rpwphealthcare.com/img/cms/LOGO/RPWPHC/RPWPHC 21x9 150.png",
    innohear: "https://www.rpwphealthcare.com/img/cms/LOGO/INNOHEAR/INNOHEAR-500.png",
    leadercb: "https://leadercb.com/wp-content/uploads/2023/05/Logo-LCB.jpeg",
    mda: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/logo-mda-350.png"
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
        desc: "Enforcing medical device regulations and medical device registration."
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
      id: "prod-eecp-system",
      name: "OMAY Latest-Gen EECP Therapy System",
      category: "eecp",
      badge: "Cardiac Technology",
      priceMYR: 125000.00,
      img: "https://www.rpwphealthcare.com/img/cms/RPWPHC/Others/photo/piano-beginner-750x500.jpg",
      shortDesc: "OMAY Latest-Generation Enhanced External Counterpulsation ECG-synchronized system for non-invasive natural bypass therapy.",
      fullDesc: "Manufactured by OMAY (Guangzhou) Medical Technologies under Technical Director Dr. Zhou Shao Chun and pioneer inventor Dr. Zheng Zhen Shen. Features 3 sequential pneumatic cuffs (calves, lower thighs, upper thighs), 3-lead ECG heart syncing, Nitric Oxide boost, VEGF collateral vessel angiogenesis, and LVEF augmentation."
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
