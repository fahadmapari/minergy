import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HighlightSection from "./components/HighlightSection";
import FeatureSection from "./components/FeatureSection";
import FeatureTwoSection from "./components/FeatureTwoSection";
import CoalSection from "./components/CoalSection";
import DeliverySection from "./components/DeliverySection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <>
      <GlobalStyle />
      <ProgressBar heigth="3" bgcolor="#B77A1A" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HighlightSection />
      <FeatureSection />
      <FeatureTwoSection />
      <CoalSection />
      <DeliverySection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
