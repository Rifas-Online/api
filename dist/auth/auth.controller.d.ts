import { AuthService } from './auth.service';
import { AuthLoginDTO, AuthRegisterDTO } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: AuthLoginDTO): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            status: number;
            deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    register(body: AuthRegisterDTO): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            status: number;
            deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    me(user: any): Promise<{
        user: any;
    }>;
}
