self.addEventListener('install', (e) => {
  self.skipWaiting(); // บังคับให้ Service Worker ทำงานทันที
});

self.addEventListener('fetch', (e) => {
  // ปล่อยผ่าน (ดึงข้อมูลใหม่จากเน็ตเสมอ จะได้ไม่อืดเวลาเราแก้โค้ดฝั่ง GAS)
  return; 
});
