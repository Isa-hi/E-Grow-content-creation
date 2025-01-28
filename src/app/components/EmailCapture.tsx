"use client";

import { useEffect, useState } from "react";

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
        const emailInput = form.querySelector(
          "input[name='form_submission[name]']"
        );
        const nameInput = form.querySelector(
          "input[name='form_submission[email]']"
        );

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
        setMessage(
          `Hubo un error al procesar tu suscripción: ${error.message}`
        );
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
            <fieldset>
              <div className="text-field kajabi-form__form-item">
                <input
                  type="text"
                  name="form_submission[name]"
                  id="form_submission_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Name"
                  className="appearance-none bg-transparent border-none w-full text-white leading-tight text-xl focus:outline-none"
                />
              </div>
              <div className="email-field kajabi-form__form-item mt-4">
                <input
                  type="email"
                  name="form_submission[email]"
                  id="form_submission_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="appearance-none bg-transparent border-none w-full text-white leading-tight text-xl focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="kajabi-form__btn kajabi-form__btn--block-mobile mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-green-600 border-indigo-500 hover:border-indigo-500 text-sm border-4 text-white py-1 px-2 rounded-full transition-all duration-300 flex items-center"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "¡Obtener acceso!"}
              </button>
            </fieldset>
          </form>
        )}
        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </section>
  );
}
