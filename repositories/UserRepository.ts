import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO usuario (correo, contraseña, nombre, ficha, numeroDocumento) VALUES (?, ?, ?, ?, ?)';
        const values = [user.correo, user.contraseña, user.nombre, user.ficha, user.numeroDocumento];
        return db.execute(sql, values);
    }

    static async valid(correo: string){
        const sql = 'SELECT contraseña FROM usuario WHERE correo=?';
        const values = [correo];
        return db.execute(sql,values);
    }
}


export default UserRepository;