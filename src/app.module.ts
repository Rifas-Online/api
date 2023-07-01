import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './domain/profile/profile.module';
import { UserModule } from './domain/user/user.module';

@Module({
	imports: [
		forwardRef(() => ProfileModule),
		forwardRef(() => UserModule),
		forwardRef(() => AuthModule),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
