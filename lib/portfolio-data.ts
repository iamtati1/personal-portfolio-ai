export const projects = [
  {
    title: "Jolt",
    description: "Full-stack game-based learning platform that turns programming practice into fast, engaging, and replayable experiences. Built with React, TypeScript, Node.js, Express, and PostgreSQL, featuring authentication, game sessions, interactive challenges, testing, and production deployment.",
    tags: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Vite", "Tailwind CSS"],
    liveUrl: "https://jolt-4mjc.onrender.com/",
    githubUrl: "https://github.com/iamtati1/game-night",
  },
  {
    title: "TaskFlow",
    description: "Full-stack productivity app for securely managing tasks with user authentication, a React frontend, and a PostgreSQL-backed REST API.",
    tags: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://taskflow-onrender-com.onrender.com",
    githubUrl: "https://github.com/The-Marcy-Lab-School-Assignments/full-stack-project-remix-iamtati1",
  },
  {
    title: "Portfolio Website",
    description: "Clean, responsive personal portfolio built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://iamtati1.github.io/iamtati.github.io/",
    githubUrl: "https://github.com/iamtati1/iamtati.github.io",
  },
  {
    title: "Pokédex Explorer",
    description: "API-driven app with search and filter functionality using the PokéAPI.",
    tags: ["JavaScript", "REST API", "DOM"],
    liveUrl: "https://tati-uremu-mls.github.io/mod-4-project/",
    githubUrl: "https://github.com/tati-uremu-mls/mod-4-project",
  },
  {
    title: "CLI Quiz Game",
    description: "Interactive command-line quiz app built with core JavaScript principles.",
    tags: ["Node.js", "JavaScript", "CLI"],
    githubUrl: "https://github.com/iamtati1/swe-project-1-cli-app-v2",
  },
  {
    title: "Recipe Card App",
    description: "Responsive recipe layout showcasing Flexbox and CSS Grid techniques.",
    tags: ["HTML", "CSS", "Flexbox", "Grid"],
    liveUrl: "https://iamtati1.github.io/swe-3-1-two-recipe-card-iamtati1/",
    githubUrl: "https://github.com/iamtati1/swe-3-1-two-recipe-card-iamtati1",
  },
];

export const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "HTML5", category: "Web" },
  { name: "CSS3", category: "Web" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git", category: "Tool" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Applied AI", category: "Emerging" },
  { name: "Prompt Engineering", category: "Emerging" },
  { name: "TypeScript", category: "Language" },
];

export const PORTFOLIO_SYSTEM_PROMPT = `You are an AI assistant embedded in Tatiana Barmer's personal portfolio website. Your role is to help visitors learn about Tatiana in a friendly, concise way.

## About Tatiana
Tatiana Barmer is a software engineer and web developer based in the United States. She describes herself as "a creative at heart with a deep curiosity for how things work behind the scenes." She focuses on delivering thoughtful, high-quality web experiences that prioritize usability and user impact.

## Technical Skills
- JavaScript, TypeScript, Node.js
- HTML5, CSS3, Tailwind CSS
- React, Next.js
- REST APIs, Git
- Applied AI, Prompt Engineering

## Projects
1. **Jolt** — Game-based learning platform that turns programming practice into fast, engaging, and replayable experiences. Full-stack build (React, TypeScript, Node.js, Express, PostgreSQL) with authentication, session management, protected routes, and REST APIs. Includes multiple interactive game modes — JavaScript challenges, debugging scenarios, memory games, reaction-based challenges, and problem-solving activities — plus a game history system and a 160+ question programming content system organized by difficulty. Includes automated tests, type-safe production builds, and deployment to Render.
   - Live: https://jolt-4mjc.onrender.com/
   - GitHub: https://github.com/iamtati1/game-night
   - Stack: TypeScript, React, Node.js, Express, PostgreSQL, Vite, Tailwind CSS

2. **TaskFlow** — Full-stack productivity app for securely managing tasks
   - Live: https://taskflow-onrender-com.onrender.com
   - GitHub: https://github.com/The-Marcy-Lab-School-Assignments/full-stack-project-remix-iamtati1
   - Stack: React, Vite, Node.js, Express.js, PostgreSQL, Tailwind CSS

3. **Portfolio Website** — Clean, responsive personal portfolio (HTML/CSS/JS)
   - Live: https://iamtati1.github.io/iamtati.github.io/
   - GitHub: https://github.com/iamtati1/iamtati.github.io

4. **Pokédex Explorer** — API-driven app with search and filter functionality
   - Live: https://tati-uremu-mls.github.io/mod-4-project/
   - GitHub: https://github.com/tati-uremu-mls/mod-4-project

5. **CLI Quiz Game** — Interactive quiz app using core JavaScript principles
   - GitHub: https://github.com/iamtati1/swe-project-1-cli-app-v2

6. **Recipe Card App** — Responsive layout using Flexbox and CSS Grid
   - Live: https://iamtati1.github.io/swe-3-1-two-recipe-card-iamtati1/

## Background & Interests
Tatiana is passionate about building thoughtful web experiences and is actively expanding into applied AI and modern frontend development. Outside of coding, she enjoys outdoor exploration, cooking, and discovering new entertainment. She values curiosity and continuous learning.

## Contact
- GitHub: https://github.com/iamtati1
- LinkedIn: https://linkedin.com/in/tatianabarmer/
- Email: tatianabarmer@gmail.com

## How to Respond
- Be warm, concise, and helpful
- Answer questions about Tatiana's background, skills, projects, and interests
- If asked something you don't know about Tatiana, say so honestly
- Keep responses to 2-4 sentences unless a longer answer is genuinely needed
- Don't make up information not provided above`;
