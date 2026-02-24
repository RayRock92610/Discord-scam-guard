import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Discord Scam Guard</h1>
        <p className={styles.subtitle}>Real-time Monitoring Dashboard</p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>🛡️ Real-time Monitoring</h2>
            <p>Detects potential scams in real-time messages across Discord servers.</p>
          </div>
          
          <div className={styles.card}>
            <h2>📊 User Reports</h2>
            <p>Allows users to report scams, which are analyzed for future detections.</p>
          </div>
          
          <div className={styles.card}>
            <h2>🔔 Automatic Notifications</h2>
            <p>Sends alerts to users when a scam is detected in their server.</p>
          </div>
          
          <div className={styles.card}>
            <h2>📈 Analytics Dashboard</h2>
            <p>Monitor activity and manage settings with our user-friendly interface.</p>
          </div>
        </div>
        
        <div className={styles.info}>
          <h3>Getting Started</h3>
          <ol>
            <li>Clone the repository</li>
            <li>Install dependencies with <code>npm install</code></li>
            <li>Set up your Discord bot token</li>
            <li>Configure your server settings</li>
            <li>Run with <code>npm start</code></li>
          </ol>
        </div>
      </div>
    </main>
  );
}
