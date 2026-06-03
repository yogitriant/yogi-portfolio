'use client';

import React, { useEffect } from 'react';
import { Mail, Linkedin, MapPin, Globe, Phone, ExternalLink, Monitor, Network, Code2, Zap, Wrench } from 'lucide-react';

export default function CV() {
  useEffect(() => {
    document.title = "CV - Yogi Trianto";
  }, []);

  const skills = [
    { category: "Software Testing & QA", items: ["Manual Testing", "UI/UX Validation", "Cross-Browser Testing", "Bug Tracking"] },
    { category: "System & Support", items: ["Windows OS", "macOS Basic", "Hardware Troubleshooting", "Technical Documentation"] },
    { category: "Network", items: ["TCP/IP, DHCP, DNS", "LAN & WiFi Troubles", "WiFi Controller"] },
    { category: "Programming", items: ["React", "AI-Assisted Development", "Python (Automation)", "Node.js"] },
    { category: "Monitoring & Assets", items: ["Asset Lifecycle", "Performance Monitoring", "Remote Power Control"] },
    { category: "Tools & Databases", items: ["VS Code", "Antigravity", "Postman (API)", "Chrome DevTools", "MongoDB", "Git/GitHub", "Remote Tools"] }
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
        "Led POC initiatives to evaluate and implement new technologies."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 p-8 md:p-16 max-w-4xl mx-auto font-sans print:p-0">
      {/* Header */}
      <div className="border-b-2 border-slate-200 pb-8 mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">YOGI TRIANTO</h1>
          <p className="text-lg text-blue-600 font-medium">IT Officer | Technical Support, System Monitoring, Automation, Quality Assurance & AI-Driven Development</p>
        </div>
        <div className="text-right text-sm text-slate-500 space-y-1">
          <p className="flex items-center justify-end gap-2"><Mail className="w-4 h-4" /> yogitrianto7@gmail.com</p>
          <p className="flex items-center justify-end gap-2"><Linkedin className="w-4 h-4" /> linkedin.com/in/yogitrianto</p>
          <p className="flex items-center justify-end gap-2"><MapPin className="w-4 h-4" /> Tangerang, Indonesia</p>
        </div>
      </div>

      {/* Profile */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Personal Profile</h2>
        <p className="text-slate-600 leading-relaxed">
          IT & QA Engineer with 7+ years of experience in delivering reliable technical support, managing IT device assets, and ensuring stable IT operations. Strong expertise in hardware & software troubleshooting, system and network administration. Experienced in comprehensive software testing, manual QA, and developing automation and monitoring solutions to ensure high-quality, bug-free application deployments.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Work Experience</h2>
        {workExperience.map((exp, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
              <span className="text-sm font-semibold text-slate-500">{exp.period}</span>
            </div>
            <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              {exp.points.map((p, idx) => <li key={idx} className="pl-1">{p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills Grouped */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((s, i) => (
            <div key={i}>
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {s.category}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">{s.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-2">Smart Monitoring System</h3>
            <p className="text-sm text-slate-600 mb-4 italic">Internal project: Conducted system analysis and development using AI-assisted workflows. Executed rigorous functional and performance testing to ensure WebSocket stability and accurate data reporting.</p>
            <div className="flex flex-wrap gap-2">
              {["React", "AI-Assisted", "Node.js", "Socket.io", "Python", "MongoDB"].map(t => (
                <span key={t} className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-bold text-slate-500 rounded uppercase">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-1">Email Signature Generator</h3>
            <a href="https://email-signature-sand.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-500 mb-2 inline-flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Live Demo</a>
            <p className="text-sm text-slate-600 mb-4 italic mt-1">A fast, modern web application that generates professional email signatures dynamically. Conducted extensive cross-browser and mobile responsive UI testing.</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS"].map(t => (
                <span key={t} className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-bold text-slate-500 rounded uppercase">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Projects */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Campus Infrastructure Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { loc: "Main Campus Bekasi", desc: "New campus development, IT device deployment (PCs, Network, Printers)." },
            { loc: "Satu University Bandung", desc: "New campus development, infrastructure setup, network connectivity." },
            { loc: "Main Campus Semarang", desc: "Campus relocation project, IT asset migration, minimal downtime transition." },
            { loc: "BINUS School Surabaya", desc: "New school development, classroom technology deployment, vendor coordination." }
          ].map((p, i) => (
            <div key={i} className="border-l-2 border-blue-100 pl-4 py-1">
              <h4 className="font-bold text-slate-800 text-sm">{p.loc}</h4>
              <p className="text-xs text-slate-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Education</h2>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-bold text-slate-800">Budi Luhur University</h3>
            <p className="text-slate-600">Bachelor of Informatics Engineering</p>
            <p className="text-slate-500 text-sm font-medium mt-1">GPA / IPK: 3.07</p>
          </div>
          <span className="text-sm font-semibold text-slate-500">Graduated 2016</span>
        </div>
      </section>

      {/* Print Button - Filtered in print */}
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
          body { background: white; color: black; }
          .print\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
