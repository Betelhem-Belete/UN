import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import newsRouter from './routes/news/news.js';

const app = express();
// app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors(
     origin: ['https://unew.vercel.app'],
     credentials: true,
    };
));
app.use('/news', newsRouter);

const DB_URL = 'mongodb+srv://uninews:uninews@cluster0.qp0nwzv.mongodb.net/UN';
const PORT = process.env.PORT || 5000;
// const corsOptions = {
//     origin: 'http://localhost:5173', // Change this to your frontend origin
//     credentials: true, // If you need to support cookies, headers with credentials, etc.
// };
mongoose
  .connect(DB_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
