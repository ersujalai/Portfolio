export const portfolioData = {
  personalInfo: {
    name: "Sujal Prajapati",
    title: "Computer Engineering Student | Aspiring Software Developer",
    tagline: "Building scalable full-stack web applications, robust REST APIs, and applying machine learning to solve real-world problems.",
    location: "Ahmedabad, India",
    email: "sbprajapati310707@gmail.com",
    profileImage: "/images/sujal_prajapati.jpg",
    
    // Centralized placeholder URLs for user modification
    placeholders: {
      GITHUB_URL: "https://github.com/ersujalai",
      LINKEDIN_URL: "https://www.linkedin.com/in/sujal-prajapati-39690933b/",
      RESUME_URL: "/resume/Sujal_Prajapati_Resume.pdf",
      // Web3Forms free access key for instant Gmail notifications
      // Get your free key instantly at https://web3forms.com (takes 10 seconds, no password required!)
      WEB3FORMS_ACCESS_KEY: "c77d0a81-5997-4c1d-8d91-a43a187b2343"
    },

    summary: "Computer Engineering student and aspiring Software Developer with hands-on experience building full-stack web applications using Django REST Framework, React, and Node.js. Skilled in database design, REST API development, JWT authentication, and applying machine learning using scikit-learn to real-world matching problems.",
    statusBadge: "Available for Internships & Full-Stack Roles",

    heroCodeSnippet: `// Developer Profile: Sujal Prajapati
const developer = {
  name: "Sujal Prajapati",
  role: "Aspiring Software Developer",
  location: "Ahmedabad, India",
  education: "B.E. Computer Engineering @ LJ University",
  currentSPI: 8.58,
  coreStack: ["Django REST", "React", "Node.js", "Java", "Python", "scikit-learn"],
  status: "Open for Software Developer Internships & Engineering Opportunities"
};

console.log("Ready to build innovative solutions!");`
  },

  stats: [
    { label: "Current SPI", value: "8.58 / 10", description: "LJ University Academic Standing" },
    { label: "Degree Program", value: "B.E. / B.Tech", description: "Computer Engineering (2024–2028)" },
    { label: "Featured Projects", value: "4 Full-Stack / Desktop", description: "Web, AI & Java Systems" },
    { label: "Certifications", value: "4 IBM / UPenn / LearnQuest", description: "Machine Learning & Web" }
  ],

  projects: [
    {
      id: "influencer-hub",
      title: "InfluencerHub",
      category: "Full-Stack Creator Platform",
      categoryGroup: "Full-Stack & ML",
      description: "Built a full-stack platform connecting creators and businesses for campaign management, collaborations, contracts, and sponsorships.",
      longDescription: "InfluencerHub bridges the gap between digital creators and businesses. It features an intelligent AI creator-matching engine driven by a Random Forest recommendation model, JWT-secured authentication, role-based access controls, real-time messaging, and interactive campaign analytics dashboards.",
      techStack: ["Django REST Framework", "React", "Python", "SQLite", "scikit-learn", "JWT"],
      features: [
        "AI-based creator-matching engine using a Random Forest recommendation model",
        "JWT authentication & Role-based access control (RBAC)",
        "Real-time chat & WebSocket-based instant notifications",
        "Comprehensive analytics dashboards & campaign tracking",
        "User rating/review system with an integrated AI assistant"
      ],
      githubUrl: "https://github.com/ersujalai/InfluencerHub",
      featured: true
    },
    {
      id: "university-attendance",
      title: "University Attendance Management System",
      category: "Role-Based Web System",
      categoryGroup: "Full-Stack & Web",
      description: "Developed a role-based attendance system supporting Admin, Teacher, and Student roles with separate dashboards and permissions.",
      longDescription: "An administrative academic web portal designed to streamline attendance recording and reporting across university departments. Includes duplicate entry prevention, low-attendance alert triggers, and automated PDF export capabilities.",
      techStack: ["Python", "Flask", "Flask-SQLAlchemy", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Granular access control for Admin, Teacher, and Student user roles",
        "Full CRUD operations for Students, Teachers, Courses, Subjects, and Classes",
        "Real-time attendance tracking with duplicate-entry prevention algorithms",
        "Automated attendance percentage calculation & low-attendance alert warnings",
        "Automated PDF report generation for academic compliance and administrative records"
      ],
      githubUrl: "https://github.com/ersujalai/Univercity-Attendance-System",
      featured: true
    },
    {
      id: "pharmacy-management",
      title: "Pharmacy Management System",
      category: "Desktop Java Application",
      categoryGroup: "Java & Desktop",
      description: "Built a desktop pharmacy management system for authentication, product management, and real-time inventory search.",
      longDescription: "A high-performance Java desktop application engineered for pharmaceutical inventory tracking. Leverages custom singly linked lists for efficient memory search alongside robust JDBC database operations.",
      techStack: ["Java", "JDBC", "MySQL", "OOP", "Data Structures"],
      features: [
        "Secure user authentication & session management",
        "Product management & real-time inventory search utilizing custom singly linked list data structures",
        "JDBC database integration using PreparedStatement and ResultSet for secure querying",
        "Strict Object-Oriented Programming (OOP) & Data Access Object (DAO) architecture",
        "Comprehensive exception handling & strict input validation protocols"
      ],
      githubUrl: "https://github.com/ersujalai/Pharmacy-Management-System",
      featured: true
    },
    {
      id: "theater-management",
      title: "Theater Management System",
      category: "Java Theater Application",
      categoryGroup: "Java & Desktop",
      description: "Developed a Java-based theater management application using object-oriented design and modular architecture.",
      longDescription: "A modular Java application for managing multiplex theater schedules, seat allocations, and customer bookings with double-booking prevention workflows.",
      techStack: ["Java", "OOP Principles", "Software Design"],
      features: [
        "Interactive seat reservation & real-time ticket booking workflow",
        "Show scheduling & movie catalog management",
        "Customer profile management & booking conflict prevention algorithms",
        "Optimized ticket allocation workflow for maximized auditorium seating efficiency"
      ],
      githubUrl: "https://github.com/ersujalai/Theater_Managment_System",
      featured: true
    }
  ],

  skillsCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"]
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      skills: ["Django", "Django REST Framework", "Node.js", "Express.js", "React", "scikit-learn", "Bootstrap", "Tailwind CSS"]
    },
    {
      id: "databases",
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "phpMyAdmin"]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "XAMPP"]
    }
  ],

  education: {
    institution: "LJ University",
    location: "Ahmedabad, Gujarat",
    degree: "B.E./B.Tech in Computer Engineering",
    duration: "2024 – 2028",
    spi: "8.58 / 10",
    description: "Pursuing Bachelor of Engineering in Computer Engineering with strong academic focus on software engineering, data structures, backend system design, database management systems, and machine learning fundamentals.",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Database Management Systems (SQL)",
      "Web Application Engineering",
      "Applied Machine Learning"
    ]
  },

  certifications: [
    {
      id: "java-intro",
      title: "Introduction to Java",
      issuer: "LearnQuest",
      platform: "Coursera",
      date: "Dec 2024",
      badge: "Java Fundamentals",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/FAAFL1M8UDVJ"
    },
    {
      id: "java-ds",
      title: "Inheritance and Data Structures in Java",
      issuer: "University of Pennsylvania",
      platform: "Coursera",
      date: "Jul 2025",
      badge: "Data Structures & OOP",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/RSAZ86I5UXNQ"
    },
    {
      id: "web-intro",
      title: "Introduction to HTML, CSS, & JavaScript",
      issuer: "IBM",
      platform: "Coursera",
      date: "Dec 2025",
      badge: "Web Foundations",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KQUTA05450S0"
    },
    {
      id: "eda-ml",
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      platform: "Coursera",
      date: "Jun 2026",
      badge: "Machine Learning & EDA",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/3J8RYEUH9FG3"
    }
  ]
};
