"use client";

import { useEffect, useRef } from "react";

export default function EmailCapture() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://decibel.mykajabi.com/forms/2148934872/embed.js"></script>
          </head>
          <body></body>
          </html>
        `);
        iframeDoc.close();
      }
    }
  }, []);

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          ¡Tu camino hacia videos virales comienza aquí!
        </h2>
        <p className="text-xl text-center text-gray-300 mb-8 md:w-3/4 mx-auto">
          Suscríbete y recibe acceso inmediato a recursos gratuitos para crear contenido viral y lleva tu presencia online al siguiente nivel
        </p>
        {/* Contenedor iframe para el script */}
        <iframe
          ref={iframeRef}
          className="w-full h-[480px] border-0"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </section>
  );
}
