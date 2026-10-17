/**
 * RATIKANTA SAHOO : AI AGENT KNOWLEDGE BASE & SEMANTIC ENGINE
 * 
 * Provides comprehensive, accurate details about Ratikanta's background,
 * skills, projects, education, hackathons, and contact details.
 */

export const RATIKANTA_KNOWLEDGE = {
  name: "Ratikanta Sahoo",
  roles: "Full-Stack Developer | Web Developer | Java & Python Developer",
  status: "B.Tech Student (Currently pursuing 2nd Year, 2025–2029)",
  institution: "Einstein Academy of Technology and Management (EATM), Baniatangi, Bhubaneswar, Odisha",
  location: "Chakradharpur, Kujang, Jagatsinghpur, Odisha, India",
  careerGoal: "Seeking web development internships, software engineering roles, and innovative digital project collaborations.",
  bio: "I am a B.Tech student and aspiring Full-Stack Developer who enjoys building websites, learning programming languages, and developing practical technology solutions. I am improving my skills through personal projects, technical learning, and collaboration with teammates.",
  motto: "BUILD. LEARN. SOLVE. CREATE.",
  typingSpeed: "An interactive typing exercise is available in the portfolio.",
  
  contacts: {
    primaryEmail: "ratikantas512@gmail.com",
    altEmail: "ratikanta741203@gmail.com",
    phone: "+91 9078835620",
    whatsapp: "https://wa.me/919078835620",
    github: "https://github.com/ratikanta741203-star",
    linkedin: "https://in.linkedin.com/in/ratikanta-sahoo-452763358",
    instagram: "https://www.instagram.com/ratikanta_sahoo_149_a9?stkn=bjRxazc4dGd1dGs4",
    x: "https://x.com/A9_Sahoo",
  },

  skills: {
    development: ["C", "C++", "HTML5", "CSS3", "XML", "Python", "Java", "SQL", "MySQL"],
    mernStack: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript (ES6+)", "TypeScript", "JSX/TSX", "MongoDB Query Language (MQL)"],
    productivity: ["Typing exercise", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Presentation"],
    creative: ["Photo Editing", "Poster Making", "Report Writing", "Script Writing", "Email Writing"],
    professional: ["Marketing", "Team Collaboration", "Communication", "Problem Solving"],
    tools: ["Git", "GitHub", "VS Code"],
    learning: ["React Ecosystem", "Three.js & 3D Web", "REST API Integration", "AI Integration"],
  },

  education: [
    {
      degree: "B.Tech (Computer Science & Engineering)",
      school: "Einstein Academy of Technology and Management (EATM)",
      location: "Baniatangi, Bhubaneswar, Odisha",
      period: "2025 – 2029",
      status: "Currently in 2nd Year",
    },
    {
      degree: "Higher Secondary (Class XII - Science)",
      school: "Sri Aurobindo Science College",
      location: "Cuttack, Odisha",
      period: "2025",
      score: "467 marks (77.84%)",
    },
    {
      degree: "Secondary School (Class X)",
      school: "A.B. Higher Secondary School",
      location: "Basudevpur, Bhadrak, Odisha",
      period: "2023",
      score: "407 marks (67.84%)",
    },
  ],

  certifications: [
    "HTML & CSS : Verified by GeeksforGeeks",
    "Python : Verified by GeeksforGeeks",
    "Java : Verified by GeeksforGeeks",
  ],
  completedCoursework: [
    "C, C++, and SQL coursework completed at Einstein Academy of Technology and Management (EATM), Bhubaneswar, Odisha",
    "MERN Stack coursework completed at Einstein Academy of Technology and Management (EATM), Bhubaneswar, Odisha, covering MongoDB, Express.js, React, Node.js, JavaScript (ES6+), TypeScript, JSX/TSX, and MongoDB Query Language (MQL)",
  ],

  hackathons: [
    "Smart India Hackathon : Student Team Leader (led team coordination, collaborative problem analysis, idea development, and technical presentations)",
    "Hackathon Teamwork & Ideation : Cross-functional collaboration, technical brainstorming, and solution planning",
    "Marketing & Outreach : Promotional campaigns, articulate public communication, and student outreach",
  ],

  projects: [
    {
      title: "Odisha Disaster Guardian (Rudram 2.0)",
      description: "An Odisha disaster-management platform supporting emergency feeds, shelter mapping, volunteer mobilization, SOS alerts, and relief logistics.",
      tech: "HTML5, CSS3, JavaScript, MySQL",
    },
    {
      title: "Defend AI",
      description: "A cybersecurity application exploring AI-assisted threat analysis, malicious URL detection, and security risk scoring.",
      tech: "Python, AI Concepts, JavaScript",
    },
    {
      title: "AI Girl Assistant",
      description: "Personal AI assistant application using Python, Flask backend routing, modern JavaScript interface, and voice synthesis.",
      tech: "Python, Flask, JavaScript, AI Integration",
    },
    {
      title: "A9 Shop",
      description: "Hyper-local e-commerce website concept with product presentation and inventory information for local businesses.",
      tech: "HTML5, CSS3, JavaScript, MySQL",
    },
    {
      title: "EATM Smart School",
      description: "Educational-management platform concept designed for institution administration and student workflows.",
      tech: "Java, HTML5, CSS3, MySQL",
    },
    {
      title: "A9 Restaurant",
      description: "Restaurant website concept with interactive menu management, table reservations, and kitchen inventory alerts.",
      tech: "HTML5, CSS3, JavaScript, MySQL",
    },
    {
      title: "Gesture 3D Particles",
      description: "Interactive 3D particle simulation responding to spatial hand motion, cursor physics, and quantum wave velocity algorithms.",
      tech: "Three.js, WebGL, JavaScript",
    },
    {
      title: "Kinetic Visual & Media Art",
      description: "Creative typography and post-production graphic artwork showcasing neon illumination and poster composition.",
      tech: "Photo Editing, Poster Making, Visual Design",
    },
  ],
};

/**
 * Intelligent response generator matching intent and keywords.
 */
export function queryRatikantaAgent(rawQuery) {
  const q = rawQuery.toLowerCase().trim();

  // 1. Greetings
  if (/^(hi|hello|hey|namaste|greetings|hola|sup|good (morning|afternoon|evening))\b/i.test(q)) {
    return {
      text: `Hello! I'm Ratikanta Sahoo's portfolio guide. I can answer questions about his background, B.Tech coursework at EATM, development skills, projects, hackathon leadership, and contact information. What would you like to know?`,
      suggestions: ["Who is Ratikanta?", "What are his skills?", "Tell me about his projects", "How to contact him?"],
      action: null,
    };
  }

  // 2. Who is Ratikanta / Overview / About
  if (q.includes("who is") || q.includes("about him") || q.includes("about ratikanta") || q.includes("tell me about") || q.includes("introduce") || q.includes("background")) {
    return {
      text: `Ratikanta Sahoo is a B.Tech 2nd-year student at Einstein Academy of Technology & Management (EATM), Bhubaneswar. He is an aspiring Full-Stack Developer passionate about web engineering, Java, and Python. He lives in Jagatsinghpur, Odisha, and is currently seeking web-development internships and entry-level software opportunities!`,
      suggestions: ["What are his top skills?", "View his education", "Download his resume"],
      action: { type: "scroll", target: "about", label: "View About Section" },
    };
  }

  // 3. Skills & Technologies
  if (q.includes("skill") || q.includes("tech stack") || q.includes("technology") || q.includes("language") || q.includes("tools") || q.includes("proficien")) {
    return {
      text: `Ratikanta works across multiple technical domains:
• Programming & databases: C, C++, Java, Python, SQL, MySQL, HTML5, CSS3, XML
• Completed MERN Stack coursework at EATM: MongoDB, Express.js, React, Node.js, JavaScript (ES6+), TypeScript, JSX/TSX, and MongoDB Query Language (MQL)
• Productivity: Typing exercise, Microsoft Word, Excel, PowerPoint
• Creative: Photo Editing, Poster Making, Report & Script Writing
• Professional: Hackathon Team Leadership, Marketing, Problem Solving
• Tools: Git, GitHub, VS Code
• Actively Exploring: Three.js & 3D Web, REST APIs, AI Integration`,
      suggestions: ["Does he know Java?", "Does he know Python?", "Show his projects"],
      action: { type: "scroll", target: "skills", label: "Inspect Skills Matrix" },
    };
  }

  // 4. Java
  if (q.includes("java")) {
    return {
      text: `Yes! Java is one of Ratikanta's core engineering languages. He holds a verified certification in Java from GeeksforGeeks, specializes in Object-Oriented Programming (OOP), and developed backend architectures like the 'EATM Smart School' platform in Java.`,
      suggestions: ["Tell me about EATM Smart School", "What about Python?", "View certifications"],
      action: { type: "scroll", target: "skills", label: "View Java Skills" },
    };
  }

  // 5. Python
  if (q.includes("python")) {
    return {
      text: `Yes! Ratikanta is proficient in Python and certified by GeeksforGeeks. He uses Python for problem-solving, backend logic, and AI projects like 'AI Girl Assistant' (built with Python & Flask) and 'Defend AI' (cybersecurity threat analysis).`,
      suggestions: ["Tell me about AI Girl Assistant", "Tell me about Defend AI", "View certifications"],
      action: { type: "scroll", target: "projects", label: "Explore Python Projects" },
    };
  }

  // 6. Projects & Works
  if (q.includes("project") || q.includes("work") || q.includes("portfolio") || q.includes("apps") || q.includes("built")) {
    return {
      text: `Ratikanta has engineered several practical application concepts:
1. Odisha Disaster Guardian (Rudram 2.0) : Disaster feeds, shelter mapping, SOS alerts
2. Defend AI : AI-based multi-layer cybersecurity risk detection
3. AI Girl Assistant : Python & Flask voice-enabled personal assistant
4. A9 Shop : Hyper-local commercial inventory platform
5. EATM Smart School : Academic management platform in Java
6. A9 Restaurant : Culinary menu & table booking web app
7. Gesture 3D Particles : Quantum hand motion & 3D WebGL particle visuals
8. Kinetic Visual Art : Glowing neon editorial typography showcase`,
      suggestions: ["Tell me about Rudram 2.0", "Tell me about Defend AI", "View project cards"],
      action: { type: "scroll", target: "projects", label: "View Projects Showcase" },
    };
  }

  // 7. Rudram / Disaster Guardian
  if (q.includes("rudram") || q.includes("disaster") || q.includes("guardian") || q.includes("cyclone") || q.includes("rescue")) {
    return {
      text: `Odisha Disaster Guardian (Rudram 2.0) is Ratikanta's flagship public welfare platform concept. Designed for cyclone-prone coastal regions like Odisha, it provides emergency broadcast telemetry, real-time shelter mapping, community volunteer dispatch, and SOS communication.`,
      suggestions: ["Show other projects", "View technical skills", "Contact Ratikanta"],
      action: { type: "scroll", target: "projects", label: "View Rudram 2.0 Card" },
    };
  }

  // 8. Defend AI
  if (q.includes("defend") || q.includes("cyber") || q.includes("security") || q.includes("threat")) {
    return {
      text: `Defend AI is a cybersecurity project exploring AI-assisted multi-layer threat analysis. It features automated malicious URL detection, risk telemetry scoring, and awareness checklists to help students and developers safeguard their applications.`,
      suggestions: ["Tell me about AI Girl Assistant", "Show other projects", "Contact Ratikanta"],
      action: { type: "scroll", target: "projects", label: "View Defend AI" },
    };
  }

  // 9. AI Girl Assistant
  if (q.includes("girl") || q.includes("assistant") || q.includes("voice") || q.includes("flask")) {
    return {
      text: `AI Girl Assistant is Ratikanta's personal intelligent assistant application. Built with Python, Flask, and a modern JavaScript UI, it integrates conversational query routing, audio synthesis, and developer task scheduling.`,
      suggestions: ["What other projects?", "How to contact him?", "What are his skills?"],
      action: { type: "scroll", target: "projects", label: "View AI Assistant" },
    };
  }

  // 10. Education / College / College Name / Degree
  if (q.includes("college") || q.includes("school") || q.includes("university") || q.includes("eatm") || q.includes("study") || q.includes("education") || q.includes("degree") || q.includes("marks") || q.includes("12th") || q.includes("10th")) {
    return {
      text: `Ratikanta's Academic Journey:
• B.Tech (2025–2029): Einstein Academy of Technology & Management (EATM), Baniatangi, Bhubaneswar (Currently in 2nd Year)
• Completed EATM coursework: C, C++, SQL, and MERN Stack (MongoDB, Express.js, React, Node.js, JavaScript ES6+, TypeScript, JSX/TSX, and MQL)
• Class XII (2025): Sri Aurobindo Science College, Cuttack : 467 marks (77.84%)
• Class X (2023): A.B. Higher Secondary School, Basudevpur, Bhadrak : 407 marks (67.84%)`,
      suggestions: ["View education timeline", "What are his certifications?", "Download resume"],
      action: { type: "scroll", target: "education", label: "Go to Education Section" },
    };
  }

  // 11. Hackathons & Leadership
  if (q.includes("hackathon") || q.includes("sih") || q.includes("smart india") || q.includes("lead") || q.includes("team")) {
    return {
      text: `Ratikanta served as a Student Team Leader at the Smart India Hackathon! He coordinated peer engineering workflows, conducted collaborative problem analysis, formulated project architectures, and delivered technical presentations to mentor panels.`,
      suggestions: ["What projects has he built?", "View experience timeline", "Contact him"],
      action: { type: "scroll", target: "experience", label: "View Experience Timeline" },
    };
  }

  // 12. Certifications
  if (q.includes("certif") || q.includes("geeksforgeeks") || q.includes("gfg") || q.includes("course")) {
    return {
      text: `Ratikanta holds verified certifications from GeeksforGeeks in:
1. HTML & CSS (Web layout and styling fundamentals)
2. Python (Core language, algorithms & data structures)
3. Java (Object-Oriented Programming and architecture)`,
      suggestions: ["Does he know Java?", "What are his skills?", "Download resume"],
      action: { type: "scroll", target: "education", label: "View Certifications" },
    };
  }

  // 13. Resume / CV
  if (q.includes("resume") || q.includes("cv") || q.includes("download") || q.includes("bio-data")) {
    return {
      text: `Ratikanta's official one-page enhanced resume (Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf) is attached to the website! You can download it directly right now or open it in a new browser tab.`,
      suggestions: ["Download Resume Now", "Who is Ratikanta?", "Contact him"],
      action: { type: "download", target: "/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf", label: "Download Resume PDF" },
    };
  }

  // 14. Contact / Email / Phone / WhatsApp / Hire / Internship
  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("hire") || q.includes("internship") || q.includes("reach") || q.includes("call") || q.includes("message")) {
    return {
      text: `You can reach Ratikanta directly via:
• Primary Email: ratikantas512@gmail.com
• Alternative Email: ratikanta741203@gmail.com
• Phone / WhatsApp: +91 9078835620
• Location: Jagatsinghpur, Odisha, India
• GitHub: github.com/ratikanta741203-star
• LinkedIn: linkedin.com/in/ratikanta-sahoo-452763358

He is actively available for web development internships and entry-level developer roles!`,
      suggestions: ["Open WhatsApp Chat", "Send Email", "Go to Contact Form"],
      action: { type: "scroll", target: "contact", label: "Open Contact Form" },
    };
  }

  // 15. Typing speed
  if (q.includes("typing") || q.includes("wpm") || q.includes("speed")) {
    return {
      text: `The portfolio includes a short typing exercise that estimates speed and accuracy from the text entered.`,
      suggestions: ["Try the typing test", "What are his skills?", "Show projects"],
      action: { type: "scroll", target: "productivity", label: "Test Typing Simulator" },
    };
  }

  // 16. Location / Where is he from
  if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("city") || q.includes("state") || q.includes("odisha") || q.includes("live")) {
    return {
      text: `Ratikanta is from Chakradharpur, Kujang, Jagatsinghpur, Odisha, India. He attends college at EATM near Bhubaneswar (Khordha district).`,
      suggestions: ["How to contact him?", "What college does he attend?", "View his bio"],
      action: { type: "scroll", target: "about", label: "View Location" },
    };
  }

  // 17. 3D Avatar / Website Design
  if (q.includes("avatar") || q.includes("3d") || q.includes("palette") || q.includes("claymorphism") || q.includes("website") || q.includes("design")) {
    return {
      text: `This website is built with React, Three.js, React Three Fiber, and GSAP using Claymorphism and a strict 6-color editorial palette (White, Black, Burgundy, Skin tone, Cream, and Burnt Sienna). The hero section features an interactive 3D avatar with cursor-following physics!`,
      suggestions: ["Who is Ratikanta?", "What are his projects?", "Test typing speed"],
      action: { type: "scroll", target: "hero", label: "See 3D Avatar" },
    };
  }

  // 18. Default fallback with helpful guidance
  return {
    text: `I'd be glad to help! Ratikanta Sahoo is a B.Tech student and aspiring Full-Stack Developer proficient in Java, Python, and modern web development. Ask me about his projects (like Rudram 2.0 or Defend AI), technical skills, hackathon leadership, education at EATM, or how to contact him for opportunities.`,
    suggestions: ["Tell me about his projects", "What are his skills?", "Where does he study?", "How to contact him?"],
    action: null,
  };
}
