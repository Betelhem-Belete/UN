import express from 'express';

// import { getNews } from '../../controllers/news.js';
import {
  getNews,
  createNew,
  editNew,
  deleteNew,
} from '../../controllers/news.js';

const router = express.Router();

router.get('/', getNews);
router.post('/', createNew);
router.patch('/:id', editNew);
router.delete('/:id', deleteNew);

export default router;
