import CasoDeUso from "../../../shared/CasoDeUso";
import Usuario from "../../model/Usuario";
import RepositorioUsuario from "../interfaces/RepositorioUsuario";

export default class ConsultarUsuarios implements CasoDeUso<void, Usuario[]> {

    constructor(private readonly repositorio: RepositorioUsuario) { }

    async executar(): Promise<Usuario[]> {


        const usuarios = await this.repositorio.consultarTodos();

        if (!usuarios) {
            throw new Error('Não há usuários cadastrados');
        }

        return usuarios;
    }
}