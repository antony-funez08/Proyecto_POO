
import express, { Request, Response } from 'express';
import cors from 'cors';
import {Database} from './utils/database';
import usuariosRouter from "./routes/usuarioRouter";
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.render('home'); 
});


app.use(usuariosRouter);



const database:Database = new Database(); 
const PORT = 3004;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

