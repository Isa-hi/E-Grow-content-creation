import { TrendingUp, Clock, Users } from "lucide-react"

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
        ¿Por qué E-Grow es la clave para tu contenido viral?
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Imagina tener a tu disposición herramientas, plantillas y estrategias probadas para crear videos que no solo
          se ven bien, sino que realmente se comparten. Con E-Grow, obtienes los recursos que te ayudarán a destacarte.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="premium-card p-6">
              <TrendingUp size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">Aumenta tu alcance</h3>
              <p className="text-center text-gray-300">Estrategias probadas y diseñadas para que tus videos sean compartidos.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="premium-card p-6">
              <Clock size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">Optimiza tu proceso</h3>
              <p className="text-center text-gray-300">Plantillas y recursos profesionales listos para usar.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="premium-card p-6">
              <Users size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">Haz crecer tu audiencia</h3>
              <p className="text-center text-gray-300">Creación de contenido viral que te posiciona como un experto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

