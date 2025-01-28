import EmailCaptureButton from "./ui/EmailCaptureButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text leading-[3rem] md:leading-[5rem]">
            La Clave Para Crear{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 rounded-full">
              Videos Virales
            </span>{" "}
            En Tan Solo Unos Minutos
            </h1>
          <p className="text-xl mb-8 text-gray-200">
            Aún si nunca has editado un video, con E-Grow puedes crear contenido que se comparte y se ve profesional.
          </p>
          <EmailCaptureButton />
        </div>
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BD_Ak8xS-D4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full border-0 rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
