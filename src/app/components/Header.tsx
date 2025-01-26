import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-950 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          E-GROW
        </Link>
        <div className="space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Acerca de
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  )
}

