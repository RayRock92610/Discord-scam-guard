export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Discord Scam Guard</h1>
        <p className="subtitle">Protecting Discord communities from scams</p>
      </div>

      <section className="features">
        <h2>🎯 Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🔍 Real-time Monitoring</h3>
            <p>Detects potential scams in real-time messages</p>
          </div>
          <div className="feature-card">
            <h3>📢 User Reports</h3>
            <p>Allows users to report scams for future detection</p>
          </div>
          <div className="feature-card">
            <h3>🔔 Automatic Notifications</h3>
            <p>Sends alerts when a scam is detected</p>
          </div>
          <div className="feature-card">
            <h3>📊 Dashboard</h3>
            <p>User-friendly interface to monitor activity</p>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>🚀 Getting Started</h2>
        <ol>
          <li>Clone the repository</li>
          <li>Install dependencies with <code>npm install</code></li>
          <li>Configure your bot token</li>
          <li>Run with <code>npm start</code></li>
        </ol>
      </section>

      <footer>
        <p>
          Discord Scam Guard &copy; 2026 |{" "}
          <a
            href="https://github.com/RayRock92610/Discord-scam-guard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
