import React from 'react'
import { useSelector } from 'react-redux';

import NewsItem from './components/NewsItem'

const NewsItems = () => {
  return (
    <div>
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default NewsItems
