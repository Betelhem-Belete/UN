import React from 'react'
import axios from 'axios'

const url = 'http://localhoost:5000/news';

export const fetchNews = () => axios.get(url);

