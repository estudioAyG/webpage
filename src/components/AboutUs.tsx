
import { MapPin, Phone, Mail, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import fernandaImagen from '../assets/images/fernanda-profile.jpeg'
import anibalImagen from '../assets/images/anibal-profile.jpeg'
import cintiaImagen from '../assets/images/cintia-profile.jpeg'

// Datos de los abogados
const abogados = [
  {
    nombre: "Abg. María Fernanda Gallardo",
    matricula: "M.P. 1809",
    direccion: "Luis Oliva 158 - Naschel",
    telefono: "2657 548414",
    email: "mfernanda_gallardo@hotmail.com",
    img: fernandaImagen,
  },
  {
    nombre: "Abg. Aníbal Arro",
    matricula: "M.P. 2-1781",
    direccion: "Cabrera 1073 - Río Cuarto",
    telefono: "3385 431549 | 358 5713078",
    email: "arroanibal@gmail.com",
    img: anibalImagen,
  },
  {
    nombre: "Abg. Cintia Amieva",
    matricula: "M.P. 2-1782",
    direccion: "Cabrera 1073 - Río Cuarto",
    telefono: "358 5141257",
    email: "cinamieva@gmail.com",
    img: cintiaImagen,
  }
];

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 text-center mb-12">
          Quiénes Somos
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-justify text-gray-700 text-lg leading-relaxed mb-6">
            Somos un estudio jurídico que ofrecemos asesoramiento integral en Río Cuarto, Naschel y zonas aledañas, brindando soluciones legales tanto a personas como a empresas.
            Desde 2020 trabajamos con seriedad, confianza y compromiso, al servicio de la comunidad.
            Nuestra misión es acompañar a nuestros clientes en cada desafío legal con responsabilidad, ética y profesionalismo. Seriedad, confianza y compromiso son los valores que nos guían en cada caso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {abogados.map((abogado, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 flex flex-col items-center shadow border">
              <Avatar className="mb-4 h-24 w-24">
                <AvatarImage 
                  src={abogado.img} 
                  alt={abogado.nombre} 
                  className="object-cover object-top"
                />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <h3 className="font-playfair text-lg md:text-xl mb-1 text-gray-900 text-center font-bold">
                {abogado.nombre}
              </h3>
              <p className="text-gray-700 text-sm mb-1">{abogado.matricula}</p>
              <div className="flex items-center text-gray-700 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="font-medium">{abogado.direccion}</span>
              </div>
              <div className="flex items-center text-gray-700 text-sm mb-1 flex-wrap justify-center gap-2">
                <Phone className="w-4 h-4 mr-1" />
                <span>{abogado.telefono}</span>
              </div>
              <div className="flex items-center text-gray-700 text-sm mt-1">
                <Mail className="w-4 h-4 mr-1" />
                <a href={`mailto:${abogado.email}`} className="hover:underline">{abogado.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
