import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f4f4f9',
      minHeight: '100vh' 
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        display: 'inline-block'
      }}>
        <h1 style={{ color: '#673ab7', marginBottom: '10px' }}>Souq Pi Interface V3</h1>
        <p style={{ color: '#555' }}>مرحباً أحمد، واجهة التطبيق جاهزة للمراجعة</p>
        <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />
        <p>حالة الشبكة: <strong style={{ color: '#4caf50' }}>Pi Testnet Active</strong></p>
        <button 
          onClick={() => alert('تم تفعيل واجهة سوق باي بنجاح!')}
          style={{ 
            backgroundColor: '#673ab7', 
            color: 'white', 
            border: 'none', 
            padding: '12px 25px', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
          فتح المتجر
        </button>
      </div>
    </div>
  );
}
