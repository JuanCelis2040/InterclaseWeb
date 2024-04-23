import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import { Request, Response } from "express";


let register = async (req: Request, res: Response) => {
  try {
    const {
      correo,
      contraseña,
      nombre,
      ficha,
      numeroDocumento
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedContraseña = await bcrypt.hash(contraseña, salt);
    const result = await UserRepository.add(new User(correo, nombre, ficha, numeroDocumento, hashedContraseña));
    return res.status(201).send(
      { status: 'registro exitoso', contraseña_hasheada: hashedContraseña }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;