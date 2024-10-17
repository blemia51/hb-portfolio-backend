import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env globally
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use a secure, environment-protected key
      signOptions: { expiresIn: process.env.JWT_EXPIRATION || '3600s'},
    }),
    UsersModule
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
