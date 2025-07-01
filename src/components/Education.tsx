"use client";

import { useState, useEffect } from "react";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("education");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      id: 1,
      degree: "Diplôme d'études supérieures de commerce",
      specialization: "Commerce international",
      school: "École Supérieure d'Administration du Commerce et de l'Industrie",
      year: "1978 - 1981",
      location: "Côte d'Ivoire",
    },
    {
      id: 2,
      degree: "DEUG Sciences économiques",
      specialization: "Sciences économiques",
      school: "Université des Sciences Sociales de Toulouse",
      year: "1975 - 1977",
      location: "Toulouse, France",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Amélioration de la gestion du travail par un système intégré",
      location: "Paris, France",
    },
    {
      id: 2,
      title: "Gestion des conflits au travail par un système intégré",
      location: "Le Havre, France",
    },
    {
      id: 3,
      title: "Technique de management de haut niveau",
      location: "Paris, France",
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with animation */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Formation
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto animate-glow"></div>
          </div>

          {/* Education List with staggered animation */}
          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`bg-neutral-800 rounded-lg p-6 shadow-gold hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-neutral-700 hover:border-gold ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gold mb-1 hover:text-white transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-white mb-2">{edu.specialization}</p>
                    <div className="text-gray-300 hover:text-white transition-colors duration-300">
                      {edu.school}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      {edu.location}
                    </div>
                  </div>
                  <div className="text-gold font-bold text-lg mt-2 md:mt-0 hover:text-white transition-colors duration-300">
                    {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Courses Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Formations continues
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="bg-neutral-800 rounded-lg p-4 text-center shadow-gold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-neutral-700 hover:border-gold"
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <h4 className="text-gold font-semibold mb-2 hover:text-white transition-colors duration-300">
                    {course.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{course.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
