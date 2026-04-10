import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#673ab7' }}>Souq Pi Interface V3</h1>
      <p>واجهة التطبيق تعمل بنجاح - مرحباً أحمد</p>
      <button style={{ backgroundColor: '#673ab7', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
        تفعيل الاتصال بـ Pi
      </button>
    </div>
  );
}
