import { Navigation } from "@/components/navigation";
import { ControlSection } from "@/components/control-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
      {/* Hero Section */}
      <section className="relative z-20 min-h-[80vh] pt-[160px] md:min-h-screen md:pt-[160px]">
        {/* Background Floor Image */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          {/* Placeholder for bg-hero-1.jpg - would be actual image */}
          <div className="absolute bottom-0 left-1/2 h-[540px] w-[960px] -translate-x-1/2 bg-gradient-to-t from-[#0B0E14]/80 to-transparent opacity-40" />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
        </div>
        
        <div className="relative z-20 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 py-12 md:py-0">
          {/* Hero Content */}
          <div className="w-full text-center">
            <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
              {/* Rainbow gradient border pill */}
              <div className="flex justify-center mt-4">
                <div className="group relative inline-flex cursor-pointer rounded-full transition-transform duration-300 hover:scale-[1.02]">
                  {/* Rainbow glow/mist effect - outer glow */}
                  <div className="absolute -inset-[4px] rounded-full bg-[conic-gradient(from_var(--angle),#FF5F57,#FEBC2E,#28C840,#1967D2,#9932CC,#FF5F57)] opacity-90 blur-[12px]" style={{ ['--angle' as string]: '0deg', animation: 'rainbow-flow 4s linear infinite' }} />
                  {/* Rainbow glow/mist effect - inner sharp ring */}
                  <div className="absolute -inset-[1px] rounded-full bg-[conic-gradient(from_var(--angle),#FF5F57,#FEBC2E,#28C840,#1967D2,#9932CC,#FF5F57)] opacity-50" style={{ ['--angle' as string]: '0deg', animation: 'rainbow-flow 4s linear infinite' }} />
                  <div className="relative z-10 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#0a0a0a]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    Now in public beta
                    <svg className="h-3.5 w-3.5 text-white/50 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="text-balance text-[40px] font-medium leading-[0.95] tracking-[-0.04em] md:text-[64px] lg:text-[80px]">
                <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Email for
                </span>
                <br />
                <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent">
                  developers
                </span>
              </h1>
              
              <p className="text-balance mx-auto max-w-2xl text-lg leading-[1.6] text-[#A1A4A5] md:text-xl">
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <button className="group relative h-12 w-full overflow-hidden rounded-lg bg-white px-6 text-[15px] font-medium text-black transition-all duration-200 hover:bg-white/90 sm:w-auto">
                  Start Building
                </button>
                <button className="group relative h-12 w-full overflow-hidden rounded-lg border border-white/10 bg-white/5 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 sm:w-auto">
                  Documentation
                </button>
              </div>
              
              {/* Code snippet preview */}
              <div className="group relative mt-12 md:mt-16">
                <div className="relative overflow-hidden rounded-xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.2)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.2)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.2)_360deg)] shadow-2xl shadow-black/40">
                  <div className="relative overflow-hidden rounded-[11px] bg-[#0B0E14]/80 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                      <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                      <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="text-xs text-gray-500">
                      index.ts
                    </div>
                  </div>
                  <pre className="overflow-x-auto p-4 text-[13px] leading-[1.7]">
                    <code className="language-typescript">
                      <span className="text-[#C792EA]">import</span> <span className="text-[#89DDFF]">{'{'}</span> <span className="text-[#FFCB6B]">Resend</span> <span className="text-[#89DDFF]">{'}'}</span> <span className="text-[#C792EA]">from</span> <span className="text-[#C3E88D]">&apos;resend&apos;</span><span className="text-[#89DDFF]">;</span>
                      {"\n\n"}
                      <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">resend</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">new</span> <span className="text-[#FFCB6B]">Resend</span><span className="text-[#89DDFF]">(</span><span className="text-[#C3E88D]">&apos;re_123456789&apos;</span><span className="text-[#89DDFF]">);</span>
                      {"\n\n"}
                      <span className="text-[#C792EA]">await</span> <span className="text-[#82AAFF]">resend</span><span className="text-[#89DDFF]">.</span><span className="text-[#82AAFF]">emails</span><span className="text-[#89DDFF]">.</span><span className="text-[#82AAFF]">send</span><span className="text-[#89DDFF]">(</span><span className="text-[#89DDFF]">{'{'}</span>
                      {"\n  "}<span className="text-[#F07178]">from</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;onboarding@resend.dev&apos;</span><span className="text-[#89DDFF]">,</span>
                      {"\n  "}<span className="text-[#F07178]">to</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;user@gmail.com&apos;</span><span className="text-[#89DDFF]">,</span>
                      {"\n  "}<span className="text-[#F07178]">subject</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;Hello World&apos;</span><span className="text-[#89DDFF]">,</span>
                      {"\n  "}<span className="text-[#F07178]">html</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;&lt;p&gt;Congrats on sending your first email!&lt;/p&gt;&apos;</span>
                      {"\n"}<span className="text-[#89DDFF]">{'}'});</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Trusted By Section */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm text-gray-500">
            Trusted by teams from around the world
          </p>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center opacity-50 transition-opacity hover:opacity-70">
                <div className="h-8 w-20 rounded bg-gray-800" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Product Showcase: Transactional Emails */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          {/* 3D Video */}
          <div className="relative mx-auto mb-4 max-w-[120px] overflow-hidden rounded-xl">
            <video autoPlay loop muted playsInline className="w-full">
              <source src="/videos/3d-react.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mb-6 text-center">
            <p className="mb-3 text-sm font-medium text-[#A1A4A5] uppercase tracking-wider">Email API</p>
            <h2 className="mb-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Deliver transactional
              </span>
              <br />
              <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent">
                emails at scale
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-[#A1A4A5]">
              Send password resets, receipts, notifications, and more with best-in-class deliverability.
            </p>
          </div>
          {/* UI Mockup Card */}
          <div className="mt-8 overflow-hidden rounded-2xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.2)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.2)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.2)_360deg)]">
            <div className="overflow-hidden rounded-[15px] bg-[#0B0E14]">
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="ml-4 flex gap-4 text-xs text-[#A1A4A5]">
                <span className="text-white">Emails</span>
                <span>Domains</span>
                <span>API Keys</span>
                <span>Settings</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#A1A4A5]">Total emails sent</div>
                  <div className="text-3xl font-medium text-white">2,847,293</div>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">98.4% delivered</span>
                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">1.2% bounced</span>
                </div>
              </div>
              {/* Fake chart bars */}
              <div className="flex items-end gap-1.5 h-24">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-white/[0.08] transition-all hover:bg-white/[0.15]" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.15)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.15)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.15)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.15)_360deg)]">
                  <div className="rounded-[11px] bg-[#0B0E14] p-4">
                  <div className="text-xs text-[#A1A4A5]">Opened</div>
                  <div className="text-xl font-medium text-white">64.2%</div>
                  </div>
                </div>
                <div className="rounded-xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.15)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.15)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.15)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.15)_360deg)]">
                  <div className="rounded-[11px] bg-[#0B0E14] p-4">
                  <div className="text-xs text-[#A1A4A5]">Clicked</div>
                  <div className="text-xl font-medium text-white">23.8%</div>
                  </div>
                </div>
                <div className="rounded-xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.15)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.15)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.15)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.15)_360deg)]">
                  <div className="rounded-[11px] bg-[#0B0E14] p-4">
                  <div className="text-xs text-[#A1A4A5]">Complained</div>
                  <div className="text-xl font-medium text-white">0.01%</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Product Showcase: Broadcasts */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          {/* 3D Video */}
          <div className="relative mx-auto mb-4 max-w-[120px] overflow-hidden rounded-xl">
            <video autoPlay loop muted playsInline className="w-full">
              <source src="/videos/3d-broadcast.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mb-6 text-center">
            <p className="mb-3 text-sm font-medium text-[#A1A4A5] uppercase tracking-wider">Broadcasts</p>
            <h2 className="mb-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Reach your entire
              </span>
              <br />
              <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent">
                audience
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-[#A1A4A5]">
              Send marketing emails, newsletters, and product updates to your contacts with beautiful templates.
            </p>
          </div>
          {/* UI Mockup Card */}
          <div className="mt-8 overflow-hidden rounded-2xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.2)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.2)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.2)_360deg)]">
            <div className="overflow-hidden rounded-[15px] bg-[#0B0E14]">
            <div className="border-b border-white/[0.08] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white/10" />
                <div>
                  <div className="text-sm font-medium text-white">Monthly Newsletter</div>
                  <div className="text-xs text-[#A1A4A5]">Draft · Last edited 2 min ago</div>
                </div>
                <div className="ml-auto flex gap-2">
                  <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10">Preview</button>
                  <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">Send</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="border-r border-white/[0.06] p-4">
                <div className="mb-2 text-xs font-medium text-[#A1A4A5] uppercase">Audience</div>
                <div className="space-y-2">
                  {['All contacts', 'Active users', 'Paid customers'].map((tag, i) => (
                    <div key={i} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${i === 0 ? 'bg-white/[0.06] text-white' : 'text-[#A1A4A5]'}`}>
                      <div className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-white' : 'border border-white/30'}`} />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 p-6">
                <div className="rounded-lg p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.15)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.15)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.15)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.15)_360deg)]">
                  <div className="rounded-[7px] bg-[#0B0E14] p-6">
                  <div className="mb-4 text-xs text-[#A1A4A5] uppercase">Subject</div>
                  <div className="text-lg text-white">May Product Update</div>
                  <div className="my-4 h-px bg-white/[0.06]" />
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded bg-white/[0.08]" />
                    <div className="h-3 w-full rounded bg-white/[0.06]" />
                    <div className="h-3 w-5/6 rounded bg-white/[0.06]" />
                    <div className="h-3 w-4/5 rounded bg-white/[0.08]" />
                    <div className="h-3 w-full rounded bg-white/[0.06]" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Email for All - SDKs */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          {/* 3D Video */}
          <div className="relative mx-auto mb-4 max-w-[120px] overflow-hidden rounded-xl">
            <video autoPlay loop muted playsInline className="w-full">
              <source src="/videos/3d-integrate-afternoon.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Email for all
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-[#A1A4A5]">
              SDKs for every stack. Drop Resend into your existing codebase in seconds.
            </p>
          </div>
          {/* SDK Tabs */}
          <div className="rounded-2xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.2)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.2)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.2)_360deg)]">
            <div className="rounded-[15px] bg-[#0B0E14]">
            <div className="flex gap-1 border-b border-white/[0.08] px-4 py-2">
              {['Node.js', 'Python', 'Ruby', 'PHP', 'Go'].map((lang, i) => (
                <button key={lang} className={`rounded-md px-4 py-2 text-sm transition-colors ${i === 0 ? 'bg-white/[0.08] text-white' : 'text-[#A1A4A5] hover:text-white'}`}>
                  {lang}
                </button>
              ))}
            </div>
            <pre className="overflow-x-auto p-4 text-[13px] leading-[1.7]">
              <code>
                <span className="text-[#C792EA]">import</span> <span className="text-[#89DDFF]">{'{'}</span> <span className="text-[#FFCB6B]">Resend</span> <span className="text-[#89DDFF]">{'}'}</span> <span className="text-[#C792EA]">from</span> <span className="text-[#C3E88D]">&apos;resend&apos;</span><span className="text-[#89DDFF]">;</span>
                {"\n\n"}
                <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">resend</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">new</span> <span className="text-[#FFCB6B]">Resend</span><span className="text-[#89DDFF]">(</span><span className="text-[#C3E88D]">&apos;re_123456789&apos;</span><span className="text-[#89DDFF]">);</span>
                {"\n\n"}
                <span className="text-[#C792EA]">await</span> <span className="text-[#82AAFF]">resend</span><span className="text-[#89DDFF]">.</span><span className="text-[#82AAFF]">emails</span><span className="text-[#89DDFF]">.</span><span className="text-[#82AAFF]">send</span><span className="text-[#89DDFF]">(</span><span className="text-[#89DDFF]">{'{'}</span>
                {"\n  "}<span className="text-[#F07178]">from</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;onboarding@resend.dev&apos;</span><span className="text-[#89DDFF]">,</span>
                {"\n  "}<span className="text-[#F07178]">to</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;user@gmail.com&apos;</span><span className="text-[#89DDFF]">,</span>
                {"\n  "}<span className="text-[#F07178]">subject</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;Hello World&apos;</span><span className="text-[#89DDFF]">,</span>
                {"\n  "}<span className="text-[#F07178]">html</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">&apos;&lt;p&gt;Congrats on sending your first email!&lt;/p&gt;&apos;</span>
                {"\n"}<span className="text-[#89DDFF]">{'}'});</span>
              </code>
            </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      <ControlSection />

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Features Grid */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Everything you need to send emails
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#A1A4A5]">
              From transactional emails to marketing campaigns, Resend has you covered.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "React Email", 
                desc: "Create beautiful emails with React components. Use JSX and CSS to build responsive email templates.",
                icon: "⚛️"
              },
              { 
                title: "Templates", 
                desc: "Design and manage email templates with our intuitive editor. Version control included.",
                icon: "📧"
              },
              { 
                title: "Broadcasts", 
                desc: "Send marketing emails to your entire audience or specific segments with ease.",
                icon: "📢"
              },
              { 
                title: "Analytics", 
                desc: "Track opens, clicks, bounces, and deliverability in real-time with detailed insights.",
                icon: "📊"
              },
              { 
                title: "Audiences", 
                desc: "Manage contacts and create dynamic segments based on user behavior and attributes.",
                icon: "👥"
              },
              { 
                title: "API", 
                desc: "Simple and powerful REST API with SDKs for Node.js, Python, Ruby, PHP, and more.",
                icon: "⚡"
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.15)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.15)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.15)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.15)_360deg)] transition-all duration-200 hover:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.25)_0deg,rgba(255,255,255,0.05)_45deg,rgba(255,255,255,0.25)_90deg,rgba(255,255,255,0.05)_135deg,rgba(255,255,255,0.25)_180deg,rgba(255,255,255,0.05)_225deg,rgba(255,255,255,0.25)_270deg,rgba(255,255,255,0.05)_315deg,rgba(255,255,255,0.25)_360deg)]"
              >
                <div className="rounded-[15px] bg-[#0B0E14] p-6 transition-all duration-200 group-hover:bg-[#0d1016]">
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#A1A4A5]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Testimonials Section */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Loved by developers
              </span>
            </h2>
            <p className="text-lg text-[#A1A4A5]">
              See what teams are saying about Resend
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Resend has completely transformed how we handle transactional emails. The developer experience is unmatched.",
                author: "Guillermo Rauch",
                role: "CEO",
                company: "Vercel"
              },
              {
                quote: "The React Email integration is a game changer. We can now version control our email templates alongside our code.",
                author: "Vlad Matsiiako",
                role: "Co-founder",
                company: "Infisical"
              },
              {
                quote: "Best email API we've used. Simple, reliable, and the analytics are incredibly detailed.",
                author: "Brandon Strittmatter",
                role: "Founder",
                company: "Outerbase"
              },
              {
                quote: "Switching to Resend improved our email deliverability by 40%. The team is responsive and the product just works.",
                author: "Shariar Kabir",
                role: "CTO",
                company: "Ruby Card"
              },
              {
                quote: "We migrated from SendGrid in a weekend. The API is so intuitive and the documentation is excellent.",
                author: "Giovanni Keppelen",
                role: "Engineering Lead",
                company: "Voa Hoteis"
              },
              {
                quote: "Resend's broadcast feature helped us launch our newsletter in days, not weeks. Highly recommended.",
                author: "Sam Ducker",
                role: "Founder",
                company: "Anyone"
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group rounded-2xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.15)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.15)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.15)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.15)_360deg)] transition-all duration-200 hover:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.25)_0deg,rgba(255,255,255,0.05)_45deg,rgba(255,255,255,0.25)_90deg,rgba(255,255,255,0.05)_135deg,rgba(255,255,255,0.25)_180deg,rgba(255,255,255,0.05)_225deg,rgba(255,255,255,0.25)_270deg,rgba(255,255,255,0.05)_315deg,rgba(255,255,255,0.25)_360deg)]"
              >
                <div className="rounded-[15px] bg-[#0B0E14] p-6">
                <p className="mb-6 text-[15px] leading-relaxed text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{testimonial.author}</div>
                    <div className="text-xs text-[#A1A4A5]">{testimonial.role} · {testimonial.company}</div>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* CTA Section */}
      <section className="mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl p-[1px] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2)_0deg,rgba(255,255,255,0.03)_45deg,rgba(255,255,255,0.2)_90deg,rgba(255,255,255,0.03)_135deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.03)_225deg,rgba(255,255,255,0.2)_270deg,rgba(255,255,255,0.03)_315deg,rgba(255,255,255,0.2)_360deg)]">
            <div className="rounded-[15px] bg-[#0B0E14] p-12 text-center md:p-16">
            <h2 className="mb-6 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Start sending emails today
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#A1A4A5]">
              Join thousands of developers already using Resend to deliver emails that reach humans, not spam folders.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="h-12 w-full rounded-lg bg-white px-6 text-[15px] font-medium text-black transition-all duration-200 hover:bg-white/90 sm:w-auto">
                Get Started for Free
              </button>
              <button className="h-12 w-full rounded-lg border border-white/10 bg-white/5 px-6 text-[15px] font-medium text-white transition-all duration-200 hover:bg-white/10 sm:w-auto">
                View Pricing
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No credit card required · 100 emails/day free forever
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 text-sm font-semibold"><a href="https://www.tiberius.co.nz">P</a>roduct</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Email API</a></li>
                <li><a href="#" className="hover:text-white">Broadcasts</a></li>
                <li><a href="#" className="hover:text-white">Audiences</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">SDKs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-900 pt-8 text-center text-sm text-gray-500">
            © 2024 Resend. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
