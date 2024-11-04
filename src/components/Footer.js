import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img
              src="/img/logo_giupy.jpg"
              alt="Giupy Controsoffitti"
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 mb-6"
            />

            <p className="text-gray-400 mb-6">
              Trasformiamo spazi con passione e innovazione nel settore dei
              controsoffitti.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <motion.a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className={`fab fa-${social} text-xl`}></i>
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Esplora</h3>
            <ul className="space-y-3">
              {["Chi Siamo", "Servizi", "Progetti", "Blog", "Contatti"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Servizi</h3>
            <ul className="space-y-3">
              {[
                "Controsoffitti Moderni",
                "Illuminazione Integrata",
                "Isolamento Acustico",
                "Design Personalizzato",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contattaci</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-blue-500"></i>
                <span className="text-gray-400">
                  Via Augusto Pierantoni 9, Santa Maria Capua Vetere (CE),
                  Italia
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-blue-500"></i>
                <a
                  href="tel:+39XXXXXXXXXX"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +39 328 043 6031
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-500"></i>
                <a
                  href="mailto:info@giupycontrosoffitti.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  controsoffittee@libero.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Giupy Controsoffitti. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
