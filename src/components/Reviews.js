import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function RenderTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialRef = useRef(null);
  const isInView = useInView(testimonialRef, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  const testimonials = [
    {
      name: "Marco Rossi",
      company: "Rossi Architects",
      text: "Giupy Controsoffitti ha trasformato il nostro ufficio in uno spazio moderno e funzionale. Il loro team è altamente professionale e attento ai dettagli.",
      rating: 5,
      image: "/images/testimonials/marco-rossi.jpg",
    },
    {
      name: "Laura Bianchi",
      company: "Hotel Bellavista",
      text: "L'illuminazione integrata che hanno installato nel nostro hotel ha creato un'atmosfera unica. I nostri ospiti sono rimasti impressionati dal design innovativo.",
      rating: 5,
      image: "/images/testimonials/laura-bianchi.jpg",
    },
    {
      name: "Giovanni Verdi",
      company: "Verdi Interior Design",
      text: "La loro capacità di creare design personalizzati è straordinaria. Hanno dato vita alle nostre idee più audaci con soluzioni creative e funzionali.",
      rating: 5,
      image: "/images/testimonials/giovanni-verdi.jpg",
    },
  ];

  return (
    <section
      ref={testimonialRef}
      className="py-20 relative overflow-hidden bg-gray-100"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Voci dei Nostri Clienti Soddisfatti
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto"
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Quote className="text-blue-500 w-16 h-16 mb-4 opacity-20" />
              <p className="text-gray-800 text-xl mb-6 italic">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={64}
                    height={64}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[activeTestimonial].company}
                  </div>
                  <div className="flex mt-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 w-5 h-5"
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-blue-500" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-blue-500" />
          </motion.button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeTestimonial ? "bg-blue-500" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
