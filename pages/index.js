import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#673ab7' }}>Souq Pi Interface V3</h1>
      <p>التطبيق قيد المراجعة - واجهة المطور أحمد</p>
      <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
        <p>حالة الاتصال بالشبكة: <strong>Pi Testnet</strong></p>
        <button onClick={() => alert('مرحباً بك في سوق باي')} 
                style={{ backgroundColor: '#673ab7', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
          تفعيل الواجهة
        </button>
      </div>
    </div>
  );
}
