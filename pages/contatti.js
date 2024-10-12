import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui inserisci la logica per l'invio del form
    console.log("Form inviato:", formData);
    // Resetta il form dopo l'invio
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ContactSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <MapSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative h-80 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/contact-hero.jpg")' }}
    ></div>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
      >
        Contattaci
      </motion.h1>
    </div>
  </section>
);

const ContactSection = ({ formData, handleInputChange, handleSubmit }) => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, url: "#" },
    { icon: <Facebook size={24} />, url: "#" },
    { icon: <Instagram size={24} />, url: "#" },
  ];

  const contactInfo = [
    { icon: <MapPin />, text: "Via Roma 123, 00100 Roma, Italia" },
    { icon: <Phone />, text: "+39 06 1234567" },
    { icon: <Mail />, text: "info@giupycontrosoffitti.com" },
    { icon: <Clock />, text: "Lun - Ven: 9:00 - 18:00" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Mettiamoci in Contatto
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Inviaci un messaggio
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["nome", "email", "telefono"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="messaggio"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Invia Messaggio
                </motion.button>
              </form>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Informazioni di contatto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {React.cloneElement(info.icon, {
                        className: "text-blue-600",
                      })}
                    </div>
                    <p className="text-gray-600">{info.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  Seguici sui social
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Come raggiungerci
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540412652886!2d12.496365776378!3d41.90269087921938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a1a67d371d%3A0x2d8e5acfe29c0f2e!2sVia%20Roma%2C%20Roma%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1682349548096!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa di Giupy Controsoffitti"
        ></iframe>
      </motion.div>
    </div>
  </section>
);

const CtaSection = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      text: "Chiamaci",
      action: "tel:+39XXXXXXXXXX",
    },
    {
      icon: <Mail size={24} />,
      text: "Scrivici",
      action: "mailto:info@giupycontrosoffitti.com",
    },
    { icon: <Calendar size={24} />, text: "Prenota", action: "#prenota" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-700 opacity-50 z-0">
        <motion.div
          className="absolute inset-0 bg-blue-500"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1.5, rotate: 45 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Pronto a Trasformare il Tuo Spazio con Stile?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-12 leading-relaxed"
          >
            Scopri come i nostri controsoffitti innovativi possono rivoluzionare
            il tuo ambiente. Contattaci oggi stesso per una consulenza gratuita
            e personalizzata.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-blue-50 transition-all duration-300"
              >
                {method.icon}
                <span className="mt-2 font-semibold">{method.text}</span>
              </motion.a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contatti"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Inizia la Trasformazione
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default ContactPage;
