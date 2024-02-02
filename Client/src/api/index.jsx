import React from 'react'
import axios from 'axios'

const url = 'http://127.0.0.1:5000/news';

export const fetchNews = () => axios.get(url);
export const createNew = (newNew) => axios.post(url, newNew);
