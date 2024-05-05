import { UserDTO } from '../dtos/userDTO';

export const validateUser = (user: UserDTO): string | null => {
    if (!user.username || user.username.trim() === '') {
        return 'Username is required';
    }

    if (!user.email || user.email.trim() === '') {
        return 'Email is required';
    }

    if (!isValidEmail(user.email)) {
        return 'Invalid email format';
    }

    if (!user.password || user.password.trim() === '') {
        return 'Password is required';
    }

    return null;
};

const isValidEmail = (email: string): boolean => {
    // Implemente sua lógica de validação de email aqui, como regex ou uso de bibliotecas
    return /\S+@\S+\.\S+/.test(email);
};