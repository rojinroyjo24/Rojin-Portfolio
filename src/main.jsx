import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BrainCircuit, ChevronDown, Code2, Mail, Menu, Moon, Send, Sparkles, Sun, X } from 'lucide-react';
import './styles.css';

const skills = {
  'Generative AI': ['LLMs', 'RAG', 'LangChain', 'FAISS', 'Prompt Engineering', 'Vector Embeddings', 'Semantic Search'],
  'AI / ML': ['PyTorch', 'OpenCV', 'NumPy', 'Hugging Face', 'Llama 3.1', 'Ollama', 'Deep Learning'],
  'Development': ['Python', 'Django', 'Flask', 'Django REST', 'JavaScript', 'TypeScript', 'Angular'],
  'Tools & Data': ['MySQL', 'SQLite', 'Git', 'Docker', 'Groq API', 'PyMuPDF', 'REST APIs'],
};

const experience = [
  { date: 'JUL 2026 — PRESENT', role: 'Junior Web Developer Intern', company: 'Mostech Business Solutions', text: 'Handle end-to-end website design and development for client projects, with a sharp focus on testing, responsiveness, and technical SEO.', current: true },
  { date: 'JUL 2025 — MAY 2026', role: 'Python Full Stack Developer Intern', company: 'Quest Innovative Solutions Pvt. Ltd.', text: 'Developed a Django Student Management System with role-based authentication, CRUD operations, relational data design, and RESTful APIs.' },
  { date: 'JAN 2025 — APR 2025', role: 'Web Developer Intern', company: 'HASHCOVET', text: 'Built dynamic web applications with PHP, MySQL, HTML, CSS, and JavaScript while collaborating on testing, debugging, and feature enhancements.' },
];

const projects = [
  { type: 'AI / GENAI', title: 'RAG Document Intelligence Chatbot', desc: 'A grounded conversational layer for PDFs, with semantic retrieval and Llama-powered answers.', tags: ['Django', 'LangChain', 'FAISS'], featured: true, number: '01' },
  { type: 'COMPUTER VISION', title: 'Deepfake Video Detection', desc: 'Deep learning pipeline that analyzes temporal features and facial signals to verify video authenticity.', tags: ['PyTorch', 'OpenCV', 'LSTM'], number: '02' },
  { type: 'WEB APPLICATION', title: 'College Placement Cell', desc: 'A multi-role job portal connecting students, companies, and administrators in one clear workflow.', tags: ['PHP', 'MySQL', 'Bootstrap'], number: '03' },
  { type: 'CLIENT WEB', title: 'Happy Tots Daycare', desc: 'A warm, responsive service website designed to make discovery and inquiries effortless for parents.', tags: ['HTML', 'CSS', 'JavaScript'], number: '04' },
  { type: 'CLIENT WEB', title: 'Eazy Holidays', desc: 'A tour-focused travel experience with clear packages, strong visual hierarchy, and inquiry forms.', tags: ['Bootstrap', 'UI/UX'], number: '05' },
  { type: 'CLIENT WEB', title: 'Abraham & Kurian', desc: 'A polished business website focused on brand presence, performance, and responsive presentation.', tags: ['HTML', 'CSS'], number: '06' },
];

function Network({ dark }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current, ctx = canvas.getContext('2d'); let frame;
    const resize = () => { canvas.width = canvas.clientWidth * devicePixelRatio; canvas.height = canvas.clientHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); };
    const dots = Array.from({ length: 42 }, () => ({ x: Math.random() * 800, y: Math.random() * 600, vx: (Math.random() - .5) * .15, vy: (Math.random() - .5) * .15 }));
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      dots.forEach(d => { d.x += d.vx; d.y += d.vy; if (d.x < 0 || d.x > w) d.vx *= -1; if (d.y < 0 || d.y > h) d.vy *= -1; });
      dots.forEach((a, i) => dots.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 145) {
          ctx.strokeStyle = dark ? `rgba(224, 122, 95, ${.15 * (1 - dist / 145)})` : `rgba(194, 89, 46, ${.13 * (1 - dist / 145)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }));
      dots.forEach(d => {
        ctx.fillStyle = dark ? '#e07a5f' : '#c2592e';
        ctx.globalAlpha = dark ? .35 : .3;
        ctx.beginPath(); ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
      });
      frame = requestAnimationFrame(draw);
    };
    resize(); window.addEventListener('resize', resize); draw(); return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, [dark]);
  return <canvas className="network" ref={ref} aria-hidden="true" />;
}

function App() {
  const [dark, setDark] = useState(false); const [menu, setMenu] = useState(false); const [filter, setFilter] = useState('ALL');
  const visible = projects.filter(p => filter === 'ALL' || p.type.includes(filter));
  return <div className={dark ? 'app dark' : 'app'}>
    <header className="nav"><a className="logo" href="#top">RR<span>.</span></a><nav className={menu ? 'open' : ''}><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#experience" onClick={() => setMenu(false)}>Experience</a><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a></nav><div className="nav-actions"><button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button><a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a></div></header>
    <main id="top">
      <section className="hero section-pad"><Network dark={dark}/><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div><h1>Building intelligent<br/><em>things for the web.</em></h1><p className="hero-lede">I’m <strong>Rojin Roy</strong>, a Python Developer exploring the intersection of AI, Generative AI, and thoughtful digital experiences.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Let’s connect <Mail size={16}/></a></div><div className="hero-meta"><span><b>Based in</b> Idukki, Kerala</span><span><b>Focus</b> AI · Web · Problem solving</span></div></div><div className="hero-visual"><div className="orb orb-one"/><div className="orb orb-two"/><div className="portrait-wrap"><img src="/rojin.webp" alt="Portrait of Rojin Roy"/><div className="scan-line"/></div><div className="visual-label label-one"><span className="label-kicker">CURRENT MODE</span><strong>LEARNING / BUILDING</strong></div><div className="visual-label label-two"><BrainCircuit size={16}/><span>GEN AI<br/><b>EXPLORER</b></span></div></div><div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ChevronDown size={15}/></div></section>
      <section className="intro section-pad" id="about"><div className="section-index">01 / ABOUT</div><div className="intro-grid"><h2>Curiosity in.<br/><span>Clarity out.</span></h2><div className="intro-text"><p>I’m an MCA graduate and Junior Developer who enjoys turning complex ideas into practical, useful applications. My current world sits between Python engineering and the fast-moving edge of Generative AI.</p><p>From RAG pipelines and semantic search to clean client websites, I care about the full journey: understanding the problem, designing the system, and shipping work that people can actually use.</p><a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16}/></a></div></div><div className="stats"><div><strong>03<span>+</span></strong><small>Years learning & building</small></div><div><strong>06<span>+</span></strong><small>Projects shipped</small></div><div><strong>∞</strong><small>Curiosity for what’s next</small></div></div></section>
      <section className="skills-section section-pad"><div className="section-index">02 / TOOLKIT</div><div className="section-heading"><h2>The stack behind<br/><span>the ideas.</span></h2><p>A constantly evolving toolkit for building, experimenting, and making ideas real.</p></div><div className="skill-grid">{Object.entries(skills).map(([group, items], i) => <div className="skill-card" key={group}><div className="skill-top"><span className="skill-num">0{i + 1}</span><Code2 size={19}/></div><h3>{group}</h3><div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div></div>)}</div></section>
      <section className="experience section-pad" id="experience"><div className="section-index">03 / EXPERIENCE</div><div className="section-heading row"><h2>Where I’ve<br/><span>been learning.</span></h2><p>Every role has added another lens to how I approach the craft.</p></div><div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.company}><div className="timeline-marker">{item.current ? <span/> : i + 1}</div><div className="timeline-date">{item.date}</div><div className="timeline-body"><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p></div></article>)}</div></section>
      <section className="work section-pad" id="work"><div className="section-index">04 / SELECTED WORK</div><div className="section-heading row"><h2>Things I’ve<br/><span>made useful.</span></h2><p>Selected work across AI, computer vision, and web development.</p></div><div className="filters">{['ALL', 'AI / GENAI', 'COMPUTER VISION', 'WEB APPLICATION', 'CLIENT WEB'].map(x => <button className={filter === x ? 'active' : ''} onClick={() => setFilter(x)} key={x}>{x}</button>)}</div><div className="project-grid">{visible.map(p => <article className={p.featured ? 'project featured' : 'project'} key={p.title}><div className="project-art"><span>{p.number}</span><div className="art-grid"/><Sparkles className="sparkle" size={26}/></div><div className="project-content"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="project-bottom"><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><button aria-label={`Open ${p.title}`}><ArrowUpRight size={18}/></button></div></div></article>)}</div></section>
      <section className="education section-pad"><div className="section-index">05 / EDUCATION</div><div className="education-grid"><div><h2>Grounded in<br/><span>the fundamentals.</span></h2><p>Formal training in computer applications, paired with hands-on projects and a habit of learning in public.</p></div><div className="edu-card"><span className="year">2023 — 2025</span><h3>Master of Computer Applications</h3><p>Mangalam College of Engineering<br/>APJ Abdul Kalam Technological University</p><strong>CGPA 8.12</strong></div><div className="edu-card"><span className="year">2020 — 2023</span><h3>Bachelor of Computer Applications</h3><p>JPM Arts and Science College<br/>Mahatma Gandhi University</p><strong>CGPA 7.50</strong></div></div></section>
      <section className="contact section-pad" id="contact"><div className="contact-glow"/><div className="section-index">06 / CONTACT</div><div className="contact-grid"><div><h2>Have a problem<br/>worth <span>solving?</span></h2><p>Whether it’s an AI idea, a web project, or a conversation about what’s next, my inbox is open.</p><div className="contact-links"><a href="mailto:rojinroyjo24@gmail.com"><Mail size={17}/> rojinroyjo24@gmail.com</a><a href="https://linkedin.com/in/rojinroy"><Code2 size={17}/> linkedin.com/in/rojinroy</a><a href="https://github.com/rojinroyjo24"><Code2 size={17}/> github.com/rojinroyjo24</a></div></div><form onSubmit={e => e.preventDefault()}><label>Name<input placeholder="Your name" required/></label><label>Email<input type="email" placeholder="you@company.com" required/></label><label>Message<textarea placeholder="Tell me a little about the project..." rows="4" required/></label><button className="button primary" type="submit">Send message <Send size={16}/></button></form></div></section>
    </main><footer><span>© 2026 Rojin Roy</span><span>Designed & built with curiosity <Sparkles size={14}/></span><a href="#top">Back to top ↑</a></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App />);
