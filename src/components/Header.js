import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Phone,
  Menu,
  X,
  Send,
  User,
  Briefcase,
  Mail,
  MessageSquare,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
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

  const QuoteFormDialog = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Implementare qui la logica di invio del form
      console.log("Form submitted:", formData);
      setIsQuoteFormOpen(false);
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => setIsQuoteFormOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Richiedi un Preventivo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nome e Cognome"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Telefono"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Azienda (opzionale)"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Messaggio"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="mr-2" size={18} />
              Invia Richiesta
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
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
                  src={`${
                    isScrolled
                      ? "/img/logo_giupy_black.jpg"
                      : "/img/logo_giupy.jpg"
                  }`}
                  alt="Giupy Controsoffitti"
                  className={`${isScrolled ? "h-16" : "h-36"} ${
                    isScrolled ? "w-16" : "w-36"
                  }`}
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
                href="tel:+3280436031"
                whileHover={{ scale: 1.05 }}
                className={`flex items-center ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                <Phone className="h-5 w-5 mr-2" />
                +39 328 043 6031
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                onClick={() => setIsQuoteFormOpen(true)}
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
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                    onClick={() => {
                      setIsQuoteFormOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Richiedi Preventivo
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isQuoteFormOpen && <QuoteFormDialog />}
      </AnimatePresence>
    </>
  );
};

export default Header;
