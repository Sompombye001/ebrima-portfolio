// Single source of truth for site content.
// Edit here — every page (home, about, projects) pulls from this file.

export const profile = {
  name: "Ebrima Sompo",
  titles: ["Software Engineer", "Computer Science Student", "UI/UX Designer"],
  location: "The Gambia",
  tagline:
    "I build software the way institutions need it built: correct, secure, and shipped.",
  bio: [
    "A Computer Science student at the University of The Gambia making commercial applications — from luxury e-commerce brands to restaurant management systems, hotel management systems and business analytics dashboards.",
    "Most portfolios show landing pages. Mine shows systems: role-based admin panels, distributed banking infrastructure, biometric records platforms, real-time dashboards.",
    "I care about the same things at every scale: clean architecture, secure access control, and interfaces that don't get in the way of the person using them.",
  ],
  email: "ebr1ma.smp@gmail.com",
  resumeUrl: "/resume.pdf",
  availability: "Open to new projects",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
  ],
};

export const education = {
  school: "University of The Gambia",
  degree: "Bachelor of Science in Computer Science",
  period: "2024 — 2028",
  cert: { name: "Cambridge IGCSE", result: "Merit" },
  courses: [
    "Project Management",
    "Operating Systems",
    "Data Structures",
    "Algorithms",
    "Computer Networking",
    "Computer Logic & Discrete Structures",
    "Computer Architecture & Organization",
    "Information Communication Technology",
    "Programming & Logic Design",
    "Automata Theory",
    "Microprocessor Principles",
    "Linear Algebra",
    "Calculus",
    "French",
  ],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "GSM Company",
    period: "Jul 2025 — Sep 2025",
    focus: ["Application Development", "Database Design", "Authentication"],
    achievements: [
      "Developed a SIM Registration System",
      "Built an e-commerce demo platform",
      "Firebase integration",
      "Authentication & secure access control",
    ],
  },
  {
    role: "UI / Software Development Intern",
    org: "GSM Company",
    period: "Jul 2024 — Sep 2024",
    focus: ["Product Design", "UI/UX"],
    achievements: [
      "Designed a Procurement Management System in Figma",
      "Corporate website recreation",
      "UI/UX design systems",
    ],
  },
  {
    role: "IT Intern",
    org: "GSM Company",
    period: "Jul 2023 — Dec 2023",
    focus: ["Networking", "Infrastructure"],
    achievements: [
      "Fiber optic networking",
      "Technical support",
      "Network installation",
      "Structured cabling",
    ],
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "SQL"],
  frameworks: [
    "React",
    "Next.js 15",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "React Three Fiber",
  ],
  platforms: ["Firebase", "Vercel", "Git", "GitHub", "Linux", "VMware", "SQL Server"],
  design: ["Figma", "Framer", "UI Design", "UX Design", "Design Systems"],
  infra: ["Networking", "Fiber Optics", "Structured Cabling"],
};

export type Project = {
  slug: string;
  name: string;
  category:
    | "Commercial"
    | "Corporate"
    | "Education"
    | "Health"
    | "Sports"
    | "Automotive"
    | "Events"
    | "Academic";
  status: "Deployed" | "In Development" | "Prototype" | "Concept";
  overview: string;
  stack: string[];
  features: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  /*{
    slug: "national-intelligence-platform",
    name: "National Intelligence & Statistics Management Platform",
    category: "Government",
    status: "Prototype",
    overview:
      "A national-scale intelligence platform for authenticated reporting, analytics, public alerts, and full audit logging.",
    stack: ["Next.js 15", "PostgreSQL", "Chart.js"],
    features: ["Authentication", "Reports", "Analytics", "Public Alerts", "Audit Logs"],
    featured: true,
  },
  {
    slug: "cid-investigation-system",
    name: "CID Investigation Management System",
    category: "Government",
    status: "Prototype",
    overview:
      "A role-based investigation platform for the CID, covering case management, evidence tracking, and criminal profiling.",
    stack: ["React", "Chart.js", "Role-based Auth"],
    features: ["Authentication", "Case Management", "Evidence Management", "Criminal Profiling", "Reports"],
    featured: true,
  },
  {
    slug: "distributed-banking-system",
    name: "Fault-Tolerant Distributed Banking System",
    category: "Banking",
    status: "Deployed",
    overview:
      "A distributed banking backend combining a Node.js/Express API gateway with Java TCP servers, transaction consistency, and real-time streaming to a React dashboard.",
    stack: ["Node.js", "Express", "Java", "Socket.IO", "React"],
    features: ["Distributed Servers", "Transaction Consistency", "Encryption", "Deadlock Handling", "Fault Tolerance"],
    featured: true,
  },
  {
    slug: "npp-gambia",
    name: "Political PartyOfficial Website",
    category: "Government",
    status: "Deployed",
    overview:
      "A political party platform with a role-based admin panel, member ID generation, and full approval workflows.",
    stack: ["Next.js 15", "Supabase", "PostgreSQL", "RLS"],
    features: ["Member Registration", "Approval Workflows", "Admin Panel", "Role-based Access"],
    featured: true,
  },
  {
    slug: "gpf-tint-certificate",
    name: "Vehicle Tint Certificate Verification System",
    category: "Government",
    status: "Prototype",
    overview:
      "A law-enforcement-grade platform for thePolice Force with QR verification and fraud detection.",
    stack: ["Next.js", "PostgreSQL", "QR Verification"],
    features: ["QR Verification", "Fraud Detection", "Full Schema Design"],
  },*/
  {
    slug: "sim-registration",
    name: "Mobile SIM Registration Application",
    category: "Commercial",
    status: "Deployed",
    overview:
      "A mobile SIM registration app built during my GSM Company internship, with Firebase-backed secure onboarding.",
    stack: ["React Native", "Expo", "Firebase", "TypeScript"],
    features: ["Authentication", "Secure Access Control", "Firebase Integration"],
  },
  {
    slug: "clothify-wears",
    name: "Clothify - Luxury Streetwear E-commerce",
    category: "Commercial",
    status: "In Development",
    overview:
      "A luxury streetwear e-commerce brand with a dark/gold design system, multi-currency support (USD/GMD), and WhatsApp ordering.",
    stack: ["React Native", "Expo", "Next.js 15", "Firebase", "Stripe"],
    features: ["Multi-currency", "WhatsApp Ordering", "Stripe Payments", "Dark/Gold Design System"],
    featured: true,
  },
  {
    slug: "aventis-car-dealership-website",
    name: "Aventis — Car Dealership Website",
    category: "Commercial",
    status: "Deployed",
    overview: "A modern digital car dealership Website that allows customers to browse available vehicles, book test drives and purchase or reserve cars online.",
    stack: ["Framer"],
    features: ["Responsive Homepage", "Featured Vehicles", "Book a Test Drive"],
    featured: true,
  },
  {
    slug: "vortex-labs",
    name: "Vortex Labs - Digital Agency Website",
    category: "Corporate",
    status: "Deployed",
    overview:
      "A digital agency website featuring a particle vortex hero, 3D tilt service cards, and full smooth-scroll motion system.",
    stack: ["next.js 15",],
    features: ["Particle Vortex Hero", "3D Tilt Cards", "Smooth Scroll", "10 Sections"],
  },
  {
    slug: "real-estate-construction-company",
    name: " PA properties Real Estate & Construction Company ",
    category: "Corporate",
    status: "Deployed",
    overview: "An enterprise real estate and construction website with a burgundy/gold identity.",
    stack: ["Framer"],
    features: ["Property Listings", "Company Profile", "Burgundy/Gold Design System"],
  },
  {
    slug: "Premium-Restaurant-Website",
    name: "EAATS — Premium CAfe & Restaurant",
    category: "Commercial",
    status: "Deployed",
    overview: "A full site for a an upscale Premium CAFe & Restaurant.",
    stack: ["Next.js 15", "Firebase"],
    features: ["Digital Menu", "Reservations", "Brand Identity"],
    featured: true,
  },
  {
    slug: "jehe-restaurant",
    name: "Jehe — Luxury Restaurant Website",
    category: "Commercial",
    status: "Deployed",
    overview: "A luxury restaurant website for a local restaurant.",
    stack: ["Next.js 15", "Claude"],
    features: ["Digital Menu", "Reservations", "Premium Visual Identity"],
   
  },
  {
    slug: "football-club-digital-platform",
    name: "Football Club Digital Platform",
    category: "Sports",
    status: "Deployed",
    overview: "A digital platform for a football club with player information, match schedules, and ticket sales.",
    stack: ["next.js 15", "Claude"],
    features: ["Player Information", "Match Schedules", "Ticket Sales"],
    featured: true,
  },
  {
    slug: "gym-complex-digital-platform",
    name: "Gym Complex Digital Platform",
    category: "Sports",
    status: "Deployed",
    overview: "A digital platform for a gym complex with class schedules, member management, and booking systems.",
    stack: ["Framer"],
    features: ["Class Schedules", "Member Management", "Booking Systems"],
  },
  {
    slug: "wedding-invitation-website",
    name: "A&D - Wedding Invitation Website",
    category: "Commercial",
    status: "Deployed",
    overview: "A wedding invitation website with RSVP functionality and a photo gallery.",
    stack: ["Framer"],
    features: ["RSVP Functionality", "Photo Gallery", "Responsive Design"],
    featured: true,
  },
  {
    slug: "legal-services-website",
    name: "IronGate - Legal Services Website",
    category: "Corporate",
    status: "Deployed",
    overview: "Professional, secure, and modern digital platform that enables clients to learn about legal services and book consultations",
    stack: ["Framer"],
    features: ["Responsive Homepage", "Featured Legal Services", "Book a Consultationc"],
    featured: true,
  },
  {
    slug: "eggbiz",
    name: "EggBiz — Business Management Dashboard",
    category: "Commercial",
    status: "Deployed",
    overview: "A business management dashboard in Gambian Dalasi with inventory tracking, sales analytics, and a Dalasi currency converter.",
    stack: ["next.js 15", "Claude"],
    features: ["Inventory Tracking", "Dalasi Currency", "Sales Analytics"],
  
  
  },
    {
    slug: "stadium-digital-platform",
    name: "Stadium Digital Platform",
    category: "Sports",
    status: "Deployed",
    overview: "A digital platform for a football stadium with ticket sales, seat allocation, and management.",
    stack: ["next.js 15", "Claude"],
    features: ["Ticket Sales", "Seat Allocation", "Management"],
    featured: true,
  },
   
  {
    slug: "School-management-system",
    name: "School Management System",
    category: "Education",
    status: "Concept",
    overview:
      "A full academic ecosystem spanning student, lecturer, and admin portals — registration, timetables, grades, and payments.",
    stack: ["Next.js", "PostgreSQL",],
    features: ["Student Portal", "Lecturer Portal", "Admin Portal", "Course Registration", "Payments"],
    
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    category: "Health",
    status: "Concept",
    overview: "Patient records, appointment scheduling, staff management, and task assignment for a hospital network.",
    stack: ["Next.js", "PostgreSQL"],
    features: ["Patient Records", "Appointment Scheduling", "Staff Management"],
  },
];

export const projectCategories = Array.from(
  new Set(projects.map((p) => p.category))
);
