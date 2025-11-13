"use client";
import { ImageWithFallback } from "@/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AITechnology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Neural Networks" },
    { name: "OpenAI GPT", category: "Language Models" },
    { name: "Hugging Face", category: "Transformers" },
    { name: "LangChain", category: "AI Orchestration" },
    { name: "Vertex AI", category: "Cloud ML" },
    { name: "Azure AI", category: "Cognitive Services" },
    { name: "AWS SageMaker", category: "ML Platform" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${(i % 5) * 25 + 12.5}%`}
              cy={`${Math.floor(i / 5) * 25 + 12.5}%`}
              r="3"
              fill="#00BFFF"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          {[...Array(20)].map((_, i) => {
            const x1 = (i % 5) * 25 + 12.5;
            const y1 = Math.floor(i / 5) * 25 + 12.5;
            const x2 = ((i + 1) % 5) * 25 + 12.5;
            const y2 = Math.floor((i + 1) / 5) * 25 + 12.5;
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#00BFFF"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-[#00BFFF]/10 text-[#00BFFF] rounded-full">
                Technology Stack
              </span>
            </motion.div>
            <h2 className="mb-6 text-gray-900">
              Powered by Leading AI Technologies
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We leverage cutting-edge AI frameworks and platforms to build
              intelligent solutions that deliver measurable business value. Our
              expertise spans from classical machine learning to the latest
              generative AI models.
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                    <div className="relative px-4 py-2 bg-white border-2 border-gray-200 rounded-full group-hover:border-[#00BFFF] transition-colors">
                      <div className="text-gray-900">{tech.name}</div>
                      <div className="text-gray-500 text-xs">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Glowing border effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#00BFFF] via-purple-500 to-[#00BFFF] rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative bg-white p-2 rounded-3xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="AI Technology"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />

                {/* Floating AI Indicators */}
                <motion.div
                  className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-900">AI Active</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="text-gray-900 mb-1">Processing Speed</div>
                  <div className="text-[#00BFFF]">1.2M ops/sec</div>
                </motion.div>
              </div>
            </div>

            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-[#00BFFF] to-purple-500 rounded-full shadow-lg"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [0, Math.cos((i * Math.PI) / 4) * 250],
                  y: [0, Math.sin((i * Math.PI) / 4) * 250],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
