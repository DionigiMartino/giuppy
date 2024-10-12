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

export default function renderTestimonials ()  {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
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
    
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Voci dei Nostri Clienti Soddisfatti
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="bg-white bg-opacity-95 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="text-blue-500 w-16 h-16 mb-4" />
              <p className="text-gray-800 text-xl mb-6 italic">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
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
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="text-blue-500" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="text-blue-500" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeTestimonial
                  ? "bg-white"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};