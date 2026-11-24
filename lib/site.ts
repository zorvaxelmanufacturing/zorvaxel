const configuredOrigin =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.NODE_ENV === "production" ? "https://zorvaxel.com" : undefined) ||
  (process.env.RENDER_EXTERNAL_URL ? process.env.RENDER_EXTERNAL_URL.trim() : undefined) ||
  "https://zorvaxel.com";

function resolvePublicOrigin(value: string | undefined): string {
  if (!value) return "https://zorvaxel.com";
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.pathname !== "/" && url.pathname !== "") ||
      url.search ||
      url.hash
    ) {
      return "https://zorvaxel.com";
    }
    return url.origin;
  } catch {
    return "https://zorvaxel.com";
  }
}

const publicOrigin = resolvePublicOrigin(configuredOrigin);

export const SITE = {
  name: "Zorvaxel",
  shortDescription: "Ready-formula serum branding, filling and packaging in Chennai.",
  tagline: "Your serum, in your name, at any batch size.",
  description:
    "We supply ready serum formulas, then fill, label and pack them under your brand. Start with the quantity you actually need.",
  origin: publicOrigin,
  locale: "en_IN",
  seo: {
    home: {
      title: "Zorvaxel — Private Label Serum Manufacturer & Contract Filling in Chennai",
      description: "Zorvaxel is a private label serum manufacturer and contract filling laboratory in Chennai. Ready formulas, cleanroom filling, and custom packaging with no MOQ.",
    },
    services: {
      title: "Serum Branding, Filling & Packaging Services — No MOQ",
      description: "Zorvaxel provides ready serum formulas, cleanroom contract filling, custom dropper bottles, label design, and foil stamping in Chennai with no MOQ.",
    },
    about: {
      title: "About Zorvaxel — Chennai Cleanroom Serum Lab",
      description: "Learn about Zorvaxel, South India's small-batch serum filling and private label laboratory in Chennai, working with founders, doctors, and clinics at any batch size.",
    },
    blog: {
      title: "Founder Notes — Serum Packaging & Formulations",
      description: "Practical notes from the Zorvaxel technical team on launching a serum brand: private label formulation, cleanroom filling, packaging, and CDSCO compliance.",
    },
    contact: {
      title: "Contact Zorvaxel — Serum Manufacturing & Pilot Batch Enquiry",
      description: "Contact the Zorvaxel laboratory in Chennai for serum formulations, contract filling quotes, and small-batch pilot runs. Direct lab reply within 24 hours.",
    },
    notFound: {
      title: "Page not found",
      description: "This page could not be found. Return to the Zorvaxel serum manufacturing home page.",
    },
    socialImageAlt: "Zorvaxel small-batch serum manufacturing and cleanroom filling laboratory in Chennai.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  ui: {
    enquire: "Enquire",
    enquireHref: "/contact",
    menuLabelOpen: "Menu",
    menuLabelClose: "Close",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    skipToContent: "Skip to content",
    backToHome: "Return to home",
    whatsappLabel: "WhatsApp",
    whatsappMessage:
      "Hello, I’d like to ask about serum manufacturing and packaging.",
    menuTitle: "Where would you like to go?",
    mainNavigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",
  },
  contact: {
    locationHeading: "Find us in Chennai",
    detailLabels: {
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      address: "Chennai facility",
      workingHours: "Working hours",
    },
    phone: {
      label: "+91 81444 51947",
      href: "tel:+918144451947",
    },
    email: {
      label: "lab@zorvaxel.com",
      href: "mailto:lab@zorvaxel.com",
    },
    whatsapp: {
      label: "+91 81444 51947",
      number: "918144451947",
    },
    address: "13/1, Varada Raja Perumal Koil Street, Tondiarpet, Chennai, Tamil Nadu 600081",
    workingHours: "Mon – Fri: 9:00 AM – 6:30 PM IST · Sat: 9:00 AM – 1:30 PM IST",
  },
  footer: {
    description:
      "Small-batch serum filling and packaging for founders, doctors and growing brands. Based in Chennai.",
    exploreLabel: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Notes", href: "/blog" },
      { label: "Batch Enquiry", href: "/contact" },
    ],
    copyright: "Small batches. Clear answers. Careful work.",
  },
  home: {
    hero: {
      label: "ZORVAXEL · PRIVATE LABEL SERUM MANUFACTURER · CHENNAI",
      title: "Your first serum batch, without the minimum\u2011order trap.",
      supporting:
        "At Zorvaxel, we supply ready-to-brand serum formulas, then fill, label and pack them for you in Chennai. Start with the quantity you actually need — not the one a factory forces on you.",
      primaryAction: "Start your first batch",
      secondaryAction: "See how it works",
      spec: "30 ML · AMBER GLASS · DROPPER",
      panelNote: "01 / FIRST BATCH",
    },
    marquee: [
      "ZORVAXEL CHENNAI",
      "NO MOQ",
      "READY FORMULAS",
      "CLEANROOM FILLING",
      "CUSTOM LABELS",
      "CARTONS",
    ],
    servicesHeading: "From ready formula to finished bottle — or just the part you need.",
    servicesLink: "All services",
    processHeading: "From first note to finished bottle.",
    processDescription: "A few clear decisions, then a finished batch you can take to market.",
    process: [
      {
        number: "01",
        title: "Brief",
        description: "Tell us what you want, your expected quantity, and whether you'll use one of our formulas or bring your own.",
      },
      {
        number: "02",
        title: "Choose or send",
        description: "Pick a ready formula from our range, or send us your own serum to fill.",
      },
      {
        number: "03",
        title: "Fill & pack",
        description: "We fill, cap, seal and pack your serum with care.",
      },
      {
        number: "04",
        title: "Deliver",
        description: "Your finished batch is labelled, packed and ready to take to market.",
      },
    ],
    noMoq: {
      label: "SMALL BATCHES WELCOME",
      title:
        "Many manufacturers set minimums in the thousands. At Zorvaxel, we start at whatever you can afford to test.",
      action: "Talk to us about quantity",
    },
    journalHeading: "Notes for the first run.",
    journalLink: "All notes",
    closing: {
      title: "Have a formula already? Want to use one of Zorvaxel's ready serums?",
      action: "Start your first batch",
    },
    batchEnquiryFloat: {
      pillTitle: "Batch Enquiry",
      pillSubtitle: "No MOQ · 24h quote",
      eyebrow: "QUICK BATCH ENQUIRY",
      heading: "Start a small batch",
      openLabel: "Open quick batch enquiry form",
      closeLabel: "Close batch enquiry form",
      namePlaceholder: "Your name",
      phonePlaceholder: "+91 … (optional)",
      emailPlaceholder: "you@brand.com",
      servicePlaceholder: "Select a service",
      messagePlaceholder: "Formula idea, bottle size, or target launch date…",
      submitLabel: "Send batch enquiry",
      submittingLabel: "Sending…",
      responseNote: "Replies within 1 working day",
      successBadge: "Enquiry received",
      successTitle: "Your batch brief is with us.",
      successCopy: "Our Chennai lab will reply within one working day with a clear next step.",
      sendAnotherLabel: "Send another",
      doneLabel: "Close",
      quantityShortLabels: {
        "Under 100": "<100",
        "100–500": "100–500",
        "500–2000": "500–2k",
        "2000+": "2k+",
      } as Record<string, string>,
    },
  },
  services: {
    eyebrow: "WHAT WE CAN HELP WITH",
    title: "Services",
    introduction:
      "You don't need to develop a formula from scratch or commit to a factory minimum. Pick the stage you need — or use all five together.",
    detailLabels: {
      whoFor: "Who it's for",
      included: "What's included",
    },
    items: [
      {
        number: "01",
        title: "Ready formulas, your brand",
        shortDescription:
          "Choose from our ready serum formulas and we fill them into packaging we already stock. No minimum order.",
        description:
          "You don't need to develop a formula from scratch. Pick a serum from our range — brightening, hydration, barrier repair, anti-ageing — and we fill it into stocked bottles under your brand. Because the formula is ready and the packaging is in stock, there's no minimum order. Launch with a batch you can afford to test.",
        whoFor: "First-time founders who want to launch quickly. Brands validating a concept before committing to custom packaging.",
        included: [
          "Choice of ready serum formulas",
          "Filling into stocked dropper bottles",
          "Standard glass and cap options",
        ],
        moq: "No MOQ",
        illustration: "dropper",
        image: "/services/service-01-dropper.jpg",
        spec: "30 ML · AMBER BOROSILICATE · PIPETTE",
        pricingTag: "Pay per finished bottle",
        turnaround: "7–10 days dispatch",
        audienceTag: "First-Time Founders & Testing Brands",
        fullBleed: false,
      },
      {
        number: "02",
        title: "Custom packaging",
        shortDescription:
          "The same ready formulas, filled into packaging made to your brand. A small minimum run applies.",
        description:
          "Same ready formulas as Service 01, with packaging made for your brand: bottle colour, cap and dropper style, printing and finish. Because custom packaging has a minimum run set by the packaging supplier, a small MOQ applies — far lower than a standard contract manufacturer would ask for.",
        whoFor: "Brands ready to make their packaging their own. Clinics and doctors building a named product line.",
        included: [
          "Choice of ready serum formulas",
          "Bottle colour and finish selection",
          "Cap, dropper style and printing options",
        ],
        moq: "Low MOQ",
        illustration: "carton",
        image: "/services/service-02-custom-packaging.jpg",
        spec: "CUSTOM COLOR · AIRLESS OR DROPPER · OUTER BOX",
        pricingTag: "Unit + tooling rate",
        turnaround: "3–4 weeks lead",
        audienceTag: "Established Brands & Named Clinics",
        fullBleed: false,
      },
      {
        number: "03",
        title: "Contract filling and packaging",
        shortDescription:
          "Bring your own ready serum. We fill it, cap it, seal it and pack it — then return the finished batch.",
        description:
          "You supply the finished serum. We take it from there: filling into dropper bottles or airless pumps, capping, sealing and packing. We don't formulate here — this is for clients who already have a formula but no filling setup. Priced per unit or per batch, so small quantities work.",
        whoFor: "Brands, doctors, dermatologists and labs with an existing formula but no filling equipment or staff.",
        included: [
          "Filling into bottles or airless pumps",
          "Capping and sealing",
          "Packing the finished batch",
        ],
        moq: "No MOQ",
        illustration: "filling-nozzle",
        image: "/services/service-03-filling.jpg",
        spec: "ISO 8 CLEANROOM · ±0.5% VOLUMETRIC FILL · N2 FLUSH",
        pricingTag: "Per batch or per unit",
        turnaround: "5–7 days dispatch",
        audienceTag: "Dermatologists, Doctors & Labs",
        fullBleed: true,
      },
      {
        number: "04",
        title: "Label and outer carton design",
        shortDescription:
          "Print-ready layouts for your bottle label and carton — ingredients, usage text and barcode included. Charged per design.",
        description:
          "A clean, print-ready design for your bottle label and outer carton. We handle the layout, typeset the ingredients and usage copy you supply, and place the barcode correctly for your printer. Charged as a flat fee per design — the same whether you're printing 50 or 5,000 units.",
        whoFor: "New brands without a designer. Any founder who wants one less supplier to manage.",
        included: [
          "Bottle label layout",
          "Outer carton layout",
          "Ingredients, usage and barcode placement",
        ],
        moq: "No MOQ",
        illustration: "label-sheet",
        image: "/services/service-04-label-design.jpg",
        spec: "PRINT-READY PDF/AI · CDSCO INCI COMPLIANT · GS1 BARCODE",
        pricingTag: "Flat fee per design",
        turnaround: "3–5 days proofing",
        audienceTag: "Founders Without Dedicated Designers",
        fullBleed: false,
      },
      {
        number: "05",
        title: "Label stamping and application",
        shortDescription:
          "Your printed labels applied to bottles and cartons, neatly, in any quantity. Gold and silver foil stamping available.",
        description:
          "You've had labels printed. We apply them to bottles and cartons carefully, in batches of any size — no bubbles, no skew. Hot-foil stamping in gold or silver is available on request for a premium finish.",
        whoFor: "Brands that have labels ready but no equipment or staff to apply them. Any client wanting a foil finish.",
        included: [
          "Label application on bottles",
          "Label application on cartons",
          "Hot-foil stamping on request (gold or silver)",
        ],
        moq: "No MOQ",
        illustration: "label-sheet",
        image: "/services/service-05-foil-stamping.jpg",
        spec: "PRECISION ALIGNMENT · METALLIC FOIL · NO SKEW",
        pricingTag: "Nominal application fee",
        turnaround: "2–4 days turnaround",
        audienceTag: "Brands Seeking Luxury Foil Finish",
        fullBleed: false,
      },
    ],
    pricingModels: [
      {
        model: "Per Unit",
        badge: "SERVICES 01 & 02",
        title: "Ready-Formula Landed Cost",
        description: "Pay transparently per filled, capped, and labelled bottle. Zero setup fee on stocked formulas.",
        highlight: "True 50-Unit Pilot Run",
        detail: "Starting from ₹180 – ₹380 / bottle depending on active complex",
      },
      {
        model: "Per Batch",
        badge: "SERVICE 03",
        title: "Cleanroom Filling Run",
        description: "Bring your bulk serum. Fixed cleanroom bench fee plus nominal vial handling, eliminating line surcharges.",
        highlight: "5–7 Day Cleanroom Turnaround",
        detail: "Includes volumetric dosing, nitrogen flush & batch retain CoA",
      },
      {
        model: "Flat Fee",
        badge: "SERVICES 04 & 05",
        title: "Artwork & Finishing",
        description: "One-time flat design charge for CDSCO-compliant dielines. Same fee whether you print 50 or 50,000.",
        highlight: "100% Brand IP Ownership",
        detail: "Includes label dielines, outer carton layout & barcode generation",
      },
    ],
    processStrip: [
      { step: "01", name: "Enquire", time: "Day 1", detail: "Share formula needs or select from ready active library." },
      { step: "02", name: "Quote & Spec", time: "Within 24h", detail: "Transparent landed quote per unit or batch." },
      { step: "03", name: "Sample & Proof", time: "Days 3–4", detail: "Review pilot sample vial and label dielines." },
      { step: "04", name: "Cleanroom Batch", time: "Days 5–7", detail: "HEPA filling, nitrogen purge, capping & lot code." },
      { step: "05", name: "Insured Dispatch", time: "Days 7–10", detail: "Air express courier to any pin code across India." },
    ],
    metrics: [
      { value: "50", unit: "Units", label: "Minimum Pilot Run", detail: "Launch without warehouse inventory debt" },
      { value: "7", unit: "Days", label: "Average Dispatch", detail: "From formulation approval to courier pickup" },
      { value: "ISO 8", unit: "Cleanroom", label: "Class 100k Air", detail: "Continuous positive pressure & HEPA filtration" },
      { value: "100%", unit: "Ownership", label: "Your Formula & IP", detail: "Zero royalties or unencumbered restrictions" },
    ],
    decisionGuide: {
      eyebrow: "NOT SURE WHERE TO START?",
      title: "Which service do you need?",
      needLabel: "Your situation",
      answerLabel: "Start here",
      rows: [
        {
          need: "I want a ready-made formula",
          answer: "Ready formulas · Services 01 & 02",
          href: "/services#service-01",
        },
        {
          need: "I already have a serum",
          answer: "Contract filling · Service 03",
          href: "/services#service-03",
        },
        {
          need: "I need label and carton design",
          answer: "Design & application · Services 04 & 05",
          href: "/services#service-04",
        },
      ],
      action: "Start your first batch",
    },
    faqHeading: "Practical questions about small-batch serum production",
    faq: [
      {
        question: "Can I really start without a minimum order quantity (MOQ)?",
        answer: "Yes. Services 01, 03, 04 and 05 have no minimum order quantity — you can launch with a test run of 50 or 100 units. Service 02 (custom packaging) carries a low MOQ because external bottle manufacturers require minimum runs for custom glass colors, but it is far lower than standard contract factories.",
      },
      {
        question: "How is pricing structured for small batches?",
        answer: "Pricing is transparent and itemized with no hidden setup fees. For ready formulas (Service 01), you pay per filled bottle. For contract filling (Service 03), you pay per unit or per filling batch. Label and carton artwork (Service 04) is a one-time fixed design fee. We provide an exact per-bottle landed quote before you commit.",
      },
      {
        question: "What are your typical turnaround and lead times?",
        answer: "For ready formulas filled into our stocked bottles (Service 01), lead time is 7 to 10 working days once your labels are approved. Contract filling of your existing serum (Service 03) takes 5 to 7 working days. Custom packaging runs (Service 02) take 3 to 4 weeks depending on the packaging supplier.",
      },
      {
        question: "What if I already have my own serum formulation?",
        answer: "Service 03 — contract filling and packaging — is built specifically for brands, dermatologists, and clinics that already have a tested formulation. You ship the bulk serum to our Chennai facility; we fill, seal, cap, lot-code, label, and pack it under cleanroom conditions.",
      },
      {
        question: "Who owns the formulation, brand rights, and IP?",
        answer: "You retain 100% ownership of your brand name, trademarks, packaging design, and customer data. If you supply your own formula (Service 03), your IP is strictly protected under non-disclosure. If you use our ready formulas (Services 01 & 02), you hold unencumbered rights to sell under your private label without royalties.",
      },
      {
        question: "Do you help with Indian cosmetic regulatory compliance and CDSCO labelling?",
        answer: "Yes. We guide you through mandatory Indian cosmetic labelling standards: ingredient declarations following international INCI nomenclature, batch numbering, manufacturing license disclosures, MRP printing, net content declarations, and safety directions.",
      },
      {
        question: "What do you need from me to provide a quote?",
        answer: "Three simple details: which type of formula you want (or whether you're supplying your own), your packaging vision (dropper bottle, airless pump, carton), and your initial batch quantity (e.g. 50, 200, 500 units).",
      },
      {
        question: "Where are you based and how do you ship finished orders?",
        answer: "Our formulation and packing facility is in Chennai. We ship nationwide across India using insured freight and express courier partners in heavy-duty protective cartons. Local brand founders are also welcome to arrange pickup directly from our facility.",
      },
    ],
  },
  about: {
    eyebrow: "LABORATORY PROFILE · CHENNAI, INDIA",
    title: "Built for the first batch, not just the millionth.",
    subtitle:
      "Indian skincare manufacturing was built for giants ordering 10,000 units. Zorvaxel was built for everyone else—offering 50-unit pilot runs, cleanroom precision filling, and formulation transparency without the runaround.",
    metrics: [
      {
        value: "50",
        unit: "Units",
        label: "Pilot Batch MOQ",
        detail: "Start without taking a 5,000-unit inventory gamble.",
      },
      {
        value: "7",
        unit: "Days",
        label: "Pilot Dispatch",
        detail: "From formulation lock to courier handoff in Chennai.",
      },
      {
        value: "ISO 8",
        unit: "Class 100k",
        label: "Cleanroom Standard",
        detail: "HEPA air filtration & positive pressure fill bay.",
      },
      {
        value: "1",
        unit: "Desk",
        label: "Direct Lab Lead",
        detail: "One chemist & production coordinator from brief to batch.",
      },
    ],
    originEyebrow: "THE PROBLEM WE SOLVE",
    originHeading: "Why small batches didn't exist before.",
    originDescription:
      "Most cosmetic factories operate on mass-line economics: high minimums, inflexible formulation bundles, and weeks of broker delays. Zorvaxel was engineered specifically for small-batch agility.",
    originComparison: {
      factoryTitle: "The Factory Dilemma",
      factoryBadge: "STATUS QUO",
      factoryPoints: [
        "Demands 5,000 to 10,000 units minimum per formulation run",
        "Forces packaging bundles: you pay for bottles you didn't choose",
        "Takes 60 to 90 days for even initial sample iterations",
        "Brokers and sales middlemen markup prices without direct lab access",
      ],
      zorvaxelTitle: "The Zorvaxel Model",
      zorvaxelBadge: "SMALL-BATCH LAB",
      zorvaxelPoints: [
        "True 50-unit pilot runs: test genuine market demand first",
        "Modular entry: bring your bulk serum OR use our proven active library",
        "7 working day dispatch on ready-formulation pilot batches",
        "Direct communication with formulation and cleanroom staff in Chennai",
      ],
    },
    cleanroomEyebrow: "FACILITY & PROTOCOLS",
    cleanroomHeading: "Cleanroom filling built around active stability.",
    cleanroomDescription:
      "Cosmetic serums contain delicate active ingredients—L-Ascorbic Acid, Retinoids, Hyaluronic Acid, and Peptides. Our cleanroom protocols are designed to prevent oxidation, degradation, and contamination.",
    cleanroomSpecs: [
      {
        code: "ISO-14644",
        title: "Class 100,000 Cleanroom",
        badge: "Air Purity",
        description:
          "Continuous positive pressure air handling with multi-stage HEPA filtration maintains low particulate counts throughout compounding, filling, and sealing.",
      },
      {
        code: "VOL-0.5%",
        title: "±0.5% Peristaltic Dosing",
        badge: "Precision",
        description:
          "Volumetric peristaltic pumps ensure precise fill volumes into 15ml, 30ml, and 50ml dropper vials without shear stress on viscous active serums.",
      },
      {
        code: "N2-PURGE",
        title: "Nitrogen Headspace Flush",
        badge: "Stability",
        description:
          "Before induction seal or dropper seating, nitrogen purges ambient oxygen from the vial headspace, extending active ingredient shelf potency.",
      },
      {
        code: "QC-RETAIN",
        title: "Batch Retain & Certificate of Analysis",
        badge: "Traceability",
        description:
          "Every production run undergoes pH, viscosity, and sensory clearance. Two retain vials are archived with a formal CoA for complete traceability.",
      },
    ],
    partnersEyebrow: "WHO WE WORK WITH",
    partnersHeading: "Built for founders who value control over warehouse clutter.",
    partnersDescription:
      "Whether you are launching your first hero serum or formulating custom post-procedure blends for your medical practice, our small-batch workflows fit your scale.",
    partners: [
      {
        tag: "Clinical Practice",
        title: "Dermatologists & Aesthetic Clinics",
        description:
          "Custom-branded post-peel, calming, and active antioxidant serums formulated for your clinic patients. Start with 50 units per branch without stocking thousands of bottles.",
      },
      {
        tag: "Market Validation",
        title: "Indie Beauty Founders",
        description:
          "Validate your hero SKU, gather real customer reviews, and test repeat purchase rates before raising capital or committing to industrial volume.",
      },
      {
        tag: "Agile R&D",
        title: "Growing D2C Brands",
        description:
          "Launch seasonal formulations, limited drops, or VIP gift batches in days—without disrupting your primary high-volume contract manufacturer's schedule.",
      },
    ],
    principlesEyebrow: "OPERATING PRINCIPLES",
    principlesHeading: "The standards we never compromise on.",
    principles: [
      {
        number: "01",
        title: "Start with what makes sense",
        description: "Most of our services have no minimum order. You shouldn't have to over-order just to get started.",
      },
      {
        number: "02",
        title: "Single-desk accountability",
        description: "Formula, filling, labels and cartons — all coordinated through us. One clear conversation instead of four separate vendors.",
      },
      {
        number: "03",
        title: "Pay only for what you need",
        description: "Come in at any stage: ready formulas, contract filling, design or label application. We never bundle services you don't require.",
      },
      {
        number: "04",
        title: "Small-batch discipline",
        description: "Small-batch work demands more individual attention per bottle, not less. We engineered our entire facility around that discipline.",
      },
    ],
    locationEyebrow: "CHENNAI FACILITY",
    locationHeading: "Rooted in South India's industrial corridor.",
    locationText:
      "Zorvaxel operates from Chennai, Tamil Nadu—connecting directly to major pharmaceutical supply chains, certified packaging partners, and air courier hubs. We dispatch pilot and commercial batches across India with reliable courier transit.",
    locationDetails: [
      { label: "Location", value: "Chennai, Tamil Nadu, India" },
      { label: "Dispatch Scope", value: "All India pin codes (Air express 2–4 days)" },
      { label: "Facility Access", value: "Technical consultations by scheduled appointment" },
      { label: "Lead Response", value: "Within 1 working day (WhatsApp or Email)" },
    ],
    facilityPhotos: [
      {
        src: "/facility/facility-01-compounding.jpg",
        alt: "Zorvaxel small-batch serum compounding bench and stainless steel homogenizer in Chennai",
        tag: "BAY 01 · COMPOUNDING",
        caption: "Small-batch compounding bench with borosilicate vessels & high-shear homogenization.",
      },
      {
        src: "/facility/facility-02-qc-bench.jpg",
        alt: "In-house quality control pH testing and amber glass batch retain vials at Zorvaxel Chennai",
        tag: "BAY 02 · QC & RETAIN",
        caption: "In-process pH, viscosity checks & archived retain vials.",
      },
      {
        src: "/facility/facility-03-dispatch-bay.jpg",
        alt: "Finished amber glass serum dropper bottles packed in protective courier trays for pan-India dispatch",
        tag: "BAY 03 · DISPATCH",
        caption: "Protective tray packing for pan-India express courier handoff.",
      },
    ],
    closingEyebrow: "READY TO BEGIN",
    closingHeading: "Start your first batch with complete clarity.",
    closingCopy:
      "Tell us your formulation concept, packaging preference, and target quantity. We'll provide an itemized cost breakdown and production schedule within 24 hours.",
    closingAction: "Enquire about a batch",
    secondaryAction: "Explore our formulas & services",
  },
  blog: {
    eyebrow: "PLAIN NOTES FOR FIRST-TIME FOUNDERS",
    title: "Notes",
    introduction: "No jargon. Practical answers about packaging, labels and getting your first serum batch ready to sell.",
    categories: [
      "Launching a brand",
      "Formulation",
      "Packaging",
      "Labels",
      "பிராண்டு தொடங்குதல்",
      "ஃபார்முலேஷன்",
      "பேக்கேஜிங்",
      "லேபிள்கள்",
    ],
    allCategory: "All notes",
    categoryFilterLabel: "Filter notes by topic",
    tableOfContents: "In this note",
    relatedHeading: "Keep reading",
    readingTimeSuffix: "min read",
    emptyCategory: "No notes in this category yet.",
    backToIndex: "All notes",
    closing: "Have a question about your first batch?",
    i18n: {
      en: {
        locale: "en",
        langName: "English",
        badgeBar: "DIRECT LAB PUBLICATION · PRACTICAL NOTES",
        locationTag: "CHENNAI · CLEANROOM PACKAGING",
        heroTitle: "Practical notes on launching your serum brand.",
        heroIntro: "Transparent batch arithmetic, packaging compatibility checks, and clear contract filling scopes — published directly by our technical team so founders can plan with real numbers.",
        categories: ["Launching a brand", "Formulation", "Packaging", "Labels"],
        allCategory: "All notes",
        categoryFilterLabel: "Filter notes by topic",
        searchPlaceholder: "Search by keyword, topic or price...",
        noResults: "No notes found matching",
        readingTimeSuffix: "min read",
        backToIndex: "All notes",
        issueTag: "FOUNDER NOTE",
        laboratoryTag: "Chennai Cleanroom Laboratory",
        authorName: "Zorvaxel Technical Team",
        authorDept: "Formulations & Contract Filling",
        authorRole: "Cleanroom Contract Filling & Serum Formulations · Chennai, India",
        authorBio: "We write practical, jargon-free guides to give first-time founders transparent arithmetic on formulation, packaging, and regulatory scopes before spending capital on production runs.",
        tableOfContents: "In this note",
        startHereBadge: "START HERE · ESSENTIAL FOUNDER NOTE",
        readGuide: "Read foundation guide",
        readNote: "Read note",
        upNext: "UP NEXT IN FOUNDER NOTES",
        continueReading: "Continue reading note",
        relatedHeading: "Keep reading",
        ctaEyebrow: "START YOUR FIRST RUN",
        ctaTitle: "Planning your first serum batch?",
        ctaDesc: "Have a formula ready or exploring packaging options? Request an itemised estimate with clear scopes and zero MOQ penalties.",
        ctaAction: "Request an estimate",
        ctaNote: "From 50 units · No sales calls · Written scope",
        langSwitchLabel: "Language / மொழி",
      },
      ta: {
        locale: "ta",
        langName: "தமிழ்",
        badgeBar: "நேரடி ஆய்வக வெளியீடு · நடைமுறைக் குறிப்புகள்",
        locationTag: "சென்னை · தூய அறை பேக்கேஜிங்",
        heroTitle: "உங்கள் சீரம் பிராண்டைத் தொடங்குவதற்கான நடைமுறைக் குறிப்புகள்.",
        heroIntro: "வெளிப்படையான தயாரிப்புச் செலவு கணக்கீடுகள், பேக்கேஜிங் பொருத்தம் மற்றும் தெளிவான ஒப்பந்த நிரப்புதல் வழிகாட்டுதல்கள் — நிறுவனர்கள் துல்லியமான திட்டமிடலுடன் செயல்பட எங்கள் தொழில்நுட்பக் குழுவால் நேரடியாக வெளியிடப்படுகிறது.",
        categories: ["பிராண்டு தொடங்குதல்", "ஃபார்முலேஷன்", "பேக்கேஜிங்", "லேபிள்கள்"],
        allCategory: "அனைத்து குறிப்புகளும்",
        categoryFilterLabel: "தலைப்பு வாரியாக வடிகட்டுங்கள்",
        searchPlaceholder: "தலைப்பு, குறிச்சொல் அல்லது செலவு மூலம் தேடுங்கள்...",
        noResults: "எந்தக் குறிப்புகளும் கிடைக்கவில்லை",
        readingTimeSuffix: "நிமிட வாசிப்பு",
        backToIndex: "அனைத்து குறிப்புகள்",
        issueTag: "நிறுவனர் குறிப்பு",
        laboratoryTag: "சென்னை தூய அறை ஆய்வகம்",
        authorName: "ஜோர்வாக்ஸல் தொழில்நுட்பக் குழு",
        authorDept: "ஃபார்முலேஷன் மற்றும் ஒப்பந்த நிரப்புதல்",
        authorRole: "தூய அறை ஒப்பந்த நிரப்புதல் மற்றும் சீரம் ஃபார்முலேஷன் · சென்னை, இந்தியா",
        authorBio: "முதல் முறை பிராண்ட் தொடங்கும் நிறுவனர்கள் உற்பத்திக்கு முன் துல்லியமான புரிதலையும் செலவு விவரங்களையும் பெற எளிய, நடைமுறை வழிகாட்டிகளை நாங்கள் வழங்குகிறோம்.",
        tableOfContents: "இந்தக் கட்டுரையில்",
        startHereBadge: "இங்கிருந்து தொடங்குங்கள் · அத்தியாவசிய நிறுவனர் குறிப்பு",
        readGuide: "அடிப்படை வழிகாட்டியைப் படிக்க",
        readNote: "முழு குறிப்பைப் படிக்க",
        upNext: "அடுத்த நிறுவனர் குறிப்பு",
        continueReading: "தொடர்ந்து படிக்க",
        relatedHeading: "தொடர்புடைய குறிப்புகள்",
        ctaEyebrow: "உங்கள் முதல் தயாரிப்பைத் தொடங்குங்கள்",
        ctaTitle: "உங்கள் முதல் சீரம் தொகுப்பைத் திட்டமிடுகிறீர்களா?",
        ctaDesc: "உங்களிடம் ஃபார்முலா தயாராக உள்ளதா அல்லது பேக்கேஜிங் தேடுகிறீர்களா? தெளிவான விவரங்கள் மற்றும் குறைந்தபட்ச ஆர்டர் (MOQ) கட்டுப்பாடுகள் இல்லாத விரிவான மதிப்பீட்டைப் பெறுங்கள்.",
        ctaAction: "மதிப்பீட்டைக் கோருங்கள்",
        ctaNote: "50 பாட்டில்கள் முதல் · விற்பனை அழுத்தங்கள் இல்லை · நேரடி ஆய்வக மதிப்பீடு",
        langSwitchLabel: "Language / மொழி",
      },
    },
  },
  contactPage: {
    eyebrow: "START WITH A CONVERSATION",
    title: "Tell us about your serum.",
    introduction:
      "Share what you're planning, what you already have, and roughly how many units you're thinking. We'll come back within one working day with a clear next step — no jargon, no sales script.",
    formHeading: "Tell us what you're planning",
    detailsHeading: "Direct lab contact & location",
    responseTime: "We reply within one working day.",
    successTitle: "Your enquiry is with us.",
    successCopy:
      "We'll review the details and come back within one working day with a clear next step.",
    labels: {
      name: "Your name",
      phone: "Phone number",
      email: "Email address",
      service: "Service needed",
      quantity: "Expected quantity",
      message: "Tell us about your serum",
      honeypot: "Leave this field empty",
    },
    placeholders: {
      name: "How should we address you?",
      phone: "Include your country code if outside India",
      email: "Where should we reply?",
      service: "Choose the help you need",
      quantity: "Select a range",
      message: "Share your formula or tell us which of our serums interests you, plus any timing or packaging questions.",
    },
    validation: {
      nameRequired: "Please enter your name.",
      nameTooLong: "Please keep your name under 100 characters.",
      phoneRequired: "Please enter a phone number we can reply to.",
      phoneInvalid: "Enter a valid phone number, including its country code if needed.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Check the email address and try again.",
      serviceRequired: "Choose the service you are asking about.",
      quantityRequired: "Choose an expected quantity range.",
      messageRequired: "Tell us a little about your serum or project.",
      messageTooShort: "Please add a little more detail (at least 10 characters).",
      messageTooLong: "Please keep your message under 2,000 characters.",
    },
    formError: "We couldn't send your enquiry just now. Please try again in a moment.",
    rateLimitError: "You've sent several enquiries in a short time. Please wait a little and try again.",
    serviceUnavailable: "Enquiries are temporarily unavailable. Please try again later.",
    noScriptError: "Please check the fields marked above and try again.",
    serviceLabel: "Service needed",
    quantityLabel: "Expected quantity",
    quantityOptions: ["Under 100", "100–500", "500–2000", "2000+"],
    submitLabel: "Send enquiry",
    submittingLabel: "Sending enquiry…",
  },
  imagePaths: {
    facility: null as string | null,
    facilityDetail: null as string | null,
  },
  notFound: {
    eyebrow: "404 · PAGE NOT FOUND",
    title: "This page isn't here.",
    description: "The address may have changed, or the page may no longer be available. You can return to the home page and find another way forward.",
    action: "Back to home",
  },
} as const;

export type SiteNavigationItem = (typeof SITE.navigation)[number];
export type SiteService = (typeof SITE.services.items)[number];

export function getWhatsAppHref(): string | null {
  const digits = SITE.contact.whatsapp.number.replace(/\D/g, "");
  if (!digits) return null;
  const message = encodeURIComponent(SITE.ui.whatsappMessage);
  return `https://wa.me/${digits}?text=${message}`;
}
