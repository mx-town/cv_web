// ============================================================
// 📝 CV DATA — Niklas Martinek
// ============================================================
// Alle Inhalte der CV-Website werden hier gepflegt.
// Markdown wird in description/bio Feldern unterstützt.
// Zweisprachig: { en: "...", de: "..." }
// ============================================================

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
      de: "Hardwareentwickler mit praktischer Erfahrung in der **Automotive-Elektronikfertigung — von der Rohplatine bis zum fertigen Produkt**. Ich entwerfe eigene PCBs in EasyEDA Pro, entwickle Embedded-Systeme mit Arduino und Raspberry Pi und erstelle webbasierte Tools mit Next.js, Electron und Flask.\n\nAktuell schließe ich meine **Matura im Bereich Elektrotechnik** ab und bereite mich auf das Studium **Embedded & Cyber-Physical Systems** an der FH Technikum Wien vor.",
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
        de: "Tätig in der Automotive-Elektronikfertigung bei einem führenden Zulieferer.\n\n- Wechsel in die **Hardwareentwicklung** ab Mai 2026 (PCB-Design, Automotive-Standards)\n- Kenntnisse des gesamten SMT-Fertigungsprozesses: Laser-Traceability, Siebdruck, Reflowlöten, SPI, AOI, THT-Bestückung bis zum fertigen Produkt\n- Eigene Projekte neben der Arbeit: **Raspberry Pi Roulette** mit LED-Matrix, Flask-Web-UI und 3D-gedrucktem Gehäuse; **Fintrackr** Finanz-App mit Next.js; **Korg Manager** Desktop-Anwendung mit Electron",
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
        en: "Technical training in electronics manufacturing with a focus on automotive applications.\n\n- Soldering and rework of SMD components (0402 to 1206, ICs, electrolytic capacitors)\n- PCB design and manufacturing (EasyEDA Pro, PCBWay)\n- In parallel: vocational matriculation exam (BRP) at WIFI Niederösterreich",
        de: "Technische Ausbildung in der Elektronikfertigung mit Schwerpunkt auf Automotive-Anwendungen.\n\n- Löten und Rework von SMD-Bauteilen (0402 bis 1206, ICs, Elektrolytkondensatoren)\n- PCB-Design und Fertigung (EasyEDA Pro, PCBWay)\n- Parallel: Berufsreifeprüfung (BRP) am WIFI Niederösterreich",
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
        de: "BRP parallel zur Lehre absolviert. Fächer: Elektrotechnik, Deutsch, Englisch und Mathematik. Derzeit im Abschluss.",
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
        de: "Berufsausbildung mit Schwerpunkt Automotive-Elektronikfertigung.",
      },
    },
  ],

  projects: [
    {
      name: "Korg Manager",
      period: "2025 — Present",
      description: {
        en: "Electron-based desktop application for managing Korg Electribe synthesizers (ESX-1, E2S, EMX-1). Features a sample manager, 18 DSP effects with **Web Audio API** playback, and a pattern viewer styled after the original hardware panels. Includes **240 automated tests** with Vitest.",
        de: "Electron-basierte Desktop-Anwendung zur Verwaltung von Korg Electribe Synthesizern (ESX-1, E2S, EMX-1). Bietet einen Sample-Manager, 18 DSP-Effekte mit **Web Audio API** Playback und einen Pattern-Viewer im Stil der Original-Hardware-Panels. Enthält **240 automatisierte Tests** mit Vitest.",
      },
      tech: ["Electron", "JavaScript", "Web Audio API", "Vitest"],
      github: "https://github.com/mx-town/korg-manager",
    },
    {
      name: "Trainings-PCB (SMT + THT)",
      period: "2026",
      description: {
        en: "Self-designed training board for soldering and rework exercises, developed in **EasyEDA Pro** and manufactured by PCBWay. Covers SMD components (0402–1206), ICs, electrolytic capacitors, diodes, transistors, and THT components. Two variants: with and without solder paste.",
        de: "Selbst entworfenes Trainings-Board für Löt- und Reworkübungen, entwickelt in **EasyEDA Pro** und gefertigt bei PCBWay. Umfasst SMD-Bauteile (0402–1206), ICs, Elektrolytkondensatoren, Dioden, Transistoren und THT-Komponenten. Zwei Varianten: mit und ohne Lötpaste.",
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
        de: "Arduino Nano–basierte Temperaturregelung mit DS18B20- und DHT22-Sensoren, RGB LED-Statusanzeige und relaisgesteuerter 24V-Lüfterregelung. Eigenes PCB-Layout auf Lochrasterplatine. Inkl. browserbasiertem **HMI Dashboard** mit Web Serial API, Live-Graph und Sollwertvorgabe.",
      },
      tech: ["Arduino IDE", "C++", "Web Serial API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/mx-town/Arduino-temp-ctrl",
    },
    {
      name: "Roulette — Raspberry Pi",
      period: "2024 — 2025",
      description: {
        en: "Fully self-built physical roulette machine: 37-LED matrix with GPIO multiplexing, Flask web interface with REST API, WiFi access point for mobile players, and a **3D-printed enclosure**. Complete development from circuit design to finished product.",
        de: "Vollständig selbst gebaute physische Roulette-Maschine: 37-LED Matrix mit GPIO-Multiplexing, Flask Web Interface mit REST API, WiFi Access Point für mobile Spieler und ein **3D-gedrucktes Gehäuse**. Komplette Entwicklung vom Schaltungsdesign bis zum fertigen Produkt.",
      },
      tech: ["Raspberry Pi", "Python", "Flask", "pigpio", "3D Printing"],
      github: "https://github.com/mx-town/rpi-roulette",
    },
    {
      name: "LAP Quiz & LAP Lexikon",
      period: "2024 — 2025",
      description: {
        en: "Two web applications for apprenticeship exam preparation (LAP). Quiz app with multiple modes (exam simulation, chapter learning, blitz round) and a structured lexicon covering 10 categories of electrical engineering terms.",
        de: "Zwei Web-Applikationen zur Vorbereitung auf die Lehrabschlussprüfung (LAP). Quiz-App mit mehreren Modi (Prüfungssimulation, Kapitel-Lernen, Blitzrunde) und ein strukturiertes Lexikon mit 10 Kategorien an Fachbegriffen der Elektrotechnik.",
      },
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mx-town/lap-quiz",
    },
    {
      name: "Fintrackr",
      period: "2026",
      description: {
        en: "Personal finance tracking web application built with Next.js and local SQLite database via Drizzle ORM. Offline-first approach with no cloud dependencies.",
        de: "Persönliche Finanz-Tracking Web-App mit Next.js und lokaler SQLite-Datenbank über Drizzle ORM. Offline-first Ansatz ohne Cloud-Abhängigkeiten.",
      },
      tech: ["Next.js", "TypeScript", "Drizzle ORM", "SQLite"],
      github: "https://github.com/mx-town/Fintrackr",
    },
  ],

  skills: [
    {
      category: "PCB & Hardware",
      items: ["EasyEDA Pro", "KiCad", "Arduino IDE", "Soldering & Rework", "Circuit Design", "SMT & THT Assembly"],
    },
    {
      category: {
        en: "Manufacturing & Industrial",
        de: "Fertigung & Industrie",
      },
      items: [
        "TIA Portal (Siemens)",
        "FluidSim",
        { en: "SMT Manufacturing Processes", de: "SMT Fertigungsprozesse" },
        "Reflow / SPI / AOI",
      ],
    },
    {
      category: "Software & Development",
      items: ["VS Code", "Git / GitHub", "Electron", "Next.js", "TypeScript", "Python"],
    },
    {
      category: "Embedded",
      items: ["Arduino (C++)", "Raspberry Pi", "Web Serial API", "pigpio"],
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