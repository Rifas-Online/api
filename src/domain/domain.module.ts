import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';

const Domains = [ProfileModule, UserModule, AuthModule];

@Module({
	imports: [...Domains],
	exports: [...Domains],
})
export class DomainModule {}
