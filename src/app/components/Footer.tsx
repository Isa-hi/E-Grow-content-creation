export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 gradient-text">E-GROW</h3>
            <p className="text-gray-400">
              Únete a la comunidad de creadores de contenido más innovadora. Juntos, creamos videos virales que generan
              impacto.
            </p>
          </div>
          
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} E-GROW. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

