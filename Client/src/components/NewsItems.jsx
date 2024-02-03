import React from 'react'
import { useSelector } from 'react-redux';

import NewsItem from './NewsItem'
// import { Spinner } from 'react-bootstrap';     // Import the Spinner component from React Bootstrap

const NewsItems = () => {
    const news = useSelector((state) => state.news);
    console.log(news);

return (
    <div>
        <NewsItem />
    </div>
    // !news.length ? <Spinner animation="border" /> : (
    //     <div className="container">
    //         <div className="row">
    //             {news.map((New) => (
    //                 <div key={New.id} className="col-xs-12 col-sm-6">
    //                     <NewsItem post={New} />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    
);
}

export default NewsItems
