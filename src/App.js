import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HighlightSection from "./components/HighlightSection";
import FeatureSection from "./components/FeatureSection";
import FeatureTwoSection from "./components/FeatureTwoSection";
import CoalSection from "./components/CoalSection";
import DeliverySection from "./components/DeliverySection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HighlightSection />
      <FeatureSection />
      <FeatureTwoSection />
      <CoalSection />
      <DeliverySection />
    </>
  );
}

export default App;
