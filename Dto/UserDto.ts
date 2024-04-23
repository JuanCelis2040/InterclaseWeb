class User {
    correo: string;
    contraseña: string;
    nombre: string;
    ficha: string;
    numeroDocumento: string
    constructor(
        correo: string, contraseña: string,
        nombre: string, ficha: string,
        numeroDocumento: string
    ) {
        this.correo = correo;
        this.contraseña = contraseña;
        this.nombre = nombre;
        this.ficha = ficha;
        this.numeroDocumento = numeroDocumento
    }
}

export default User;