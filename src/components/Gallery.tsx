"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

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

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
      id: 8,
      title: "CNPS",
      description:
        "Présidence du conseil d'administration et de la commission finances",
      category: "Administration publique",
      image: "/img/8.jpeg",
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
  ];

  const selectedItem = galleryItems.find((item) => item.id === selectedImage);

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
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Modal for selected image */}
          {selectedImage && selectedItem && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
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

                {/* Image */}
                <div className="relative w-[25vw] h-[25vw]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
