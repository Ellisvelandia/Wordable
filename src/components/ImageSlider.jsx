import { useState, useEffect } from "react";
import { SLIDES } from "../constants/slides";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SLIDES.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-app-light dark:bg-app-dark py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Aprende en cualquier momento y lugar
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Miles de personas ya están mejorando su idioma con Wordable
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Images Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index =
                (currentIndex + offset + SLIDES.length) % SLIDES.length;
              const slide = SLIDES[index];

              return (
                <div
                  key={slide.id}
                  className={`transition-all duration-500 ${
                    offset === 0
                      ? "w-64 md:w-80 opacity-100 scale-100"
                      : Math.abs(offset) === 1
                      ? "w-48 md:w-64 opacity-75 scale-90"
                      : "w-32 md:w-48 opacity-50 scale-75"
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="rounded-2xl object-cover aspect-[3/4] w-full"
                  />
                  {offset === 0 && (
                    <p className="text-center mt-4 text-black dark:text-white font-medium">
                      {slide.title}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <span className="text-black dark:text-white">
            {currentIndex + 1} / {SLIDES.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
