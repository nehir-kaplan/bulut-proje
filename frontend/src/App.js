import React, { useEffect, useState } from 'react';

function App() {
  const [mesaj, setMesaj] = useState("Yükleniyor...");

  useEffect(() => {
    fetch('http://localhost:5000/api/mesaj')
      .then(res => res.json())
      .then(data => setMesaj(data.mesaj))
      .catch(err => setMesaj("Backend'e ulaşılamadı!"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#007bff' }}>Bulut Bilişim Projesi</h1>
      <div style={{ padding: '20px', border: '1px solid #ddd', display: 'inline-block', borderRadius: '10px' }}>
        <p>Sunucudan Gelen Veri:</p>
        <h2 style={{ color: '#28a745' }}>{mesaj}</h2>
      </div>
    </div>
  );
}

export default App;