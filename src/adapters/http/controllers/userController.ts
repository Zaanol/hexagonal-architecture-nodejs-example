import { Request, Response } from 'express';
import { UserService } from '../../../application/services/userService';

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        this.createUser = this.createUser.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    public async createUser(req: Request, res: Response, next): Promise<void> {
        console.log(req.body);
        try {
            const newUser = await this.userService.createUser(req.body);

            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }

    public async getUser(req: Request, res: Response, next): Promise<void> {
        try {
            const id = (req as any).user.userId;

            const user = await this.userService.getUserById(id);

            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }

            res.json(user);
        } catch (error) {
            next(error);
        }
    }
}