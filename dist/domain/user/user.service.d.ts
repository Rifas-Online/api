import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateUserDTO): Promise<User>;
    list(): Promise<User[]>;
    show(id: number): Promise<User>;
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
    update(id: number, data: UpdatePutUserDTO): Promise<User>;
    updatePartial(id: number, { email, password }: UpdatePatchUserDTO): Promise<User>;
    delete(id: number): Promise<User>;
    exists(id: number): Promise<void>;
}
