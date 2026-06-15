export default function Home() {
  const faqs = [
    {
      q: 'How does BurnoutRadar connect to Slack?',
      a: 'We use Slack\'s official OAuth API. You authorize read-only access to message metadata — we never read message content, only timing and frequency patterns.'
    },
    {
      q: 'What burnout signals does it detect?',
      a: 'Late-night messaging, weekend activity spikes, response time degradation, sudden silence, and sentiment shifts in public channels — all scored into a risk index.'
    },
    {
      q: 'Is my team\'s data private?',
      a: 'All analysis runs on encrypted infrastructure. We store only aggregated scores, never raw messages. Data is deleted within 30 days of cancellation.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          HR &amp; People Ops
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Detect Employee Burnout<br />
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          BurnoutRadar analyzes Slack message timing, frequency, and sentiment using AI to surface burnout risk scores and actionable intervention recommendations — before your best people quit.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-2xl p-8 bg-[#161b22]">
          {[['73%', 'of burnout cases show Slack pattern changes 3+ weeks early'],['2 min', 'average setup time via Slack OAuth'],['94%', 'accuracy on burnout risk prediction in beta testing']].map(([val, label]) => (
            <div key={val}>
              <div className="text-3xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Per workspace. Unlimited team members.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Slack OAuth integration (read-only)',
              'AI burnout risk scores per employee',
              'Weekly trend reports & alerts',
              'Intervention recommendation engine',
              'Manager dashboard & CSV export',
              'Email support'
            ].map(f => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BurnoutRadar. Built for HR teams who care.
      </footer>
    </main>
  )
}
