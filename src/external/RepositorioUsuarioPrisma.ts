import { PrismaClient, Usuario } from "@prisma/client";
import RepositorioUsuario from "../core/usuario/service/RepositorioUsuario";

export default class RepositorioUsuarioPrisma implements RepositorioUsuario {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }

    async consultarPorEmail(email: string): Promise<Usuario | null> {

        const usuario = await this.prisma.usuario.findUnique({
            where: {
                email: email
            }
        });
        return usuario;

    }
    async criar(usuario: Usuario): Promise<Usuario> {
        return await this.prisma.usuario.create({
            data: usuario
        });
    }
}