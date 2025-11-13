"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  AlertCircle,
  Sparkles,
  ShoppingCart,
  Layers,
  Database,
  Video,
  FileText,
  BarChart,
} from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: AlertCircle,
      title: "Emergency Response Platform",
      description:
        "Enterprise-grade application for handling company emergencies with real-time coordination, automated workflows, and instant notifications across multiple channels.",
      gradient: "from-red-500 to-orange-500",
      tags: ["React", "Node.js", "WebSockets"],
    },
    {
      icon: Sparkles,
      title: "Front Cloud Creative",
      description:
        "AI-powered solutions for business automation and creativity, transforming workflows with intelligent assistance, content generation, and predictive analytics.",
      gradient: "from-purple-500 to-pink-500",
      tags: ["AI/ML", "Python", "TensorFlow"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Suite",
      description:
        "Scalable platform for digital retail growth with advanced analytics, inventory management, payment processing, and seamless customer experiences across all devices.",
      gradient: "from-green-500 to-emerald-500",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      icon: Layers,
      title: "Front Cloud Studio",
      description:
        "Unified workspace for creating photos, documents, and spreadsheets using AI-driven tools and real-time collaboration features for modern teams.",
      gradient: "from-[#00BFFF] to-blue-600",
      tags: ["React", "WebRTC", "AWS"],
    },
    {
      icon: Database,
      title: "Data Analytics Hub",
      description:
        "Comprehensive data visualization and analytics platform providing real-time insights, custom dashboards, and predictive modeling for data-driven decision making.",
      gradient: "from-indigo-500 to-purple-600",
      tags: ["D3.js", "Python", "BigQuery"],
    },
    {
      icon: Video,
      title: "StreamConnect",
      description:
        "Next-generation video conferencing and streaming platform with HD quality, screen sharing, recording capabilities, and interactive features for modern communication.",
      gradient: "from-rose-500 to-pink-600",
      tags: ["WebRTC", "Node.js", "Redis"],
    },
    {
      icon: FileText,
      title: "DocuFlow AI",
      description:
        "Intelligent document management system with OCR, automated categorization, smart search, and AI-powered content extraction for efficient workflow automation.",
      gradient: "from-yellow-500 to-orange-500",
      tags: ["OCR", "NLP", "MongoDB"],
    },
    {
      icon: BarChart,
      title: "Business Intelligence Suite",
      description:
        "Advanced BI platform delivering actionable insights through interactive reports, KPI tracking, forecasting models, and comprehensive business analytics.",
      gradient: "from-cyan-500 to-blue-500",
      tags: ["React", "Tableau", "SQL"],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
    >
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
              Our Portfolio
            </span>
          </motion.div>
          <h2 className="mb-4 text-gray-900">Current Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Innovative solutions powering the future of business across
            industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
