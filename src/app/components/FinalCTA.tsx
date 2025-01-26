import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">
          ¿Estás listo para cambiar la forma en que creas contenido?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Con E-Grow, tus videos virales están a solo un clic de distancia. ¡Únete a la comunidad y empieza a crear!
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center">
          Únete ahora y accede a tus recursos gratuitos
          <ArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  )
}

