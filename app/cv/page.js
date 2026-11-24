'use client';

import React, { useEffect } from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export default function CV() {
  useEffect(() => {
    document.title = "CV - Yogi Trianto";
  }, []);

  const skills = [
    { category: "Multimedia & Design", items: ["Figma (UI/UX)", "Canva (Branding)", "CapCut (Video Editing)", "vMix / OBS (Live Streaming)", "Content Creation"] },
    { category: "Software Testing & QA", items: ["Manual Testing", "UI/UX Validation", "Cross-Browser Testing", "Bug Tracking"] },
    { category: "System & Support", items: ["Windows OS", "macOS Basic", "Hardware Troubleshooting", "Technical Documentation"] },
    { category: "Network", items: ["TCP/IP, DHCP, DNS", "LAN & WiFi Troubleshooting", "WiFi Controller"] },
    { category: "Programming", items: ["AI-Assisted Development", "React", "Python (Automation)", "Node.js"] },
    { category: "Monitoring & Assets", items: ["Asset Lifecycle", "Performance Monitoring", "Remote Power Control"] },
    { category: "Tools & Databases", items: ["Power BI (Data & Analytics)", "VS Code", "Antigravity", "Postman (API)", "Chrome DevTools", "Git/GitHub"] }
  ];

  const workExperience = [
    {
      company: "Bina Nusantara University",
      role: "IT Support Officer",
      period: "August 2018 – Present",
      points: [
        "Delivered technical support for campus environment, resolving hardware and software issues.",
        "Managed IT asset lifecycle including inventory, deployment, and disposal.",
        "Developed internal monitoring systems using Node.js and Python for operational efficiency.",
        "Analyzed operational needs and built agent-based PC monitoring with real-time status and remote power control.",
        "Conducted comprehensive software testing (Functional, UI/UX, Performance) for internal applications.",
        "Utilized Power BI for operational data processing, asset reporting, and performance tracking.",
        "Led POC initiatives to evaluate and implement new technologies."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 max-w-3xl mx-auto font-sans print:max-w-none print:mx-0">
      <div className="p-8 md:p-12 print:p-[1cm]">

        {/* ===== HEADER ===== */}
        <header className="border-b-2 border-slate-300 pb-5 mb-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">YOGI TRIANTO</h1>
          <p className="text-base text-blue-700 font-semibold mb-3">IT Officer | Technical Support, System Monitoring, Automation, Quality Assurance & AI-Driven Development</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
            <span className="flex items-center gap-1 print:gap-0"><Mail className="w-3.5 h-3.5 print:hidden" /> yogitrianto7@gmail.com</span>
            <span className="flex items-center gap-1 print:gap-0"><Linkedin className="w-3.5 h-3.5 print:hidden" /> linkedin.com/in/yogitrianto</span>
            <span className="flex items-center gap-1 print:gap-0"><MapPin className="w-3.5 h-3.5 print:hidden" /> Tangerang, Indonesia</span>
          </div>
        </header>

        {/* ===== PROFILE ===== */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Personal Profile</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            IT Officer with 7+ years of experience at Bina Nusantara University delivering reliable technical support, managing campus IT infrastructure, and ensuring operational stability. Experienced in system automation, software QA/testing, technical documentation, and cross-department project coordination.
          </p>
        </section>

        {/* ===== WORK EXPERIENCE ===== */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Work Experience</h2>
          {workExperience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-bold text-slate-800">{exp.role}</h3>
                <span className="text-xs font-semibold text-slate-500 shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-blue-700 font-medium mb-2">{exp.company}</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-700">
                {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* ===== TECHNICAL SKILLS (single column, ATS-friendly) ===== */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Technical Skills</h2>
          <div className="space-y-2">
            {skills.map((s, i) => (
              <div key={i} className="text-sm">
                <span className="font-bold text-slate-800">{s.category}: </span>
                <span className="text-slate-700">{s.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FEATURED PROJECTS ===== */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Featured Projects</h2>
          
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-800">Smart Monitoring System</h3>
            <p className="text-xs text-slate-600 italic mb-1">Internal project: Conducted system analysis and development using AI-assisted workflows. Executed rigorous functional and performance testing to ensure WebSocket stability and accurate data reporting.</p>
            <p className="text-xs text-slate-500">Tech: React, AI-Assisted, Node.js, Socket.io, Python, MongoDB</p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-800">nugas.pro</h3>
            <p className="text-xs text-slate-600 italic mb-1">Independent Mobile Learning Application: Built to address modern student challenges—instant-answer habits, short attention spans, and digital distractions—by guiding step-by-step reasoning through Socratic AI tutoring, concise note-to-flashcard conversion, and interactive quizzes, supported by functional/UI testing and secure backend workflows.</p>
            <p className="text-xs text-slate-500">Tech: Flutter, Dart, FastAPI, Python, Google Gemini API, Supabase (PostgreSQL), Midtrans</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">Email Signature Generator</h3>
              <a href="https://email-signature-sand.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-600 inline-flex items-center gap-0.5 print:text-blue-800">
                <ExternalLink className="w-2.5 h-2.5 print:hidden" /> email-signature-sand.vercel.app
              </a>
            </div>
            <p className="text-xs text-slate-600 italic mb-1">A fast, modern web application that generates professional email signatures dynamically. Conducted extensive cross-browser and mobile responsive UI testing.</p>
            <p className="text-xs text-slate-500">Tech: React, Next.js, Tailwind CSS</p>
          </div>
        </section>

        {/* ===== CAMPUS INFRASTRUCTURE PROJECTS ===== */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Campus Infrastructure Projects</h2>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-700">
            <li><span className="font-semibold">Main Campus Bekasi</span> — New campus development, IT device deployment (PCs, Network, Printers).</li>
            <li><span className="font-semibold">Satu University Bandung</span> — New campus development, infrastructure setup, network connectivity.</li>
            <li><span className="font-semibold">Main Campus Semarang</span> — Campus relocation project, IT asset migration, minimal downtime transition.</li>
            <li><span className="font-semibold">BINUS School Surabaya</span> — New school development, classroom technology deployment, vendor coordination.</li>
          </ul>
        </section>

        {/* ===== HONORS & AWARDS ===== */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Honors & Awards</h2>
          <div className="text-sm">
            <span className="font-bold text-slate-800">1st Place Winner — Video Competition BINUS 45</span>
            <span className="text-slate-600"> | Bina Nusantara University</span>
            <p className="text-xs text-slate-600 mt-0.5">Awarded 1st place for excellence in creative video production, multimedia storytelling, and video editing.</p>
          </div>
        </section>

        {/* ===== EDUCATION ===== */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">Education</h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Budi Luhur University</h3>
              <p className="text-sm text-slate-600">Bachelor of Informatics Engineering</p>
            </div>
            <span className="text-xs font-semibold text-slate-500">Graduated 2016</span>
          </div>
        </section>

        {/* ===== PRINT BUTTONS (hidden on print) ===== */}
        <div className="print:hidden fixed bottom-8 right-8 flex gap-4">
          <button 
            onClick={() => window.print()}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 text-sm"
          >
            Print to PDF
          </button>
          <a 
            href="/"
            className="px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-xl text-sm"
          >
            Back to Portfolio
          </a>
        </div>

        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            html, body {
              background: white !important;
              color: black !important;
              font-size: 11pt !important;
              line-height: 1.4 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print\\:hidden { display: none !important; }
            a { color: #1e40af !important; text-decoration: none !important; }
            h1, h2, h3, h4 { page-break-after: avoid; }
            ul, ol { page-break-inside: avoid; }
            section { page-break-inside: avoid; }
          }
        `}</style>
      </div>
    </div>
  );
}
