window.APP_CONFIG = {
  meta: {
    mode: "demo",
    leadId: "shear-skill-barbershop",
    demoExpiresAt: "2026-12-31T23:59:59-07:00",
    contactName: "",
    contactEmail: ""
  },

  business: {
    name: "Shear Skill Barbershop",
    tagline: "Sharp Cuts. Clean Fades. Every Time.",
    phone: "",
    email: "",
    logo: "axiommaster3.webp"
  },

  branding: {
    primary: "#C724B1",
    accent: "#FF4FD8",
    theme: "galaxy",
    neon: { on: true, color: "match", width: 3 }
  },

  modules: {
    hero: true,
    axiomIntro: true,
    bannerStrips: true,
    services: true,
    about: true,
    contact: true,
    bookingForm: true,
    nav: true,
    stats: false,
    hours: false,
    reviews: false,
    gallery: false,
    faq: false
  },

  content: {
    hero: {
      banner: "shearskill-banner.jpg",
      headline: "Sharp Cuts. Clean Fades.",
      subtext: "Haircuts, fades, beard work, and hot shaves — your local barbershop done right.",
      buttons: [
        { label: "See Prices", icon: "scissors", link: "#services" },
        { label: "Book a Chair", icon: "calendar-check", link: "#book" }
      ]
    },

    axiomIntro: {
      heading: "Meet AXIOM — Your 24/7 Front Desk",
      subtext: "AXIOM is the AI receptionist that never sleeps. It books appointments and answers customers even when the shop is closed — so you never miss a cut.",
      points: [
        { icon: "clock", text: "Books appointments 24/7, even after hours" },
        { icon: "calendar-check", text: "Fills empty chairs automatically" },
        { icon: "bell", text: "Sends every new booking straight to your phone" },
        { icon: "trending-up", text: "Turns missed calls into paying clients" }
      ]
    },

    bannerStrips: [
      {
        image: "strip1.jpg.png",
        headline: "Fresh Fades, Every Time",
        subtext: "Walk out looking your best."
      },
      {
        image: "strip2.jpg.png",
        headline: "Beard Work & Hot Shaves",
        subtext: "The full barbershop experience."
      }
    ],

    services: [
      { name: "Short Haircut", price: "$24", icon: "scissors", desc: "Classic short cut, clean and sharp." },
      { name: "Skin Fade", price: "$28", icon: "scissors", desc: "Precision skin fade, blended smooth." },
      { name: "Long Haircut", price: "$28", icon: "scissors", desc: "Cut and styled for longer hair." },
      { name: "Kids Cut", price: "$20", icon: "scissors", desc: "Haircuts for the little ones." },
      { name: "Buzz Cut", price: "$18", icon: "scissors", desc: "Quick, clean all-over buzz." },
      { name: "Senior / Military / Fire / Police", price: "-$3", icon: "shield", desc: "$3 off any haircut. Thank you for your service." },
      { name: "Trimmers Only", price: "$15", icon: "scissors", desc: "Facial hair lineup, trimmers only." },
      { name: "Full Beard", price: "$30", icon: "scissors", desc: "Full beard trim and shape, trimmers and shave." },
      { name: "Chin Strap", price: "$32", icon: "scissors", desc: "Chin strap shape-up, trimmers and shave." },
      { name: "Goatee", price: "$34", icon: "scissors", desc: "Goatee trim and detail, trimmers and shave." },
      { name: "Moustache", price: "$37", icon: "scissors", desc: "Moustache shape and detail, trimmers and shave." },
      { name: "Full Face Shave", price: "$40", icon: "scissors", desc: "Full face hot towel shave." },
      { name: "Hair Wash", price: "$10", icon: "droplet", desc: "Wash and rinse add-on." }
    ],

    about: {
      heading: "About Shear Skill Barbershop",
      body: "Shear Skill Barbershop delivers sharp cuts, clean fades, and full beard work in a classic barbershop setting. Discounts for seniors, military, fire, and police. Walk in or book ahead."
    },

    nav: [
      { label: "Prices", icon: "scissors", link: "#services" },
      { label: "Book", icon: "calendar-check", link: "#book" },
      { label: "Find Us", icon: "map-pin", link: "#contact" }
    ]
  },

  forms: {
    endpoint: "https://formspree.io/f/xykrkdky"
  },

  demoLeads: [
    { name: "Derek W.", phone: "(541) 555-0164", msg: "Need a skin fade this week", secs: "0.9" },
    { name: "Tony R.", phone: "(541) 555-0288", msg: "Booking a beard trim", secs: "1.1" },
    { name: "Chris L.", phone: "(541) 555-0319", msg: "Do you take walk-ins?", secs: "0.7" }
  ],

  orb: {
    on: true,
    label: "AXIOM",
    teaser: {
      delay: 2500,
      messages: [
        "👋 I'm AXIOM — I book cuts for Shear Skill 24/7",
        "💈 Ask me about prices or availability",
        "📅 Book a chair with one tap",
        "📲 Tap to add this app to your phone"
      ]
    }
  },

  reception: {
    greeting: "Welcome to Shear Skill Barbershop! I'm AXIOM. Want to see prices, book a chair, or find us?",
    quickButtons: [
      { label: "💈 See prices", text: "What are your haircut prices?" },
      { label: "📅 Book a chair", text: "How do I book an appointment?" },
      { label: "📍 Where are you?", text: "Where are you located?" },
      { label: "📲 Add to my phone", action: "install" }
    ],
    bookingNotify: "https://formspree.io/f/xykrkdky",
    knowledge: {
      persona: "You are AXIOM, the friendly AI receptionist for Shear Skill Barbershop. Be warm, sharp, and helpful. Help with haircut and beard service prices (Short $24, Skin Fade $28, Long $28, Kids $20, Buzz $18, $3 off for senior/military/fire/police; Trimmers Only $15, Full Beard $30, Chin Strap $32, Goatee $34, Moustache $37, Full Face Shave $40, Hair Wash $10), booking appointments, and location. Never invent prices, hours, or details you weren't given.",
      address: "",
      phone: "",
      ordering: "Walk-in or book ahead"
    }
  }
};
