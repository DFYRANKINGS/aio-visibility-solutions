import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIPlatforms } from "@/components/AIPlatforms";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AIPlatforms />
      <About />
      <Services id="services" />
      <Pricing id="pricing" />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
