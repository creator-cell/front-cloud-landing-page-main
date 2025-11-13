"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  ArrowRight,
  Sparkles,
  Phone,
  MessageSquare,
  Send,
  X,
} from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = [
    { icon: Mail, label: "Email Us", value: "hello@frontcloud.com" },
    { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
    { icon: MessageSquare, label: "Live Chat", value: "Available 24/7" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#00BFFF] to-[#0099CC] p-12 md:p-16 shadow-2xl"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-white"
            >
              Let's Build Something Intelligent Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-10 text-white/90 max-w-2xl mx-auto text-lg"
            >
              Ready to transform your business with cutting-edge AI and software
              solutions? Let's discuss how Front Cloud can help you innovate and
              grow. Our team of experts is ready to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="relative px-8 py-4 bg-white text-[#00BFFF] rounded-full shadow-lg hover:shadow-xl transition-shadow group overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gray-50"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                >
                  <method.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="text-white mb-2">{method.label}</h4>
                  <p className="text-white/80">{method.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-600">
            <a href="#" className="hover:text-[#00BFFF] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#00BFFF] transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#00BFFF] transition-colors">
              Careers
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#00BFFF] transition-colors">
              Blog
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 Front Cloud. Building the future, one innovation at a time.
          </p>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowContactForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-gray-900 mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `Thank you ${formData.name}! We'll contact you at ${formData.email} soon.`
                );
                setShowContactForm(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BFFF] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BFFF] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BFFF] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-[#00BFFF] text-white rounded-xl hover:bg-[#0099CC] transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
