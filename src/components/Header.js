// File: components/Header.js

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Servizi", path: "/servizi" },
    { name: "Progetti", path: "/progetti" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/logo.png"
                alt="Giupy Controsoffitti"
                className="h-12"
              />
            </motion.a>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link href={item.path} passHref legacyBehavior>
                  <a
                    className={`text-lg font-medium ${
                      isScrolled ? "text-gray-800" : "text-white"
                    } hover:text-blue-600 transition-colors ${
                      router.pathname === item.path ? "text-blue-600" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+39XXXXXXXXXX"
              whileHover={{ scale: 1.05 }}
              className={`flex items-center ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              <Phone className="h-5 w-5 mr-2" />
              +39 XXX XXX XXXX
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
              Richiedi Preventivo
            </motion.button>
          </div>

          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    passHref
                    legacyBehavior
                  >
                    <a
                      className={`text-gray-800 hover:text-blue-600 transition-colors ${
                        router.pathname === item.path ? "text-blue-600" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <a
                  href="tel:+39XXXXXXXXXX"
                  className="text-gray-800 hover:text-blue-600 transition-colors flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +39 XXX XXX XXXX
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md">
                  Richiedi Preventivo
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
