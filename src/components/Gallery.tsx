"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("gallery");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Guichet Unique du Commerce Extérieur",
      description:
        "Direction stratégique de l'organisation chargée de faciliter les procédures du commerce extérieur en Côte d'Ivoire",
      category: "Direction stratégique",
      image: "/img/1.jpeg",
    },
    {
      id: 2,
      title: "Bolloré Transport & Logistics",
      description:
        "19 ans d'expérience en tant qu'administrateur dans le secteur logistique international",
      category: "Logistique internationale",
      image: "/img/2.jpeg",
    },
    {
      id: 3,
      title: "Abidjan Terminal",
      description:
        "Direction générale et vice-présidence du conseil d'administration du terminal portuaire",
      category: "Gestion portuaire",
      image: "/img/3.jpeg",
    },
    {
      id: 4,
      title: "IRIS GROUP",
      description:
        "Audit, médiation, conseil et assistance opérationnelle en logistique internationale",
      category: "Conseil et audit",
      image: "/img/4.jpeg",
    },
    {
      id: 5,
      title: "FEDERMAR",
      description: "Présidence de la Fédération Maritime de Côte d'Ivoire",
      category: "Organisation professionnelle",
      image: "/img/5.jpeg",
    },
    {
      id: 6,
      title: "SEMPA",
      description:
        "Présidence de la Société des Entreprises de Manutention des Ports Autonomes",
      category: "Manutention portuaire",
      image: "/img/6.jpeg",
    },
    {
      id: 7,
      title: "SYNDINAVI",
      description:
        "Présidence du Syndicat National des Transitaires de Côte d'Ivoire",
      category: "Transit maritime",
      image: "/img/7.jpeg",
    },
    {
      id: 8,
      title: "CNPS",
      description:
        "Présidence du conseil d'administration et de la commission finances",
      category: "Administration publique",
      image: "/img/8.jpeg",
    },
    {
      id: 9,
      title: "Patronat ivoirien",
      description: "Vice-présidence du patronat ivoirien",
      category: "Organisation patronale",
      image: "/img/9.jpeg",
    },
    {
      id: 10,
      title: "Études statistiques",
      description:
        "Mise en œuvre des mécanismes de renforcement des relations commerciales France-Afrique de l'Ouest",
      category: "Études et recherche",
      image: "/img/10.jpeg",
    },
    {
      id: 11,
      title: "Mission maritime française",
      description:
        "Mission au sein du bureau du trafic maritime français en Côte d'Ivoire",
      category: "Coopération internationale",
      image: "/img/11.jpeg",
    },
    {
      id: 12,
      title: "Commandeur de l'ordre national",
      description: "Distinction honorifique de la République de Côte d'Ivoire",
      category: "Distinctions honorifiques",
      image: "/img/12.jpeg",
    },
    {
      id: 13,
      title: "Commandeur du mérite Maritime",
      description:
        "Reconnaissance pour les services rendus au secteur maritime",
      category: "Distinctions honorifiques",
      image: "/img/13.jpeg",
    },
    {
      id: 14,
      title: "Chevalier du mérite sportif",
      description:
        "Distinction pour les contributions au développement sportif",
      category: "Distinctions honorifiques",
      image: "/img/14.jpeg",
    },
    {
      id: 15,
      title: "Commerce international",
      description:
        "Expertise en développement des échanges commerciaux internationaux",
      category: "Commerce international",
      image: "/img/15.jpeg",
    },
    {
      id: 16,
      title: "Transport multimodal",
      description:
        "Spécialisation en transport maritime, routier, ferroviaire et aérien",
      category: "Transport multimodal",
      image: "/img/16.jpeg",
    },
    {
      id: 17,
      title: "Gestion portuaire",
      description:
        "Expertise en manutention, transit, shipping et plateformes logistiques",
      category: "Gestion portuaire",
      image: "/img/17.jpeg",
    },
    {
      id: 18,
      title: "Développement agro-industriel",
      description:
        "Conseil en ingénierie agricole et transformation agro-industrielle",
      category: "Agro-industrie",
      image: "/img/18.jpeg",
    },
    {
      id: 19,
      title: "Énergies renouvelables",
      description:
        "Production, transport et distribution d'énergies renouvelables",
      category: "Énergies renouvelables",
      image: "/img/19.jpeg",
    },
    {
      id: 20,
      title: "Technologies de l'information",
      description: "Expertise en TIC et sécurité informatique",
      category: "Technologies",
      image: "/img/20.jpeg",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-dark-gold relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gold-gradient rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gold-gradient rounded-full opacity-10 animate-ping"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Réalisations & Distinctions
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto animate-glow"></div>
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Découvrez les principales réalisations et distinctions de ma
              carrière professionnelle
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg shadow-gold hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-neutral-800 to-dark-gold">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center text-black text-2xl font-bold">
                      {item.title.charAt(0)}
                    </div>
                  </div>

                  {/* TODO: Décommenter quand vous aurez les vraies images */}
                  {/* 
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      {item.description}
                    </p>
                    <span className="inline-block px-2 py-1 bg-gold text-black text-xs font-medium rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-gold text-black text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for selected image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="bg-neutral-800 rounded-lg max-w-2xl w-full p-6 relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {(() => {
                  const item = galleryItems.find((i) => i.id === selectedImage);
                  if (!item) return null;

                  return (
                    <div>
                      <div className="h-64 bg-gradient-to-br from-neutral-700 to-dark-gold rounded-lg mb-4 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center text-black text-4xl font-bold">
                          {item.title.charAt(0)}
                        </div>
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{item.description}</p>
                      <span className="inline-block px-3 py-1 bg-gold text-black text-sm font-medium rounded">
                        {item.category}
                      </span>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
