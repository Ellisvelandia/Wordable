import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import FeaturesSection from "./components/FeaturesSection";
import WhyUsSection from "./components/WhyUsSection";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="bg-app-light dark:bg-app-dark transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <ImageSlider />
        <FeaturesSection />
        <WhyUsSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
