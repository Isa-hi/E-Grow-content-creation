import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full text-white text-center py-3 px-4 bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 shadow-lg">
      <Link href="#email-capture">
        <h2 className="text-lg md:text-xl font-bold animate-pulse">
          🔥 ¡Oferta Exclusiva de Lanzamiento! 🔥
        </h2>
      </Link>
    </header>
  );
}
