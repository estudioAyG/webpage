
import { Scale, Users, BookOpen, Building, Shield, PiggyBank, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specialties = [
  {
    icon: Scale,
    title: "Familia y Sucesiones",
    description: "Divorcios, alimentos, responsabilidad parental y sucesiones."
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description: "Despidos, indemnizaciones y accidentes de trabajo."
  },
  {
    icon: Calendar,
    title: "Derecho Previsional",
    description: "Jubilaciones, pensiones y beneficios previsionales."
  },
  {
    icon: BookOpen,
    title: "Derecho Agrario",
    description: "Contratos, derecho laboral rural y consumo agrario."
  },
  {
    icon: Building,
    title: "Servicio Empresarial",
    description: "Sociedades, contratos, marcas, patentes y derecho laboral."
  }
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 text-center mb-12">
          Nuestras Especialidades
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card 
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <specialty.icon className="w-16 h-16 mb-6 text-blue-900" />
                <h3 className="font-playfair text-xl mb-3 text-gray-900 font-semibold">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">
                  {specialty.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
