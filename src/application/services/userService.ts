import { UserRepository } from '../../infrastructure/repositories/userRepository';
import { UserDTO } from '../dtos/userDTO';
import { User } from '../../domain/models/user';
import { validateUser } from '../validators/userValidator';

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async createUser(userDTO: UserDTO): Promise<User> {
        const validationError = validateUser(userDTO);
        if (validationError) {
            throw new Error(validationError);
        }

        return await this.userRepository.createUser(userDTO);
    }

    public async getUserById(userId: string): Promise<User | null> {
        const user = await this.userRepository.findUserById(userId);

        return user;
    }
}