import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioMemoria {
    private readonly usuarios: Usuario[] = []

    async consultarPorEmail(email: string) {
        return this.usuarios.find(usuario => usuario.email === email) || null;
    }
    async criar(usuario: Usuario) {
        const novoId = this.usuarios.length + 1;
        usuario.id = novoId;
        this.usuarios.push(usuario);
    }
}