import React from 'react';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div>
      <main className="min-h-screen h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Menu />
      </main>
    </div>
  );
}

