import { FileText, Share2, CheckSquare } from "lucide-react"

export default function Freebies() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
          Tus recursos gratuitos para crear videos virales están listos
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          ¿Estás listo para crear contenido increíblemente viral? Accede a recursos probados y optimizados para
          convertir tus videos en éxitos.
        </p>
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full sm:w-1/3 p-4">
            <div className="premium-card p-6">
              <FileText size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">Plantillas de video virales</h3>
              <p className="text-center text-gray-300">Perfectas para tus proyectos.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="premium-card p-6">
              <Share2 size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">
                Guía de optimización para redes sociales
              </h3>
              <p className="text-center text-gray-300">Asegura el máximo impacto en cada plataforma.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="premium-card p-6">
              <CheckSquare size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">Checklists de contenido viral</h3>
              <p className="text-center text-gray-300">
                Nunca pierdas de vista lo que necesitas para que tus videos se vuelvan virales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

