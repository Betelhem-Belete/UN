import React from 'react'
import axios from 'axios'

const url = 'unews-snowy.vercel.app';

export const fetchNews = () => axios.get(url);
export const createNew = (newNew) => axios.post(url, newNew);
