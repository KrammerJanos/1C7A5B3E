import Link from 'next/link';

export default function Care() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigációs sáv */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Főoldal
            </Link>
          </li>
          <li>
            <Link href="/life-stages" className="text-white hover:text-gray-300">
              Életszakaszok
            </Link>
          </li>
          <li>
            <Link 
              href="/care" 
              className="text-white hover:text-gray-300 font-bold"
            >
              Gondozás
            </Link>
          </li>
        </ul>
      </nav>

      {/* Fejléc */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Macskák Gondozása</h1>
      </header>

      {/* Fő tartalom */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="grid gap-8 md:grid-cols-3">
          {/* Táplálkozási kártya */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Táplálkozás</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Életkor szerinti táplálás</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>0-4 hét: Anyatej vagy tápszer</li>
                <li>4-8 hét: Elválasztás időszaka, lágy eledel</li>
                <li>2-12 hónap: Kölyökmacska táp</li>
                <li>Felnőtt: Kiegyensúlyozott felnőtt táp</li>
              </ul>
            </div>
          </article>

          {/* Egészségügyi ellátás kártya */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Egészségügyi Ellátás</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Alapvető egészségügyi teendők</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rendszeres oltások</li>
                <li>Féregtelenítés</li>
                <li>Bolha és kullancs elleni védelem</li>
                <li>Éves állatorvosi vizsgálat</li>
              </ul>
            </div>
          </article>

          {/* Környezeti igények kártya */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Környezeti Igények</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Szükséges felszerelések</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tiszta alomtálca</li>
                <li>Kaparófa</li>
                <li>Kényelmes fekvőhely</li>
                <li>Játékok</li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      {/* Lábléc */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Macskák Fejlődése. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}