import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
//const url = 'http://127.0.0.1:5000/news';
const url = 'https://unews-snowy.vercel.app/news';

export const fetchNews = () => axios.get(url);
export const createNew = (newNew) => axios.post(url, newNew);
export const editNew = (_id, editedNew) =>
  axios.patch(`${url}/${_id}`, editedNew);
export const deleteNew = (id) => axios.delete(`${url}/${id}`);
