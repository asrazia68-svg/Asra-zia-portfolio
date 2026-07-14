// ============================================================
// PORTFOLIO CONTENT — single source of truth
// Edit this file to update any text across the entire site.
// Every value here was explicitly confirmed — nothing fabricated.
// ============================================================

export const personal = {
  fullName: "Asra Zia",
  displayName: "Asra Zia",
  headline: "AI/ML Developer | Artificial Intelligence Student @ FUUAST",
  intro: "Building Intelligent Systems and passionate about building real-world AI/ML solutions.",
  bio: "I'm an Artificial Intelligence student at FUUAST with a strong interest in Machine Learning and AI-driven products. I love turning research and ideas into working systems, and I'm on a journey to become a skilled AI/ML developer who builds meaningful, real-world solutions.",
  location: "Wah Cantt, Punjab, Pakistan",
  email: "asrazia68@gmail.com",
  photo: "/profile.jpeg",
  resumeUrl: "/resume.pdf",
};

export const socials = {
  github: "https://github.com/asrazia68-svg",
  linkedin: "https://www.linkedin.com/in/asra-zia-26a31a3aa/",
  email: "mailto:asrazia68@gmail.com",
  fiverr: "https://www.fiverr.com/asrazia327",
  osdire: "https://osdire.com/freelancer/profile",
};

export const education = [
  {
    university: "FUUAST — Islamabad Campus",
    degree: "BS Artificial Intelligence & Data Science",
    duration: "2025 – Present",
    detail: "2nd Semester",
    gpa: "3.17",
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++"],
  "AI / ML Frameworks": ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "OpenCV", "Scikit-learn", "HuggingFace"],
  "Web & App": ["Next.js", "React", "Node.js", "Flask", "Tailwind CSS", "Streamlit"],
  "Cloud & DevOps": ["AWS", "Docker", "Git", "GitHub Actions", "Vercel"],
  "Data & Storage": ["PostgreSQL", "MongoDB", "Pinecone", "Firebase", "ChromaDB"],
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  emoji: string;
  shortDescription: string;
  tags: string[];
  overview: string;
  features: string[];
  techStack: { category: string; items: string[] }[];
  pipeline: string[];
  challenge: string;
  lessons: string;
  github: string;
  liveDemo?: string;
  status: "Completed";
};

export const projects: Project[] = [
  {
    slug: "docuquery-ai",
    name: "DocuQuery AI",
    year: "2026",
    emoji: "📝",
    shortDescription:
      "A retrieval-augmented Q&A system that lets users upload documents and ask natural-language questions, with answers grounded in the source text.",
    tags: ["Python", "LangChain", "Vector DB", "RAG"],
    overview:
      "DocuQuery AI is a full-stack RAG (Retrieval-Augmented Generation) application that lets you have a conversation with your documents. It combines vector embeddings, ChromaDB, and Groq's LLaMA 3.3 70B model to deliver accurate, context-aware answers from uploaded PDF or TXT files. The system has two components: an ingestion pipeline that chunks and vectorizes documents into ChromaDB, and a real-time Streamlit chat interface.",
    features: [
      "Multi-format support — accepts PDF and TXT documents",
      "Semantic search using cosine similarity on HuggingFace embeddings",
      "LLaMA 3.3 70B via Groq for fast, accurate answers",
      "Persistent ChromaDB vector store with cosine similarity",
      "Conversational memory across chat turns",
      "Dark mode Streamlit UI with one-click history/vector reset",
    ],
    techStack: [
      { category: "Frontend", items: ["Streamlit"] },
      { category: "LLM", items: ["Groq — LLaMA 3.3 70B Versatile"] },
      { category: "Embeddings", items: ["HuggingFace all-MiniLM-L6-v2"] },
      { category: "Vector Store", items: ["ChromaDB (cosine similarity)"] },
      { category: "Orchestration", items: ["LangChain"] },
      { category: "Language", items: ["Python"] },
    ],
    pipeline: [
      "Upload document",
      "Text extracted (PDF → pypdf, TXT → raw read)",
      "Split into chunks (size 600, overlap 60)",
      "Chunks embedded via HuggingFace all-MiniLM-L6-v2",
      "Embeddings stored in ChromaDB",
      "Top 4 relevant chunks retrieved on query",
      "Context + question sent to LLaMA 3.3 via Groq",
      "Answer displayed in chat",
    ],
    challenge:
      "Initially, the system struggled to return accurate and relevant answers — retrieved chunks often didn't align well with the user's question, leading to vague or off-target responses. This required tuning the chunking strategy (size and overlap) and adjusting retrieval parameters to improve context relevance and prevent the model from overfitting to narrow chunks of text.",
    lessons:
      "Learned that RAG system quality depends heavily on the retrieval pipeline, not just the LLM — chunking strategy, embedding quality, and retrieval tuning directly impact answer accuracy. This deepened understanding of how to debug and iteratively improve a retrieval pipeline for real-world use.",
    github: "https://github.com/asrazia68-svg/Rag_system",
    liveDemo: "https://ragsystem-3wlqdclw44x6scnhosnqif.streamlit.app/",
    status: "Completed",
  },
  {
    slug: "weapon-detection-system",
    name: "Weapon Detection System",
    year: "2026",
    emoji: "🔫",
    shortDescription:
      "A real-time computer vision system that detects weapons in video feeds and raises alerts, built for surveillance and public-safety use cases.",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    overview:
      "A real-time weapon detection system powered by a custom-trained YOLOv8 model. It supports both static image detection and live webcam detection with an audio alarm system that triggers automatically when a weapon is detected. Designed for security and surveillance use cases — it can be integrated into CCTV systems or used as a standalone detection tool.",
    features: [
      "Custom-trained YOLOv8 model on a weapon dataset",
      "Static image detection from a test folder",
      "Real-time webcam detection, frame by frame",
      "Audio alarm system via winsound + threading (non-blocking)",
      "Confidence scoring shown per detection",
      "Auto-saves annotated output images",
      "60% confidence threshold to filter false positives",
    ],
    techStack: [
      { category: "Language", items: ["Python"] },
      { category: "Model", items: ["YOLOv8 (Ultralytics)"] },
      { category: "Vision", items: ["OpenCV (cv2)"] },
      { category: "Alerts", items: ["Winsound", "Threading"] },
    ],
    pipeline: [
      "Input (Image / Webcam)",
      "YOLOv8 custom model (best.pt)",
      "Object detection (conf ≥ 60%, IoU = 0.45)",
      "Bounding box + label + confidence score",
      "Audio alarm triggered if weapon detected",
      "Output saved / displayed on screen",
    ],
    challenge:
      "Working with a limited custom dataset size while keeping the model accurate and fast enough for real-time use.",
    lessons:
      "Deepened understanding of the full computer vision workflow: data preparation, training, fine-tuning, and evaluation.",
    github: "https://github.com/asrazia68-svg/Weapon-Detection-system",
    status: "Completed",
  },
  {
    slug: "ai-social-media-agent",
    name: "AI Social Media Agent",
    year: "2025",
    emoji: "⚡",
    shortDescription:
      "An autonomous multi-agent system that plans, researches, drafts, and reviews platform-specific social media content from a single prompt.",
    tags: ["Python", "LangChain", "Automation", "APIs"],
    overview:
      "AI Social Media Agent is a multi-agent AI system that automatically generates social media content tailored to a brand. Given a brand name, target audience, and campaign goal, specialized agents work together to build a marketing strategy, conduct market research, write platform-specific posts, and review the generated content — reducing a manual content calendar to a single prompt.",
    features: [
      "Multi-agent architecture — dedicated agents for strategy, research, writing, and review",
      "Multi-platform support: Instagram, LinkedIn, Twitter, Facebook, TikTok",
      "Modern cyberpunk-themed Streamlit UI",
      "Campaign goal selection: Brand Awareness, Lead Generation, Sales, Engagement",
      "One-click generation — full pipeline triggered with a single button",
    ],
    techStack: [
      { category: "Language", items: ["Python"] },
      { category: "UI", items: ["Streamlit"] },
      { category: "Architecture", items: ["Multi-Agent Workflow", "LangGraph", "LangChain", "Groq API"] },
    ],
    pipeline: [
      "Enter brand name, target audience, campaign goal",
      "Select target platforms",
      "Strategy agent builds marketing strategy",
      "Research agent conducts market research",
      "Writer agent drafts platform-specific posts",
      "Review agent refines and checks all content",
      "Final content delivered per platform",
    ],
    challenge:
      "Accidentally exposed an API key in the codebase during development, which highlighted a gap in secure credential management practices.",
    lessons:
      "Learned the importance of proper API key management — using environment variables (.env files), adding sensitive files to .gitignore, and immediately rotating any exposed keys. This experience reinforced secure coding practices now applied to every project from the start.",
    github: "https://github.com/asrazia68-svg/social-media-ai-agent",
    liveDemo: "https://social-media-ai-agent-tywiwtpyhtkzv9qgaptmzp.streamlit.app/",
    status: "Completed",
  },
  {
    slug: "leadhunter",
    name: "LeadHunter",
    year: "2024",
    emoji: "🎯",
    shortDescription:
      "A lead generation tool that scrapes, enriches, and scores prospects from public sources, exporting sales-ready lead lists.",
    tags: ["Python", "Web Scraping", "Data Enrichment"],
    overview:
      "LeadHunter is an AI-powered lead generation tool built to find, verify, and export leads. It includes a real-time dashboard, a YouTube lead finder that searches real channels by keyword, a LinkedIn lead finder by job title and industry, an email finder, and an email verifier — with one-click CSV export for sales-ready lead lists.",
    features: [
      "Real-time dashboard with lead stats & analytics",
      "YouTube Lead Finder — search real channels by keyword",
      "LinkedIn Lead Finder — find leads by job title & industry",
      "Email Finder — find emails by name & domain",
      "Email Verifier — validate email addresses",
      "Export leads as CSV",
    ],
    techStack: [
      { category: "Language", items: ["Python"] },
      { category: "UI", items: ["Streamlit"] },
      { category: "Data", items: ["YouTube Data API v3", "Pandas", "Requests"] },
    ],
    pipeline: [
      "Select platform (YouTube / LinkedIn)",
      "Search by keyword, job title, or industry",
      "Fetch and enrich lead data",
      "Verify emails",
      "Review on dashboard",
      "Export as CSV",
    ],
    challenge:
      "Real-time lead search for platforms like LinkedIn was limited because reliable, accurate APIs for this data are paid/costly, making it difficult to fetch fully real, live results within a free/budget setup.",
    lessons:
      "Learned how to work around API cost and access constraints — evaluating which data sources offer free tiers (like the YouTube Data API) versus paid ones (like LinkedIn), and understanding the trade-offs between data accuracy, cost, and platform restrictions when building real-world tools with limited API budgets.",
    github: "https://github.com/asrazia68-svg/leadhunter",
    liveDemo: "https://leadhunter-xvjgtfdad6b56wy5vjmehz.streamlit.app",
    status: "Completed",
  },
];

export const experience = [
  {
    role: "Machine Learning Engineering Intern",
    org: "FlyRank (Remote)",
    duration: "July 2026 – Present (6-week cohort)",
    points: ["Contributing to ML engineering workflows as part of a structured, cohort-based internship program."],
  },
  {
    role: "Data Science & ML Intern",
    org: "Infyntrek Systèmes (Remote)",
    duration: "2026 – September 2026",
    points: ["Supporting data science and machine learning tasks including data analysis, model development, and applied ML experimentation."],
  },
];

export type Certification = {
  title: string;
  org: string;
  duration: string;
  category: string;
  status: "Completed" | "In Progress";
};

export const certifications: Certification[] = [
  {
    title: "Generative AI",
    org: "Bono Qabil",
    duration: "June 10, 2026",
    category: "AI",
    status: "Completed",
  },
  {
    title: "Digital Marketing",
    org: "DigiSkills.pk / Ignite / Virtual University",
    duration: "Aug – Nov 2025",
    category: "Technical Training",
    status: "In Progress",
  },
  {
    title: "From Idea to Execution",
    org: "The Foundry Club, NIC Islamabad (IST Chapter)",
    duration: "Jan 2026",
    category: "Professional Development",
    status: "In Progress",
  },
  {
    title: "Gratitude & Journalling",
    org: "Buraaq Psychology Hub",
    duration: "Feb 2026",
    category: "Professional Development",
    status: "In Progress",
  },
];

export const freelance = {
  active: true,
  services: ["AI Automation", "Chatbots"],
  platforms: [
    { name: "Fiverr", url: socials.fiverr },
    { name: "Osdire", url: socials.osdire },
  ],
};

export const aiWidget = {
  greeting: "I'm Asra Zia, an AI and ML developer. Welcome to my portfolio.",
  voiceGender: "female" as const,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const footerTagline = "Building AI Solutions That Make an Impact.";
