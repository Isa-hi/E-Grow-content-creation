"use client";

import { useEffect, useState } from "react";

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Dynamically load Kajabi CSS
    const cssLink = document.createElement("link");
    cssLink.href =
      "https://kajabi-app-assets.kajabi-cdn.com/assets/form_embed-dcaa78bdba8533a7a03bae89673cff66d373fa1b29f956e2e902fa95b731fbe9.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    document.head.appendChild(cssLink);

    return () => {
      document.head.removeChild(cssLink);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      await fetch(
        "https://decibel.mykajabi.com/forms/2148934872/form_submissions",
        {
          method: "POST",
          mode: "no-cors", // Added to bypass CORS policy
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "form_submission[name]": name,
            "form_submission[email]": email,
          }).toString(),
        }
      );

      // Since response is opaque, we assume success
      setMessage(
        "¡Gracias por suscribirte! Revisa tu correo para más información."
      );
      setEmail("");
      setName("");
    } catch (error) {
      setMessage(
        `Hubo un error desconocido al procesar tu suscripción. Inténtalo de nuevo más tarde. ${error}`
      );
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
        <p className="text-xl text-center text-gray-200 mb-8 md:w-3/4 mx-auto">
          Suscríbete y recibe acceso GRATIS e inmediato a recursos para crear
          contenido viral y lleva tu presencia online al siguiente nivel
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          data-form-id="2148934872"
        >
          <fieldset>
            <div className="text-field kajabi-form__form-item border border-pink-300 p-3 rounded-lg">
              <input
                type="text"
                name="form_submission[name]"
                id="form_submission_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Tu Nombre"
                className="appearance-none bg-transparent border-none w-full text-white leading-tight text-xl focus:outline-none"
              />
            </div>
            <div className="email-field kajabi-form__form-item mt-4 border border-pink-300 p-3 rounded-lg">
              <input
                type="email"
                name="form_submission[email]"
                id="form_submission_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Tu Email"
                className="appearance-none bg-transparent border-none w-full text-white leading-tight text-xl focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="kajabi-form__btn kajabi-form__btn--block-mobile mt-6 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-indigo-600 hover:to-green-60 hover:border-indigo-500 text-sm border-4 text-white py-2 px-6 rounded-full transition-all duration-300 flex items-center mx-auto"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "¡Obtener acceso gratis!"}
            </button>
          </fieldset>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </section>
  );
}
