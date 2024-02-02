import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getNews } from './actions/news'
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import NewsItems from './components/NewsItems';
import Form from './components/Form';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* <div>
      <NewsBoard />
      </div> */}
      <div className = 'row g-3'>
        <div className = 'col-md-8'>
        <NewsItems />
        </div>
        <div className = 'col-md-4'>
        <Form />
        </div>
      </div>
    </div>
  );
}

export default App