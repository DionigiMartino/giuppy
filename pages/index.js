import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <HeroSection />
      <ResultsSection />
      <ServicesSection />
      <ProjectShowcase />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with darker overlay for better text readability */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/img/home1.jpg")' }}
      ></div>

      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Wave Effect */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{ height: "clamp(3rem, 10vw, 8rem)" }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,192C672,181,768,139,864,144C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto pt-20 lg:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Trasforma il Tuo Spazio con Controsoffitti Innovativi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8"
            >
              Design all&apos;avanguardia e soluzioni personalizzate per ogni
              ambiente
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#contatti"
                className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                Richiedi un Preventivo
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Circles */}
      <motion.div
        className="absolute right-0 top-1/4 w-32 sm:w-48 lg:w-64 aspect-square bg-yellow-400 rounded-full opacity-20"
        style={{ zIndex: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute left-1/4 bottom-1/4 w-24 sm:w-32 lg:w-40 aspect-square bg-green-400 rounded-full opacity-20"
        style={{ zIndex: 1 }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </section>
  );
};

const ResultsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const stats = [
    { number: "500+", label: "Progetti Completati", icon: "🏗️" },
    { number: "98%", label: "Clienti Soddisfatti", icon: "😊" },
    { number: "20+", label: "Anni di Esperienza", icon: "🗓️" },
    { number: "50+", label: "Premi di Design", icon: "🏆" },
  ];

  const projects = [
    {
      id: 1,
      title: "Ufficio Moderno",
      image: "/img/ufficiomod.jpg",
      description: "Controsoffitto dinamico per spazi di lavoro innovativi",
    },
    {
      id: 2,
      title: "Hotel di Lusso",
      image: "/img/hotellusso.jpg",
      description: "Eleganza senza tempo per ambienti esclusivi",
    },
    {
      id: 3,
      title: "Residenza Privata",
      image: "/img/respriv.jpg",
      description: "Soluzioni personalizzate per il massimo comfort",
    },
    {
      id: 4,
      title: "Centro Commerciale",
      image: "/img/commerciale.jpg",
      description:
        "Design accattivante per spazi commerciali di grande impatto",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-800"
        >
          L&apos;Eccellenza in Numeri e Immagini
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-2 right-2 text-2xl sm:text-3xl lg:text-4xl"
              >
                {stat.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 lg:mb-10 text-gray-800">
            I Nostri Progetti in Evidenza
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex flex-col justify-end p-4"
                    >
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-200">
                        {project.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-48 sm:w-56 lg:w-64 aspect-square bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
            Pronto a Trasformare il Tuo Spazio?
          </h3>
          <motion.a
            href="#contatti"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Richiedi una Consulenza Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
        I Nostri Servizi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {[
          { name: "Controsoffitti Moderni", icon: "🏠" },
          { name: "Illuminazione Integrata", icon: "💡" },
          { name: "Isolamento Acustico", icon: "🔇" },
          { name: "Design Personalizzato", icon: "🎨" },
        ].map((service) => (
          <motion.div
            key={service.name}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
              {service.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Soluzioni innovative per ogni esigenza.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectShowcase = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
            Progetti che Ispirano
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Ogni nostro lavoro è un capolavoro di design e funzionalità,
            realizzato con materiali premium e tecniche all&apos;avanguardia.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6 sm:mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                98%
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Clienti Soddisfatti
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                200+
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Progetti Completati
              </p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
            href="/progetti"
          >
            Esplora i Nostri Lavori
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
        >
          <img
            src="/img/controsoffitto.jpg"
            alt="Progetto in evidenza"
            className="w-full rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-white p-3 sm:p-4 rounded-lg shadow-md max-w-[calc(100%-2rem)]">
            <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
              Controsoffitto Moderno
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Design minimalista per uffici
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
        Cosa Dicono i Nostri Clienti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
          >
            <p className="mb-4 text-sm sm:text-base text-gray-600">
              &quot;Servizio eccellente e risultati sorprendenti. Giupy
              Controsoffitti ha trasformato completamente il nostro
              spazio.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 mr-3 sm:mr-4 overflow-hidden">
                <img
                  src={`/client-${num}.jpg`}
                  alt={`Cliente ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-800">
                  Cliente {num}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Proprietario di Casa
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="bg-blue-600 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Resta Aggiornato
        </h2>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg">
          Iscriviti alla nostra newsletter per ricevere le ultime novità e
          offerte esclusive.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Il tuo indirizzo email"
            className="flex-grow p-2 sm:p-3 rounded-full text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            Iscriviti Ora
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

export default HomePage;
