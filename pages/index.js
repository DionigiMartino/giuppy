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
      <TeamSection />
      <TestimonialsSection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Immagine di sfondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img/home1.jpg")' }}
      ></div>

      {/* Overlay scuro per migliorare la leggibilità del testo */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Effetto onda che taglia l'immagine */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <svg
          className="absolute bottom-0 left-0 w-full"
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

      {/* Contenuto principale */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Trasforma il Tuo Spazio con Controsoffitti Innovativi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-100 mb-8"
          >
            Design all'avanguardia e soluzioni personalizzate per ogni ambiente
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contatti"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors inline-block"
            >
              Richiedi un Preventivo
            </a>
          </motion.div>
        </div>
      </div>

      {/* Pallini animati */}
      <motion.div
        className="absolute right-0 top-1/4 w-64 h-64 bg-yellow-400 rounded-full opacity-20"
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
        className="absolute left-1/4 bottom-1/4 w-40 h-40 bg-green-400 rounded-full opacity-20"
        style={{ zIndex: 1 }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
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
      image: "/projects/modern-office.jpg",
      description: "Controsoffitto dinamico per spazi di lavoro innovativi",
    },
    {
      id: 2,
      title: "Hotel di Lusso",
      image: "/projects/luxury-hotel.jpg",
      description: "Eleganza senza tempo per ambienti esclusivi",
    },
    {
      id: 3,
      title: "Residenza Privata",
      image: "/projects/private-residence.jpg",
      description: "Soluzioni personalizzate per il massimo comfort",
    },
    {
      id: 4,
      title: "Centro Commerciale",
      image: "/projects/shopping-mall.jpg",
      description:
        "Design accattivante per spazi commerciali di grande impatto",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
        >
          L'Eccellenza in Numeri e Immagini
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-2 right-2 text-4xl"
              >
                {stat.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">
            I Nostri Progetti in Evidenza
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex flex-col justify-end p-4"
                    >
                      <h4 className="text-white text-xl font-semibold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-200 text-sm">
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
            <div className="w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Pronto a Trasformare il Tuo Spazio?
          </h3>
          <motion.a
            href="#contatti"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Richiedi una Consulenza Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        I Nostri Servizi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Controsoffitti Moderni", icon: "🏠" },
          { name: "Illuminazione Integrata", icon: "💡" },
          { name: "Isolamento Acustico", icon: "🔇" },
          { name: "Design Personalizzato", icon: "🎨" },
        ].map((service) => (
          <motion.div
            key={service.name}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.name}
            </h3>
            <p className="text-gray-600">
              Soluzioni innovative per ogni esigenza.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectShowcase = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Progetti che Ispirano
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ogni nostro lavoro è un capolavoro di design e funzionalità,
            realizzato con materiali premium e tecniche all'avanguardia.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm text-gray-600">Clienti Soddisfatti</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-blue-600">200+</p>
              <p className="text-sm text-gray-600">Progetti Completati</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Esplora i Nostri Lavori
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative"
        >
          <img
            src="/project-showcase.jpg"
            alt="Progetto in evidenza"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-1">
              Controsoffitto Moderno
            </h3>
            <p className="text-sm text-gray-600">
              Design minimalista per uffici
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "David Cooper",
      role: "Designer",
      image: "/team-david-cooper.jpg",
    },
    {
      name: "Monica Manly",
      role: "Designer",
      image: "/team-monica-manly.jpg",
    },
    {
      name: "Kevin Martin",
      role: "Designer",
      image: "/team-kevin-martin.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brown-500 uppercase tracking-wider mb-2"
          >
            TEAM MEMBERS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-gray-800"
          >
            Meet the Expert Team
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full md:w-2/3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                  <div className="bg-brown-400 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 md:mt-0 w-full md:w-1/3 md:pl-8"
          >
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor to incidut
              labore et dolore magna for aliqua.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Cosa Dicono i Nostri Clienti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-lg"
          >
            <p className="mb-4 text-gray-600">
              "Servizio eccellente e risultati sorprendenti. Giupy
              Controsoffitti ha trasformato completamente il nostro spazio."
            </p>
            <div className="flex items-center">
              <img
                src={`/client-${num}.jpg`}
                alt={`Cliente ${num}`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Cliente {num}</p>
                <p className="text-sm text-gray-500">Proprietario di Casa</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const NewsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Ultime Novità
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "Tendenze nei Controsoffitti",
          "Illuminazione Intelligente",
          "Acustica Perfetta",
        ].map((title, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={`/news-${index + 1}.jpg`}
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{`${
                20 + index
              } Apr 2023`}</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 mb-4">
                Scopri le ultime innovazioni nel mondo dei controsoffitti...
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Leggi di più
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const NewsletterSection = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="bg-blue-600 rounded-xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">Resta Aggiornato</h2>
        <p className="mb-6 text-lg">
          Iscriviti alla nostra newsletter per ricevere le ultime novità e
          offerte esclusive.
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Il tuo indirizzo email"
            className="flex-grow p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Iscriviti Ora
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

export default HomePage;
