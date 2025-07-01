"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "./SmoothScroll";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with animation */}
          <FadeInUp>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                À propos
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gold-gradient mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
          </FadeInUp>

          {/* Content Grid with staggered animation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content with animation */}
            <SlideInLeft delay={0.2}>
              <div className="space-y-6">
                <motion.h3
                  className="text-2xl font-semibold text-white mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Mon parcours professionnel
                </motion.h3>

                <StaggerContainer staggerDelay={0.1}>
                  <StaggerItem>
                    <motion.p
                      className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      Avec plus de 40 ans d'expérience dans le secteur de la
                      logistique internationale et du transport maritime, j'ai
                      développé une expertise approfondie dans la gestion
                      portuaire, le commerce international et le développement
                      d'infrastructures logistiques.
                    </motion.p>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.p
                      className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      Actuellement Président du conseil d'administration du
                      Guichet Unique du Commerce Extérieur, je dirige également
                      plusieurs organisations clés du secteur maritime et
                      logistique en Côte d'Ivoire, contribuant au développement
                      économique de la région.
                    </motion.p>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.p
                      className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      Mon approche se base sur une vision stratégique à long
                      terme, une compréhension approfondie des enjeux du
                      commerce international et une capacité à fédérer les
                      acteurs publics et privés autour d'objectifs communs.
                    </motion.p>
                  </StaggerItem>
                </StaggerContainer>

                {/* Key Highlights with hover effects */}
                <motion.div
                  className="grid grid-cols-2 gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <HoverCard scale={1.05}>
                    <motion.div
                      className="text-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all duration-300 cursor-pointer border border-neutral-700 hover:border-gold"
                      whileHover={{
                        backgroundColor: "#404040",
                        borderColor: "#FFD700",
                      }}
                    >
                      <motion.div
                        className="text-2xl font-bold text-gold"
                        animate={{
                          scale: [1, 1.1, 1],
                          color: ["#FFD700", "#FFA500", "#FFD700"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        40+
                      </motion.div>
                      <div className="text-sm text-gray-400">
                        Années d'expérience
                      </div>
                    </motion.div>
                  </HoverCard>

                  <HoverCard scale={1.05}>
                    <motion.div
                      className="text-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all duration-300 cursor-pointer border border-neutral-700 hover:border-gold"
                      whileHover={{
                        backgroundColor: "#404040",
                        borderColor: "#FFD700",
                      }}
                    >
                      <motion.div
                        className="text-2xl font-bold text-gold"
                        animate={{
                          scale: [1, 1.1, 1],
                          color: ["#FFD700", "#FFA500", "#FFD700"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        6
                      </motion.div>
                      <div className="text-sm text-gray-400">
                        Organisations présidées
                      </div>
                    </motion.div>
                  </HoverCard>
                </motion.div>
              </div>
            </SlideInLeft>

            {/* Visual Element with animation */}
            <SlideInRight delay={0.4}>
              <div className="relative">
                <HoverCard scale={1.02}>
                  <motion.div
                    className="bg-gradient-to-br from-neutral-800 to-dark-gold rounded-2xl p-8 h-80 flex items-center justify-center hover:shadow-gold transition-all duration-300 border border-neutral-700"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
                      borderColor: "#FFD700",
                    }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-4 bg-gold-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        whileHover={{
                          scale: 1.2,
                          boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                        }}
                      >
                        <svg
                          className="w-10 h-10 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </motion.div>
                      <motion.h4
                        className="text-xl font-semibold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        Leadership & Stratégie
                      </motion.h4>
                      <motion.p
                        className="text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        Direction d'organisations stratégiques dans le secteur
                        maritime et logistique
                      </motion.p>
                    </div>
                  </motion.div>
                </HoverCard>

                {/* Floating elements with animation */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gold-gradient rounded-full opacity-20"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold-gradient rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
}
