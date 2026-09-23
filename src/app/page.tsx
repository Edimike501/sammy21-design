import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutApproach } from "@/components/AboutApproach";
import { ValueProps } from "@/components/ValueProps";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { ColorPaletteSection } from "@/components/ColorPaletteSection";
import { ProcessAndServices } from "@/components/ProcessAndServices";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0D0714] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-300 selection:bg-purple-600 selection:text-white">
      <Navbar />
      <Hero />
      <AboutApproach />
      <ValueProps />
      <PortfolioGallery />
      <ColorPaletteSection />
      <ProcessAndServices />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
