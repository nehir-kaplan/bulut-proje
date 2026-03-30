const express = require('express'); // Sunucu oluşturmamızı sağlayan kütüphane
const cors = require('cors');       // Frontend'in backend'e erişmesine izin veren güvenlik ayarı
const app = express();

app.use(cors()); // CORS ayarını aktif ediyoruz

// Tarayıcıdan veya Frontend'den bir istek geldiğinde bu mesajı gönderecek
app.get('/api/mesaj', (req, res) => {
  res.json({ mesaj: "Bulut projesi backend'den selamlar!" });
});

// Sunucunun çalışacağı kapı (port) numarası
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend ${PORT} portunda başarıyla çalışıyor`);
});