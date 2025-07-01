"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "./SmoothScroll";

export default function Skills() {
  const technicalSkills = [
    "Gestion de la logistique",
    "Transports maritimes",
    "Logistique internationale",
    "Commerce international",
    "Gestion des entrepôts",
    "Gestion des terminaux",
    "Manutention portuaire",
    "Transport multimodal",
    "Dédouanement",
    "Coordination interministérielle",
    "Audit et conseil",
    "Médiation",
  ];

  const softSkills = [
    "Leadership stratégique",
    "Gestion d'équipe",
    "Communication interculturelle",
    "Négociation",
    "Résolution de conflits",
    "Développement commercial",
    "Partenariats stratégiques",
    "Management opérationnel",
  ];

  const organizations = [
    {
      name: "Conseil d'Administration de la CNPS",
      role: "Président et président de la commission finances",
    },
    {
      name: "FEDERMAR",
      role: "Président - Fédération Maritime de Côte d'Ivoire",
    },
    {
      name: "Patronat ivoirien",
      role: "Vice président",
    },
    {
      name: "SEMPA",
      role: "Président - Société des Entreprises de Manutention des Ports Autonomes",
    },
    {
      name: "SYNDINAVI",
      role: "Président - Syndicat National des Transitaires de Côte d'Ivoire",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                Compétences & Organisations
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

          {/* Technical Skills with staggered animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Compétences techniques
            </motion.h3>
            <StaggerContainer staggerDelay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {technicalSkills.map((skill, idx) => (
                  <StaggerItem key={idx}>
                    <motion.span
                      className="px-4 py-2 bg-gray-900 text-gold rounded-full text-base font-medium shadow-gold border border-gray-700 cursor-pointer"
                      whileHover={{
                        backgroundColor: "#FFD700",
                        color: "#000",
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>

          {/* Soft Skills with staggered animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Compétences interpersonnelles
            </motion.h3>
            <StaggerContainer staggerDelay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, idx) => (
                  <StaggerItem key={idx}>
                    <motion.span
                      className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-base font-medium shadow-gold border border-gray-700 cursor-pointer"
                      whileHover={{
                        backgroundColor: "#FFD700",
                        color: "#000",
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>

          {/* Organizations with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Organisations présidées
            </motion.h3>
            <StaggerContainer staggerDelay={0.15}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organizations.map((org, idx) => (
                  <StaggerItem key={idx}>
                    <HoverCard scale={1.05}>
                      <motion.div
                        className="bg-neutral-800 rounded-lg p-4 shadow-gold border border-neutral-700 cursor-pointer"
                        whileHover={{
                          boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
                          borderColor: "#FFD700",
                          backgroundColor: "#404040",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                      >
                        <motion.h4
                          className="text-gold font-semibold mb-2"
                          whileHover={{ color: "#FFFFFF" }}
                          transition={{ duration: 0.3 }}
                        >
                          {org.name}
                        </motion.h4>
                        <motion.p
                          className="text-gray-300 text-sm"
                          whileHover={{ color: "#FFFFFF" }}
                          transition={{ duration: 0.3 }}
                        >
                          {org.role}
                        </motion.p>
                      </motion.div>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
