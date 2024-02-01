import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyparser.json({ limit: "30mb", extended: true}));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const DB_URL = 'mongodb+srv://uninews:uninews@cluster0.qp0nwzv.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL)
    .then( () => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
