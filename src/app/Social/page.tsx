import Image from "next/image";
import React from "react";

export default function Social() {
  return (
    <div className="min-h-screen bg-dark-gold">
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
              Dimension Sociale
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
                    src="/img/GU-2Issouf.webp"
                    alt="Social"
                    fill
                    className="object-cover"
                  />
                  {/* <div className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gold/70 text-sm">Espace pour image</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Dimension Sociale
                    </p>
                  </div> */}
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
                  Engagement Communautaire
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Issouf Fadika s'engage activement dans le développement social
                  et professionnel du secteur maritime ivoirien, contribuant à
                  la formation et à l'épanouissement des acteurs du domaine.
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Issouf Fadika se distingue par son engagement au service de
                    la communauté et de la structuration des acteurs du secteur
                    maritime et portuaire ivoirien.
                  </p>
                </div>
              </div>

              {/* Parrainages */}
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gold">
                    Parrainages et initiatives sociales
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-gray-200">
                      <strong className="text-gold">
                        Parrain de la presse sportive ivoirienne
                      </strong>{" "}
                      à l'occasion de l'élection du président de la
                      Confédération Africaine de Cyclisme, soulignant son
                      attachement à la valorisation du sport et des médias.
                    </p>
                  </div>
                </div>
              </div>

              {/* Associations */}
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gold">
                    Présidences et contributions associatives
                  </h3>
                </div>
                <p className="text-gray-200 mb-6">
                  Président ou membre actif d'organismes professionnels de
                  référence, tels que :
                </p>
                <div className="grid gap-4">
                  {[
                    "Fédération Maritime de Côte d'Ivoire (FEDERMAR)",
                    "SEMPA (Société des Entreprises de Manutention des Ports Autonomes)",
                    "SYNDINAVI (Syndicat National des Transitaires de Côte d'Ivoire)",
                    "CNPS (Caisse Nationale de Prévoyance Sociale)",
                  ].map((org, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-dark-gold rounded-xl border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-900 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-200 font-medium">{org}</p>
                    </div>
                  ))}
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Son implication dans ces structures contribue activement à
                    la structuration des professions du secteur logistique et à
                    la défense des droits sociaux des travailleurs.
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
