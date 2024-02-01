import News from '../models/news.js';

export const getNews = async (req, res) => {
    try {
        const news =await News.find();

        res.status(200).json(news);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const createNews = async (req, res) => {
    const body = req.body;
        
    const newNews = new News(post);

    try{
        await newNews.save();

        res.status(201).json(newNews)
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}
