import { Model } from 'mongoose';
import { User } from '../../domain/models/user';
import userModel from '../../domain/models/user';
import { UserDTO } from '../../application/dtos/userDTO';

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    findUserById(userId: string): Promise<User | null>;
}

export class UserRepository implements IUserRepository {
    private userModel: Model<User>;

    constructor(userModel: Model<User>) {
        this.userModel = userModel;
    }

    public async createUser(userDTO: UserDTO): Promise<User> {
        const newUser = new this.userModel({
            username: userDTO.username,
            email: userDTO.email,
            password: userDTO.password
        });

        return await newUser.save();
    }

    public async findUserById(userId: string): Promise<User | null> {
        return await this.userModel.findById(userId).exec();
    }
}

export default new UserRepository(userModel);