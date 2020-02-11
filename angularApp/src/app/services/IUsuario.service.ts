import { Usuario } from '../model/usuario';

export interface IUsuarioService {

    estaLogeado(): boolean;

    /**
     * Comprueba que exista el usuario
     * @param nombre del usuario
     * @param password contraseña
     * @return Usario con datos si existe, undefined si no existe
     */
    login( nombre: string, password: string ): Usuario;

    cerrarSesion( idUsuario: number );

}
