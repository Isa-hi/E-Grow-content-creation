import { UserPlus, Download, Video } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
          En 3 pasos, estarás creando videos virales de impacto
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          El proceso es simple, pero los resultados son poderosos. Accede a
          recursos que transformarán la forma en que creas contenido. ¿Listo?
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/3 p-4">
            <div className="premium-card p-6">
              <UserPlus size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">
                1. Únete a la comunidad
              </h3>
              <p className="text-center text-gray-200">
                No hay barreras. Al unirte a nuestra comunidad, tendrás acceso
                inmediato a recursos exclusivos, solo para miembros.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="premium-card p-6">
              <Download size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">
                2. Descarga los freebies
              </h3>
              <p className="text-center text-gray-200">
                Una vez dentro, tendrás acceso a materiales exclusivos y
                gratuitos. No pierdas tiempo: empieza a usar nuestras plantillas
                profesionales y sigue nuestras guías para crear videos virales.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="premium-card p-6">
              <Video size={48} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-white">
                3. Crea y viraliza
              </h3>
              <p className="text-center text-gray-200">
                Usa nuestras estrategias de viralización y observa cómo tus
                videos ganan más vistas, se comparten más y hacen crecer tu
                audiencia. ¡El éxito está a solo un clic de distancia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
