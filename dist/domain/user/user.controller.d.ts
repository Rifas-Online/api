import { CreateUserDTO, UpdatePatchUserDTO, UpdatePutUserDTO } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: CreateUserDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    list(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    show(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    showProfile(id: number): Promise<{
        profile: import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            photoUrl: string;
            bio: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        }, unknown> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(body: UpdatePutUserDTO, id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updatePartial(body: UpdatePatchUserDTO, id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        status: number;
        deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
