
# Macskák Fejlődése – Next.js Webalkalmazás

Ez a projekt egy modern Next.js alapú webalkalmazás, amely a macskák fejlődését és gondozását mutatja be három különböző oldalon keresztül.

## Rendszerkövetelmények

- Git
- Node.js (v14.0.0 vagy újabb)
- npm (Node Package Manager)

## Node.js telepítése

1. Látogass el a [Node.js hivatalos oldalára](https://nodejs.org/)
2. Futtasd a telepítőt, és kövesd a telepítési útmutatót
3. A telepítés ellenőrzéséhez nyiss egy PowerShell ablakot és írd be:
   ```powershell
   node -v
   npm -v
   ```

## Projekt telepítése és indítása

1. Klónozd le vagy töltsd le a projektet
2. Nyiss egy PowerShell ablakot és navigálj a projekt mappájába:
   ```powershell
   Set-Location -Path "projekt_mappa_elérési_útja"
   ```
3. Telepítsd a függőségeket:
   ```powershell
   npm install
   ```
4. Indítsd el a fejlesztői szervert:
   ```powershell
   npm run dev
   ```
   Az alkalmazás ezután elérhető a következő címen: [http://localhost:3000](http://localhost:3000)

## Projekt struktúra

```
project-root/
├── nextjs-1C7A5B3E/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── care/
│   │   │   └── page.tsx
│   │   ├── life-stages/
│   │   │   └── page.tsx
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   └── ...
├── package.json
└── Readme.md
```

## Főbb technológiák és függőségek

- **Next.js**: React alapú webalkalmazás keretrendszer
- **React**: Felhasználói felület komponensek
- **Tailwind CSS** (vagy egyedi CSS): Modern, reszponzív stílusok (lásd: `globals.css`)

## Az alkalmazás indítása

### Fejlesztői módban
```powershell
npm run dev
```

### Produkciós build
```powershell
npm run build
npm start
```

## Elérhető oldalak

1. **Főoldal**: http://localhost:3000/
   - Áttekintést nyújt az oldalról
   - Navigációs linkek a többi oldalhoz

2. **Életszakaszok**: http://localhost:3000/life-stages
   - A macskák különböző életszakaszainak részletes bemutatása
   - Újszülött kortól felnőtt korig

3. **Gondozás**: http://localhost:3000/care
   - Részletes gondozási útmutató
   - Táplálkozási tanácsok
   - Egészségügyi ellátás
   - Környezeti igények

## Fejlesztői információk
- Az alap stílusokat a `app/globals.css` tartalmazza
- Oldalak: `app/page.tsx`, `app/life-stages/page.tsx`, `app/care/page.tsx`

## Felhasznált AI promptok
- Kérlek, hogy a kapcsolt fájlba készítsd el az alkalmazás dokumentációját. Szükséges, hogy a node.js telepítése és a node.js projekt létrehozását és konfigurálását is tartalmazza.
- A dokumentáció elkészült és tartalmazza az összes szükséges információt:
  - Node.js telepítési útmutató
  - Projekt telepítési lépések
  - Projekt struktúra leírása
  - Függőségek listája
  - Alkalmazás indítási útmutató (fejlesztői és produkciós módban)
  - Elérhető oldalak leírása
  - Fejlesztői információk