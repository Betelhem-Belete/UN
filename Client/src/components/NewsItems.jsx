import React from 'react'
import { useSelector } from 'react-redux';

import NewsItem from './NewsItem'

const NewsItems = () => {
    const news = useSelector((state) => state.news);
    console.log(news);
    return (
    <div>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default NewsItems
