import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Specialties from "@/components/Specialties";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col pb-20 md:pb-0">
      <div className="flex-grow">
        <Hero />
        <AboutUs />
        <Specialties />
        <Location />
        <Contact />
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Index;
