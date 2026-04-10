const handleNav = (targetPage) => {
  if (targetPage === 'explore') {
    showToast('🔍 جاري عرض المنتجات المميزة في سوق Pi...');
    setPage('section');
    setSection('Electronics'); // توجيه تلقائي لقسم نشط لإظهار الحركة
  } else if (targetPage === 'orders') {
    showToast('📦 جاري تحميل سجل طلباتك من الشبكة...');
    // هنا يمكن توجيهه لصفحة الطلبات لاحقاً
  } else if (targetPage === 'sell') {
    showToast('🏪 جاري فتح بوابة التجار...');
  }
};
