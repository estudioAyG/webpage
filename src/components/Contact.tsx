
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
          Agenda una Consulta Virtual
        </h2>
        
        <Button 
          asChild
          className="bg-white text-blue-900 hover:bg-gray-100 font-medium text-lg px-8 py-6"
        >
          <a 
            href="https://cal.com/estudioayg/consulta?overlayCalendar=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Agendá un encuentro virtual
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
