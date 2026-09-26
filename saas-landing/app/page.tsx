import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomerSection from "@/components/CustomerSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServiceSection";
import FAQSection from "@/components/FAQ";
import TalkToUsSection from "@/components/TalkToUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CustomerSection />
      <WorkSection />
      <ServicesSection />
      <FAQSection />
      <TalkToUsSection />
      <Footer />
    </main>
  );
}