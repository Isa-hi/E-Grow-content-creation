import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Lo que nuestros miembros dicen</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="premium-card p-6">
              <p className="text-gray-300 mb-4">
                "Mi contenido ahora se comparte como nunca antes. Los recursos de E-Grow me dieron la estructura para
                crear videos virales que aumentaron mis vistas en un 300%."
              </p>
              <div className="flex items-center">
                <Image
                  src="/profile-pictures/profile1.png"
                  alt="Carlos G."
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-white">Carlos G.</p>
                  <p className="text-sm text-gray-400">Creador de Contenido</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="premium-tag">300% más vistas</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="premium-card p-6">
              <p className="text-gray-300 mb-4">
                "Los freebies de E-Grow son increíblemente útiles. Cada plantilla y consejo ha ahorrado horas de
                trabajo. ¡El cambio es impresionante!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/profile-pictures/profile2.png"
                  alt="Sofía R."
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-white">Sofía R.</p>
                  <p className="text-sm text-gray-400">Influencer de Estilo de Vida</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="premium-tag">Ahorro de tiempo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

