import React from 'react';
import { useSelector } from 'react-redux';

import NewsItem from './NewsItem';
// import { Spinner } from 'react-bootstrap';     // Import the Spinner component from React Bootstrap

const NewsItems = ({ setCurrentId }) => {
  const news = useSelector((state) => state.news);
  // console.log(news);

  return !news.length ? (
    <h1>no news</h1>
  ) : (
    <div className="container">
      <div className="row">
        {news.map((singleNew) => (
          <div key={singleNew._id} className="col-xs-12 col-sm-6">
            <NewsItem singleNew={singleNew} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsItems;
