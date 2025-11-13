"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code,
  Brain,
  Layers3,
  Smartphone,
  Cloud as CloudIcon,
  Shield,
} from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Software Product Development",
      description:
        "End-to-end development of scalable, robust software products tailored to your business needs with modern architectures and best practices.",
      features: [
        "Custom Applications",
        "Mobile & Web Development",
        "Enterprise Solutions",
        "Legacy Modernization",
      ],
    },
    {
      icon: Brain,
      title: "AI Consulting & Integration",
      description:
        "Strategic guidance on implementing AI and machine learning to transform your business operations with intelligent automation and insights.",
      features: [
        "AI Strategy",
        "Machine Learning Models",
        "Automation Solutions",
        "Natural Language Processing",
      ],
    },
    {
      icon: Layers3,
      title: "Full-Stack Development",
      description:
        "Comprehensive development services covering frontend, backend, and cloud infrastructure with cutting-edge technologies and frameworks.",
      features: [
        "Modern Tech Stack",
        "Cloud Architecture",
        "API Development",
        "Microservices",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
    },
    {
      icon: CloudIcon,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure design and migration services for AWS, Azure, and Google Cloud platforms with DevOps excellence.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Serverless Architecture",
        "Container Orchestration",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security assessments, penetration testing, and implementation of best security practices to protect your digital assets.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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
              What We Offer
            </span>
          </motion.div>
          <h2 className="mb-4 text-gray-900">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions to accelerate your digital
            transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
              >
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00BFFF] to-[#0099CC] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
