# Macskák Fejlődése - Node.js Webalkalmazás

Ez a projekt egy egyszerű Node.js webalkalmazás, amely a macskák fejlődését és gondozását mutatja be három különböző oldalon keresztül.

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

## Projekt telepítése

1. Klónozd le vagy töltsd le a projektet
2. Nyiss egy PowerShell ablakot és navigálj a projekt mappájába:
   ```powershell
   Set-Location -Path "projekt_mappa_elérési_útja"
   ```
3. Telepítsd a függőségeket:
   ```powershell
   npm install
   ```

## Projekt struktúra

```
project-root/
├── src/
│   ├── server.js
│   └── public/
│       ├── index.html
│       ├── life-stages.html
│       ├── care.html
│       └── css/
│           └── style.css
└── package.json
```

## Függőségek

- **Express.js**: Webszerver keretrendszer
- **Nodemon**: Fejlesztői eszköz a szerver automatikus újraindításához (csak fejlesztési környezetben)

## Az alkalmazás indítása

### Fejlesztői módban
```powershell
npm run dev
```
vagy
```powershell
npx nodemon .\src\server.js
```

### Produkciós módban
```powershell
npm start
```
vagy
```powershell
node .\src\server.js
```

Az alkalmazás ezután elérhető a következő címen: [http://localhost:3000](http://localhost:3000)

## Elérhető oldalak

1. **Főoldal**: http://localhost:3000/
   - Áttekintést nyújt az oldalról
   - Navigációs linkek a többi oldalhoz

2. **Életszakaszok**: http://localhost:3000/life-stages.html
   - A macskák különböző életszakaszainak részletes bemutatása
   - Újszülött kortól felnőtt korig

3. **Gondozás**: http://localhost:3000/care.html
   - Részletes gondozási útmutató
   - Táplálkozási tanácsok
   - Egészségügyi ellátás
   - Környezeti igények

## Fejlesztői információk

### Szerver (server.js)
- Express.js alapú webszerver
- Statikus fájlok kiszolgálása a `public` mappából
- Port: 3000 (alapértelmezett)

### Frontend
- Reszponzív design
- Modern CSS tulajdonságok használata
- Mobilbarát felület
- Következetes navigációs struktúra

## Felhasznált AI promptok:
- Kérlek, hogy a kapcsolt fájlba készítsd el az alkalmazás dokumentációját. Szükséges, hogy a node.js telepítése és a node.js projekt létrehozását és konfigurálását is tartalmazza.
- A dokumentáció elkészült és tartalmazza az összes szükséges információt:

Node.js telepítési útmutató
Projekt telepítési lépések
Projekt struktúra leírása
Függőségek listája
Alkalmazás indítási útmutató (fejlesztői és produkciós módban)
Elérhető oldalak leírása
Fejlesztői információk