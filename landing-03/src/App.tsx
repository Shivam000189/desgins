import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import FeaturedWork from "@/components/FeaturedWork";
import WhyUs from "@/components/WhyUs";
import HowIWork from "@/components/HowIWork";
import FAQ from "@/components/FAQ";
import BookACall from "@/components/BookACall";

export default function App() {
  return (
    <main>
      <Hero />
      <BrandsSection />
      <FeaturedWork />
      <WhyUs onLinkClick={() => { }} />
      <HowIWork />
      <FAQ />
      <BookACall />
    </main>
  );
}
