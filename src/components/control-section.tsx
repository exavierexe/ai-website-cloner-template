"use client";

import { useState } from "react";

const tabs = [
  {
    id: "domains",
    label: "Domains",
    content: {
      title: "Verify your domain",
      description: "Authenticate your domain to improve deliverability and build trust with email providers.",
      mockup: (
        <div className="rounded-xl border border-white/[0.08] bg-[#0B0E14] p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.673 0-5.216.584-7.843 4.582m15.686 0A11.953 11.953 0 0112 21c-2.673 0-5.216-.584-7.843-4.582" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium text-white">resend.com</div>
              <div className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Verified
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm text-white">SPF</span>
              </div>
              <span className="text-xs text-green-400">Active</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm text-white">DKIM</span>
              </div>
              <span className="text-xs text-green-400">Active</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm text-white">DMARC</span>
              </div>
              <span className="text-xs text-green-400">Active</span>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "audience",
    label: "Audience",
    content: {
      title: "Know your audience",
      description: "Segment contacts based on behavior, location, and engagement to send targeted campaigns.",
      mockup: (
        <div className="rounded-xl border border-white/[0.08] bg-[#0B0E14] p-6">
          <div className="mb-4 text-sm font-medium text-white">Segment: Active Users</div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">GR</div>
              <div className="flex-1">
                <div className="text-sm text-white">Guillermo Rauch</div>
                <div className="text-xs text-[#A1A4A5]">guillermo@vercel.com</div>
              </div>
              <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">Active</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">VK</div>
              <div className="flex-1">
                <div className="text-sm text-white">Vlad Matsiiako</div>
                <div className="text-xs text-[#A1A4A5]">vlad@infisical.com</div>
              </div>
              <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">Active</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">BS</div>
              <div className="flex-1">
                <div className="text-sm text-white">Brandon Strittmatter</div>
                <div className="text-xs text-[#A1A4A5]">brandon@outerbase.com</div>
              </div>
              <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400">Idle</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <span className="text-sm text-[#A1A4A5]">Total contacts</span>
            <span className="text-lg font-medium text-white">12,847</span>
          </div>
        </div>
      ),
    },
  },
  {
    id: "analytics",
    label: "Analytics",
    content: {
      title: "Track what matters",
      description: "Monitor opens, clicks, bounces, and deliverability in real-time with actionable insights.",
      mockup: (
        <div className="rounded-xl border border-white/[0.08] bg-[#0B0E14] p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-[#A1A4A5]">Open rate</div>
              <div className="text-3xl font-medium text-white">68.4%</div>
            </div>
            <div className="flex gap-1">
              {[35, 55, 40, 70, 50, 85, 60, 75, 45, 90, 65, 80].map((h, i) => (
                <div key={i} className="w-3 rounded-sm bg-white/[0.08]" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
              <div className="text-xs text-[#A1A4A5]">Sent</div>
              <div className="text-lg font-medium text-white">24.5K</div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
              <div className="text-xs text-[#A1A4A5]">Opened</div>
              <div className="text-lg font-medium text-white">16.7K</div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
              <div className="text-xs text-[#A1A4A5]">Clicked</div>
              <div className="text-lg font-medium text-white">4.2K</div>
            </div>
          </div>
        </div>
      ),
    },
  },
];

export function ControlSection() {
  const [activeTab, setActiveTab] = useState("domains");
  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <section className="mx-auto px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* 3D Video */}
        <div className="relative mx-auto mb-4 max-w-[120px] overflow-hidden rounded-xl">
          <video autoPlay loop muted playsInline className="w-full">
            <source src="/videos/3d-control.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              Everything in your control
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#A1A4A5]">
            Manage your domains, audience, and analytics from a single dashboard.
          </p>
        </div>

        {/* Tabs with green snake border */}
        <div className="relative mb-10 flex justify-center px-4">
          <div className="grid w-full max-w-3xl grid-cols-3 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group relative cursor-pointer rounded-xl"
              >
                {/* Conic gradient - visible ONLY when active (clicked) */}
                <span
                  className={`pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'conic-gradient(from var(--angle), transparent 0%, transparent 86%, rgba(34,197,94,0.2) 90%, rgba(34,197,94,0.8) 94%, #22c55e 96%, rgba(34,197,94,0.8) 98%, rgba(34,197,94,0.2) 99%, transparent 100%)',
                    animation: 'trace-rotate 3s linear infinite',
                  }}
                />
                {/* Mask - covers center with solid color, leaving 1px border visible */}
                <span className="absolute inset-[1px] rounded-[11px] bg-[#0B0E14]" />
                {/* Card content */}
                <span
                  className={`relative z-10 flex w-full flex-col items-center gap-3 px-6 py-6 text-center transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-[#A1A4A5] group-hover:text-white/80'
                  }`}
                >
                  {/* Animated SVG icon */}
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    {tab.id === 'domains' && (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.673 0-5.216.584-7.843 4.582m15.686 0A11.953 11.953 0 0112 21c-2.673 0-5.216-.584-7.843-4.582" />
                      </svg>
                    )}
                    {tab.id === 'audience' && (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.569-2.3m-4.71-3.86a2.25 2.25 0 113.18 0m-3.18 0a2.25 2.25 0 10-3.18 0" />
                      </svg>
                    )}
                    {tab.id === 'analytics' && (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    )}
                  </span>
                  <span className="text-lg font-medium">{tab.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-3 text-2xl font-medium text-white">{activeContent?.title}</h3>
            <p className="text-lg leading-relaxed text-[#A1A4A5]">{activeContent?.description}</p>
          </div>
          {/* Right: Mockup */}
          <div className="transition-all duration-300">
            {activeContent?.mockup}
          </div>
        </div>
      </div>
    </section>
  );
}
