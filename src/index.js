import express from 'express';
import bodyParser from 'body-parser';
import CORS from 'cors';
import Movie from './routes/movie';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

app.use('/movie', Movie);

app.listen(3000);
