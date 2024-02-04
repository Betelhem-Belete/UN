import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getNews } from './actions/news'
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import NewsItems from './components/NewsItems';
import Form from './components/Form';

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [currentId]);

  return (
    <div>
      <Navbar />
      {/* <div>
      <NewsBoard />
      </div> */}
      <div className = 'row g-3'>
        <div className = 'col-md-8'>
        <NewsItems setCurrentId={setCurrentId}/>
        </div>
        <div className = 'col-md-4'>
        <Form currentId = {currentId} setCurrentId={setCurrentId}/>
        </div>
      </div>
    </div>
  );
}

export default App