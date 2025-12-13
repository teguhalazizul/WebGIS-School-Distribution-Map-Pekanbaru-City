import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  // Palet Warna:
  // Dark:    #19335A (Background Utama)
  // Pale:    #B6BFD6 (Teks)
  // Light:   #8FC8EB (Hover & Aksen)
  // Primary: #4675C0 (Border/Garis)

  return (
    <footer className="relative bg-[#19335A] text-[#B6BFD6] mt-auto">
      
      {/* Decorative Top Border (Gradient Line) */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8FC8EB] via-[#4675C0] to-[#19335A]" />

      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* === Kolom 1: Identitas Brand === */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white mb-2">
              {/* Logo Icon Kecil */}
              <div className="w-10 h-10 rounded-lg bg-[#4675C0] flex items-center justify-center shadow-lg shadow-blue-900/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                   <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight">
                WebGIS Sekolah
              </h4>
            </div>
            
            <p className="text-sm leading-relaxed text-[#B6BFD6]/80 max-w-sm">
              Sistem Informasi Geografis berbasis web untuk menampilkan
              persebaran sekolah SD, SMP, dan SMA/SMK di Kota Pekanbaru
              secara interaktif dan real-time.
            </p>
          </div>

          {/* === Kolom 2: Info Kampus === */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              Institusi
              <span className="block w-8 h-0.5 bg-[#4675C0] rounded-full"></span>
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#4675C0] mt-0.5">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.182-.311a3.046 3.046 0 001.62-2.717V8.329c0-.222-.03-.44-.09-.648A50.785 50.785 0 014.5 5l.818-.386a50.329 50.329 0 0110.545-2.214z" />
                  <path d="M7.5 14.25v2.25a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a49.408 49.408 0 00-8.25 0z" />
                </svg>
                <span>Politeknik Caltex Riau</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#4675C0] mt-0.5">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                </svg>
                <span>Program Studi Teknik Informatika</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#4675C0] mt-0.5">
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
                <span>Tahun 2025</span>
              </li>
            </ul>
          </div>

          {/* === Kolom 3: Navigasi === */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              Navigasi
              <span className="block w-8 h-0.5 bg-[#4675C0] rounded-full"></span>
            </h5>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-[#8FC8EB] hover:translate-x-2 transition-all duration-300 inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/peta" className="hover:text-[#8FC8EB] hover:translate-x-2 transition-all duration-300 inline-block">
                  Peta Persebaran
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-[#8FC8EB] hover:translate-x-2 transition-all duration-300 inline-block">
                  Tentang Sistem
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* === Copyright Section === */}
        <div className="border-t border-[#4675C0]/20 pt-8 text-center">
          <p className="text-xs text-[#B6BFD6]/60">
            © 2025 WebGIS Persebaran Sekolah Kota Pekanbaru — Politeknik Caltex Riau. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}