export const SITE = {
  name: "Drishya N",
  initials: "DN",
  siteTitle: "Pitch the Pulse",
  taglineRoles: [
    "Embedded AI Architect",
    "Robotics & IoT Developer",
    "ML and Computer Vision Enthusiast",
    "Web Developer",
  ],
  about:
    "I am a passionate hardware-software enthusiast. From designing circuits to training AI models, I craft end-to-end solutions that blend embedded systems with creative technology. When I'm not coding, I'm behind the lens or on the dance floor.",
  qualifications: [
    "B.Tech in Electronics & Communication Engineering",
  ],
  profileImage: "/image.jpeg",
  resumeLink: "/Resume.pdf",
  featured: {
    label: "🌟 Featured",
    text: "Check out Drashta Edition 1! My photography works of last year ->",
    link: "https://online.fliphtml5.com/vwrdfv/fzqk/",
  },
};

export const SKILLS = [
  { category: "Programming Languages", items: ["Python", "C++", "C", "HTML", "CSS"] },
  { category: "Embedded & IoT",        items: ["Arduino IDE", "ESP Boards", "Arduino Boards", "IoT", "TinyML", "Embedded AI Integration"] },
  { category: "AI & ML",               items: ["OpenCV", "Deep Learning", "YOLO", "TensorFlow", "AI Agents"] },
  { category: "Web & Frameworks",      items: ["React", "Flask", "Relay App"] },
  { category: "Design & Creative",     items: ["Canva Designing", "Image Editing", "Video Editing"] },
  { category: "Management",            items: ["Team Management", "Project Management", "Documentation"] },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Automatic AI Based Bird Deterrent",
    emoji: "🐦",
    cover: "/p1.png",
    tags: ["ESP32", "AI", "IoT"],
    shortDesc: "AI-powered system that automatically detects and deters birds using computer vision.",
    fullDesc: "AI-powered system that automatically detects and deters birds using computer vision and ESP32. Integrated real-time detection with automated deterrent mechanisms.",
    link: "#", liveLink: "#",
    linkedinLink: "#", // ✏️ LinkedIn post/article URL for this project
  },
  {
    id: 2,
    title: "Illegal Forest Logging Detection Using TinyML",
    emoji: "🌲",
    cover: "/p2.png",
    tags: ["TinyML", "IoT", "Python"],
    shortDesc: "TinyML model deployed on edge device to detect illegal chainsaw sounds in forests.",
    fullDesc: "TinyML model deployed on edge device to detect illegal chainsaw sounds in forests. Trained using TensorFlow Lite and deployed on embedded hardware for real-time detection.",
    link: "#", liveLink: null,
    linkedinLink: "#", // ✏️ LinkedIn post URL for this project
  },
  {
    id: 3,
    title: "Circuit-Breaker AI",
    emoji: "⚡",
    cover: "/p3.png",
    tags: ["AI", "Embedded", "Safety"],
    shortDesc: "AI system for intelligent circuit protection and fault detection.",
    fullDesc: "AI system for intelligent circuit protection and fault detection in power systems. Uses machine learning to predict and prevent circuit failures.",
    link: "#", liveLink: null,
    linkedinLink: "#", // ✏️ LinkedIn post URL for this project
  },
  {
    id: 4,
    title: "Fish Spoilage Detector",
    emoji: "🐟",
    cover: "/p4.png",
    tags: ["Sensors", "IoT", "ML"],
    shortDesc: "IoT device with ML model to detect fish spoilage using gas sensors.",
    fullDesc: "IoT device with ML model to detect fish spoilage using gas sensors. Provides real-time freshness assessment to reduce food waste in fishing communities.",
    link: "#", liveLink: null,
    linkedinLink: "#", // ✏️ LinkedIn post URL for this project
  },
  {
    id: 5,
    title: "Room Proximity Alert Device",
    emoji: "📡",
    cover: "/p5.png",
    tags: ["Arduino", "Sensors", "Embedded"],
    shortDesc: "Embedded proximity sensing device for room occupancy detection and alerts.",
    fullDesc: "Embedded proximity sensing device for room occupancy detection and automated alerts. Built with Arduino and ultrasonic/IR sensors.",
    link: "#", liveLink: null,
    linkedinLink: "#", // ✏️ LinkedIn post URL for this project
  },
  {
    id: 6,
    title: "Invisible Muquabla Effect",
    emoji: "🎭",
    cover: "/p6.png",
    tags: ["OpenCV", "Python", "Vision"],
    shortDesc: "Computer vision project recreating the invisible cloak effect using OpenCV.",
    fullDesc: "Computer vision project recreating the invisible cloak effect using background subtraction and colour masking in OpenCV and Python.",
    link: "#", liveLink: "#",
    linkedinLink: "#", // ✏️ LinkedIn post URL for this project
  },
  {
    id: 7,
    title: "Head Controlled Classic Snake Game",
    emoji: "🐍",
    cover: "/p7.png",
    tags: ["OpenCV", "MediaPipe", "Python"],
    shortDesc: "Classic snake game controlled entirely by head movements via webcam.",
    fullDesc: "Classic snake game controlled entirely by head movements via webcam using MediaPipe face mesh and OpenCV for real-time head pose estimation.",
    link: "#", liveLink: "#",
    linkedinLink: "#", // ✏️ LinkedIn post URL for this project
  },
];

export const INITIATIVES = [
  {
    id: 1,
    logo: "🎨",
    logoFile: "logo3.jpg",
    name: "DSign",
    link: "#",
    desc: "DSign is a creative design initiative focused on brand identity, graphic design, and visual communication. From logos to full brand kits, DSign crafts visual identities that resonate.",
  },
  {
    id: 2,
    logo: "📸",
    logoFile: "logo5.jpg",
    name: "Drashta",
    link: "https://online.fliphtml5.com/vwrdfv/fzqk/",
    desc: "Drashta is a photography and visual arts portfolio initiative. It curates and publishes original photography works through yearly digital editions — a space where art meets storytelling.",
  },
  {
    id: 3,
    logo: "🤖",
    logoFile: "logo2.jpg",
    name: "Quixa",
    link: "#",
    desc: "Quixa is a robotics and automation initiative building hands-on solutions for real-world problems. From mini robots to industrial prototypes, Quixa pushes the boundaries of embedded engineering.",
  },
  {
    id: 4,
    logo: "🕯️",
    logoFile: "logo6.jpg",
    name: "Candle Lights",
    link: "#",
    desc: "Candle Lights is a handcrafted decor initiative specialising in ambient LED lighting, wax art, and tissue floral designs. Each piece is a blend of craft and creative technology.",
  },
  {
    id: 5,
    logo: "🧠",
    logoFile: "logo4.jpg",
    name: "Stoneage Minds",
    link: "#",
    desc: "Stoneage Minds is a tech education and innovation initiative that conducts workshops, hackathons, and mentoring sessions to nurture the next generation of engineers and creators.",
  },
  {
    id: 6,
    logo: "🎭",
    logoFile: "logo7.jpg",
    name: "Siva Arts",
    link: "#",
    desc: "Siva Arts is a performing arts initiative celebrating classical dance and cultural heritage. It organises performances, training sessions, and cultural events.",
  },
];

export const SERVICES_LIST = [
  "Embedded System Design & Prototyping",
  "IoT Solution Development",
  "Computer Vision & AI Model Integration",
  "Robotics and Automation Projects",
  "Logos, Posters, PPT Designing",
  "Web Application Development (React / Flask)",
  "TinyML & Edge AI Deployment",
  "Technical Documentation & Project Management",
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Robotics Developer Intern",
    org: "Aju ED Solutions LLP",
    period: "Dec 2025 – Present",
    type: "Internship",
    desc: "Understood the working of various robotics components, sensor fusion, power requirements and solution building. Developed 10+ mini projects including RC robot, Robo Soccer, Obstacle avoidance robot, Human following robot, Gesture controlled robot etc. Conducted several hands-on robotics workshops under the company.",
    skills: ["Arduino IDE", "C++", "Arduino Boards", "ESP Boards", "Documentation", "Project Management"],
  },
  {
    id: 2,
    role: "Tiny ML Intern",
    org: "Center for Development of Advanced Computing (C-DAC)",
    period: "Jun 2025",
    type: "Internship",
    desc: "Acquired knowledge in ML and Tiny ML concepts. Did a socially relevant mini project - Illegal forest logging detection using TinyML.",
    skills: ["TinyML", "IoT", "Python", "TensorFlow", "Google Colab", "Documentation"],
  },
];

export const EXTRAS = [
  { emoji: "🕴️", title: "Kerala Student Police Cadet", category: "Social",    desc: "SPC core member in the year 2020–2022, with an A Grade." },
  { emoji: "🌿", title: "NSS Volunteer",               category: "Social",    desc: "Active NSS unit member. In college, executive committee member. Had attended community service drives, blood donation camps, and beach cleaning activities." },
  { emoji: "🗣️", title: "College Union Member",        category: "Leadership",desc: "Served as Department Secretary behalf of the LBSITW College Union from 2023 to 2025." },
  { emoji: "📷", title: "Photography",                 category: "Hobby",     desc: "Passionate street and nature photographer. Works exhibited through yearly editions of Drashta — The Photographic Portfolio." },
  { emoji: "🖌️", title: "Crafts and Arts",             category: "Hobby",     desc: "Creative artist making handcrafted decor. Focusing on intricate tissue floral designs and custom wax art integrated with ambient LED lighting works." },
];

export const CONTACT = [
  { id: "whatsapp",  label: "WhatsApp",  href: "https://wa.me/918089092563",                     bg: "#dcfce7", color: "#16a34a" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/myself_drishya.n/",     bg: "#fce7f3", color: "#db2777" },
  { id: "linkedin",  label: "LinkedIn",  href: "https://www.linkedin.com/in/drishya-n",           bg: "#dbeafe", color: "#1d4ed8" },
  { id: "github",    label: "GitHub",    href: "https://github.com/DRIshya8089",                  bg: "#f1f5f9", color: "#0f172a" },
  { id: "email",     label: "Email",     href: "mailto:drishyan810@gmail.com",                    bg: "#ffedd5", color: "#c2410c" },
];
