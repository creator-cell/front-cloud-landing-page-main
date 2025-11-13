"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, Cpu, Network, Zap, Bot, Sparkles } from "lucide-react";

export function AIShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description:
        "Advanced NLP models for sentiment analysis, text generation, and conversational AI",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description:
        "Image recognition, object detection, and video analysis powered by deep learning",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Network,
      title: "Predictive Analytics",
      description:
        "Data-driven forecasting and pattern recognition for business intelligence",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description:
        "Intelligent workflow automation reducing manual tasks by up to 80%",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      description:
        "Conversational AI assistants for customer support and internal operations",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description:
        "Content creation, code generation, and creative solutions using latest LLMs",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00BFFF]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#00BFFF]/10 to-purple-500/10 text-[#00BFFF] rounded-full border border-[#00BFFF]/20">
              AI-Powered Innovation
            </span>
          </motion.div>
          <h2 className="mb-4 text-gray-900">Our AI Expertise</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Harnessing the power of artificial intelligence to solve complex
            business challenges and unlock new possibilities for growth and
            innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-br ${capability.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: "50%",
                      }}
                      animate={{
                        y: [-20, -60],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <capability.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { value: "15+", label: "AI Models Deployed", icon: Brain },
            { value: "80%", label: "Automation Rate", icon: Zap },
            { value: "50M+", label: "Data Points Processed", icon: Network },
            { value: "99.9%", label: "Model Accuracy", icon: Cpu },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#00BFFF]/5 to-purple-500/5 rounded-2xl p-6 text-center border border-[#00BFFF]/20 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative">
                <stat.icon className="w-8 h-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
