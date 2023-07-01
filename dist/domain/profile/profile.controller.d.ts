import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdatePatchProfileDTO } from './dto/update-patch-profile.dto';
import { UpdatePutProfileDTO } from './dto/update-put-profile.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(body: CreateProfileDTO, user: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        photoUrl: string;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}>;
    list(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        photoUrl: string;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {})[]>;
    show(user: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        photoUrl: string;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}>;
    update(body: UpdatePutProfileDTO, userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        photoUrl: string;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}>;
    updatePartial(body: UpdatePatchProfileDTO, userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        photoUrl: string;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}>;
    delete(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        photoUrl: string;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}>;
}
