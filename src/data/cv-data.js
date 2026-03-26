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
      en: "Hardware developer with hands-on experience in **automotive electronics manufacturing — from bare PCB to finished product**. I design custom PCBs using EasyEDA Pro, develop embedded systems with Arduino and Raspberry Pi, and build web-based tools with Next.js, Electron, and Flask.\n\nCurrently completing my **Matura in Electrical Engineering** and preparing for a degree in **Embedded & Cyber-Physical Systems** at FH Technikum Wien.",
      de: "Hardwareentwickler mit Praxiserfahrung in der **Automotive-Elektronikfertigung — von der Rohplatine bis zum Endprodukt**. Ich entwerfe eigene Leiterplatten in EasyEDA Pro, baue Embedded-Systeme mit Arduino und Raspberry Pi und entwickle webbasierte Tools mit Next.js, Electron und Flask.\n\nDerzeit schließe ich meine **Matura in Elektrotechnik** ab und bereite mich auf das Studium **Embedded & Cyber-Physical Systems** an der FH Technikum Wien vor.",
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
        en: "Working in automotive electronics manufacturing at a leading supplier.\n\n- Transitioning into **hardware development** starting May 2026 (PCB design, automotive standards)\n- Knowledge of the complete SMT manufacturing process: laser traceability, screen printing, reflow soldering, SPI, AOI, THT assembly through to finished product\n- Personal projects alongside work: **Raspberry Pi Roulette** with LED matrix, Flask web UI and 3D-printed enclosure; **Fintrackr** finance app built with Next.js; **Korg Manager** desktop application built with Electron",
        de: "Automotive-Elektronikfertigung bei einem führenden Zulieferer.\n\n- Ab Mai 2026 Wechsel in die **Hardwareentwicklung** (Leiterplattendesign, Automotive-Normen)\n- Erfahrung mit dem gesamten SMT-Prozess: Laser-Traceability, Pastendruck, Reflowlöten, SPI, AOI, THT-Bestückung bis zum Endprodukt\n- Eigene Projekte nebenbei: **Raspberry Pi Roulette** mit LED-Matrix, Flask-Weboberfläche und 3D-Druck-Gehäuse; **Fintrackr** Finanz-App mit Next.js; **Korg Manager** Desktop-App mit Electron",
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
        en: "Electron-based desktop app for Korg Electribe synthesizers (ESX-1, E2S, EMX-1):\n- Sample manager for importing & organizing sounds\n- 18 DSP effects with **Web Audio API** playback\n- Pattern viewer styled after original hardware\n- **240 automated tests** with Vitest",
        de: "Desktop-App auf Electron-Basis für Korg Electribe Synthesizer (ESX-1, E2S, EMX-1):\n- Sample-Manager zum Importieren & Verwalten\n- 18 DSP-Effekte über die **Web Audio API**\n- Pattern-Viewer im Stil der Original-Hardware\n- **240 automatisierte Tests** mit Vitest",
      },
      tech: ["Electron", "JavaScript", "Web Audio API", "Vitest"],
      github: "https://github.com/mx-town/korg-manager",
    },
    {
      name: "Trainings-PCB (SMT + THT)",
      image: "/images/PCB.png",
      period: "2025",
      description: {
        en: "Self-designed training board for soldering & rework exercises:\n- Developed in **EasyEDA Pro**, manufactured by PCBWay\n- SMD components (0402–1206), ICs, capacitors, diodes, transistors\n- THT components for through-hole practice\n- Two variants: with and without solder paste",
        de: "Selbst entworfene Übungsplatine für Löt- und Nacharbeitsübungen:\n- Entwickelt in **EasyEDA Pro**, gefertigt bei PCBWay\n- SMD-Bauteile (0402–1206), ICs, Elkos, Dioden, Transistoren\n- THT-Komponenten für Durchsteckmontage\n- Zwei Varianten: mit und ohne Lötpaste",
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
        en: "Arduino Nano–based temperature controller:\n- DS18B20 & DHT22 sensors with RGB LED status display\n- Relay-driven 24V fan control\n- Custom PCB layout on perfboard\n- Browser-based **HMI dashboard** with Web Serial API\n- Live trend graph & setpoint control",
        de: "Temperaturregelung auf Arduino-Nano-Basis:\n- DS18B20- & DHT22-Sensoren mit RGB-LED-Statusanzeige\n- Relaisgesteuerte 24V-Lüftersteuerung\n- Eigenes Layout auf Lochrasterplatine\n- **HMI-Dashboard** im Browser mit Web Serial API\n- Echtzeit-Graph & Sollwertvorgabe",
      },
      tech: ["Arduino IDE", "C++", "Web Serial API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/mx-town/Arduino-temp-ctrl",
    },
    {
      name: "Roulette — Raspberry Pi",
      image: "/images/Rouelette.png",
      period: "2025",
      description: {
        en: "Fully self-built physical roulette machine:\n- 37-LED matrix with GPIO multiplexing\n- Flask web interface with REST API\n- WiFi access point for mobile players\n- **3D-printed enclosure**\n- Complete development from circuit design to finished product",
de: "Roulette-Gerät in Eigenentwicklung:\n- 37-LED-Matrix mit GPIO-Multiplexing\n- Flask-Weboberfläche mit REST API\n- Eigener WLAN-Hotspot für Mitspieler\n- **3D-gedrucktes Gehäuse**\n- Von der Schaltung bis zum fertigen Gerät alles selbst umgesetzt",      },
      tech: ["Raspberry Pi", "Python", "Flask", "pigpio", "3D Printing"],
      github: "https://github.com/mx-town/rpi-roulette",
    },
    {
      name: "LAP Quiz & LAP Lexikon",
      image: "/images/lap-quiz.png",
      period: "2026",
      description: {
        en: "Two web apps for apprenticeship exam preparation (LAP):\n- Quiz with multiple modes: exam simulation, chapter learning, blitz round\n- Structured lexicon with 10 electrical engineering categories\n- Progress tracking & score overview",
        de: "Zwei Web-Apps zur Vorbereitung auf die Lehrabschlussprüfung (LAP):\n- Quiz mit mehreren Modi: Prüfungssimulation, Kapiteltraining, Blitzrunde\n- Nachschlagewerk mit 10 Fachkategorien der Elektrotechnik\n- Fortschrittsverfolgung & Punkteübersicht",
      },
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mx-town/lap-quiz",
    },
    {
      name: "Fintrackr",
      image: "/images/FinTrackr.png",
      period: "2026",
      description: {
        en: "Personal finance tracking web application:\n- Built with Next.js & local SQLite via Drizzle ORM\n- Offline-first — no cloud dependencies\n- Income & expense tracking with categories",
        de: "Web-App zur persönlichen Finanzverwaltung:\n- Gebaut mit Next.js & lokaler SQLite über Drizzle ORM\n- Offline-first — keine Cloud-Anbindung\n- Einnahmen- & Ausgabenverfolgung mit Kategorien",
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
      items: ["VS Code", "Git / GitHub", "Electron", "Next.js", "TypeScript", "Python",],
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