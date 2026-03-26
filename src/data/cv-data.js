export const cvData = {
  personal: {
    name: "Niklas Martinek",
    title: {
      en: "Hardware Developer & Embedded Systems Enthusiast",
      de: "Hardwareentwickler & Embedded Systems Enthusiast",
    },
    location: {
      en: "St. Margarethen im Burgenland, Austria",
      de: "St. Margarethen im Burgenland, Österreich",
    },
    avatar: "",
    bio: {
      en: "Hardware developer with hands-on experience in **automotive electronics manufacturing — from bare PCB to finished product**. I design custom PCBs using EasyEDA Pro, build embedded systems with Arduino and Raspberry Pi, and use modern AI-assisted development workflows to create web-based tools and desktop applications.\n\nCurrently completing my **Matura in Electrical Engineering** and preparing for a degree in **Embedded & Cyber-Physical Systems** at FH Technikum Wien.",
      de: "Hardwareentwickler mit Praxiserfahrung in der **Automotive-Elektronikfertigung — von der Rohplatine bis zum Endprodukt**. Ich entwerfe eigene Leiterplatten in EasyEDA Pro, baue Embedded-Systeme mit Arduino und Raspberry Pi und nutze KI-gestützte Entwicklungsworkflows für Web-Apps und Desktop-Anwendungen.\n\nDerzeit schließe ich meine **Matura in Elektrotechnik** ab und bereite mich auf das Studium **Embedded & Cyber-Physical Systems** an der FH Technikum Wien vor.",
    },
    contact: {
      email: "niklasmartinek@gmail.com",
      phone: "",
      github: "https://github.com/niki-mtown",
      linkedin: "",
    },
  },

  experience: [
    {
      company: "MELECS Holding",
      role: {
        en: "Test Specialist → Hardware Developer (starting May 2026)",
        de: "Test Specialist → Hardwareentwickler (ab Mai 2026)",
      },
      period: {
        en: "March 2026 — Present",
        de: "März 2026 — Heute",
      },
      description: {
        en: "Working in automotive electronics manufacturing at a leading supplier.\n\n- Transitioning into **hardware development** starting May 2026 (PCB design, automotive standards)\n- Knowledge of the complete SMT manufacturing process: laser traceability, screen printing, reflow soldering, SPI, AOI, THT assembly through to finished product\n- Personal projects using AI-assisted development: **Raspberry Pi Roulette** with LED matrix, Flask web UI and 3D-printed enclosure; **Fintrackr** finance app with Next.js; **Korg Manager** desktop app with Electron",
        de: "Automotive-Elektronikfertigung bei einem führenden Zulieferer.\n\n- Ab Mai 2026 Wechsel in die **Hardwareentwicklung** (Leiterplattendesign, Automotive-Normen)\n- Erfahrung mit dem gesamten SMT-Prozess: Laser-Traceability, Pastendruck, Reflowlöten, SPI, AOI, THT-Bestückung bis zum Endprodukt\n- Eigene Projekte mit KI-gestützter Entwicklung: **Raspberry Pi Roulette** mit LED-Matrix, Flask-Weboberfläche und 3D-Druck-Gehäuse; **Fintrackr** Finanz-App mit Next.js; **Korg Manager** Desktop-App mit Electron",
      },
    },
    {
      company: "Siemens / MELECS EWS GmbH",
      role: {
        en: "Apprenticeship — Mechatronics Technician",
        de: "Lehre — Mechatroniker",
      },
      period: "2022 — 2026",
      description: {
        en: "Technical training in electronics manufacturing with a focus on automotive applications.\n\n- Soldering and rework of SMD components (0402 to 1206, ICs, electrolytic capacitors)\n- PCB design and manufacturing (EasyEDA Pro, PCBWay)\n- In parallel: vocational matriculation exam (BRP), WIFI Niederösterreich",
        de: "Fachausbildung in der Elektronikfertigung mit Schwerpunkt Automotive.\n\n- Löten und Nacharbeit von SMD-Bauteilen (0402 bis 1206, ICs, Elkos)\n- Leiterplattendesign und -fertigung (EasyEDA Pro, PCBWay)\n- Begleitend: Berufsreifeprüfung (BRP), WIFI Niederösterreich",
      },
    },
  ],

  education: [
    {
      institution: "WIFI Niederösterreich",
      degree: {
        en: "Vocational Matriculation Exam (Matura)",
        de: "Berufsreifeprüfung (Matura)",
      },
      period: {
        en: "2022 — June 2026",
        de: "2022 — Juni 2026",
      },
      description: {
        en: "BRP completed in parallel with apprenticeship. Subjects: electrical engineering, German, English, and mathematics. Currently completing final exams.",
        de: "Lehre mit Matura, begleitend zur Berufsausbildung. Fächer: Elektrotechnik, Deutsch, Englisch und Mathematik. Aktuell im Abschluss.",
      },
    },
    {
      institution: "Siemens / MELECS EWS GmbH",
      degree: {
        en: "Apprenticeship Diploma — Mechatronics & Automation Technician",
        de: "Lehrabschluss — Mechatroniker-Automatisierungstechniker",
      },
      period: "2022 — 2026",
      description: {
        en: "Vocational training with a focus on automotive electronics manufacturing.",
        de: "Fachausbildung mit Schwerpunkt Automotive-Elektronikfertigung.",
      },
    },
  ],

  projects: [
    {
      name: "Korg Manager",
      image: "/images/Korg-manager.png",
      period: "2025 — Present",
 description: {
  en: "Electron desktop app for Korg Electribe (ESX-1, E2S, EMX-1):\n- Sample manager with **Web Audio API** playback\n- Pattern viewer styled after original hardware\n- **240 automated tests** with Vitest",
  de: "Electron Desktop-App für Korg Electribe (ESX-1, E2S, EMX-1):\n- Sample-Manager mit **Web Audio API** Wiedergabe\n- Pattern-Viewer im Stil der Original-Hardware\n- **240 automatisierte Tests** mit Vitest",
},
      tech: ["Electron", "JavaScript", "Web Audio API", "Vitest"],
      github: "https://github.com/mx-town/Korg_Manager",
    },
    {
      name: "Trainings-PCB (SMT + THT)",
      image: "/images/PCB.png",
      period: "2025",
  description: {
  en: "Training board for soldering & rework exercises:\n- Designed in **EasyEDA Pro**, manufactured by PCBWay\n- SMD (0402–1206), ICs, THT components\n- Two variants: with and withoout mass area",
  de: "Übungsplatine für Löt- und Nacharbeit:\n- Entworfen in **EasyEDA Pro**, gefertigt bei PCBWay\n- SMD (0402–1206), ICs, THT-Komponenten\n- Zwei Varianten: mit und ohne Massefläche ",
},
      tech: ["EasyEDA Pro", "PCBWay", "SMT", "THT"],
      github: "",
    },
    {
      name: {
        en: "TempCTRL — Temperature Controller",
        de: "TempCTRL — Temperaturregelung",
      },
      image: "/images/tempctrl.png",
      period: "2026",
    description: {
  en: "Arduino Nano temperature controller:\n- DS18B20 & DHT22 sensors, relay-driven 24V fan\n- Custom perfboard layout\n- Browser **HMI dashboard** via Web Serial API",
  de: "Temperaturregelung auf Arduino-Nano-Basis:\n- DS18B20- & DHT22-Sensoren, 24V-Lüftersteuerung\n- Eigenes Layout auf Lochrasterplatine\n- **HMI-Dashboard** im Browser via Web Serial API",
},
      tech: ["Arduino IDE", "C++", "Web Serial API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/mx-town/Arduino-temp-ctrl",
    },
    {
      name: "Roulette — Raspberry Pi",
      image: "/images/Rouelette.png",
      period: "2025",
   description: {
  en: "Self-built physical roulette device:\n- 37-LED matrix with GPIO multiplexing\n- Flask web UI, WiFi access point\n- **3D-printed enclosure**",
  de: "Roulette in Eigenentwicklung:\n- 37-LED-Matrix mit GPIO-Multiplexing\n- Flask-Weboberfläche, WLAN-Hotspot\n- **3D-gedrucktes Gehäuse**",
},

      tech: ["Raspberry Pi", "Python", "Flask", "pigpio", "3D Printing"],
      github: "https://github.com/mx-town/rpi-roulette",
    },
    {
      name: "LAP Quiz & LAP Lexikon",
      image: "/images/lap-quiz.png",
      period: "2026",
description: {
  en: "Two web apps for apprenticeship exam prep:\n- Quiz: exam simulation, chapter training, blitz round\n- Lexicon: 10 electrical engineering categories",
  de: "Zwei Web-Apps zur LAP-Vorbereitung:\n- Quiz: Prüfungssimulation, Kapiteltraining, Blitzrunde\n- Nachschlagewerk: 10 Fachkategorien",
},
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mx-town/lap-quiz",
    },
    {
      name: "Fintrackr",
      image: "/images/FinTrackr.png",
      period: "2026",
   description: {
  en: "Personal finance tracker:\n- Next.js with local SQLite via Drizzle ORM\n- Fully offline, no cloud dependencies",
  de: "Persönliche Finanzverwaltung:\n- Next.js mit lokaler SQLite über Drizzle ORM\n- Komplett offline, keine Cloud-Anbindung",
},
      tech: ["Next.js", "TypeScript", "Drizzle ORM", "SQLite"],
      github: "https://github.com/mx-town/Fintrackr",
    },
  ],

  skills: [
    {
      category: {
        en: "PCB & Hardware",
        de: "Leiterplatten & Hardware",
      },
      items: [
        "EasyEDA Pro",
        "KiCad",
        "Arduino IDE",
        { en: "Soldering & Rework", de: "Löten & Nacharbeit" },
        { en: "Circuit Design", de: "Schaltungsentwurf" },
        { en: "SMT & THT Assembly", de: "SMT- & THT-Bestückung" },
      ],
    },
    {
      category: {
        en: "Manufacturing & Industrial",
        de: "Fertigung & Industrie",
      },
      items: [
        "TIA Portal (Siemens)",
        "FluidSim",
        { en: "SMT Manufacturing Processes", de: "SMT-Fertigungsprozesse" },
        "Reflow / SPI / AOI",
      ],
    },
    {
      category: {
        en: "Software & Development",
        de: "Software & Entwicklung",
      },
      items: ["VS Code", "Git / GitHub", "Electron", "Next.js", "TypeScript", "Python"],
    },
    {
      category: "Embedded",
      items: ["Arduino (C++)", "Raspberry Pi", "Web Serial API", "pigpio"],
    },
    {
      category: {
        en: "AI & Agentic Development",
        de: "KI & agentische Softwareentwicklung",
      },
      items: ["Claude Code", "Cursor", "Agentic Workflows", "Prompt Engineering"],
    },
  ],

  languages: [
    {
      language: { en: "German", de: "Deutsch" },
      level: { en: "Native", de: "Muttersprache" },
    },
    {
      language: { en: "English", de: "Englisch" },
      level: { en: "Upper-intermediate (B2)", de: "Fließend (B2)" },
    },
  ],

  settings: {
    showExperience: true,
    showEducation: true,
    showSkills: true,
    showProjects: true,
    enablePdfDownload: true,
  },
}