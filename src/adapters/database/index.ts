import { connectDBMoongose } from './mongoose';

export const connectDB = async () => {
    connectDBMoongose();
};