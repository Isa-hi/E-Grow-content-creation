"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isKajabiLoaded, setIsKajabiLoaded] = useState(false);
  const [kajabiError, setKajabiError] = useState("");

  // Cargar el script de Kajabi
  useEffect(() => {
    if (!isKajabiLoaded) {
      const script = document.createElement("script");
      script.src = "https://decibel.mykajabi.com/forms/2148934872/embed.js";
      script.async = true;
      script.onload = () => setIsKajabiLoaded(true);
      script.onerror = () =>
        setKajabiError("Error al cargar el script de Kajabi.");
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isKajabiLoaded]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Usar el script de Kajabi para enviar el email
      const form = document.querySelector(
        "form[data-form-id='2148934872']"
      ) as HTMLFormElement;

      if (form) {
        // Actualizar inputs con los valores actuales
        const emailInput = form.querySelector("input[name='email']");
        const nameInput = form.querySelector("input[name='name']");

        if (emailInput && nameInput) {
          (emailInput as HTMLInputElement).value = email;
          (nameInput as HTMLInputElement).value = name;

          console.log("Datos enviados a Kajabi:", { name, email });

          // Simular el envío del formulario para que lo procese el script de Kajabi
          setTimeout(() => {
            form.submit(); // Esto permite que el script gestione los datos correctamente
          }, 1000);
        } else {
          throw new Error("No se encontraron los inputs en el formulario.");
        }
      } else {
        throw new Error("El formulario de Kajabi no se cargó correctamente.");
      }

      setMessage(
        "¡Gracias por suscribirte! Revisa tu correo para más información."
      );
      setEmail("");
      setName("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Hubo un error al procesar tu suscripción: ${error.message}`);
      } else {
        setMessage("Hubo un error desconocido al procesar tu suscripción.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="email-capture"
      className="py-20 bg-gradient-to-r from-purple-900 to-pink-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-white">
          ¡Tu camino hacia videos virales comienza aquí!
        </h2>
        <p className="text-xl text-center text-gray-300 mb-8 md:w-3/4 mx-auto">
          Suscríbete y recibe acceso inmediato a recursos gratuitos para crear
          contenido viral y lleva tu presencia online al siguiente nivel
        </p>
        {!isKajabiLoaded && !kajabiError && (
          <p className="text-center text-sm text-gray-300">
            Cargando formulario...
          </p>
        )}
        {kajabiError && (
          <p className="text-center text-sm text-red-500">{kajabiError}</p>
        )}
        {isKajabiLoaded && (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            data-form-id="2148934872"
          >
            <div className="flex items-center border-4 border-purple-500 py-2 px-5 rounded-3xl">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
                className="appearance-none bg-transparent border-none w-full text-white leading-tight text-xl focus:outline-none"
              />
            </div>
            <div className="flex items-center border-4 mt-5 border-purple-500 p-3 rounded-3xl">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="appearance-none bg-transparent border-none w-full text-white leading-tight text-xl focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-green-600 border-indigo-500 hover:border-indigo-500 text-sm border-4 text-white py-1 px-2 rounded-full transition-all duration-300 flex items-center"
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
        )}
        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </section>
  );
}
