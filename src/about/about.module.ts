import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { About } from './about.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  controllers: [AboutController],
  providers: [AboutService]
})
export class AboutModule {}
