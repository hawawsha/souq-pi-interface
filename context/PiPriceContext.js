import { createContext, useContext, useState, useEffect } from 'react';

const PiPriceContext = createContext();

export function PiPriceProvider({ children }) {
  const [price, setPrice] = useState(4.25); // سعر افتراضي للتست نت

  useEffect(() => {
    // هنا يمكن إضافة كود جلب السعر من API مستقبلاً
    setPrice(4.25); 
  }, []);

  return (
    <PiPriceContext.Provider value={price}>
      {children}
    </PiPriceContext.Provider>
  );
}

export function usePiPrice() {
  return useContext(PiPriceContext);
}
