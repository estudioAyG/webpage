
import { Link } from "react-router-dom";
import heroBackground from '../assets/images/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6 tracking-tight">
          Estudio Jurídico A&G
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter">
          Donde la confianza se convierte en resultados
        </p>
      </div>
    </section>
  );
};

export default Hero;
