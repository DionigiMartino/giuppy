import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import {
  Check,
  Star,
  Users,
  Zap,
  ChevronDown,
  ArrowRight,
  MousePointer,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import renderTestimonials from "@/src/components/Reviews";

const ChiSiamoPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  const heroControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const teamMembers = [
    {
      name: "Giuseppe Rossi",
      role: "Fondatore e CEO",
      image: "/images/team/giuseppe-rossi.jpg",
      bio: "Con oltre 30 anni di esperienza nel settore, Giuseppe guida l'azienda con passione e visione innovativa.",
    },
    {
      name: "Maria Bianchi",
      role: "Direttore Creativo",
      image: "/images/team/maria-bianchi.jpg",
      bio: "Maria porta la sua vasta esperienza nel design d'interni per creare soluzioni uniche e all'avanguardia.",
    },
    {
      name: "Luigi Verdi",
      role: "Capo Progettista",
      image: "/images/team/luigi-verdi.jpg",
      bio: "Con un occhio attento ai dettagli, Luigi trasforma le visioni in progetti tecnici impeccabili.",
    },
    {
      name: "Anna Neri",
      role: "Responsabile Clienti",
      image: "/images/team/anna-neri.jpg",
      bio: "Anna assicura che ogni cliente riceva un'esperienza personalizzata e soddisfacente dall'inizio alla fine.",
    },
  ];

  const values = [
    {
      icon: <Star size={24} />,
      title: "Eccellenza",
      description:
        "Puntiamo sempre al massimo in ogni progetto, superando le aspettative dei nostri clienti.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaborazione",
      description:
        "Lavoriamo in sinergia con i nostri clienti, valorizzando le loro idee e la nostra esperienza.",
    },
    {
      icon: <Zap size={24} />,
      title: "Innovazione",
      description:
        "Adottiamo le ultime tecnologie e tendenze per offrire soluzioni all'avanguardia nel design dei controsoffitti.",
    },
    {
      icon: <Check size={24} />,
      title: "Affidabilità",
      description:
        "Manteniamo le promesse e rispettiamo le scadenze, garantendo la massima professionalità in ogni fase del progetto.",
    },
  ];

  const timeline = [
    { year: "1990", event: "Fondazione di Giupy Controsoffitti" },
    { year: "2000", event: "Espansione del business in tutta Italia" },
    { year: "2010", event: "Introduzione di tecnologie all'avanguardia" },
    { year: "2020", event: "Celebrazione del 30° anniversario" },
    { year: "2024", event: "Lancio della divisione di design sostenibile" },
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "Rossi Architects",
      text: "Giupy Controsoffitti ha superato le nostre aspettative. Il loro team ha trasformato il nostro ufficio in uno spazio moderno e funzionale.",
    },
    {
      name: "Laura Bianchi",
      company: "Hotel Bellavista",
      text: "La loro attenzione ai dettagli e la capacità di rispettare le scadenze hanno reso il processo di ristrutturazione del nostro hotel senza stress.",
    },
    {
      name: "Giovanni Verdi",
      company: "Verdi Interior Design",
      text: "Collaborare con Giupy Controsoffitti è sempre un piacere. La loro creatività e professionalità sono impareggiabili nel settore.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Chi Siamo - Giupy Controsoffitti | Esperti in Design e Innovazione
        </title>
        <meta
          name="description"
          content="Scopri la storia, i valori e il team dietro Giupy Controsoffitti, leader nel settore dei controsoffitti di design. Dal 1990, trasformiamo spazi con passione e innovazione."
        />
        <meta
          name="keywords"
          content="Giupy Controsoffitti, controsoffitti, design interni, innovazione, Italia"
        />
        <meta property="og:title" content="Chi Siamo - Giupy Controsoffitti" />
        <meta
          property="og:description"
          content="Esperti in controsoffitti di design dal 1990. Scopri la nostra storia di innovazione e passione."
        />
        <meta property="og:image" content="/images/chi-siamo-og.jpg" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.giupycontrosoffitti.it/chi-siamo"
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

      <main className="bg-gray-50 overflow-x-hidden">
        {/* Hero Section */}
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
              src="/img/chisiamointro.jpg"
              alt="Giupy Controsoffitti Team"
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
              Chi Siamo
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trasformiamo spazi con passione, innovazione e maestria
              artigianale dal 1990.
            </motion.p>
            <motion.a
              href="#storia"
              className="text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Scopri di più
              <ChevronDown className="ml-2" />
            </motion.a>
          </div>
        </section>

        <section id="storia" className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              {...fadeIn}
            >
              La Nostra Storia
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg mb-6">
                  Fondata nel 2010 da Giuseppe Addario, Giupy Controsoffitti è
                  nata dalla passione per il design e l&apos;architettura
                  d&apos;interni. Ciò che iniziò come un piccolo laboratorio
                  artigianale si è evoluto in un&apos;azienda leader nel settore
                  dei controsoffitti di design.
                </p>
                <p className="text-lg mb-6">
                  Nel corso degli anni, abbiamo perfezionato le nostre tecniche,
                  abbracciato le nuove tecnologie e ampliato la nostra gamma di
                  servizi. Oggi, siamo orgogliosi di essere riconosciuti come
                  innovatori nel nostro campo, offrendo soluzioni su misura che
                  trasformano gli spazi in ambienti straordinari.
                </p>
                <p className="text-lg">
                  La nostra dedizione all&apos;eccellenza e all&apos;innovazione
                  continua a guidarci mentre esploriamo nuove frontiere nel
                  design dei controsoffitti, sempre con un occhio attento alla
                  sostenibilità e al benessere dei nostri clienti.
                </p>
              </motion.div>
              <motion.div
                className="relative h-96 md:h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/img/storia1.jpg"
                  alt="Storia di Giupy Controsoffitti"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
              className="mt-20 overflow-hidden px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-center mb-8">
                La nostra evoluzione
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-center relative w-full">
                {/* Linea orizzontale visibile solo su desktop */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block" />

                {/* Linea verticale visibile solo su mobile */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2 md:hidden h-full" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="flex flex-col items-center text-center mb-12 md:mb-0 relative z-10 w-full md:w-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-2 relative">
                      {/* Sfondo bianco per il cerchio */}
                      <div className="absolute inset-0 bg-white rounded-full -z-10 transform scale-[1.1]"></div>
                      {item.year}
                    </div>
                    <p className="text-sm max-w-[150px] mx-auto">
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* I Nostri Valori */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              {...fadeIn}
            >
              I Nostri Valori
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-blue-600 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Il Nostro Team */}

        {/* Testimonials Section */}
        {renderTestimonials()}

        {/* FAQ Section */}
        <section className="py-20 bg-white overflow-hidden">
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
                  question: "Quali sono i vantaggi dei controsoffitti?",
                  answer:
                    "I controsoffitti offrono numerosi vantaggi, tra cui isolamento acustico e termico, nascondere impianti e cavi, migliorare l'estetica degli ambienti e creare effetti di illuminazione unici. Inoltre, possono aumentare l'efficienza energetica dell'edificio e offrire maggiore flessibilità nella progettazione degli interni.",
                },
                {
                  question:
                    "Quanto tempo richiede l'installazione di un controsoffitto?",
                  answer:
                    "Il tempo di installazione varia in base alle dimensioni e alla complessità del progetto. In genere, per una stanza standard, l'installazione può richiedere da 1 a 3 giorni. Per progetti più grandi o complessi, potrebbe essere necessario più tempo. Il nostro team fornisce sempre una stima precisa dei tempi prima di iniziare il lavoro.",
                },
                {
                  question: "Che materiali utilizzate per i controsoffitti?",
                  answer:
                    "Utilizziamo una vasta gamma di materiali, tra cui cartongesso, metallo, legno, tessuto e materiali fonoassorbenti. La scelta dipende dalle esigenze specifiche del progetto e dalle preferenze del cliente. Offriamo anche opzioni ecosostenibili per chi cerca soluzioni a basso impatto ambientale.",
                },
                {
                  question: "I controsoffitti richiedono manutenzione?",
                  answer:
                    "In generale, i controsoffitti richiedono poca manutenzione. Una pulizia regolare con un panno morbido o un'aspirapolvere è sufficiente per la maggior parte dei casi. Per controsoffitti in aree umide o con esigenze particolari, potremmo consigliare procedure di manutenzione specifiche per garantire la longevità del prodotto.",
                },
                {
                  question: "Offrite servizi di progettazione personalizzata?",
                  answer:
                    "Assolutamente sì! Il nostro team di designer e progettisti lavora a stretto contatto con i clienti per creare soluzioni su misura che si adattano perfettamente alle loro esigenze e al loro stile. Offriamo un servizio di consulenza completo, dalla concezione iniziale alla realizzazione finale del progetto.",
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
                    className="w-full text-left p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === index ? null : index
                      )
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{item.question}</span>
                      <motion.div
                        animate={{
                          rotate: expandedSection === index ? 180 : 0,
                        }}
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

        {/* Certificazioni e Riconoscimenti */}
        <section className="py-20 bg-gray-100 ">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              {...fadeIn}
            >
              Certificazioni e Riconoscimenti
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ISO 9001:2015",
                  description:
                    "Certificazione per il Sistema di Gestione della Qualità",
                },
                {
                  title: "ISO 14001:2015",
                  description:
                    "Certificazione per il Sistema di Gestione Ambientale",
                },
                {
                  title: "Premio Innovazione 2023",
                  description:
                    "Assegnato dalla Camera di Commercio per le soluzioni eco-sostenibili",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{ color: "#3B82F6" }}
                  >
                    {item.title}
                  </motion.h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
                Contattaci Ora
              </motion.a>
              <motion.a
                href="/progetti"
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
      </main>

      <Footer />
    </>
  );
};

export default ChiSiamoPage;
