import express from 'express';

// import { getNews } from '../../controllers/news.js';
import { getNews, createNew, editNew } from '../../controllers/news.js';

const router = express.Router();

router.get('/', getNews);
router.post('/', createNew);
router.patch('/:id', editNew);

export default router