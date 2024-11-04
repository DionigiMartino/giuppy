// Assicurati che tutte queste dipendenze siano installate nel tuo progetto
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import {
  Lightbulb,
  Shield,
  Paintbrush,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  CheckCircle,
  UserPlus,
  Box,
  Settings,
  Drill,
  HeartHandshake,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import renderTestimonials from "@/src/components/Reviews";
import Link from "next/link";

const ServicesPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeService, setActiveService] = useState(0);
  const controls = useAnimation();

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  const heroControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    } else {
      heroControls.start("hidden");
    }
  }, [isHeroInView, heroControls]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      scale: 1.5,
    },
  };

  const renderHero = () => (
    <section
      ref={heroRef}
      className="relative h-screen bg-blue-600 text-white overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate={heroControls}
        variants={heroVariants}
      >
        <Image
          src="/img/cucina.jpg"
          alt="Giupy Controsoffitti Servizi"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-70"
        />
      </motion.div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I Nostri Servizi
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Soluzioni innovative per trasformare i vostri spazi
        </motion.p>
        <motion.a
          href="#servizi"
          className="text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Scopri i nostri servizi
          <ChevronDown className="ml-2" />
        </motion.a>
      </div>
    </section>
  );

  const renderServices = () => {
    const services = [
      {
        title: "Controsoffitti Moderni",
        description:
          "Trasformiamo i vostri spazi con controsoffitti all'avanguardia che uniscono estetica e funzionalità.",
        icon: <Lightbulb size={40} />,
        color: "from-blue-400 to-blue-600",
        image: "/images/servizi/controsoffitti-moderni.jpg",
      },
      {
        title: "Illuminazione Integrata",
        description:
          "Creiamo atmosfere uniche con sistemi di illuminazione integrati e personalizzabili.",
        icon: <Lightbulb size={40} />,
        color: "from-yellow-400 to-orange-600",
        image: "/images/servizi/illuminazione-integrata.jpg",
      },
      {
        title: "Isolamento Acustico",
        description:
          "Ottimizziamo l'acustica dei vostri ambienti con soluzioni innovative e performanti.",
        icon: <Shield size={40} />,
        color: "from-green-400 to-green-600",
        image: "/images/servizi/isolamento-acustico.jpg",
      },
      {
        title: "Design Personalizzato",
        description:
          "Progettiamo soluzioni su misura per soddisfare le vostre esigenze estetiche e funzionali.",
        icon: <Paintbrush size={40} />,
        color: "from-purple-400 to-pink-600",
        image: "/images/servizi/design-personalizzato.jpg",
      },
    ];

    const handleServiceClick = (index) => {
      setActiveService(activeService === index ? null : index);
    };

    return (
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Servizi Innovativi
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer ${
                  activeService === index
                    ? "col-span-1 md:col-span-2 md:row-span-2"
                    : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                custom={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceClick(index)}
                layoutId={`service-${index}`}
              >
                <div className="absolute inset-0 z-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}
                  />
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className="text-white mb-4"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-80">{service.description}</p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeService === index ? 1 : 0,
                      height: activeService === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <ul className="space-y-2">
                      {[
                        "Consulenza personalizzata",
                        "Progettazione 3D",
                        "Installazione professionale",
                      ].map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center"
                        >
                          <ChevronRight className="mr-2" size={16} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/contatti"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Scopri di Più
            </Link>
          </motion.div>
        </div>
      </section>
    );
  };

  const renderProcess = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          {...fadeIn}
        >
          Il Nostro Processo
        </motion.h2>
        <div className="relative">
          <div className="absolute top-0 left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
          {[
            {
              title: "Consulenza Iniziale",
              icon: <UserPlus size={24} />,
              description:
                "Ascoltiamo le vostre esigenze e vi consigliamo le migliori soluzioni.",
            },
            {
              title: "Progettazione 3D",
              icon: <Box size={24} />,
              description:
                "Creiamo un modello 3D dettagliato del vostro progetto.",
            },
            {
              title: "Produzione su Misura",
              icon: <Settings size={24} />,
              description:
                "Realizziamo i controsoffitti su misura nei nostri laboratori specializzati.",
            },
            {
              title: "Installazione Professionale",
              icon: <Drill size={24} />,
              description:
                "Il nostro team esperto installa il controsoffitto con cura e precisione.",
            },
            {
              title: "Assistenza Post-Vendita",
              icon: <HeartHandshake size={24} />,
              description:
                "Forniamo supporto continuo e assistenza anche dopo l'installazione.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              className="flex items-center mb-12"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white z-10">
                    {step.icon}
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white z-10">
                    {step.icon}
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFAQ = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          {...fadeIn}
        >
          Domande Frequenti
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              question:
                "Quanto tempo richiede l'installazione di un controsoffitto?",
              answer:
                "Il tempo di installazione varia in base alle dimensioni e alla complessità del progetto. In genere, per una stanza standard, l'installazione può richiedere da 1 a 3 giorni. Per progetti più grandi o complessi, potrebbe essere necessario più tempo. Forniamo sempre una stima precisa dei tempi prima di iniziare il lavoro.",
            },
            {
              question:
                "Che tipo di manutenzione richiedono i vostri controsoffitti?",
              answer:
                "I nostri controsoffitti sono progettati per richiedere una manutenzione minima. Una pulizia regolare con un panno morbido o un'aspirapolvere è sufficiente nella maggior parte dei casi. Per controsoffitti in aree umide o con esigenze particolari, potremmo consigliare procedure di manutenzione specifiche per garantire la longevità del prodotto.",
            },
            {
              question:
                "Offrite servizi di consulenza per la scelta del design?",
              answer:
                "Assolutamente sì! Il nostro team di designer esperti offre un servizio di consulenza completo. Lavoreremo con voi per comprendere le vostre esigenze, preferenze di stile e vincoli di budget, proponendo soluzioni su misura che si adattano perfettamente al vostro spazio.",
            },
            {
              question: "I vostri prodotti sono ecosostenibili?",
              answer:
                "La sostenibilità è una nostra priorità. Utilizziamo materiali ecologici e processi di produzione rispettosi dell'ambiente ove possibile. Offriamo anche opzioni specifiche di prodotti eco-friendly per i clienti particolarmente attenti all'impatto ambientale.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
                onClick={() =>
                  setExpandedSection(expandedSection === index ? null : index)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.question}</span>
                  <motion.div
                    animate={{ rotate: expandedSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </div>
              </motion.button>
              <AnimatePresence>
                {expandedSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b-lg"
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderCallToAction = () => (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pronti a Trasformare il Vostro Spazio?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lasciate che la nostra esperienza e passione diano vita ai vostri
          progetti. Contattateci oggi stesso per una consulenza gratuita e
          scoprite come possiamo elevare i vostri interni a nuovi livelli di
          bellezza e funzionalità.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contatti"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Richiedi un Preventivo
          </motion.a>
          <motion.a
            href="/portfolio"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Esplora il Nostro Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );

  return (
    <>
      <Head>
        <title>
          I Nostri Servizi - Giupy Controsoffitti | Innovazione e Design
        </title>
        <meta
          name="description"
          content="Scopri i servizi innovativi di Giupy Controsoffitti: controsoffitti moderni, illuminazione integrata, isolamento acustico e design personalizzato. Trasforma il tuo spazio con soluzioni all'avanguardia."
        />
      </Head>

      <Header />

      <motion.div
        className="cursor"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <main className="bg-gray-50 overflow-hidden">
        {renderHero()}
        {renderServices()}
        {renderProcess()}
        {renderTestimonials()}

        {renderFAQ()}
        {renderCallToAction()}
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
