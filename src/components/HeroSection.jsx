import { useTheme } from "../context/ThemeContext";

function HeroSection() {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative min-h-screen bg-app-light dark:bg-app-dark overflow-hidden flex items-center justify-center transition-colors duration-300">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] border border-gray-300 dark:border-white/5 rounded-full transition-colors"></div>
        <div className="absolute w-[600px] h-[600px] border border-gray-300 dark:border-white/5 rounded-full transition-colors"></div>
        <div className="absolute w-[400px] h-[400px] border border-gray-300 dark:border-white/5 rounded-full transition-colors"></div>
      </div>

      {/* Decorative curved lines */}
      <div className="absolute inset-0">
        {/* Green curve */}
        <div className="absolute left-0 h-full w-1/3">
          <svg className="h-full w-full" viewBox="0 0 400 800" fill="none">
            <path
              d="M-100 100C0 300 -100 500 300 700"
              stroke="#2FE5A7"
              strokeWidth="8"
              className="opacity-80"
            />
          </svg>
        </div>

        {/* Purple and blue curves on the right */}
        <div className="absolute right-0 h-full w-1/3">
          <svg className="h-full w-full" viewBox="0 0 400 800" fill="none">
            <path
              d="M500 100C400 300 500 500 100 700"
              stroke="#8A70FF"
              strokeWidth="8"
              className="opacity-80"
            />
            <path
              d="M400 150C300 350 400 550 0 750"
              stroke="#F0FF3D"
              strokeWidth="8"
              className="opacity-80"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight transition-colors">
          Domina el idioma,
          <br />
          domina el mundo
          <span className="text-primary">.</span>
        </h1>

        <div className="mt-10">
          <button className="group inline-flex items-center px-8 py-3.5 rounded-full bg-app-light dark:bg-app-dark text-black dark:text-white border-2 border-gray-200 dark:border-gray-800/20 hover:border-primary transition-all duration-300">
            <div className="bg-black dark:bg-white p-1.5 rounded-lg mr-3 transition-colors">
              <span className="text-white dark:text-black font-bold">W</span>
            </div>
            <span className="text-lg">Aprende con IA...</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
