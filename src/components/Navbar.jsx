import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-app-light dark:bg-app-dark z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-black dark:bg-white p-2 rounded-lg transition-colors">
              <span className="text-white dark:text-black text-xl font-bold">
                W
              </span>
            </div>
            <span className="text-black dark:text-white text-xl font-bold">
              Wordable
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-black dark:text-white hover:text-primary transition-colors"
            >
              Wordable IA
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:text-primary transition-colors"
            >
              Precios
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:text-primary transition-colors"
            >
              Test de Idiomas
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:text-primary transition-colors"
            >
              Para Empresas
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-black dark:text-white hover:text-primary transition-colors">
              Únete Ahora
            </button>
            <button className="bg-[#2FE5A7] text-black px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
              Inicia sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-app-light dark:bg-app-dark border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-black dark:text-white hover:text-primary"
            >
              Wordable IA
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-black dark:text-white hover:text-primary"
            >
              Precios
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-black dark:text-white hover:text-primary"
            >
              Test de Idiomas
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-black dark:text-white hover:text-primary"
            >
              Para Empresas
            </a>
            <div className="px-3 py-2 space-y-2">
              <button className="w-full text-black dark:text-white hover:text-primary">
                Únete Ahora
              </button>
              <button className="w-full bg-[#2FE5A7] text-black px-4 py-2 rounded-md hover:bg-opacity-90">
                Inicia sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
