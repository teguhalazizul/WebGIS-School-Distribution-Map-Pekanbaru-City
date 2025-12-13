import React from 'react';

export function FilterPanel() {
  // Palet Warna:
  // Dark: #19335A
  // Primary: #4675C0
  // Muted: #697A98
  
  return (
    <aside className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Header Filter */}
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-[#19335A] flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
          Filter Data
        </h3>
        <button className="text-xs font-medium text-[#4675C0] hover:text-[#19335A] hover:underline transition-colors">
          Reset
        </button>
      </div>

      {/* Container Opsi - Layout Vertikal (Stack) */}
      <div className="p-5 space-y-6">

        {/* Group 1: Jenjang */}
        <div>
          <h4 className="text-sm font-semibold text-[#19335A] mb-3 uppercase tracking-wider">Jenjang</h4>
          <div className="space-y-2.5">
            {['SD / MI', 'SMP / MTs', 'SMA / SMK'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:bg-[#4675C0] checked:border-[#4675C0] focus:ring-2 focus:ring-[#4675C0]/20 transition-all" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-sm text-[#697A98] group-hover:text-[#4675C0] transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" /> {/* Divider Halus */}

        {/* Group 2: Status */}
        <div>
          <h4 className="text-sm font-semibold text-[#19335A] mb-3 uppercase tracking-wider">Status</h4>
          <div className="space-y-2.5">
            {['Negeri', 'Swasta'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:bg-[#4675C0] checked:border-[#4675C0] focus:ring-2 focus:ring-[#4675C0]/20 transition-all" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-sm text-[#697A98] group-hover:text-[#4675C0] transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" />

        {/* Group 3: Akreditasi */}
        <div>
          <h4 className="text-sm font-semibold text-[#19335A] mb-3 uppercase tracking-wider">Akreditasi</h4>
          <div className="flex flex-wrap gap-2">
            {['A', 'B', 'C', 'TT'].map((item) => (
              <label key={item} className="cursor-pointer relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-10 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-500 bg-slate-50 peer-checked:bg-[#4675C0] peer-checked:text-white peer-checked:border-[#4675C0] hover:bg-slate-100 transition-all">
                  {item}
                </div>
              </label>
            ))}
          </div>
        </div>

      </div>
      
      {/* Footer Filter (Optional Button) */}
      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <button className="w-full py-2.5 bg-[#19335A] hover:bg-[#142847] text-white text-sm font-medium rounded-lg shadow-sm transition-colors">
          Terapkan Filter
        </button>
      </div>
    </aside>
  );
}