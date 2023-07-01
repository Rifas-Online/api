import { Profile, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdatePatchProfileDTO } from './dto/update-patch-profile.dto';
import { UpdatePutProfileDTO } from './dto/update-put-profile.dto';
export declare class ProfileService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(body: CreateProfileDTO, user: User): Promise<Profile>;
    list(): Promise<Profile[]>;
    show(userId: number): Promise<Profile>;
    update(userId: number, data: UpdatePutProfileDTO): Promise<Profile>;
    updatePartial(userId: number, { bio, name, photoUrl }: UpdatePatchProfileDTO): Promise<Profile>;
    delete(userId: number): Promise<Profile>;
    exists(id: number): Promise<void>;
    existsUserProfile(userId: number): Promise<{
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
    throwErrorProfileDoesNotExist(id: number): void;
}
