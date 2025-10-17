import Link from 'next/link';

export default function LifeStages() {
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
            <Link 
              href="/life-stages" 
              className="text-white hover:text-gray-300 font-bold"
            >
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
        <h1 className="text-4xl font-bold">Macskák Életszakaszai</h1>
      </header>

      {/* Fő tartalom */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="grid gap-8 md:grid-cols-2">
          {/* Újszülött szakasz */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Újszülött (0-2 hét)</h2>
            <p className="mb-3">Ebben a korban a kiscicák:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Teljesen függnek az anyjuktól</li>
              <li>Csukott szemmel születnek</li>
              <li>Napi 20-22 órát alszanak</li>
            </ul>
          </article>

          {/* Korai kölyökkor szakasz */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Korai kölyökkor (2-8 hét)</h2>
            <p className="mb-3">Főbb fejlődési pontok:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kinyílik a szemük</li>
              <li>Elkezdenek járni</li>
              <li>Megkezdődik a szocializáció</li>
            </ul>
          </article>

          {/* Kölyökkor szakasz */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Kölyökkor (2-12 hónap)</h2>
            <p className="mb-3">Ebben az időszakban:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gyors fizikai növekedés</li>
              <li>Játékos viselkedés</li>
              <li>Vadászösztönök fejlődése</li>
            </ul>
          </article>

          {/* Felnőttkor szakasz */}
          <article className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Felnőttkor (1-7 év)</h2>
            <p className="mb-3">A felnőtt macska jellemzői:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Teljes fizikai fejlettség</li>
              <li>Kialakult személyiség</li>
              <li>Stabil viselkedési minták</li>
            </ul>
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