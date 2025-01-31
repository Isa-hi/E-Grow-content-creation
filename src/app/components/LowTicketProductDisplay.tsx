import { Clock, Sparkles } from "lucide-react"
import Link from "next/link"

export function LowTicketProductDisplay() {
  return (
    <section className="bg-gradient-to-br from-yellow-700 via-yellow-300 to-amber-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
            🔥 Desbloquea el Poder del Contenido Premium 🔥
          </h2>
          <p className="text-2xl text-gray-800 mb-8 text-center">
            Eleva tu creación de contenido a niveles extraordinarios sin comprometer tu presupuesto. 🚀
          </p>

          {/* Nuevo: Información sobre el límite de tiempo y aumento de precio */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-r-xl">
            <p className="font-bold flex items-center">
              <Clock className="mr-2" /> Oferta por tiempo limitado:
            </p>
            <p>
              Solo <span className="font-bold text-2xl">$1</span> hasta el 31 de enero. Después, el precio subirá a{" "}
              <span className="line-through">$29</span>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-6 mb-10 shadow-inner">
            <p className="text-lg text-gray-800 mb-6 font-semibold text-center">
              Por solo $1, obtén acceso VIP a nuestra suite completa de recursos premium:
            </p>
            <ul className="text-gray-900 space-y-4 mb-6 text-lg grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Todo lo incluido en planes básicos ✨",
                "Biblioteca de efectos de sonido profesionales 🎶",
                "LUTs y presets de edición avanzados 🎨",
                "Overlays y fondos animados de alta calidad 🎬",
                "Fuentes exclusivas y paquete de emojis premium 🔤",
                "Plantillas personalizables para intros y outros 🎥",
                "Actualizaciones mensuales de contenido 🆕",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-8 text-center">
            💡 ¡Oferta exclusiva por tiempo limitado! Potencia tu contenido con herramientas de nivel profesional ahora.
          </p>
          {/* Nuevo: Información sobre el límite de tiempo y aumento de precio */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-r-xl">
            <p className="font-bold flex items-center">
              <Clock className="mr-2" /> Oferta por tiempo limitado:
            </p>
            <p>
              Solo <span className="font-bold text-2xl">$1</span> hasta el 31 de enero. Después, el precio subirá a{" "}
              <span className="line-through">$29</span>.
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900 mb-6 inline-block bg-yellow-200 px-4 py-2 rounded-xl">
              🔓 Desbloquea Todo por Solo $1 👇
            </p>
            <Link href={"https://egrow.mykajabi.com/offers/F4c7YUAC"} className="bg-gradient-to-r text-sm from-pink-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold sm:py-4 sm:px-8 rounded-full sm:text-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center max-w-full text-wrap mx-auto">
              <Sparkles className="sm:mr-2" />
              Acceder al Contenido Premium
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

