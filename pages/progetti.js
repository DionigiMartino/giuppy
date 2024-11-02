import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { Camera, ChevronDown, ChevronLeft, ChevronRight, Maximize, MinusCircle, PlusCircle, X } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const heroRef = useRef(null);
  const projectDetailRef = useRef(null);
  const galleryRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  const heroControls = useAnimation();

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    } else {
      heroControls.start("hidden");
    }
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (activeProject !== null) {
      projectDetailRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeProject]);

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

  const projects = [
    {
      title: "Villa Moderna",
      description:
        "Controsoffitto con illuminazione LED integrata per una villa contemporanea",
      images: ["/img/villamoderna.jpg", "/img/respriv.jpg"],
    },
    {
      title: "Studio Professionale",
      description:
        "Soluzione acustica e illuminotecnica per un grande spazio di lavoro",
      images: ["/img/ufficio.jpg", "/img/hotellusso.jpg"],
    },
    {
      title: "Atmosfera raffinata",
      description:
        "Controsoffitto decorativo con effetti tridimensionali per un'atmosfera raffinata",
      images: ["/img/ristorante.jpg", "/img/controsoffitto.jpg"],
    },
    {
      title: "Negozio",
      description:
        "Sistema di controsoffitti modulari per grandi superfici con integrazione impiantistica",
      images: ["/img/commerciale.jpg", "/img/centro.jpg"],
    },
    {
      title: "Cucina Moderna",
      description:
        "Controsoffitto in cartongesso resistente all'umidità per ambiente cucina",
      images: ["/img/cucina.jpg", "/img/cucina2.jpg"],
    },
    {
      title: "Parete Attrezzata",
      description:
        "Parete in cartongesso con nicchie e mensole integrate per soggiorno",
      images: ["/img/parete1.jpg", "/img/parete2.jpg"],
    },
  ];

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
          src="/img/tavolirossi.png"
          alt="Giupy Controsoffitti Progetti"
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
          I Nostri Progetti
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Esplora le nostre realizzazioni e lasciati ispirare
        </motion.p>
        <motion.a
          href="#galleria"
          className="text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Scopri la Galleria
          <ChevronDown className="ml-2" />
        </motion.a>
      </div>
    </section>
  );

  const renderGallery = () => (
    <section ref={galleryRef} id="galleria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          {...fadeIn}
        >
          Galleria Progetti
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="text-white bg-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => setActiveProject(index)}
                    aria-label={`Esplora il progetto ${project.title}`}
                  >
                    Esplora Progetto
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProjectDetail = () => (
    <AnimatePresence mode="wait">
      {activeProject !== null && (
        <motion.section
          ref={projectDetailRef}
          key={activeProject}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <motion.h2 className="text-4xl font-bold" {...fadeIn}>
                {projects[activeProject].title}
              </motion.h2>
              <motion.button
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
                onClick={() => {
                  setActiveProject(null);
                  galleryRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="mr-2" size={20} />
                Torna alla Galleria
              </motion.button>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xl text-gray-600 mb-6">
                  {projects[activeProject].description}
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  Caratteristiche del Progetto
                </h3>
                <ul className="space-y-2">
                  {[
                    "Design personalizzato",
                    "Illuminazione LED integrata",
                    "Materiali di alta qualità",
                    "Installazione professionale",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <PlusCircle className="text-blue-500 mr-2" size={20} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {projects[activeProject].images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setModalImage(image);
                        setIsModalOpen(true);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${projects[activeProject].title} - Immagine ${
                          index + 1
                        }`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/images/placeholder.jpg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Maximize className="text-white" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );

  const renderImageModal = () => (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Immagine progetto"
              layout="intrinsic"
              width={800}
              height={600}
              objectFit="contain"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsModalOpen(false)}
              aria-label="Chiudi immagine"
            >
              <MinusCircle size={32} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderProjectNavigation = () => (
    <AnimatePresence>
      {activeProject !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gray-100 py-8"
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <button
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              onClick={() =>
                setActiveProject((prev) =>
                  prev > 0 ? prev - 1 : projects.length - 1
                )
              }
              aria-label="Progetto precedente"
            >
              <ChevronLeft className="mr-2" />
              Progetto Precedente
            </button>
            <button
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              onClick={() =>
                setActiveProject((prev) =>
                  prev < projects.length - 1 ? prev + 1 : 0
                )
              }
              aria-label="Progetto successivo"
            >
              Progetto Successivo
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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
          Pronti a Realizzare il Vostro Progetto?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lasciate che la nostra esperienza trasformi i vostri spazi in ambienti
          straordinari. Contattateci oggi stesso per una consulenza gratuita e
          iniziamo a progettare insieme il vostro nuovo controsoffitto.
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
            href="/servizi"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Esplora i Nostri Servizi
          </motion.a>
        </motion.div>
      </div>
    </section>
  );

  return (
    <>
      <Head>
        <title>
          I Nostri Progetti - Giupy Controsoffitti | Galleria e Realizzazioni
        </title>
        <meta
          name="description"
          content="Esplora la galleria dei progetti di Giupy Controsoffitti: controsoffitti moderni, illuminazione integrata e design personalizzato. Lasciati ispirare dalle nostre realizzazioni uniche."
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
        {renderGallery()}
        {renderProjectDetail()}
        {renderProjectNavigation()}
        {renderCallToAction()}
      </main>

      {renderImageModal()}

      <Footer />
    </>
  );
};

export default ProjectsPage;