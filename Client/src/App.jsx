import React from 'react';
import Navbar from './components/NavBar/NavBar'
import NewsBoard from './components/NewsBoard'
import NewsItem from './components/NewsItem'

const App = () => {
  return (
    <div>
      <Navbar />
      <NewsBoard />
      <NewsItem />
      <NewsItem />
    </div>
  );
}

export default App
