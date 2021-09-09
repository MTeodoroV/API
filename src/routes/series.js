import { Router } from 'express';
import { findAll,  getSeriesById, addSeries, updateSeries, deleteSeries } from '../controller/seriesController';

const Route = Router();

Route.get('/series', findAll);
Route.get('/series/:id', getSeriesById);
Route.post('/addSeries', addSeries);
Route.put('/updateSeries/:id', updateSeries);
Route.delete('/deleteSeries/:id', deleteSeries);

export default Route;