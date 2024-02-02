import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getNews } from './actions/news'
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import NewsItem from './components/NewsItem';
import Form from './components/Form';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <NewsBoard />
      <NewsItems />
      <Form />
    </div>
  );
}

export default App