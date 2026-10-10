import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="brand">DM<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-button">Contact Me</a>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span> OPEN TO OPPORTUNITIES
            </p>

            <h1>Hi, I'm <span>Deepika</span><br />
              Web Developer.
            </h1>

            <p className="hero-description">
              I build responsive, user-friendly websites using React,
              JavaScript, HTML and CSS. I enjoy turning ideas into
              beautiful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>

            <div className="hero-note">
              <span>✦</span> Learning. Building. Growing.
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>
            <div className="code-card">
              <div className="window-dots">
                <i></i><i></i><i></i>
                <span>developer.jsx</span>
              </div>
              <div className="code-content">
                <p><span className="pink">const</span> developer = {'{'}</p>
                <p className="indent">name: <span className="green">'Deepika'</span>,</p>
                <p className="indent">role: <span className="green">'Web Developer'</span>,</p>
                <p className="indent">skills: [</p>
                <p className="indent2"><span className="yellow">'React'</span>,</p>
                <p className="indent2"><span className="yellow">'JavaScript'</span>,</p>
                <p className="indent2"><span className="yellow">'HTML & CSS'</span></p>
                <p className="indent">]</p>
                <p>{'}'}</p>
                <p className="code-comment">// Creating something meaningful ✨</p>
              </div>
            </div>
            <div className="floating-badge badge-one">⚛ React</div>
            <div className="floating-badge badge-two">{"</>"} Clean Code</div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>A little about <span>my journey.</span></h2>
          <p className="section-description">
            I'm an aspiring web developer and B.Com student who enjoys
            learning technology and creating practical web projects.
            I'm currently focused on improving my React skills, building
            real-world projects and growing as a developer.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>Skills I'm <span>building with.</span></h2>

          <div className="skills-grid">
            <div className="skill-card"><b>01</b><h3>HTML5</h3><p>Web page structure</p></div>
            <div className="skill-card"><b>02</b><h3>CSS3</h3><p>Responsive styling</p></div>
            <div className="skill-card"><b>03</b><h3>JavaScript</h3><p>Interactive websites</p></div>
            <div className="skill-card"><b>04</b><h3>React</h3><p>Component-based UI</p></div>
            <div className="skill-card"><b>05</b><h3>Git & GitHub</h3><p>Version control basics</p></div>
            <div className="skill-card"><b>06</b><h3>Responsive Design</h3><p>Mobile-friendly layouts</p></div>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Projects I've <span>worked on.</span></h2>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-number">PROJECT 01</div>
              <div className="project-symbol">✳</div>
              <h3>Mangodi Wale</h3>
              <p>
                A food-business website concept featuring Mangodi,
                Banana Chips and Namkeen, with product information,
                weight options and a shopping-cart experience.
              </p>
              <div className="tags"><span>React</span><span>CSS</span><span>JavaScript</span></div>
              <p className="project-status">Personal project · In development</p>
            </article>

            <article className="project-card">
              <div className="project-number">PROJECT 02</div>
              <div className="project-symbol">⌘</div>
              <h3>More projects coming</h3>
              <p>
                I'm continuing to practise frontend development and
                building new projects to strengthen my skills.
              </p>
              <div className="tags"><span>Learning</span><span>Building</span></div>
              <p className="project-status">More work will be added here</p>
            </article>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="section-label">04 / GET IN TOUCH</p>
          <h2>Let's build something <span>great.</span></h2>
          <p>
            I'm interested in entry-level web development roles,
            internships and opportunities to learn through real projects.
          </p>
          <a className="primary-button"href="mailto:deepikameena16102006@gmail.com">
            Email Me ↗
          </a>
        
        </section>
      </main>
          
            
<footer>
  <a href="#home" className="brand">
    DM<span>.</span>
  </a>

  <p>Designed & built by Deepika · 2026</p>

  <div className="social-links">
    <a
      href="https://github.com/deepikameena16102006-collab"
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.linkedin.com/in/deepika-meena-a49097437/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn ↗
    </a>

    <a href="#home">Back to top ↑</a>
  </div>
</footer>

    </div>
  )
}

export default App
