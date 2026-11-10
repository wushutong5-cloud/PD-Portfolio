import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";


// 1. Image imports
// Logo
import logo from "./public/logo.png";

// RP Sports Complex
import rpHome from "./public/projectsImg/rp-home.png";
import rpCrud from "./public/projectsImg/rp-crud.png";
import rpAdmin from "./public/projectsImg/rp-admin.png";
import rpDynamic from "./public/projectsImg/rp-dynamic.png";
import rpAws from "./public/projectsImg/rp-aws.png";
import rpPipeline from "./public/projectsImg/rp-pipeline.png";
import rpMobileCover from "./public/projectsImg/rp-mobile-cover.png";

// SideHustle Launchpad
import sideHome from "./public/projectsImg/side-home.png";
import sideFeatures from "./public/projectsImg/side-features.png";
import sideChat1 from "./public/projectsImg/side-chat-1.jpg";
import sideChat2 from "./public/projectsImg/side-chat-2.jpg";
import sideFlow from "./public/projectsImg/side-flow.jpg";
import sideBrandSquare from "./public/projectsImg/side-brand-square.png";
import sideYoutubeThumb from "./public/projectsImg/side-youtube-thumbnail.png";

// City in Nature
import designHome from "./public/projectsImg/web-home.png";
import designEvent from "./public/projectsImg/web-event.png";
import designAbout from "./public/projectsImg/web-about.png";
import designContact from "./public/projectsImg/web-contact.png";
import designPalette from "./public/projectsImg/palette.png";
import designMoodboard from "./public/projectsImg/moodboard.png";
import designLogoSketches from "./public/projectsImg/logo-sketches.png";
import designLogoFinal from "./public/projectsImg/logo-final.png";
import designAiBefore from "./public/projectsImg/ai-before.png";
import designAiAfter from "./public/projectsImg/ai-after.png";
import designStickers from "./public/projectsImg/stickers.png";
import designStickerSketch from "./public/projectsImg/sticker-sketch.png";


//illustrations
import knight from "./public/illustration/knight.jpg";
import swallow from "./public/illustration/swallow.jpg";
import butterfly from "./public/illustration/butterfly.jpg";
import starfield from "./public/illustration/starfield.jpg";
import quillHand from "./public/illustration/quill-hand.jpg";
import handshake from "./public/illustration/handshake.jpg";
import lantern from "./public/illustration/lantern.jpg";
import angel from "./public/illustration/angel.jpg";
import moonEngraving from "./public/illustration/moon-engraving.jpg";
import galaxyEngraving from "./public/illustration/galaxy-engraving.jpg";
import readingBook from "./public/illustration/reading-book.jpg";



// 2. Website data


const projects = [
  {
    id: 1,
    title: "RP Sports Complex",
    category: "DevOps",
    description:
      "A database-driven sports facility booking system developed with an automated DevOps deployment workflow.",
    slug: "rp-sports-complex",
    cover: rpMobileCover
  },
  {
    id: 2,
    title: "SideHustle Launchpad",
    category: "AI Automation",
    description:
      "An AI-powered assistant that turns student input into a personalised side-hustle blueprint and automated delivery flow.",
    slug: "sidehustle-launchpad",
    cover: sideHome
  },
  {
    id: 3,
    title: "City in Nature",
    category: "Design",
    description:
      "A UI/UX and visual branding project for Singapore Green Plan 2030, built around a soft botanical identity.",
    slug: "city-in-nature",
    cover: designHome
  }
];

const techGroups = [
  {
    group: "Front-end",
    tools: [
      ["HTML5", "html5"],
      ["CSS3", "css"],
      ["JavaScript", "javascript"],
      ["React", "react"],
      ["Vite", "vite"]
    ]
  },
  {
    group: "Back-end",
    tools: [
      ["Node.js", "nodedotjs"],
      ["Express.js", "express"]
    ]
  },
  {
    group: "Database",
    tools: [
      ["MySQL", "mysql"],
      ["SQL", "databricks"]
    ]
  },
  {
    group: "Testing",
    tools: [
      ["Jest", "jest"],
      ["Supertest", "testinglibrary"]
    ]
  },
  {
    group: "DevOps & Cloud",
    tools: [
      ["Docker", "docker"],
      ["Jenkins", "jenkins"],
      ["Ansible", "ansible"],
      ["AWS", "amazonwebservices"]
    ]
  },
  {
    group: "Design & Automation",
    tools: [
      ["Figma", "figma"],
      ["Illustrator", "adobeillustrator"],
      ["Photoshop", "adobephotoshop"],
      ["n8n", "n8n"],
      ["Botpress", "botpress"]
    ]
  },
  {
    group: "Version Control & IDE",
    tools: [
      ["Git", "git"],
      ["GitHub", "github"],
      ["VS Code", "visualstudiocode"]
    ]
  }
];

const technologyIconUrls = {
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "JavaScript":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  "Supertest": "https://cdn.simpleicons.org/testinglibrary/391214",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Illustrator": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  "Photoshop": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  "n8n": "https://cdn.simpleicons.org/n8n/391214",
  "Botpress": "https://cdn.simpleicons.org/botpress/391214",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
};

const toolDescriptions = {
  "HTML5": "Structures the content and semantic layout of web pages.",
  "CSS3": "Controls responsive layouts, visual styling and interaction states.",
  "JavaScript": "Adds browser-side logic, dynamic behaviour and interface interactions.",
  "React": "Builds reusable front-end components and single-page interfaces.",
  "Vite": "Provides a lightweight development and build workflow for React projects.",
  "Node.js": "Runs JavaScript on the server for back-end application logic.",
  "Express.js": "Creates routes, middleware and APIs for Node.js web applications.",
  "MySQL": "Stores structured application data such as users, facilities and bookings.",
  "SQL": "Queries, updates and manages relational data through CRUD operations.",
  "Jest": "Supports automated JavaScript testing for application logic.",
  "Supertest": "Tests Express routes and HTTP responses during back-end testing.",
  "Docker": "Packages applications into consistent containers for development and deployment.",
  "Jenkins": "Automates testing, build and deployment steps in a CI/CD pipeline.",
  "Ansible": "Automates server and infrastructure configuration using playbooks.",
  "AWS": "Provides cloud infrastructure and managed services such as EC2 and RDS.",
  "Figma": "Supports interface design, wireframing, prototyping and visual planning.",
  "Illustrator": "Creates vector graphics, logos and original visual assets.",
  "Photoshop": "Edits images, composites visuals and supports image enhancement workflows.",
  "n8n": "Connects services and automates workflows, including this portfolio chatbot.",
  "Botpress": "Builds conversational chatbot flows and structured user interactions.",
  "Git": "Tracks code changes locally and supports safer iterative development.",
  "GitHub": "Hosts repositories and supports collaboration, version history and project sharing.",
  "VS Code": "Primary editor used to write, organise and debug project code."
};



// 3. Shared website components


function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">
      <img src={logo} alt="Shutong" />
      </Link>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/wushutong5-cloud",
      icon: "https://cdn.simpleicons.org/github/C0BAB3"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/姝彤-吴-16146536b",
      icon: "https://cdn.simpleicons.org/linkedin/C0BAB3"
    },
    {
      name: "Gmail",
      href: "mailto:wushutong5@gmail.com",
      icon: "https://cdn.simpleicons.org/gmail/C0BAB3"
    }
  ];

  return (
    <footer className="footer">
      <div>
        <p className="footer-title">MY PORTFOLIO</p>
        <small>Web development · UI/UX · automation · creative technology</small>
      </div>

      <div className="footer-links social-icons">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={item.name}
            title={item.name}
          >
            <img src={item.icon} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}

function VintageDivider() {
  return (
    <div className="vintage-divider" aria-hidden="true">
      <span>◆</span>
    </div>
  );
}

function FloatingArt({ src, className, alt = "Vintage public-domain decoration" }) {
  return (
    <img
      className={`floating-art ${className || ""}`}
      src={src}
      alt={alt}
    />
  );
}


// 4. Chatbot


const CHAT_WEBHOOK_URL =
  import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL ||
  "https://wushutong.app.n8n.cloud/webhook/87f70e5c-b25c-4b6f-a492-beee2d94cb88/chat";

function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I’m Shutong’s portfolio assistant." },
    {
      role: "bot",
      text: "Ask me about her projects, skills, tools or design process."
    }
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Create or reuse a session ID so the chatbot can keep the conversation together.
  const getSessionId = () => {
    const key = "pd-portfolio-chat-session";
    let value = localStorage.getItem(key);

    if (!value) {
      value =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `pd-${Date.now()}-${Math.random().toString(36).slice(2)}`;

      localStorage.setItem(key, value);
    }

    return value;
  };

  // Read the reply from the different response formats that n8n may return.
  const extractReply = (data) => {
    if (typeof data === "string") return data;

    if (!data || typeof data !== "object") {
      return "I received your message, but no text response was returned.";
    }

    if (typeof data.output === "string") return data.output;
    if (typeof data.text === "string") return data.text;
    if (typeof data.message === "string") return data.message;
    if (typeof data.response === "string") return data.response;
    if (typeof data.data === "string") return data.data;

    if (data.data && typeof data.data.output === "string") {
      return data.data.output;
    }

    if (data.data && typeof data.data.text === "string") {
      return data.data.text;
    }

    return "I received your message, but the workflow returned an unexpected response format.";
  };

  // Send the user's message to the n8n chatbot webhook.
  const sendMessage = async () => {
    const text = input.trim();

    if (!text || sending) return;

    setInput("");
    setError("");
    setMessages((current) => [...current, { role: "user", text }]);
    setSending(true);

    try {
      const response = await fetch(CHAT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: getSessionId(),
          chatInput: text
        })
      });

      const raw = await response.text();
      let data;

      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = raw;
      }

      if (!response.ok) {
        throw new Error(
          typeof data === "string"
            ? data
            : `Chat request failed (${response.status})`
        );
      }

      setMessages((current) => [
        ...current,
        { role: "bot", text: extractReply(data) }
      ]);
    } catch (chatError) {
      console.error(chatError);
      setError("I couldn't reach the chatbot. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };


  const onKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section
      className="chat-panel custom-chat-panel"
      role="dialog"
      aria-label="Portfolio chatbot"
    >
      <div className="chat-heading">
        <div>
          <strong>My Chatbot</strong>
          <span>portfolio assistant · n8n</span>
        </div>

        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      <div className="chat-message-list" aria-live="polite">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`chat-message ${message.role}`}
          >
            <span className="chat-speaker">
              {message.role === "user" ? "You" : "Assistant"}
            </span>
            <p>{message.text}</p>
          </div>
        ))}

        {sending && (
          <div className="chat-message bot typing">
            <span className="chat-speaker">Assistant</span>
            <p>
              Thinking<span className="typing-dots">...</span>
            </p>
          </div>
        )}

        {error && <p className="chat-error">{error}</p>}
      </div>

      <div className="chat-compose">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask about my portfolio..."
          rows="2"
          aria-label="Chat message"
        />

        <button
          type="button"
          onClick={sendMessage}
          disabled={sending || !input.trim()}
        >
          {sending ? "Sending…" : "Send"}
        </button>
      </div>

      <small className="chat-hint">
        Press Enter to send · Shift + Enter for a new line
      </small>
    </section>
  );
}



// 5. Home page components


function FilmStrip({ items, asLinks = true }) {
  const groups = ["a", "b"];

  return (
    <div className="film-viewport">
      <div className="film-track">
        {groups.map((group) => (
          <div
            className="film-group"
            key={group}
            aria-hidden={group === "b" ? "true" : undefined}
          >
            {items.map((project) => {
              const body = (
                <>
                  <div className="film-holes top" />

                  <div className="film-image">
                    <img
                      src={project.cover}
                      alt={`${project.title} preview`}
                    />
                  </div>

                  <div className="film-caption">
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </div>

                  <div className="film-holes bottom" />
                </>
              );

              return asLinks ? (
                <Link
                  className="film-frame"
                  to={`/portfolio/${project.slug}`}
                  key={`${group}-${project.id}`}
                >
                  {body}
                </Link>
              ) : (
                <div
                  className="film-frame"
                  key={`${group}-${project.id}`}
                >
                  {body}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <main className="home-page">
        <section
          className="hero section-light vintage-paper hero-stars"
          style={{ "--hero-stars": `url(${starfield})` }}
        >
          <FloatingArt
            src={galaxyEngraving}
            className="hero-galaxy"
            alt="Vintage galaxy engraving decoration"
          />
          <FloatingArt src={lantern} className="hero-lantern" />

          <p className="eyebrow">PERSONAL PORTFOLIO · 2026</p>

          <h1>
            <span className="outline-word">Welcome</span> to My
            <br />
            <em>Portfolio</em>
          </h1>

          <p className="hero-copy">
            A collection of my web development, UI/UX, DevOps and AI automation
            projects — focused on making technical ideas clear, practical and
            visually engaging.
          </p>

          <div className="hero-actions">
            <button
              className="button button-dark"
              onClick={() => setChatOpen(true)}
            >
              My Chatbot
            </button>
          </div>
        </section>

        {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}

        <section className="home-about section-dark">
          <div className="vintage-photo-wrap">
            <img src={knight} alt="Vintage knight engraving decoration" />
            <span className="photo-note">curious mind · practical making</span>
          </div>

          <div className="home-about-copy">
            <p className="eyebrow">A LITTLE INTRODUCTION</p>
            <h2>Hi, I'm Shutong.</h2>
            <p>
              I am a Republic Polytechnic student interested in web development,
              UI/UX, AI tools, automation and creative digital projects. I enjoy
              turning ideas into practical experiences that are easy for people
              to understand and use.
            </p>
            <Link className="button button-light" to="/about">
              More About Me
            </Link>
          </div>

          <FloatingArt src={butterfly} className="about-butterfly" />
        </section>

        <section className="recent-projects section-light vintage-paper">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Recent Projects</h2>
            <p className="section-kicker">
              Three projects, three different ways of combining technology and
              design.
            </p>
          </div>

          <FilmStrip items={projects} />

          <div className="center-action">
            <Link className="button button-dark" to="/portfolio">
              View All Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


// 6. Technology library components


function ToolIcon({ name }) {
  const iconUrl = technologyIconUrls[name];

  return (
    <div className="tool-chip technology-logo-chip">
      <span className="tool-icon-wrap">
        <img
          src={iconUrl}
          alt={`${name} logo`}
          onError={(event) => {
            event.currentTarget.closest(".tool-icon-wrap").style.display = "none";
          }}
        />
      </span>
      <span>{name}</span>
    </div>
  );
}

function Bookshelf() {
  const allTools = techGroups.flatMap((group) =>
    group.tools.map(([name, slug]) => ({
      name,
      slug,
      group: group.group
    }))
  );

  const [selected, setSelected] = useState(allTools[0]);
  const rows = [allTools.slice(0, 12), allTools.slice(12)];

  return (
    <section className="about-section bookshelf-section">
      <div className="section-heading align-left">
        <p className="eyebrow">TOOLS & KNOWLEDGE</p>
        <h2>Technologies</h2>
        <p>
          My toolkit spans front-end, back-end, databases, testing, DevOps,
          design, automation and version control. Select a book to see how I use
          each tool.
        </p>
      </div>

      <div className="double-bookshelf">
        {rows.map((row, rowIndex) => (
          <div className="shelf-row" key={rowIndex}>
            <div className="books">
              {row.map((tool, index) => (
                <button
                  type="button"
                  key={tool.name}
                  className={`book book-${(index % 7) + 1} ${
                    selected.name === tool.name ? "selected" : ""
                  }`}
                  onClick={() => setSelected(tool)}
                  title={`${tool.group}: ${tool.name}`}
                >
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>

            <div className="shelf-board" />
          </div>
        ))}
      </div>

      <div className="skill-detail">
        <div className="skill-detail-title">
          <p className="eyebrow">{selected.group}</p>
          <h3>{selected.name}</h3>
          <ToolIcon name={selected.name} slug={selected.slug} />
        </div>

        <p>{toolDescriptions[selected.name]}</p>
      </div>

      <FloatingArt src={butterfly} className="tech-butterfly" />
      <FloatingArt
        src={moonEngraving}
        className="tech-moon"
        alt="Vintage moon engraving decoration"
      />
    </section>
  );
}



// 7. About page


function About() {
  return (
    <>
      <main className="page-shell about-page vintage-paper">
        <section className="about-intro">
          <div className="vintage-photo-wrap about-photo-real">
            <img src={swallow} alt="Vintage swallow engraving decoration" />
            <span className="photo-note">learning · building · refining</span>
          </div>

          <div className="about-intro-copy">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h1>About Me</h1>
            <p>
              I am currently studying at Republic Polytechnic and building
              experience across web development, UI/UX design, databases, DevOps
              and AI-assisted workflows. I like projects where technology has a
              clear purpose and where the final interface still feels thoughtful
              and approachable.
            </p>
            <p>
              My portfolio includes team and individual work. I have worked
              with HTML, CSS, JavaScript, React, Node.js, Express, MySQL, Docker,
              Git/GitHub, Figma, Illustrator, Photoshop and automation tools
              such as n8n. I also use AI tools to support ideation, prompt design
              and repetitive tasks while keeping the project decisions and
              final presentation understandable.
            </p>
            <p>
              I am especially interested in how design and engineering connect:
              how information is structured, how users move through a product,
              and how technical systems can be presented without overwhelming
              non-technical users.
            </p>
          </div>

          <FloatingArt
            src={butterfly}
            className="about-page-butterfly"
          />
          <FloatingArt src={angel} className="about-angel" />
        </section>

        <VintageDivider />
        <Bookshelf />

        <section className="about-section education-section">
          <div className="section-heading align-left education-heading">
            <div>
              <p className="eyebrow">MY JOURNEY</p>
              <h2>Education & Next Step</h2>
            </div>
            <FloatingArt
              src={readingBook}
              className="education-book"
              alt="Vintage hands reading a book engraving"
            />
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-date">REPUBLIC POLYTECHNIC</span>
              <div>
                <h3>Diploma Studies</h3>
                <p>
                  Building practical experience through software development,
                  design, data, automation and project-based modules.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-date">NEXT</span>
              <div>
                <h3>Industry Experience</h3>
                <p>
                  I want to continue developing practical technical skills
                  through internship and real-world project experience, then
                  keep building toward further study and a technology-focused
                  career.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}



// 8. Portfolio page


function Portfolio() {
  const [category, setCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(projects[0]);

  const categories = ["All", "DevOps", "AI Automation", "Design"];
  const visibleProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  function changeCategory(nextCategory) {
    setCategory(nextCategory);

    const next =
      nextCategory === "All"
        ? projects
        : projects.filter((project) => project.category === nextCategory);

    setActiveProject(next[0]);
  }

  return (
    <>
      <main className="page-shell portfolio-page vintage-paper">
        <section className="portfolio-heading">
          <p className="eyebrow">A COLLECTION OF MY WORK</p>
          <h1>My Projects</h1>
          <p>
            Browse the projects by focus area, then open a full case study for
            the process, technical choices, challenges and outcomes.
          </p>
        </section>

        <div className="portfolio-toolbar">
          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                onClick={() => changeCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <section className="marquee-viewport film-portfolio">
          <div
            className="marquee-track"
            style={{
              "--marquee-duration": `${Math.max(22, visibleProjects.length * 8)}s`
            }}
          >
            {["main", "duplicate"].map((group) => (
              <div
                className="marquee-group"
                aria-hidden={group === "duplicate" ? "true" : undefined}
                key={group}
              >
                {visibleProjects.map((project) => (
                  <button
                    className="marquee-card film-card"
                    key={`${group}-${project.id}`}
                    tabIndex={group === "duplicate" ? -1 : undefined}
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="film-holes top" />
                    <div className="marquee-image">
                      <img
                        src={project.cover}
                        alt={`${project.title} preview`}
                      />
                    </div>
                    <div className="marquee-card-info">
                      <strong>{project.title}</strong>
                    </div>
                    <div className="film-holes bottom" />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </section>

        {activeProject && (
          <section className="project-detail">
            <div>
              <p className="eyebrow">SELECTED PROJECT</p>
              <h2>{activeProject.title}</h2>
              <span className="project-category">{activeProject.category}</span>
            </div>

            <p>{activeProject.description}</p>

            <Link
              className="text-button"
              to={`/portfolio/${activeProject.slug}`}
            >
              Project details ↗
            </Link>
          </section>
        )}

        <FloatingArt src={quillHand} className="portfolio-quill" />
      </main>

      <Footer />
    </>
  );
}


// 9. Reusable project detail components


function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(event) =>
        (event.key === "Escape" || event.key === "Enter") && onClose()
      }
      aria-label="Close enlarged image"
    >
      <img
        src={image.src}
        alt={image.alt || "Enlarged project screenshot"}
      />
      <p>Click anywhere to return</p>
    </div>
  );
}

function Polaroid({ src, alt, caption, onOpen, className = "" }) {
  return (
    <figure
      className={`polaroid ${className}`}
      onClick={() => onOpen({ src, alt })}
    >
      <img src={src} alt={alt} />
      <figcaption>{caption || "Click image to view full-size"}</figcaption>
    </figure>
  );
}

function TechTags({ items }) {
  return (
    <div className="tech-tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function NoteCard({ label, title, children }) {
  return (
    <article className="note-card">
      <p className="eyebrow">{label}</p>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function SplitSection({
  reverse = false,
  image,
  alt,
  title,
  text,
  caption,
  onOpen,
  children
}) {
  return (
    <section className={`project-split ${reverse ? "reverse" : ""}`}>
      <div className="split-media">
        <Polaroid
          src={image}
          alt={alt}
          caption={caption}
          onOpen={onOpen}
        />
      </div>

      <div className="split-copy">
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}

function ProjectHero({
  category,
  title,
  intro,
  image,
  alt,
  onOpen,
  tags,
  resourceUrl,
  resourceLabel = "View project repository"
}) {
  return (
    <section className="detail-hero">
      <div className="detail-hero-copy">
        <p className="eyebrow">{category}</p>
        <h1>{title}</h1>

        {resourceUrl && (
          <a
            className="project-resource-link"
            href={resourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {resourceLabel} ↗
          </a>
        )}

        <TechTags items={tags} />
        <p>{intro}</p>
      </div>

      <Polaroid
        src={image}
        alt={alt}
        caption="Click image to view full-size"
        onOpen={onOpen}
        className="hero-polaroid"
      />
    </section>
  );
}



// 10. Project 1 - RP Sports Complex


function RpProjectPage() {
  const [lightbox, setLightbox] = useState(null);

  const tags = [
    "Node.js",
    "Express",
    "EJS",
    "MySQL",
    "Jest / Supertest",
    "Docker",
    "Jenkins",
    "Ansible",
    "Trivy",
    "AWS EC2 / RDS"
  ];

  return (
    <>
      <main className="project-detail-page vintage-paper">
        <ProjectHero
          category="DEVOPS · TEAM PROJECT"
          title="RP Sports Complex"
          resourceUrl="https://github.com/WeiXiangWee/C270-DevOps-Team5"
          resourceLabel="GitHub Repository"
          tags={tags}
          intro="A web-based sports facility booking system developed for Republic Polytechnic. Students and staff can search facilities, check availability and make bookings, while administrators manage facilities, bookings and maintenance. The second phase extends the application with automated testing, containerisation and cloud deployment."
          image={rpHome}
          alt="RP Sports Complex homepage"
          onOpen={setLightbox}
        />

        <section className="project-notes">
          <NoteCard label="OBJECTIVE" title="A clearer booking process">
            Simplify facility booking and give users an easier way to find
            available time slots while keeping administrative tasks in one
            protected area.
          </NoteCard>

          <NoteCard label="MY CONTRIBUTION" title="Admin Dashboard">
            I developed the admin control panel, three main admin action cards,
            role-based interface elements and admin-only route protection as
            part of the team project.
          </NoteCard>

          <NoteCard label="CHALLENGE" title="Connecting all layers">
            A key challenge was understanding how the interface, MySQL data,
            automated tests, Docker containers and cloud deployment depend on
            one another. The project helped me see the application as one
            complete system rather than separate features.
          </NoteCard>
        </section>

        <SplitSection
          image={rpCrud}
          alt="Facility CRUD overview"
          title="Facility Management (CRUD)"
          text="Administrators can view, add, edit and delete sports facilities through one management flow. MySQL supports the core SELECT, INSERT, UPDATE and DELETE operations, keeping the interface connected to live facility records."
          caption="Facility management — click to inspect the full interface"
          onOpen={setLightbox}
        />

        <SplitSection
          reverse
          image={rpAdmin}
          alt="Admin control panel"
          title="Role-based Admin Control"
          text="The admin dashboard groups facilities, bookings and maintenance actions in one place. Role checks keep these controls unavailable to regular users, which makes the management area safer and easier to understand."
          caption="Admin panel — click to view full-size"
          onOpen={setLightbox}
        />

        <SplitSection
          image={rpDynamic}
          alt="Dynamic facility search"
          title="Dynamic Facility Search"
          text="Facility search is connected directly to the database. When a new facility is added, it appears automatically in the search list without manually editing the page, reducing duplicate maintenance work."
          caption="Database-driven search — click to view full-size"
          onOpen={setLightbox}
        />

        <section className="devops-block">
          <div className="devops-heading">
            <p className="eyebrow">DEVELOPMENT PROCESS</p>
            <h2>DevOps & Deployment</h2>
            <p>
              After the booking application was built, the second phase focused
              on testing, repeatable environments, security scanning and
              deployment.
            </p>
          </div>

          <article className="devops-row">
            <Polaroid
              src={rpAws}
              alt="Docker Compose and AWS RDS architecture"
              caption="Docker Compose + AWS RDS — click to view full-size"
              onOpen={setLightbox}
            />

            <div>
              <h3>Containerised application & cloud database</h3>
              <p>
                Docker Compose manages the Node.js application container and
                environment configuration while AWS RDS hosts MySQL. This
                removes the need for a local production database and creates a
                cleaner deployment setup.
              </p>
              <TechTags
                items={[
                  "Docker Compose",
                  "Node.js container",
                  "AWS RDS MySQL",
                  "Environment variables"
                ]}
              />
            </div>
          </article>

          <article className="devops-row reverse">
            <Polaroid
              src={rpPipeline}
              alt="Jenkins CI CD pipeline"
              caption="Jenkins CI/CD pipeline — click to view full-size"
              onOpen={setLightbox}
            />

            <div>
              <h3>Automated CI/CD pipeline</h3>
              <p>
                The pipeline checks out code, prepares infrastructure with
                Ansible, installs dependencies, runs automated tests, builds
                the Docker image, scans it with Trivy and deploys the verified
                application to AWS EC2.
              </p>
              <TechTags
                items={["Jenkins", "Ansible", "Jest", "Supertest", "Trivy", "AWS EC2"]}
              />
            </div>
          </article>
        </section>
      </main>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      <Footer />
    </>
  );
}


// 11. Project 2 -- SideHustle Launchpad


function SideProjectPage() {
  const [lightbox, setLightbox] = useState(null);

  const tags = [
    "Google Stitch",
    "Botpress",
    "Gemini",
    "n8n",
    "Google Docs",
    "Gmail API",
    "Adobe Firefly",
    "Synthesia"
  ];

  return (
    <>
      <main className="project-detail-page vintage-paper">
        <ProjectHero
          category="AI AUTOMATION · TEAM PROJECT"
          title="SideHustle Launchpad"
          resourceUrl="https://github.com/1fannn/SideHustle-Launchpad"
          resourceLabel="GitHub Repository"
          tags={tags}
          intro="An AI-powered platform designed to help polytechnic students turn their skills, hobbies and interests into realistic side-hustle opportunities. The experience combines a website, conversational input, AI-generated business guidance and automated document/email delivery."
          image={sideHome}
          alt="SideHustle Launchpad homepage"
          onOpen={setLightbox}
        />

        <section className="project-notes">
          <NoteCard label="OBJECTIVE" title="Lower the barrier to starting">
            Help students move from a vague idea to practical next steps by
            organising skill, budget, time and platform constraints into a
            personalised blueprint.
          </NoteCard>

          <NoteCard label="MY CONTRIBUTION" title="Promotion & visual communication">
            My individual contribution focused on promotional materials,
            branding visuals, UI exploration and presenting the product clearly
            for student users.
          </NoteCard>

          <NoteCard label="CHALLENGE" title="Connecting multiple services">
            The main challenge was keeping the user journey simple while the
            workflow moved through chatbot input, AI generation, n8n automation,
            Google Docs and email delivery.
          </NoteCard>
        </section>

        <SplitSection
          image={sideFeatures}
          alt="SideHustle features and how it works"
          title="A guided launch experience"
          text="The landing page introduces the core tools — business idea generation, pricing guidance and marketing copy — and explains the four-step workflow from student input to blueprint delivery."
          caption="Features & workflow — click to view full-size"
          onOpen={setLightbox}
        />

        <SplitSection
          reverse
          image={sideChat1}
          alt="Botpress chatbot collecting student information"
          title="Conversational input"
          text="Botpress gathers the student's skill, available time, budget and preferred platform in a conversational format. This creates structured input without making the user complete a long technical form."
          caption="Chatbot input — click to view full-size"
          onOpen={setLightbox}
        />

        <SplitSection
          image={sideChat2}
          alt="Botpress chatbot delivering generated result"
          title="Automated result delivery"
          text="Once the required information is collected, the workflow produces a personalised business blueprint, creates a Google Document and provides the result by email so the student leaves with something usable."
          caption="Generated output — click to view full-size"
          onOpen={setLightbox}
        />

        <section className="wide-flow">
          <div>
            <p className="eyebrow">SYSTEM FLOW</p>
            <h2>From student input to final delivery</h2>
            <p>
              The project connects Botpress, Gemini, n8n, Google Docs and email
              delivery. Each service has a clear role, which makes the
              automation easier to explain and maintain.
            </p>
            <TechTags
              items={[
                "Botpress intake",
                "Gemini generation",
                "n8n workflow",
                "Google Docs output",
                "Email delivery"
              ]}
            />
          </div>

          <Polaroid
            src={sideFlow}
            alt="SideHustle system flow diagram"
            caption="System flow — click to inspect the full diagram"
            onOpen={setLightbox}
          />
        </section>

        <section className="promotion-block">
          <div className="promotion-copy">
            <p className="eyebrow">PROMOTION</p>
            <h2>Branding & project promotion</h2>
            <p>
              The project was also presented through visual branding and
              promotional materials. These assets help communicate the value
              of the AI service beyond the chatbot itself and make the launch
              feel more complete.
            </p>
          </div>

          <div className="promotion-grid promotion-grid-custom">
            <Polaroid
              src={sideYoutubeThumb}
              alt="SideHustle Launchpad YouTube thumbnail"
              caption="YouTube thumbnail"
              onOpen={setLightbox}
              className="promotion-wide"
            />
            <Polaroid
              src={sideBrandSquare}
              alt="SideHustle Launchpad brand visual"
              caption="Brand visual"
              onOpen={setLightbox}
              className="promotion-square"
            />
          </div>
        </section>
      </main>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      <Footer />
    </>
  );
}


// 12. Project 3 -- City in Nature


function DesignProjectPage() {
  const [lightbox, setLightbox] = useState(null);
  const tags = ["Adobe Illustrator", "Photoshop", "Generative Fill", "Principle of Design"];

  return (
    <>
      <main className="project-detail-page design-project vintage-paper">
        <ProjectHero
          category="DESIGN · INDIVIDUAL PROJECT"
          title="City in Nature"
          tags={tags}
          intro="A website and visual identity concept for Singapore Green Plan 2030. The design uses soft botanical minimalism, organic forms and a restrained green palette to connect Singapore's urban identity with nature."
          image={designHome}
          alt="City in Nature homepage design"
          onOpen={setLightbox}
        />

        <section className="project-notes">
          <NoteCard label="DESIGN DIRECTION" title="Soft Botanical Minimalism">
            Cream backgrounds, green tones, botanical line work, serif headings
            and generous white space create a calm visual system that supports
            the environmental theme.
          </NoteCard>

          <NoteCard label="ORIGINAL ASSETS" title="One connected identity">
            I created the logo, supporting icons, botanical decorations and
            social stickers so the pages feel related instead of relying on
            unrelated stock graphics.
          </NoteCard>

          <NoteCard label="CHALLENGE" title="Balancing different visual sources">
            The biggest challenge was combining vector illustrations,
            photographs and AI-assisted imagery without making the final
            website feel inconsistent. Repeated colour, typography, line weight
            and framing helped keep the visual language cohesive.
          </NoteCard>
        </section>

        <SplitSection
          image={designMoodboard}
          alt="City in Nature moodboard"
          title="Visual direction"
          text="The moodboard combines Singapore landmarks, orchids, greenery and restrained neutral backgrounds. The palette and type choices were selected early so later pages and assets could follow the same visual rules."
          caption="Moodboard — click to view full-size"
          onOpen={setLightbox}
        >
          <div className="mini-assets">
            <img src={designPalette} alt="City in Nature colour palette" />
          </div>
        </SplitSection>

        <SplitSection
          reverse
          image={designLogoSketches}
          alt="City in Nature logo concept sketches"
          title="Logo development"
          text="Three initial sketches explored the relationship between an orchid and city skyline. The final logo simplifies those ideas into a mark that remains recognisable at small sizes and works across the website."
          caption="Logo sketches — click to view full-size"
          onOpen={setLightbox}
        >
          <div className="mini-logo">
            <img src={designLogoFinal} alt="Final City in Nature logo" />
          </div>
        </SplitSection>

        <section className="before-after">
          <div className="before-after-copy">
            <p className="eyebrow">AI-ASSISTED DESIGN</p>
            <h2>From vector concept to a realistic green city</h2>
            <p>
              Generative Fill was used as an image-production tool rather than
              the design system itself. The original composition was preserved
              while the flat landmark concept was developed into a more
              realistic miniature Singapore landscape.
            </p>
          </div>

          <div className="before-after-grid">
            <Polaroid
              src={designAiBefore}
              alt="Vector concept before AI enhancement"
              caption="Before — vector concept"
              onOpen={setLightbox}
            />
            <Polaroid
              src={designAiAfter}
              alt="Realistic city image after AI enhancement"
              caption="After — AI-assisted enhancement"
              onOpen={setLightbox}
            />
          </div>
        </section>

        <section className="design-webpages">
          <div className="devops-heading">
            <p className="eyebrow">FINAL WEB PAGES</p>
            <h2>Consistent UI across the website</h2>
            <p>
              Home, About, Event and Contact reuse the same typography, green
              palette, botanical line work, organic section shapes and framed
              photography. Repetition and similarity help users recognise the
              same brand across different page purposes.
            </p>
          </div>

          <div className="webpage-grid">
            <Polaroid
              src={designHome}
              alt="City in Nature home page"
              caption="Home"
              onOpen={setLightbox}
            />
            <Polaroid
              src={designAbout}
              alt="City in Nature about page"
              caption="About"
              onOpen={setLightbox}
            />
            <Polaroid
              src={designEvent}
              alt="City in Nature event page"
              caption="Event"
              onOpen={setLightbox}
            />
            <Polaroid
              src={designContact}
              alt="City in Nature contact page"
              caption="Contact"
              onOpen={setLightbox}
            />
          </div>
        </section>

        <SplitSection
          image={designStickerSketch}
          alt="Mascot sticker sketches"
          title="Social media stickers"
          text="The mascot stickers extend the identity into a more playful format while keeping the same rounded forms, green palette and nature-related activities. Showing the sketches beside the final set also makes the design process visible."
          caption="Sticker sketches — click to view full-size"
          onOpen={setLightbox}
        >
          <div className="sticker-final">
            <img src={designStickers} alt="Final City in Nature mascot stickers" />
          </div>
        </SplitSection>
      </main>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      <Footer />
    </>
  );
}


 
// 13. Contact page


function Contact() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("");
      setError("Please complete your name, email and message before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("");
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStatus("");
    setSending(true);

    try {
      const payload = new FormData();
      payload.append("name", name);
      payload.append("email", email);
      payload.append("message", message);
      payload.append("_subject", `Portfolio message from ${name}`);
      payload.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/ajax/wushutong5@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: payload
        }
      );

      if (!response.ok) throw new Error("Send failed");

      form.reset();
      setStatus("Message sent. Thank you — I will get back to you soon.");
    } catch {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:wushutong5@gmail.com?subject=${subject}&body=${body}`;
      setStatus(
        "Direct sending was unavailable, so your email app has been opened with the message ready to send."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <main className="page-shell contact-page vintage-paper">
        <section className="contact-intro">
          <FloatingArt src={handshake} className="contact-handshake" />
          <FloatingArt src={butterfly} className="contact-butterfly" />
          <p className="eyebrow">SAY HELLO</p>
          <h1>Let's Connect</h1>
          <p>
            If you would like to discuss an opportunity, a project or my
            portfolio, send me a message below.
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-links">
            <h2>Find Me Here</h2>
            <a href="mailto:wushutong5@gmail.com">
              <span>Email</span>
              <span>wushutong5@gmail.com ↗</span>
            </a>
            <a
              href="https://github.com/wushutong5-cloud"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span>My GitHub Profile ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/姝彤-吴-16146536b"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>My LinkedIn Profile ↗</span>
            </a>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <h2>Send Me a Message</h2>

            <label>
              Your Name
              <input name="name" placeholder="Your name" />
            </label>

            <label>
              Your Email
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
              />
            </label>

            <button
              className="button button-dark"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {error && <p className="form-error">{error}</p>}
            {status && <p className="form-success">{status}</p>}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}


 
// 14. Main app and routes
 

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route
          path="/portfolio/rp-sports-complex"
          element={<RpProjectPage />}
        />
        <Route
          path="/portfolio/sidehustle-launchpad"
          element={<SideProjectPage />}
        />
        <Route
          path="/portfolio/city-in-nature"
          element={<DesignProjectPage />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
