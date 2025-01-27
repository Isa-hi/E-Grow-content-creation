import EmailCaptureButton from "./ui/EmailCaptureButton";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center items-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">
          ¿Estás listo para cambiar la forma en que creas contenido?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Con E-Grow, tus videos virales están a solo un clic de distancia.
          ¡Únete a la comunidad y empieza a crear!
        </p>
        <div className="mx-auto">
          <EmailCaptureButton text="Únete ahora y accede a tus recursos gratuitos" center />
        </div>
      </div>
    </section>
  );
}
