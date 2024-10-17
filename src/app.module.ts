import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AboutService } from './about/about.service';
import { AboutModule } from './about/about.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'portfolio_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'src', 'assets'), // Path to your assets folder
  }),
  ProjectsModule,
  ContactModule, 
  AuthModule, 
  UsersModule, 
  AboutModule, ExperienceModule,
],
})
export class AppModule {}
