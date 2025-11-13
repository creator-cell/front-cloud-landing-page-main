"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Cloud, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <Image src={"/logo/logo.png"} alt="Logo" width={46} height={46} />
            </div>
            <span className="text-gray-900 tracking-tight text-xl">
              Front Cloud
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-600 hover:text-[#00BFFF] transition-colors relative group cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFFF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 bg-[#00BFFF] text-white rounded-full hover:shadow-lg transition-shadow relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-gray-900 hover:text-[#00BFFF] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navItems.length * 0.1 }}
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-2 bg-[#00BFFF] text-white rounded-full cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
