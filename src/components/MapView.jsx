import React from 'react';

export function MapView() {
  return (
    // Container utama dengan tinggi tetap dan rounded corner
    <div className="relative w-full h-[600px] bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col items-center justify-center group">
      
      {/* 1. Background Grid Pattern (Teknik CSS Modern untuk efek peta teknik) */}
      <div className="absolute inset-0 z-0 opacity-[0.4]"
           style={{
             backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>

      {/* 2. Elemen Visual Tengah */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Icon Container dengan Animasi Pulse */}
        <div className="mb-6 relative">
           {/* Lingkaran Berdenyut */}
           <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
           
           {/* Lingkaran Utama */}
           <div className="relative w-20 h-20 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center">
             <span className="text-4xl filter drop-shadow-sm">🗺️</span>
           </div>
        </div>

        {/* Teks Judul */}
        <h3 className="text-xl font-bold text-[#19335A] mb-2">
          Area Peta Digital
        </h3>
        
        {/* Teks Deskripsi */}
        <p className="text-[#697A98] max-w-sm text-sm leading-relaxed mb-6">
          Peta interaktif persebaran sekolah akan dimuat di area ini. 
          Gunakan panel filter di sebelah kiri untuk menyaring data.
        </p>

        {/* Loading Bar Simulasi */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#4675C0] w-1/3 rounded-full animate-[loading_1s_ease-in-out_infinite]"></div>
        </div>

      </div>

      {/* Style Tambahan untuk animasi loading custom */}
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-150%); width: 20%; }
          50% { width: 60%; }
          100% { transform: translateX(250%); width: 20%; }
        }
      `}</style>

    </div>
  );
}