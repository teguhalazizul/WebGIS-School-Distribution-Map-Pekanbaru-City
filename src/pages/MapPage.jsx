import React from 'react';
import { MapView } from "../components/MapView";
import { FilterPanel } from "../components/FilterPanel"; 

export default function MapPage() {
  return (
    // PERBAIKAN:
    // 1. Hapus 'min-h-screen' (karena tinggi sudah diatur parent di App.js)
    // 2. Ubah 'pb-8' jadi 'pb-12' atau sesuaikan selera, tapi pastikan 'h-full' atau 'w-full'
    // 3. 'pt-24' tetap agar tidak ketutup Navbar
    <main className="w-full bg-gradient-to-b from-[#F0F8FF] via-white to-white pt-24 pb-12">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#19335A] tracking-tight">
              Peta Persebaran Sekolah
            </h2>
            <p className="text-[#697A98] mt-1">
              Eksplorasi lokasi dan data sekolah di seluruh wilayah Kota Pekanbaru.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#B6BFD6] shadow-sm text-sm text-[#19335A]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System Online
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 z-10">
            <FilterPanel />
          </div>

          {/* Map Container */}
          <div className="lg:col-span-3">
             {/* Pastikan container peta punya tinggi pasti (min-h) 
                agar footer terdorong ke bawah dengan rapi.
             */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(143,200,235,0.15)] border border-[#B6BFD6]/50 overflow-hidden min-h-[600px] relative z-0">
               <MapView />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}