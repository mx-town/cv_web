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
      github: "https://github.com/mx-town",
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
  en: "University Entrance Exam (Matura)",
  de: "Berufsreifeprüfung (Matura)",
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
      period: "2025 — Present",
      description: {
        en: "Electron-based desktop application for managing Korg Electribe synthesizers (ESX-1, E2S, EMX-1). Features a sample manager, 18 DSP effects with **Web Audio API** playback, and a pattern viewer styled after the original hardware panels. Includes **240 automated tests** with Vitest.",
        de: "Desktop-App auf Electron-Basis zur Verwaltung von Korg Electribe Synthesizern (ESX-1, E2S, EMX-1). Mit Sample-Manager, 18 DSP-Effekten über die **Web Audio API** und einem Pattern-Viewer im Stil der Original-Hardware. **240 automatisierte Tests** mit Vitest.",
      },
      tech: ["Electron", "JavaScript", "Web Audio API", "Vitest"],
      github: "https://github.com/mx-town/korg-manager",
    },
    {
      name: "Trainings-PCB (SMT + THT)",
      period: "2026",
      description: {
        en: "Self-designed training board for soldering and rework exercises, developed in **EasyEDA Pro** and manufactured by PCBWay. Covers SMD components (0402–1206), ICs, electrolytic capacitors, diodes, transistors, and THT components. Two variants: with and without solder paste.",
        de: "Selbst entworfene Übungsplatine für Löt- und Nacharbeitsübungen, entwickelt in **EasyEDA Pro** und gefertigt bei PCBWay. Mit SMD-Bauteilen (0402–1206), ICs, Elkos, Dioden, Transistoren und THT-Komponenten. Zwei Varianten: mit und ohne Lötpaste.",
      },
      tech: ["EasyEDA Pro", "PCBWay", "SMT", "THT"],
      github: "",
    },
    {
      name: {
        en: "TempCTRL — Temperature Controller",
        de: "TempCTRL — Temperaturregelung",
      },
      period: "2025 — 2026",
      description: {
        en: "Arduino Nano–based temperature controller with DS18B20 and DHT22 sensors, RGB LED status display and relay-driven 24V fan control. Custom PCB layout on perfboard. Includes a browser-based **HMI dashboard** with Web Serial API, live trend graph and setpoint control.",
        de: "Temperaturregelung auf Arduino-Nano-Basis mit DS18B20- und DHT22-Sensoren, RGB-LED-Statusanzeige und relaisgesteuerter 24V-Lüftersteuerung. Eigenes Layout auf Lochrasterplatine. Dazu ein **HMI-Dashboard** im Browser mit Web Serial API, Echtzeit-Graph und Sollwertvorgabe.",
      },
      tech: ["Arduino IDE", "C++", "Web Serial API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/mx-town/Arduino-temp-ctrl",
    },
    {
      name: "Roulette — Raspberry Pi",
      period: "2024 — 2025",
      description: {
        en: "Fully self-built physical roulette machine: 37-LED matrix with GPIO multiplexing, Flask web interface with REST API, WiFi access point for mobile players, and a **3D-printed enclosure**. Complete development from circuit design to finished product.",
        de: "Komplett selbst gebaute Roulette-Maschine: 37-LED-Matrix mit GPIO-Multiplexing, Flask-Weboberfläche mit REST API, eigener WLAN-Hotspot für Mitspieler und ein **3D-gedrucktes Gehäuse**. Von der Schaltung bis zum fertigen Gerät alles Eigenentwicklung.",
      },
      tech: ["Raspberry Pi", "Python", "Flask", "pigpio", "3D Printing"],
      github: "https://github.com/mx-town/rpi-roulette",
    },
    {
      name: "LAP Quiz & LAP Lexikon",
      period: "2024 — 2025",
      description: {
        en: "Two web applications for apprenticeship exam preparation (LAP). Quiz app with multiple modes (exam simulation, chapter learning, blitz round) and a structured lexicon covering 10 categories of electrical engineering terms.",
        de: "Zwei Web-Apps zur Vorbereitung auf die Lehrabschlussprüfung (LAP). Quiz mit mehreren Modi (Prüfungssimulation, Kapiteltraining, Blitzrunde) und ein Nachschlagewerk mit 10 Fachkategorien aus der Elektrotechnik.",
      },
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mx-town/lap-quiz",
    },
    {
      name: "Fintrackr",
      period: "2026",
      description: {
        en: "Personal finance tracking web application built with Next.js and local SQLite database via Drizzle ORM. Offline-first approach with no cloud dependencies.",
        de: "Web-App zur persönlichen Finanzverwaltung mit Next.js und lokaler SQLite-Datenbank über Drizzle ORM. Läuft komplett offline, ohne Cloud-Anbindung.",
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