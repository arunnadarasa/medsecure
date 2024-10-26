import React from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <FilterBar />
        <Gallery />
      </main>
    </div>
  );
}

export default App;