"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "./SmoothScroll";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Président du conseil d'administration",
      company: "Guichet Unique du Commerce Extérieur",
      period: "2019 - Présent",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Direction stratégique de l'organisation chargée de faciliter et d'optimiser les procédures du commerce extérieur en Côte d'Ivoire. Supervision des opérations de dédouanement et de coordination interministérielle.",
      technologies: [
        "Commerce international",
        "Dédouanement",
        "Coordination interministérielle",
        "Stratégie gouvernementale",
      ],
    },
    {
      id: 2,
      title: "Administrateur",
      company: "Bolloré Transport & Logistics",
      period: "2006 - Présent",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Membre du conseil d'administration avec 19 ans d'expérience. Contribution aux décisions stratégiques et au développement des activités logistiques et de transport en Afrique de l'Ouest.",
      technologies: [
        "Logistique internationale",
        "Transport maritime",
        "Gestion portuaire",
        "Stratégie d'entreprise",
      ],
    },
    {
      id: 3,
      title: "Directeur général adjoint",
      company: "Bolloré Transport & Logistics",
      period: "2006 - 2011",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Direction opérationnelle des activités logistiques et de transport. Gestion des équipes et développement des partenariats stratégiques dans la région ouest-africaine.",
      technologies: [
        "Management opérationnel",
        "Développement commercial",
        "Gestion d'équipe",
        "Partenariats stratégiques",
      ],
    },
    {
      id: 4,
      title: "Administrateur Associé",
      company: "IRIS GROUP",
      period: "2016 - Présent",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Direction des activités d'audit, de médiation, de conseil et d'assistance opérationnelle. Spécialisation en logistique internationale, gestion portuaire et transport multimodal.",
      technologies: [
        "Audit et conseil",
        "Médiation",
        "Logistique internationale",
        "Transport multimodal",
      ],
    },
    {
      id: 5,
      title: "Vice président du conseil d'administration",
      company: "Abidjan Terminal",
      period: "2015 - 2019",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Direction stratégique des opérations portuaires et de manutention. Développement des infrastructures et optimisation des processus logistiques du terminal.",
      technologies: [
        "Gestion portuaire",
        "Manutention",
        "Infrastructures logistiques",
        "Optimisation opérationnelle",
      ],
    },
    {
      id: 6,
      title: "Directeur général",
      company: "Abidjan Terminal",
      period: "2011 - 2014",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Direction générale des opérations du terminal portuaire. Gestion des ressources humaines, développement commercial et amélioration de la performance opérationnelle.",
      technologies: [
        "Direction générale",
        "Gestion portuaire",
        "Développement commercial",
        "Performance opérationnelle",
      ],
    },
    {
      id: 7,
      title: "Directeur des ressources humaines",
      company: "Bolloré Transport & Logistics",
      period: "1995 - 2000",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Gestion des ressources humaines et développement des politiques RH. Recrutement, formation et développement des compétences des équipes logistiques.",
      technologies: [
        "Gestion RH",
        "Recrutement",
        "Formation",
        "Développement des compétences",
      ],
    },
    {
      id: 8,
      title: "Responsable de la logistique des services",
      company: "Bolloré Transport & Logistics",
      period: "1983 - 1994",
      location: "Abidjan, Côte d'Ivoire",
      description:
        "Coordination des services logistiques et optimisation des processus de transport. Gestion des flux de marchandises et développement des solutions logistiques.",
      technologies: [
        "Coordination logistique",
        "Optimisation des processus",
        "Gestion des flux",
        "Solutions logistiques",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeInUp>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Expérience professionnelle
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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line with animation */}
            <motion.div
              className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gold-gradient"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Experience items */}
            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <StaggerItem key={exp.id}>
                    <div className="relative flex items-center">
                      {/* Timeline dot with animation */}
                      <motion.div
                        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold-gradient rounded-full border-4 border-neutral-800 shadow-gold z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{
                          scale: 1.5,
                          boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                        }}
                      />

                      {/* Content card with hover effects */}
                      <HoverCard scale={1.02}>
                        <motion.div
                          className={`ml-12 md:ml-0 md:w-5/12 ${
                            index % 2 === 0
                              ? "md:mr-auto md:pr-8"
                              : "md:ml-auto md:pl-8"
                          }`}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          <motion.div
                            className="bg-neutral-800 rounded-lg shadow-gold p-6 border border-neutral-700"
                            whileHover={{
                              boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
                              borderColor: "#FFD700",
                              scale: 1.02,
                            }}
                          >
                            {/* Header */}
                            <div className="mb-4">
                              <motion.h3
                                className="text-xl font-bold text-white mb-1"
                                whileHover={{ color: "#FFD700" }}
                                transition={{ duration: 0.3 }}
                              >
                                {exp.title}
                              </motion.h3>
                              <motion.div
                                className="flex items-center gap-2 text-gold font-semibold mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                              >
                                <motion.svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  animate={{ rotate: [0, 360] }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                >
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </motion.svg>
                                {exp.company}
                              </motion.div>
                              <motion.div
                                className="flex items-center gap-4 text-sm text-gray-400"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                              >
                                <span className="flex items-center gap-1">
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  {exp.period}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                  {exp.location}
                                </span>
                              </motion.div>
                            </div>

                            {/* Description */}
                            <motion.p
                              className="text-gray-300 mb-4 leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7, duration: 0.5 }}
                              whileHover={{ color: "#FFFFFF" }}
                            >
                              {exp.description}
                            </motion.p>

                            {/* Technologies with hover effects */}
                            <motion.div
                              className="flex flex-wrap gap-2"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.8, duration: 0.5 }}
                            >
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="px-3 py-1 bg-neutral-700 text-gold text-sm rounded-full cursor-pointer"
                                  whileHover={{
                                    backgroundColor: "#FFD700",
                                    color: "#000",
                                    scale: 1.1,
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: 0.9 + techIndex * 0.1,
                                    duration: 0.3,
                                  }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </HoverCard>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
