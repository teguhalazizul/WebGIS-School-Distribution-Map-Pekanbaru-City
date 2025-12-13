// src/pages/HomePage.jsx
import { HeroSection } from "../components/HeroSection";
import { StatSection } from "../components/StatSection";
import { TujuanManfaatSection } from "../components/TujuanManfaatSection";
import { HowItWorksSection } from "../components/HowItWorksSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatSection />
      <TujuanManfaatSection />
      <HowItWorksSection />
    </>
  );
}
