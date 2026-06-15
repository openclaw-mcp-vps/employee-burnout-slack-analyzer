import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurnoutRadar — Detect Employee Burnout from Slack Patterns',
  description: 'Analyze Slack message timing, frequency, and sentiment to identify burnout risk indicators and get AI-powered intervention recommendations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84935e6a-5b29-4caf-b9ae-04737f7bb0b5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
