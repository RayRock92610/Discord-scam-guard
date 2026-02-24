# Discord Scam Guard

## Project Documentation

### Features
- **Real-time monitoring**: Detects potential scams in real-time messages.
- **User reports**: Allows users to report scams, which are then analyzed for future detections.
- **Automatic notifications**: Sends alerts to users when a scam is detected.
- **Dashboard**: Provides a user-friendly interface to monitor activity and manage settings.
- **Performance Monitoring**: Integrated with Vercel Speed Insights to track and optimize web performance.

### Tech Stack
This project is built with:
- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe development
- **Vercel Speed Insights** - Real-time performance monitoring
- **React 18** - Modern React features

### Installation
To install Discord Scam Guard, follow these steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/rayrock92619/discord-scam-guard.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd discord-scam-guard
   ```
3. **Install the required dependencies**:
   ```bash
   npm install
   ```

### Usage

#### Development
To run the project in development mode:
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

#### Production
To build and run the project in production mode:
```bash
npm run build
npm start
```

#### Deploy to Vercel
The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will detect Next.js and configure the build automatically
4. Your app will be deployed with Speed Insights automatically enabled

Alternatively, deploy using the Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Vercel Speed Insights
This project includes Vercel Speed Insights for real-time performance monitoring. The `<SpeedInsights />` component is integrated in the root layout (`app/layout.tsx`) and will automatically:

- Track Core Web Vitals (LCP, FID, CLS, etc.)
- Provide real-time performance metrics
- Help identify performance bottlenecks
- Work seamlessly with Next.js routing

To view your Speed Insights data:
1. Deploy your app to Vercel
2. Navigate to your project dashboard on Vercel
3. Click on the "Speed Insights" tab
4. View real-time performance metrics and analytics

Learn more about [Vercel Speed Insights](https://vercel.com/docs/speed-insights).

### Contribution Guidelines
We welcome contributions! Here’s how you can help:
1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix:
   ```
   git checkout -b feature/my-feature
   ```
3. **Make your changes** and commit them:
   ```
   git commit -m 'Add my feature'
   ```
4. **Push to the branch**:
   ```
   git push origin feature/my-feature
   ```
5. **Open a pull request**.

Please make sure to update tests as appropriate.

### Project Roadmap
- **Q1 2026**: Release beta version with core features.
- **Q2 2026**: Implement user suggestions and feedback.
- **Q3 2026**: Expand detection capabilities and refine algorithms.
- **Q4 2026**: Launch stable version and promote community usage.