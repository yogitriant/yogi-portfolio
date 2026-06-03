'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Code2,
  Server,
  Globe,
  Cpu,
  Monitor,
  Network,
  Database,
  Terminal,
  Zap,
  ShieldCheck,
  MapPin,
  BookOpen,
  Wrench,
  Power,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const screenshots = [
    "/images/Dashboard.png",
    "/images/Detail%20PC.png",
    "/images/List%20Asset.png"
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    {
      category: "Software Testing & QA",
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      items: ["Manual & Exploratory Testing", "UI/UX & Responsive Testing", "Performance & API Testing", "Bug Tracking & Documentation"]
    },
    {
      category: "System & Support",
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
      items: ["Windows OS (Deployment, Troubleshooting, Service)", "macOS (Basic Support)", "Hardware & Peripheral Troubleshooting", "Technical Documentation"]
    },
    {
      category: "Network",
      icon: <Network className="w-5 h-5 text-purple-400" />,
      items: ["TCP/IP, DHCP, DNS (Basic)", "LAN & WiFi Troubleshooting", "WiFi Controller Administration"]
    },
    {
      category: "Programming & Automation",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      items: ["React (Frontend Development)", "AI-Assisted Development (Workflow Optimization)", "Python (Automation, Scripting)", "Node.js (Express, Socket.IO, ESM)"]
    },
    {
      category: "Monitoring & Assets",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      items: ["Asset Lifecycle Management", "Performance Monitoring (CPU/RAM/Disk)", "Remote Power Control", "Logging & Reporting"]
    },
    {
      category: "Tools & Others",
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      items: ["MongoDB", "Git & GitHub", "Remote Desktop Tools", "POC Evaluation", "Vendor Coordination"]
    }
  ];

  const workExperience = [
    {
      company: "Bina Nusantara University",
      role: "IT Support Officer",
      period: "August 2018 – Present",
      points: [
        "Provided technical support for staff and academic environments, resolving hardware, software, and network issues efficiently",
        "Managed IT asset lifecycle including inventory tracking, procurement, deployment, and disposal",
        "Developed and implemented internal monitoring and automation systems to improve operational efficiency",
        "Analyzed operational needs and built agent-based PC monitoring with real-time status and remote power control",
        "Conducted comprehensive software testing (Functional, UI/UX, Performance) for internal applications to ensure reliable deployments",
        "Automated repetitive IT tasks using Python and Node.js",
        "Prepared and maintained technical documentation and user guides",
        "Conducted training sessions for employees on new hardware and software",
        "Collaborated with multiple departments and external vendors to deliver effective IT solutions",
        "Led and managed POC (Proof of Concept) initiatives to evaluate and implement new technologies"
      ]
    }
  ];

  const projects = [
    {
      title: "Smart Monitoring System",
      type: "Key Project",
      description: "Internal project: Conducted system analysis to identify operational bottlenecks, followed by development using AI-assisted workflows for rapid prototyping and optimization.",
      features: [
        "Real-time monitoring using WebSocket (Socket.IO)",
        "Executed functional & performance testing for WebSocket stability",
        "CPU, RAM, Disk performance tracking",
        "Idle-time based auto shutdown & remote power control",
        "Backend: Node.js + MongoDB",
        "Automation & data collection using Python"
      ],
      tech: ["React", "AI-Assisted Dev", "Node.js", "Socket.io", "Python", "MongoDB"],
      icon: <Monitor className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Email Signature Generator",
      type: "Web Application",
      description: "A fast, modern web application that generates professional email signatures dynamically with real-time preview and copy-to-clipboard functionality.",
      features: [
        "Live preview & instant updates",
        "Conducted cross-browser & mobile responsive UI testing",
        "Copy to clipboard functionality",
        "Modern and responsive UI",
        "Deployed on Vercel"
      ],
      tech: ["React", "Next.js", "Tailwind CSS"],
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      link: "https://email-signature-sand.vercel.app/"
    }
  ];

  const campusProjects = [
    { location: "Main Campus Bekasi", description: "New campus development, infrastructure preparation, IT device deployment (PCs, Network, Printers)." },
    { location: "Satu University Campus Bandung", description: "New campus development, end-user device setup, network connectivity installation." },
    { location: "Main Campus Semarang", description: "Campus relocation project, IT asset migration, minimal downtime transition support." },
    { location: "BINUS School Surabaya", description: "New school development, classroom technology deployment, vendor collaboration." }
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  };

  return (
    <main className="min-h-screen bg-[#05050a] text-slate-200 selection:bg-blue-500/30 font-inter">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-20" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-xl border-b border-white/5 flex justify-between items-center bg-[#05050a]/50">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          YOGI<span className="text-blue-500">.</span>TRIANTO
        </motion.h1>

        {/* DESKTOP MENU */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400"
        >
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-blue-400 transition-colors">Contact</a>
        </motion.div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-[#05050a]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 md:hidden z-50 shadow-2xl"
            >
              <a href="#about" onClick={(e) => { scrollToSection(e, 'about'); setIsMobileMenuOpen(false); }} className="hover:text-blue-400 transition-colors py-3 border-b border-white/5">About</a>
              <a href="#skills" onClick={(e) => { scrollToSection(e, 'skills'); setIsMobileMenuOpen(false); }} className="hover:text-blue-400 transition-colors py-3 border-b border-white/5">Skills</a>
              <a href="#experience" onClick={(e) => { scrollToSection(e, 'experience'); setIsMobileMenuOpen(false); }} className="hover:text-blue-400 transition-colors py-3 border-b border-white/5">Experience</a>
              <a href="#projects" onClick={(e) => { scrollToSection(e, 'projects'); setIsMobileMenuOpen(false); }} className="hover:text-blue-400 transition-colors py-3 border-b border-white/5">Projects</a>
              <a href="#contact" onClick={(e) => { scrollToSection(e, 'contact'); setIsMobileMenuOpen(false); }} className="hover:text-blue-400 transition-colors py-3">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="relative z-10 container mx-auto px-6">

        {/* HERO SECTION */}
        <section id="about" className="min-h-[90vh] flex flex-col justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-8 max-w-full text-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              IT OFFICER | TECHNICAL SUPPORT, SYSTEM MONITORING, AUTOMATION, QA & AI-DRIVEN DEV
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
              Designing <span className="text-gradient">Stable & Scalable</span> IT Operations.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
              IT & QA Engineer with <span className="text-white font-medium">7+ years of experience</span>. Expert in delivering reliable technical support, system automation, and comprehensive software testing to ensure <span className="text-white font-medium">high-quality, bug-free deployments</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-2xl shadow-blue-600/20 flex items-center gap-2">
                View Projects <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold transition-all">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-32">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-white">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 glass-card border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{skill.category}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="py-32">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-white">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>
          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-white/10"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-blue-400 font-medium">{exp.company}</span>
                    <span className="text-sm text-slate-500 font-mono tracking-tighter">{exp.period}</span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <ul className="space-y-4">
                    {exp.points.slice(0, 5).map((point, idx) => (
                      <li key={idx} className="text-sm text-slate-400 leading-relaxed flex gap-4">
                        <span className="text-blue-500/50 flex-shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {exp.points.slice(5).map((point, idx) => (
                      <li key={idx} className="text-sm text-slate-400 leading-relaxed flex gap-4">
                        <span className="text-blue-500/50 flex-shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* KEY PROJECTS */}
        <section id="projects" className="py-32">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass overflow-hidden border-white/10 grid lg:grid-cols-5"
            >
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 backdrop-blur-3xl shadow-2xl">
                    <Power className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">{project.type}</p>
                </div>
              </div>
              <div className="lg:col-span-3 p-12">
                <p className="text-lg text-slate-400 mb-8 leading-relaxed italic">
                  "{project.description}"
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {project.title === "Smart Monitoring System" && (
                    <button 
                      onClick={() => setShowModal(true)} 
                      className="px-6 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 rounded-xl border border-blue-500/20 flex items-center gap-2 text-sm font-bold transition-all group shadow-lg"
                    >
                      <ImageIcon className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                      View Application Screenshots
                    </button>
                  )}
                  
                  {project.link && (
                    <a 
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 rounded-xl border border-blue-500/20 flex items-center gap-2 text-sm font-bold transition-all group shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                      Live Demo / View Project
                    </a>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Features
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-500/50">-</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-amber-400" /> Infrastructure
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wide text-slate-500 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-400" /> Campus Infrastructure Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {campusProjects.map((p, i) => (
                <div key={i} className="glass p-6 border-white/5 hover:border-blue-500/30 transition-all group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">{p.location}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & INFO */}
        <section className="py-16 grid md:grid-cols-2 gap-8">
          <div className="glass p-8 border-white/5">
            <h3 className="text-white font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-blue-400" /> Education
            </h3>
            <div>
              <h4 className="text-white font-bold mb-1">Budi Luhur University</h4>
              <p className="text-slate-400 text-sm italic">Bachelor of Informatics Engineering — 2016</p>
              <p className="text-blue-400 text-sm font-bold mt-2">GPA / IPK: 3.07</p>
            </div>
          </div>
          <div className="glass p-8 border-white/5">
            <h3 className="text-white font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" /> Location
            </h3>
            <p className="text-slate-400">Tangerang, Indonesia</p>
            <p className="text-slate-500 text-xs mt-2 italic">Ready for remote, hybrid, or on-site roles.</p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-16 text-center relative overflow-hidden border-white/10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[150px]" />

            <h2 className="text-5xl font-bold mb-8 text-white tracking-tight">Let's build something <span className="text-gradient">exceptional</span>.</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed text-lg font-light">
              Open for collaboration on IT infrastructure, system automation, and monitoring solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <a href="mailto:yogitrianto7@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-all group">
                <div className="p-3 glass rounded-full group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Email</p>
                  <p className="text-sm font-medium">yogitrianto7@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/yogitrianto" target="_blank" className="flex items-center gap-3 text-slate-400 hover:text-white transition-all group">
                <div className="p-3 glass rounded-full group-hover:bg-blue-700/20 group-hover:border-blue-700/50 transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">LinkedIn</p>
                  <p className="text-sm font-medium">/yogitrianto</p>
                </div>
              </a>
            </div>

            <a
              href="/cv"
              className="inline-block px-10 py-4 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-all shadow-xl"
            >
              Go to CV / Resume
            </a>
          </motion.div>
        </section>
      </div>

      {/* SCREENSHOT MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-blue-400" />
                  Smart Monitoring System - Screenshots
                </h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative p-2 md:p-8 flex-1 flex items-center justify-center min-h-[50vh] bg-black/50">
                <img 
                  src={screenshots[currentImageIndex]} 
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain rounded-lg border border-white/5 shadow-2xl"
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-black border border-white/10 rounded-full text-white transition-all shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-black border border-white/10 rounded-full text-white transition-all shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 border-t border-white/10 flex justify-center gap-3 bg-[#0a0a0f]">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-blue-500 w-8' : 'bg-slate-600 w-2 hover:bg-slate-500'}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/5 py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm text-slate-600 mb-2">Designed & Built by</p>
          <p className="text-sm font-bold text-slate-500 mb-8 uppercase tracking-[0.3em]">YOGI TRIANTO</p>
          <p className="text-[10px] text-slate-700 uppercase tracking-widest">
            © {new Date().getFullYear()} — Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
