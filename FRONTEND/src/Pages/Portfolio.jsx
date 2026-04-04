// import { useState } from "react";

// const projects = [
//   {
//     name: "E-commerce App",
//     desc: "Full stack app using React + Django",
//     live: "https://your-ecommerce.netlify.app",
//     code: "https://github.com/your-repo",
//   },
//   {
//     name: "Auth System",
//     desc: "JWT Authentication with Django REST",
//     live: "https://your-auth.netlify.app",
//     code: "https://github.com/your-auth",
//   },
// ];

// export default function Portfolio() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div className={dark ? "dark" : ""}>
//       <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">

//         {/* NAVBAR */}
//         <nav className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
//           <h1 className="text-xl font-bold">Tarun.dev</h1>
//           <div className="flex gap-4 items-center">
//             <button onClick={() => setDark(!dark)} className="border px-3 py-1 rounded">
//               {dark ? "Light" : "Dark"}
//             </button>
//           </div>
//         </nav>

//         {/* HERO */}
//         <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
//           <h1 className="text-4xl font-bold mb-4">Hi, I'm Tarun 👋</h1>
//           <p className="text-lg">Full Stack Developer (React + Django)</p>
//           <div className="mt-5 flex justify-center gap-4">
//             <a href="#projects" className="bg-white text-purple-700 px-6 py-2 rounded">Projects</a>
//             <a href="/resume.pdf" className="border px-6 py-2 rounded">Resume</a>
//           </div>
//         </section>

//         {/* SKILLS */}
//         <section className="p-10 text-center">
//           <h2 className="text-2xl font-bold mb-6">Skills</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {["React", "Tailwind", "Django", "REST API", "PostgreSQL", "Git"].map((s) => (
//               <span key={s} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
//                 {s}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="p-10 bg-gray-100 dark:bg-gray-800">
//           <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((p, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-5 rounded shadow hover:scale-105 transition">
//                 <h3 className="text-lg font-bold">{p.name}</h3>
//                 <p className="text-sm mt-2">{p.desc}</p>

//                 <div className="flex gap-3 mt-4">
//                   <a href={p.live} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-3 py-1 rounded">
//                     Live
//                   </a>
//                   <a href={p.code} target="_blank" rel="noopener noreferrer" className="border px-3 py-1 rounded">
//                     Code
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CONTACT */}
//         <section className="p-10 text-center">
//           <h2 className="text-2xl font-bold mb-4">Contact</h2>
//           <p>Email: tarun@example.com</p>
//           <div className="mt-3 flex justify-center gap-4">
//             <a href="https://linkedin.com" target="_blank">LinkedIn</a>
//             <a href="https://github.com" target="_blank">GitHub</a>
//           </div>
//         </section>

//         {/* FOOTER */}
//         <footer className="text-center p-4 bg-black text-white">
//           © 2026 Tarun Singh
//         </footer>
//       </div>
//     </div>
//   );
// }import React, { useState, useEffect } from 'react';
// import { Menu, X, Code2 } from 'lucide-react';
// import { Button } from './Button';

// const Header = ({ activeSection, data }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsMobileMenuOpen(false);
//   };
//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
//         }`}
//     >
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//       <button
//         onClick={() => scrollToSection('home')}
//         className="flex items-center space-x-2 group">
//         <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
//           <Code2 className="w-6 h-6 text-teal-400" />
//         </div>
//         <span className="text-xl font-bold text-white">{data.name.split(' ')[0]}</span>
//       </button>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-1">
//         {navItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => scrollToSection(item.id)}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === item.id
//               ? 'text-teal-400 bg-teal-500/10'
//               : 'text-slate-300 hover:text-white hover:bg-slate-800'
//               }`}
//           >
//             {item.label}
//           </button>
//         ))}
//       </div>

//       <div className="hidden md:block">
//         <Button
//           onClick={() => scrollToSection('contact')}
//           className="bg-teal-500 hover:bg-teal-600 text-white"
//         >
//           Get In Touch
//         </Button>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         className="md:hidden p-2 text-slate-300 hover:text-white"
//       >
//         {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>
//     </div>

//         {/* Mobile Navigation */ }
//   {
//     isMobileMenuOpen && (
//       <div className="md:hidden mt-4 py-4 border-t border-slate-800">
//         <div className="flex flex-col space-y-2">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`px-4 py-2 rounded-lg text-left font-medium transition-all ${activeSection === item.id
//                 ? 'text-teal-400 bg-teal-500/10'
//                 : 'text-slate-300 hover:text-white hover:bg-slate-800'
//                 }`}
//             >
//               {item.label}
//             </button>
//           ))}
//           <Button
//             onClick={() => scrollToSection('contact')}
//             className="bg-teal-500 hover:bg-teal-600 text-white w-full mt-2"
//           >
//             Get In Touch
//           </Button>
//         </div>
//       </div>
//     )
//   }
//       </nav >
//     </header >
//   );
// };

// export default Header;
// 