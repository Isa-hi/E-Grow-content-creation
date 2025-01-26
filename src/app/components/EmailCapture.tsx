"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      // Aquí iría la lógica para conectar con Kajabi
      // Por ahora, simularemos una conexión exitosa
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage("¡Gracias por suscribirte! Revisa tu correo para más información.")
      setEmail("")
    } catch (error) {
      setMessage("Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">¡Tu camino hacia videos virales comienza aquí!</h2>
        <p className="text-xl text-center text-gray-300 mb-8 md:w-3/4 mx-auto">
        Suscríbete y recibe acceso inmediato a recursos gratuitos para crear contenido viral y lleva tu presencia online al siguiente nivel
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center border-b border-purple-500 py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded-full transition-all duration-300 flex items-center"
            >
              {isLoading ? (
                "Enviando..."
              ) : (
                <>
                  Suscribirse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-300">{message}</p>}
      </div>
    </section>
  )
}

