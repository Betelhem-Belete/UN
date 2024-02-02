import express from 'express';

import { getNews } from '../../controllers/news.js';
import { createNew } from '../../controllers/news.js';

const router = express.Router();

router.get('/', getNews);
router.post('/', createNew);

export default router