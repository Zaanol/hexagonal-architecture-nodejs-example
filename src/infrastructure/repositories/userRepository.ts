import { Model } from 'mongoose';
import { User } from '../../domain/models/user';
import userModel from '../../domain/models/user';
import { UserDTO } from '../../application/dtos/userDTO';
import { v4 as uuidv4 } from 'uuid';

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    findUserById(userId: string): Promise<User | null>;
}

export class UserRepository implements IUserRepository {
    private userModel: Model<User>;

    constructor(userModel: Model<User>) {
        this.userModel = userModel;
    }

    public async findUserByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    public async createUser(userDTO: UserDTO): Promise<User> {
        const newUser = new this.userModel({
            uuid: uuidv4(),
            username: userDTO.username,
            email: userDTO.email,
            password: userDTO.password
        });

        return await newUser.save();
    }

    public async findUserById(id: string): Promise<User | null> {
        return await this.userModel.findOne({ id }).exec();
    }
}

export default new UserRepository(userModel);