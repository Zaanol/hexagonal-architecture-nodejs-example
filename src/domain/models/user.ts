import { Document, Schema, model } from 'mongoose';

export interface User extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default model<User>('User', userSchema);