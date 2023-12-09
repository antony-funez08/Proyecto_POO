// controllers/userController.ts
import { Request, Response } from 'express';
import users, { Iusuario } from '../model/usuario';



export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const usuario = await users.find();
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };








