import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import ResumeSection from "./pages/ResumeSection";
import PortfolioSection from "./pages/PortfolioSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}