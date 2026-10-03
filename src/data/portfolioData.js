export const personalInfo = {
  name: "Louv Krishna Upadhyay",
  college: "Indian Institute of Information Technology Senapati, Manipur",
  degree: "B.Tech. in Computer Science and Engineering",
  gradYear: "2028",
  cpi: "7.99",
  email: "louv2k@gmail.com",
  phone: "+91-9452360005",
  github: "https://github.com/louvkrishnaupadhyay",
  linkedin: "https://www.linkedin.com/in/louv-krishna-upadhyay/",
  leetcodeSolved: "400+",
  hackathonRank: "Top 45 Teams",
};

export const skills = [
  // Languages
  { name: "C++", detail: "400+ DSA Problems", category: "languages" },
  { name: "Python", detail: "Web Scraping & Data", category: "languages" },
  { name: "JavaScript", detail: "ES6+ Full-Stack", category: "languages" },
  { name: "SQL", detail: "Relational Queries", category: "languages" },
  // Frontend
  { name: "React.js", detail: "multi Page Apps", category: "frontend" },
  { name: "HTML5 & CSS3", detail: "Responsive UI", category: "frontend" },
  { name: "React Router", detail: "Client Routing", category: "frontend" },
  // Backend & DB
  { name: "Node.js & Express.js", detail: "REST APIs", category: "backend" },
  { name: "Socket.IO", detail: "Real-time WebSockets", category: "backend" },
  { name: "MongoDB & Mongoose", detail: "NoSQL Databases", category: "backend" },
  { name: "WebRTC", detail: "P2P Media Streaming", category: "backend" },
  // Core CS
  { name: "DSA & Graph Algorithms", detail: "DP, DSU, Trees, Graphs", category: "core" },
  { name: "DBMS & OS", detail: "Concurrency, Indexing", category: "core" },
  { name: "Computer Networks", detail: "TCP/IP, HTTP/WebSocket", category: "core" },
  { name: "Software Engineering", detail: "OOP & SDLC", category: "core" },
  // Tools
  { name: "Git & GitHub", detail: "Version Control", category: "tools" },
  { name: "Postman & Vercel", detail: "API Testing & Deployment", category: "tools" },
];

export const projects = [
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Multiplayer",
    tech: "MERN + Socket.IO",
    description: "A real-time multiplayer application with room-based matchmaking, win/draw detection, rematch flows, and MongoDB game state persistence.",
    points: [
      "Real-time move synchronization with Socket.IO",
      "User authentication & persistent stats in Atlas"
    ],
    github: "https://github.com/louvkrishnaupadhyay/TIC-TAC-TOE",
    liveDemo: "https://tic-tac-toe-five-ashen.vercel.app/"
  },
  {
    id: "chat-app",
    title: "Real-Time Chat Application",
    tech: "MERN + WebRTC",
    description: "Full-stack instant messaging platform with WebRTC peer communication, media sharing via Cloudinary, and custom REST API integration.",
    points: [
      "Instant messaging and media attachments",
      "Peer-to-peer WebRTC video/audio features"
    ],
    github: "https://github.com/louvkrishnaupadhyay/Chat-application",
    liveDemo: null
  },
  {
    id: "website-scraper",
    title: "Automated Website Scraper",
    tech: "Adobe Hackathon",
    description: "Web scraper designed during Adobe University Hackathon to process unstructured web content into clean structured datasets.",
    points: [
      "Ranked Top 45 Teams out of 1 Lakh+ entries",
      "Built with Python data manipulation libraries"
    ],
    github: "https://github.com/louvkrishnaupadhyay",
    liveDemo: null
  }
];

export const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/159DNFM5MFQD"
  },
  {
    title: "Artificial Intelligence (AI)",
    issuer: "IBM / Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/3HSJ69AD68ST"
  },
  {
    title: "Generative AI: Prompt Engineering",
    issuer: "IBM / Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/Q9X8PXEBXC6H"
  }
];