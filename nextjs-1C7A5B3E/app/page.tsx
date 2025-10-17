import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigációs sáv */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 font-bold">
              Főoldal
            </Link>
          </li>
          <li>
            <Link href="/life-stages" className="text-white hover:text-gray-300">
              Életszakaszok
            </Link>
          </li>
          <li>
            <Link href="/care" className="text-white hover:text-gray-300">
              Gondozás
            </Link>
          </li>
        </ul>
      </nav>

      {/* Fejléc */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          Üdvözöljük a Macskák Fejlődése oldalon!
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Bevezető szekció */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Mit találhat az oldalunkon?</h2>
          <p className="text-lg">
            Oldalunkon minden fontos információt megtalál a macskák fejlődéséről,
            a születéstől egészen felnőtt korukig.
          </p>
        </section>

        {/* Funkciók rács */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Életszakaszok kártya */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3">Életszakaszok</h3>
            <p className="mb-4">
              Ismerje meg a macskák különböző életszakaszait és azok jellemzőit.
            </p>
            <Link
              href="/life-stages"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              További információ
            </Link>
          </div>

          {/* Gondozási útmutató kártya */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3">Gondozási Útmutató</h3>
            <p className="mb-4">
              Részletes útmutató a különböző korú macskák megfelelő gondozásához.
            </p>
            <Link
              href="/care"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              További információ
            </Link>
          </div>
        </section>
      </main>
      {/* Lábléc */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Macskák Fejlődése. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}
