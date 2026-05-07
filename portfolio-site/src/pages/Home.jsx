function Home(){
    return (
        <main>
  <section className="hero">
    <div className="hero-content">
      <p className="eyebrow">Computing & IT Student</p>
      <h1>Building <span>systems</span>, software, and networks.</h1>
      <p>
        I create technical projects across web development, infrastructure,
        automation, databases, and networking.
      </p>

      <div className="hero-buttons">
        <a className="btn primary" href="/projects">View Projects</a>
        <a className="btn" href="/resume">Resume</a>
      </div>
    </div>

    <div className="terminal-card">
      <div className="terminal-header">
        <span className="dot cyan"></span>
        <span className="dot purple"></span>
        <span className="dot green"></span>
      </div>

      <div className="terminal-body">
        <p><span className="command">&gt;</span> loading portfolio...</p>
        <p>React Portfolio <span className="status">ONLINE</span></p>
        <p>Network Labs <span className="status">ACTIVE</span></p>
        <p>Database Projects <span className="status">DEPLOYED</span></p>
      </div>
    </div>
  </section>
</main>
    );
}

export default Home;