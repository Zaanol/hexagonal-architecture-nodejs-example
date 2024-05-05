import { Request, Response } from 'express';
import { UserService } from '../../../application/services/userService';

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public async createUser(req: Request, res: Response, next): Promise<void> {
        try {
            const newUser = await this.userService.createUser(req.body);

            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }

    public async getUser(req: Request, res: Response, next): Promise<void> {
        try {
            const userId = (req as any).user.userId; // Supondo que o ID do usuário foi incluído no token JWT durante a autenticação

            // Chamar o serviço para obter informações do usuário pelo ID
            const user = await this.userService.getUserById(userId);

            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }

            // Retornar as informações do usuário para o cliente
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
}