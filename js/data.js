/**
 * RPWP Healthcare Master Data Store (v1.0.0)
 * Official content repository for RPWP Healthcare, INNOHEAR Kajang, and Medical Advisory Board.
 */

const RPWP_DATA = {
  version: "1.0.0",
  companyName: "RPWP Healthcare Sdn Bhd",
  helplinePhone: "(+60) 19-680 8697",
  helplinePhoneRaw: "60196808697",
  email: "customer@rpwphealthcare.com",

  certification: {
    title: "GDPMD Certified",
    certifiedBy: "Leader Certification Body (LeaderCB — leadercb.com)",
    certifiedUrl: "https://leadercb.com/",
    description: "Good Distribution Practice for Medical Devices (GDPMD) certified by Leader Certification Body to ensure establishment ability to maintain quality, safety and performance of medical devices.",
    badgeUrl: "https://leadercb.com/wp-content/uploads/2023/05/Logo-LCB.jpeg"
  },

  advisories: [
    {
      id: "drmasjuki",
      name: "Dr. Masjuki",
      role: "Executive Chairman",
      qualifications: "Graduated from UPM in Veterinary | Established numbers of businesses worldwide",
      bio: "Executive Chairman of RPWP Healthcare. Directs global business strategy, community growth, and technology expansion.",
      imgUrl: "images/advisories/drmasjuki.jpg"
    },
    {
      id: "ruzaini",
      name: "Dr. Ruzaini Ikram",
      role: "Public Health Consultant",
      qualifications: "MD (Medical School, USM) | Vast experience in healthcare & public health",
      bio: "Practicing doctor in healthcare with deep expertise in public health, preventative medicine, and community care.",
      imgUrl: "images/advisories/ruzaini.jpg"
    },
    {
      id: "dr-hani",
      name: "Dr. Hani",
      role: "Medical Officer & Clinical Advisory",
      qualifications: "Doctor of Medicine (M.D.) (Universiti Putra Malaysia - UPM)",
      bio: "Representing the vibrant young generation raised within the RPWP community. Dr. Hani recently graduated as a Medical Doctor from UPM, providing clinical advisory oversight and healthcare services.",
      imgUrl: "images/advisories/dr-hani.jpg"
    },
    {
      id: "madihah",
      name: "Dr. Madihah Junid",
      role: "Product Planning Advisory",
      qualifications: "MD (Kubang Kerian School, USM)",
      bio: "Product planning advisory and practicing doctor guiding clinical device specifications and quality compliance.",
      imgUrl: "images/advisories/madihah.jpg"
    },
    {
      id: "intan",
      name: "Dr. Intan Salwani",
      role: "Director of RPWP Healthcare",
      qualifications: "Ph.D in Chemical Engineering (Cambridge University, UK)",
      bio: "Director overseeing chemical engineering formulations, sanitiser manufacturing, and medical device compliance.",
      imgUrl: "images/advisories/intan.jpg"
    },
    {
      id: "syazana",
      name: "Dr. Syazana Umar",
      role: "Active Scientist",
      qualifications: "PhD Science & Technology in Community Health (USIM)",
      bio: "Active scientist leading community health research, clinical product studies, and efficacy validation.",
      imgUrl: "images/advisories/syazana.jpg"
    },
    {
      id: "aqilah",
      name: "Khairunnisa Aqilah",
      role: "R&D Team Lead",
      qualifications: "Microbiologist (University of Malaya)",
      bio: "RPWP Healthcare's Research & Development Team lead in charge of antimicrobial formulations and lab testing.",
      imgUrl: "images/advisories/aqilah.jpg"
    },
    {
      id: "natasha",
      name: "Nurul Natasha Mohd Razdi",
      role: "Lead Clinical Audiologist",
      qualifications: "Bachelor of Audiology (Hons) (USM)",
      bio: "Leads clinical hearing assessments, hearing aid prescription tuning, and custom earmold fitting at INNOHEAR Kajang.",
      imgUrl: "images/advisories/natasha.png"
    },
    {
      id: "abid",
      name: "Mohd Abid",
      role: "Biomedical Engineer (P&O)",
      qualifications: "B.Eng Biomedical Engineering (Prosthetics & Orthotics) (University of Malaya, 2016)",
      bio: "Biomedical engineering lead specializing in pneumatic pressure synchronization and customized orthotic rehabilitation.",
      imgUrl: "images/advisories/abid.png"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RPWP_DATA;
}
