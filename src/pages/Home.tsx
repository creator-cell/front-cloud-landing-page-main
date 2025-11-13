"use client";
import { motion } from "motion/react";
import { Cloud, Sparkles, TrendingUp, Users, Award, Zap } from "lucide-react";
import Image from "next/image";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Worldwide" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-3"
        >
          <div className="relative">
            {/* <Cloud className="w-20 h-20 text-[#00BFFF]" strokeWidth={1.5} /> */}
            <Image src={"/logo/logo.png"} alt="Logo" width={80} height={80} />
            <motion.div
              className="absolute inset-0 rounded-full bg-[#00BFFF]/20 blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-[#00BFFF] tracking-tight">Front Cloud</h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-[#00BFFF] to-gray-900 bg-clip-text text-transparent">
            Building the Future of Software & AI
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Transforming businesses through intelligent software solutions and
            cutting-edge AI technology. We combine innovation, expertise, and
            passion to deliver exceptional digital experiences that drive growth
            and efficiency.
          </p>

          {/* AI Powered Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00BFFF]/10 to-purple-500/10 rounded-full border border-[#00BFFF]/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-[#00BFFF]" />
            </motion.div>
            <span className="text-gray-700">
              Powered by Advanced AI & Machine Learning
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#projects")}
            className="relative px-8 py-3 bg-[#00BFFF] text-white rounded-full overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <Sparkles className="w-4 h-4" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#0099CC]"
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3 border-2 border-[#00BFFF] text-[#00BFFF] rounded-full hover:bg-[#00BFFF]/5 transition-colors cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00BFFF] rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
