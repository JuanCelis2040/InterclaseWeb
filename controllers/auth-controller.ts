const bcrypt = require("bcryptjs");
const db = require('../config/config-db.js');
import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

let auth = async (req: Request, res: Response) => {
      try {
        const {correo, contraseña} = req.body;
        const result: any = UserRepository.valid
        if (result[0].length > 0){
          const ValidarContraseña = await bcrypt.compare(contraseña, result[0][0].contraseña);
          if (ValidarContraseña){
            return res.status(200).json({ 
              status: 'Login exitoso'
            });
          }
        }
        return res.status(401).json({ 
          status: 'Usuario o contraseña invalidos'
        });
      } catch (error) {
        console.log(error);
      }
}


export default auth;