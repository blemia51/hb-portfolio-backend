// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';  // Import UsersService

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Validate the user by checking username and password
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUserEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;  // Exclude password from the result
      return result;
    }
    return null;
  }

  // Generate a JWT token for authenticated users
  async login(user: any) {
    const payload = { username: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
