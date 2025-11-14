"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles, TrendingUp, Users, Award } from "lucide-react";
import Image from "next/image";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const stats = [
    { icon: Users, value: "500+", label: "Clients Worldwide" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];
  const terminalLines = [
    {
      prompt: "PS C:\\FrontCloud>",
      text: 'Invoke-Vision -Message "Building the Future of Software & AI"',
    },
    {
      prompt: "PS C:\\FrontCloud>",
      text:
        'Write-Output "Transforming businesses through intelligent software solutions and cutting-edge AI technology."',
    },
    {
      prompt: "PS C:\\FrontCloud>",
      text:
        'Write-Output "We blend innovation, expertise, and passion to deliver digital experiences that drive growth & efficiency."',
    },
    {
      prompt: "PS C:\\FrontCloud>",
      text:
        'Enable-AI -Feature "Powered by Advanced AI & Machine Learning" -Status Active',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      setScrollProgress(docHeight > 0 ? scrolled / docHeight : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#00BFFF]/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-[#00BFFF]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-[#00BFFF]/10 rounded-full blur-3xl" />

        {/* Faded AI illustration */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <div className="relative w-full h-full">
            <Image
              src="/ai-overlay.svg"
              alt="Faded AI circuit illustration"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Floating AI Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#00BFFF"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#00BFFF]/10 to-[#00BFFF]/5 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 mb-16 w-full max-w-4xl mx-auto"
        >
          <motion.div
            className="rounded-[32px] border border-[#00BFFF]/30 bg-[#050f1f]/95 text-left shadow-[0_25px_80px_rgba(5,15,31,0.65)] overflow-hidden"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-[#08142a] border-b border-white/10">
              <span className="inline-flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </span>
              <div className="ml-4 text-xs sm:text-sm font-mono text-cyan-100/80">
                FrontCloud Session
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-5 font-mono text-sm sm:text-base text-cyan-100">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={line.text}
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.4 }}
                >
                  <span className="text-cyan-300">{line.prompt}</span>
                  <span className="relative overflow-hidden">
                    <motion.span
                      className="inline-block"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.45 + index * 0.4,
                        ease: "easeOut",
                      }}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {line.text}
                    </motion.span>
                    {index === terminalLines.length - 1 && (
                      <motion.span
                        className="ml-2 inline-block h-5 w-[2px] bg-cyan-100 align-middle"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </span>
                </motion.div>
              ))}

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0,191,255,0.0)",
                      "0 0 20px rgba(0,191,255,0.45)",
                      "0 0 0 rgba(0,191,255,0.0)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  onClick={() => scrollToSection("#projects")}
                  className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#0088cc] text-white font-semibold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Execute Projects
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/25"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("#contact")}
                  className="px-8 py-3 rounded-full border border-cyan-200/60 text-cyan-100 font-semibold bg-white/5 backdrop-blur cursor-pointer"
                >
                  Open Channel
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 pb-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-[#00BFFF]/10 rounded-full mb-3 group-hover:bg-[#00BFFF]/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-[#00BFFF]" />
              </motion.div>
              <div className="text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicators */}
      {["left-4", "right-4"].map((position) => (
        <motion.div
          key={position}
          className={`fixed top-1/2 ${position} -translate-y-1/2 z-50 hidden lg:flex`}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-10 h-16 rounded-2xl border-2 border-[#00BFFF] flex justify-center p-2 bg-white/70 backdrop-blur"
            animate={{
              y: scrollProgress < 0.95 ? [0, 6, 0] : [0, -6, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]"
              animate={{
                y: scrollProgress < 0.95 ? [0, 16, 0] : [0, -16, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
