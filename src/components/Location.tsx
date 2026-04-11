
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 text-center mb-12">
          Dónde Estamos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Río Cuarto Office */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.253563717387!2d-64.3569629236608!3d-33.128702481107965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2001129d3b24f%3A0xda2c155c5acec883!2sEcheverr%C3%ADa%20405%2C%20X5800BEU%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1775922237125!5m2!1ses!2sar"
              className="w-full h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 flex items-center justify-center gap-2 bg-gray-50">
              <MapPin className="w-5 h-5 text-blue-900" />
              <p className="text-gray-700">
                Echeverría 405, Río Cuarto, Córdoba
              </p>
            </div>
          </div>

          {/* San Luis Office */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.614436443013!2d-65.49926212327559!3d-32.35145707430586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d3192c43f1fdef%3A0x868c2665f54b0a7f!2sIntendente%20L.%20Oliva%20158%2C%20Naschel%2C%20San%20Luis%20Province!5e0!3m2!1sen!2sar!4v1719140000000!5m2!1sen!2sar"
              className="w-full h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 flex items-center justify-center gap-2 bg-gray-50">
              <MapPin className="w-5 h-5 text-blue-900" />
              <p className="text-gray-700">
                Intendente L. Oliva 158, Naschel, San Luis Province
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
