"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-gold hover:text-white transition-colors p-2"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-dark-gold border border-gold shadow-gold rounded-lg py-2 z-50">
          <a
            href="/"
            onClick={closeMenu}
            className="block px-4 py-2 text-gold font-bold hover:text-white hover:bg-gold/20 transition-colors"
          >
            Accueil
          </a>
          <a
            href="/Social"
            onClick={closeMenu}
            className="block px-4 py-2 text-gold font-semibold hover:text-white hover:bg-gold/20 transition-colors"
          >
            Social
          </a>
          <a
            href="/Politique"
            onClick={closeMenu}
            className="block px-4 py-2 text-gold font-semibold hover:text-white hover:bg-gold/20 transition-colors"
          >
            Politique
          </a>
          <a
            href="/Economique"
            onClick={closeMenu}
            className="block px-4 py-2 text-gold font-semibold hover:text-white hover:bg-gold/20 transition-colors"
          >
            Économique
          </a>
        </div>
      )}
    </div>
  );
}
