"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Brain, Rocket, Users, Globe, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      label: "Software Development",
      description: "Building scalable, enterprise-grade applications",
    },
    {
      icon: Brain,
      label: "AI Innovation",
      description: "Leveraging cutting-edge artificial intelligence",
    },
    {
      icon: Rocket,
      label: "Business Consulting",
      description: "Strategic technology guidance and implementation",
    },
    {
      icon: Users,
      label: "Team Collaboration",
      description: "Agile methodologies and seamless communication",
    },
    {
      icon: Globe,
      label: "Global Reach",
      description: "Serving clients across continents",
    },
    {
      icon: Zap,
      label: "Rapid Deployment",
      description: "Fast turnaround with quality assurance",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
            <span className="px-4 py-2 bg-[#00BFFF]/10 text-[#00BFFF] rounded-full">
              Who We Are
            </span>
          </motion.div>
          <h2 className="mb-6 text-gray-900">About Front Cloud</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We are a forward-thinking software company specializing in
            enterprise-grade applications, AI-powered solutions, and
            cutting-edge technology consulting. Our mission is to empower
            businesses with intelligent tools that drive innovation, efficiency,
            and growth in the digital age. With a team of expert engineers,
            designers, and strategists, we transform complex challenges into
            elegant solutions.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg mt-4">
            Founded on the principles of innovation and excellence, Front Cloud
            has grown to become a trusted partner for organizations seeking to
            leverage the power of modern technology. From startups to Fortune
            500 companies, we deliver solutions that scale and adapt to your
            evolving needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group h-full"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.label}</h3>
                  <p className="text-gray-600 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
