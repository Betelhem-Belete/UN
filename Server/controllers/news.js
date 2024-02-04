import mongoose from 'mongoose';
import News from '../models/news.js';

export const getNews = async (req, res) => {
    try {
        const news =await News.find();

        res.status(200).json(news);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const createNew = async (req, res) => {
    const body = req.body;
        
    const newNews = new News(body);

    try{
        await newNews.save();

        res.status(201).json(newNews)
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}

export const editNew = async (req, res) => {
    const { id: _id } = req.params;
    const editingNew = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no news with that id');
    const editedNew = await News.findByIdAndUpdate(_id, {...editingNew, _id}, {new: true});
   
    res.json(editedNew);
}
