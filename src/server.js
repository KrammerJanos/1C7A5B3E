const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname, 'public')));

// Kezdőoldal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Szerver indítása
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});