const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));

app.get('/api/hava-durumu', (req, res) => {
    res.json({
        sehir: "Ankara",
        derece: 11,
        durum: "Bulutlu",
        sunucu: "AWS Virginia (USA)",
        ip: "44.192.27.187",
        zaman: new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul' })
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend ${PORT} portunda çalışıyor`);
});
