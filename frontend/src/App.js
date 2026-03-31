import React, { useState, useEffect } from 'react';

function App() {
  const [veri, setVeri] = useState(null);

  useEffect(() => {
    fetch('http://44.192.27.187:5000/api/hava-durumu')
      .then(res => res.json())
      .then(data => setVeri(data))
      .catch(err => console.log("Hata:", err));
  }, []);

  return (
    <div style={{ backgroundColor: '#1a1a2e', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#00d2ff', marginBottom: '30px' }}>☁️ Bulut Bilişim Proje Paneli</h1>
      
      {veri ? (
        <div style={{ background: '#16213e', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #0f3460', textAlign: 'center', width: '350px' }}>
          <h2 style={{ fontSize: '2.5em', margin: '10px 0' }}>{veri.derece}°C</h2>
          <p style={{ fontSize: '1.2em', color: '#e94560', fontWeight: 'bold' }}>{veri.durum}</p>
          <hr style={{ margin: '20px 0', borderColor: '#0f3460' }} />
          <p>📍 <strong>Konum:</strong> {veri.sehir}</p>
          <p>🌐 <strong>Sunucu:</strong> {veri.sunucu}</p>
          <p>🔑 <strong>IP:</strong> {veri.ip}</p>
          <p style={{ marginTop: '20px', fontSize: '0.8em', color: '#533483' }}>Son Güncelleme: {veri.zaman}</p>
        </div>
      ) : (
        <p>Bulut sunucusuna bağlanılıyor...</p>
      )}
      
      <p style={{ marginTop: '40px', color: '#444' }}>AWS EC2 Instance Connect • React • Node.js</p>
    </div>
  );
}

export default App;
