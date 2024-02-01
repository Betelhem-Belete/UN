import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(body-parser.json({ limit: "30mb", extended: true}));
app.use(body-parser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());