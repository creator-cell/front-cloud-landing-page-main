import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
  isInView: boolean;
  tags?: string[];
}

export function ProjectCard({
  icon: Icon,
  title,
  description,
  gradient,
  index,
  isInView,
  tags = [],
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col">
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Glowing Effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00BFFF]/10 rounded-full blur-3xl group-hover:bg-[#00BFFF]/20 transition-all duration-500" />

        {/* Animated particles on hover */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00BFFF] rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: "20%",
              }}
              animate={{
                y: [0, -80],
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
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hover Arrow */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <span>Learn more</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
