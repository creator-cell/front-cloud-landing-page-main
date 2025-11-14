"use client";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Sparkles, TrendingUp, Users, Award } from "lucide-react";
import Image from "next/image";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const floatingLines = useMemo(
    () =>
      Array.from({ length: 10 }, () => ({
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
        delay: Math.random() * 2,
      })),
    []
  );
  const floatingBlobs = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        width: Math.random() * 300 + 120,
        height: Math.random() * 300 + 120,
        left: Math.random() * 100,
        top: Math.random() * 100,
        moveX: Math.random() * 80 - 40,
        moveY: Math.random() * 80 - 40,
        duration: Math.random() * 10 + 12,
      })),
    []
  );
  const terminalLines = useMemo(
    () => [
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
    ],
    []
  );
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>(
    () => terminalLines.map(() => "")
  );
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const stats = [
    { icon: Users, value: "500+", label: "Clients Worldwide" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let lineIndex = 0;
    let charIndex = 0;

    const schedule = (fn: () => void, delay: number) => {
      timeouts.push(setTimeout(fn, delay));
    };

    const restart = () => {
      schedule(() => {
        setTypedLines(terminalLines.map(() => ""));
        lineIndex = 0;
        charIndex = 0;
        typeNext();
      }, 2000);
    };

    const typeNext = () => {
      const currentLine = terminalLines[lineIndex];
      if (!currentLine) {
        restart();
        return;
      }

      if (charIndex <= currentLine.text.length) {
        setTypedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.text.slice(0, charIndex);
          return next;
        });
        setActiveLineIndex(lineIndex);
        charIndex += 1;
        schedule(typeNext, 30);
      } else {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex >= terminalLines.length) {
          restart();
        } else {
          schedule(typeNext, 450);
        }
      }
    };

    typeNext();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [terminalLines]);

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
          {floatingLines.map((line, i) => (
            <motion.line
              key={i}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
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
                delay: line.delay,
              }}
            />
          ))}
        </svg>

        {floatingBlobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#00BFFF]/10 to-[#00BFFF]/5 blur-xl"
            style={{
              width: blob.width,
              height: blob.height,
              left: `${blob.left}%`,
              top: `${blob.top}%`,
            }}
            animate={{
              x: [0, blob.moveX, 0],
              y: [0, blob.moveY, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 lg:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 mb-20 w-full max-w-6xl mx-auto px-4 lg:px-6"
        >
          <div className="w-full rounded-[36px] border border-[#00BFFF]/35 bg-[#050f1f]/95 text-left shadow-[0_30px_90px_rgba(5,15,31,0.65)] overflow-hidden min-h-[460px]">
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
            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base text-cyan-100 min-h-[320px] flex flex-col justify-between">
              <div className="space-y-4">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={line.text}
                    className="flex flex-wrap gap-3 min-h-[52px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.4 }}
                  >
                    <span className="text-cyan-300 text-[1.05em]">
                      {line.prompt}
                    </span>
                    <span className="relative flex-1 min-w-[260px] whitespace-pre-wrap leading-relaxed pr-4">
                      <span className="block whitespace-pre-wrap text-transparent select-none">
                        {line.text}
                      </span>
                      <motion.span
                        key={`${line.text}-${typedLines[index]}`}
                        className="absolute inset-0 flex whitespace-pre-wrap"
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15 }}
                      >
                        <span>{typedLines[index] || "\u00a0"}</span>
                        {activeLineIndex === index && (
                          <motion.span
                            className="inline-block h-5 w-[2px] bg-cyan-100 ml-1"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity }}
                          />
                        )}
                      </motion.span>
                    </span>
                  </motion.div>
                ))}
              </div>

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
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 pb-16 grid grid-cols-3 gap-8 max-w-3xl w-full mx-auto"
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
