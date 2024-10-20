import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])], // Register Profile entity with TypeOrm
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
