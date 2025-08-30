import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Specialties from "@/components/Specialties";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Hero />
        <AboutUs />
        <Specialties />
        <Location />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
