import React from 'react';
import Header from './component/Header';
import Game from './pages/Game';
import  { useState, useEffect } from 'react';



const App: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>(1);
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-blue-600 p-8'>
      <Header onCategoryChange={setCategoryId} />
      <Game categoryId={categoryId} />
    </div>
  );
};

export default App;