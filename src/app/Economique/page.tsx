import ScrollProgress from "@/components/ScrollProgress";
import Image from "next/image";
import React from "react";

export default function Economique() {
  return (
    <div className="min-h-screen bg-dark-gold">
      <ScrollProgress />

      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header with animation */}
          <div
            className="text-center mb-16"
            style={{
              opacity: 0,
              animation: "fadeIn 0.8s ease-out 0.2s forwards",
            }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              Dimension Économique
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Image space */}
            <div
              className="space-y-8"
              style={{
                opacity: 0,
                animation: "slideInLeft 0.8s ease-out 0.4s forwards",
              }}
            >
              <div className="bg-dark-gold from-gray-800/50  p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700/50 to-gray-600/30 rounded-xl border-2 border-dashed border-gold/30 flex items-center justify-center">
                  <Image
                    src="/img/issouff.jpeg"
                    alt="Social"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Additional info card */}
              <div
                className="bg-dark-gold from-gray-800/40 to-gray-700/20 p-6 rounded-xl border border-gray-700/30 shadow-lg backdrop-blur-sm"
                style={{
                  opacity: 0,
                  animation: "fadeIn 0.8s ease-out 0.6s forwards",
                }}
              >
                <h4 className="text-lg font-semibold text-gold mb-3">
                  Expertise Stratégique
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Issouf Fadika est reconnu pour son expertise dans la
                  logistique et le transport, ayant contribué significativement
                  au développement économique de la Côte d'Ivoire.
                </p>
              </div>
            </div>

            {/* Right column - Content */}
            <div
              className="space-y-8"
              style={{
                opacity: 0,
                animation: "slideInRight 0.8s ease-out 0.6s forwards",
              }}
            >
              {/* Introduction */}
              <div className="bg-dark-gold from-gray-800/60 to-gray-700/40 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm hover:shadow-gold/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Le parcours d'Issouf Fadika est avant tout marqué par son
                    expertise stratégique dans la logistique et le transport,
                    avec une carrière distinguée dans le secteur privé.
                  </p>
                </div>
              </div>

              {/* Carrière dans le secteur privé */}
              <div className="bg-dark-gold from-gray-800/50 to-gray-700/30 p-8 rounded-2xl border border-gray-700/50 shadow-xl backdrop-blur-sm hover:shadow-gold/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-400 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gold">
                    Carrière dans le secteur privé
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gold mb-1">
                        Bolloré Transport & Logistics
                      </h4>
                      <p className="text-gray-200 text-sm">
                        Ancien Directeur Général Adjoint (2006–2011)
                      </p>
                      <p className="text-gray-400 text-xs">
                        Groupe majeur dans la chaîne logistique africaine
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gold mb-1">
                        Abidjan Terminal
                      </h4>
                      <p className="text-gray-200 text-sm">
                        Directeur Général (2011–2014)
                      </p>
                      <p className="text-gray-200 text-sm">
                        Vice-président du Conseil d'Administration (2015–2019)
                      </p>
                      <p className="text-gray-400 text-xs">
                        Direction d'importants projets de modernisation
                        portuaire
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gold mb-1">
                        IRIS GROUP
                      </h4>
                      <p className="text-gray-200 text-sm">
                        Administrateur associé (depuis 2016)
                      </p>
                      <p className="text-gray-400 text-xs">
                        Cabinet de conseil spécialisé en logistique, audit,
                        médiation et stratégie portuaire
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gold mb-1">
                        Africa Global Logistics
                      </h4>
                      <p className="text-gray-200 text-sm">
                        Administrateur et directeur Côte d'Ivoire SA
                      </p>
                      <p className="text-gray-400 text-xs">Poste actuel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projets et résultats marquants */}
              <div className="bg-dark-gold from-gray-800/50 to-gray-700/30 p-8 rounded-2xl border border-gray-700/50 shadow-xl backdrop-blur-sm hover:shadow-gold/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-400 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gold">
                    Projets et résultats marquants
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gold mb-2">
                        Modernisation portuaire
                      </h4>
                      <p className="text-gray-200 text-sm">
                        Supervision de projets d'investissement portuaire ayant
                        permis une hausse de productivité de{" "}
                        <strong className="text-gold">+25%</strong> grâce à
                        l'introduction d'équipements lourds et à la
                        digitalisation des processus.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gold mb-2">
                        Transformation numérique
                      </h4>
                      <p className="text-gray-200 text-sm">
                        Acteur de la transformation numérique du commerce
                        extérieur via le GUCE, favorisant la réduction des
                        délais et coûts de dédouanement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-dark-gold from-gray-800/60 to-gray-700/40 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm hover:shadow-gold/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    L'expertise d'Issouf Fadika dans la logistique et le
                    transport a contribué significativement au développement
                    économique de la Côte d'Ivoire et de la région
                    ouest-africaine, notamment à travers l'optimisation des
                    chaînes logistiques et la modernisation des infrastructures
                    portuaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `,
        }}
      />
    </div>
  );
}
