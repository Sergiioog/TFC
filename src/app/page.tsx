import React from 'react';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div>
      <main className="min-h-screen h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {/* bg-white min-h-screen h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] */}
        <Menu />
      </main>
    </div>
  );
}

