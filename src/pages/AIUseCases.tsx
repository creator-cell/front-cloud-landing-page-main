"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Shield, Users, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "@/figma/ImageWithFallback";

export default function AIUseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics for Retail",
      description:
        "Increased sales forecasting accuracy by 45% using deep learning models to predict customer behavior and optimize inventory management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      metric: "45% accuracy boost",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "AI-Powered Fraud Detection",
      description:
        "Reduced fraudulent transactions by 92% with real-time anomaly detection and pattern recognition across millions of transactions.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
      metric: "92% fraud reduction",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Intelligent Customer Support",
      description:
        "Automated 70% of customer inquiries with NLP-powered chatbots, reducing response time from hours to seconds.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
      metric: "70% automation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Content Generation & Creativity",
      description:
        "Generated 10,000+ marketing assets using generative AI, reducing content creation time by 85% while maintaining quality.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      metric: "85% time saved",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00BFFF]/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
              Real-World Impact
            </span>
          </motion.div>
          <h2 className="mb-4 text-gray-900">AI Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Transforming businesses across industries with measurable AI-driven
            results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Metric Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${useCase.color} text-white rounded-full shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {useCase.metric}
                  </motion.div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Read More Link */}
                  {/* <motion.div
                    className={`mt-4 flex items-center gap-2 bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    <span>Learn more</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div> */}
                </div>

                {/* Animated Border Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
