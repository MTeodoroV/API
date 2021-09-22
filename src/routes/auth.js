import { Router } from 'express';
import AuthController from '../controller/authController';

const Route = Router();

Route.post('/', AuthController.Login);
Route.get('/logout', AuthController.Logout);

export default Route;