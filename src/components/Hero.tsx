"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  AnimatedText,
  HoverCard,
} from "./SmoothScroll";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-gold relative overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating elements with animation */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-gold-gradient rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gold-gradient rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-gold-gradient rounded-full opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <SlideInLeft delay={0.2}>
              <div className="relative">
                {/* Photo placeholder - TODO: Remplacer par la vraie photo */}
                <HoverCard scale={1.05}>
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Placeholder avec gradient en attendant la vraie photo */}
                    <motion.div
                      className="w-full h-full rounded-full bg-gold-gradient flex items-center justify-center text-black text-6xl font-bold shadow-gold hover:shadow-2xl transition-all duration-300"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(255, 215, 0, 0.3)",
                          "0 0 40px rgba(255, 215, 0, 0.6)",
                          "0 0 20px rgba(255, 215, 0, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      IF
                    </motion.div>

                    {/* TODO: Décommenter et ajuster quand vous aurez la photo */}
                    {/* 
                    <Image
                      src="/issouf-fadika-photo.jpg" // TODO: Ajouter la photo dans le dossier public/
                      alt="Issouf Fadika - Président du conseil d'administration"
                      fill
                      className="rounded-full object-cover shadow-gold hover:shadow-2xl transition-all duration-300"
                      priority
                    />
                    */}

                    {/* Decorative elements around photo */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gold-gradient rounded-full opacity-60"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-gradient rounded-full opacity-60"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 -right-8 w-4 h-4 bg-gold-gradient rounded-full opacity-40"
                      animate={{
                        x: [0, 5, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </HoverCard>

                {/* Photo caption */}
                <motion.p
                  className="text-gray-400 mt-4 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  TODO: Ajouter votre photo professionnelle
                </motion.p>
              </div>
            </SlideInLeft>

            {/* Content Section */}
            <SlideInRight delay={0.4}>
              {/* Name and Title with staggered animation */}
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Issouf Fadika
              </motion.h1>

              <FadeInUp delay={0.8}>
                <h2 className="text-xl md:text-2xl text-gold font-semibold mb-6">
                  Président du conseil d'administration
                </h2>
              </FadeInUp>

              <FadeInUp delay={1.0}>
                <h3 className="text-lg md:text-xl text-gold/80 font-medium mb-6">
                  Guichet Unique du Commerce Extérieur
                </h3>
              </FadeInUp>

              {/* Description with animation */}
              <FadeInUp delay={1.2}>
                <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  Leader expérimenté avec plus de 40 ans d'expertise dans la
                  logistique internationale, le transport maritime et la gestion
                  portuaire. Spécialisé dans le développement commercial et la
                  transformation des infrastructures logistiques en Afrique de
                  l'Ouest.
                </p>
              </FadeInUp>

              {/* CTA Buttons with animation */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <motion.button
                  onClick={scrollToContact}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="px-8 py-3 bg-gold-gradient text-black font-semibold rounded-lg shadow-gold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Me contacter</span>
                  <motion.svg
                    className="w-5 h-5"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </motion.button>

                <motion.a
                  href="https://www.linkedin.com/in/issouf-fadika-ab3a6a61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-gold"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#FFD700",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </motion.a>
              </motion.div>
            </SlideInRight>
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-6 h-6 text-gold hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
