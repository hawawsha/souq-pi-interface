import React from 'react';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px'
      }}>
        <h1 style={{ color: '#673ab7', marginBottom: '8px' }}>
          Souq PI Backend
        </h1>
        <p style={{ color: '#666', marginBottom: '24px' }}>
          الخادم يعمل بنجاح ✅
        </p>
        <div style={{ textAlign: 'left', backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '16px' }}>
          <p style={{ margin: '8px 0', color: '#333' }}>🔗 /api/auth</p>
          <p style={{ margin: '8px 0', color: '#333' }}>🔗 /api/products</p>
          <p style={{ margin: '8px 0', color: '#333' }}>🔗 /api/categories</p>
        </div>
      </div>
    </div>
  );
}
