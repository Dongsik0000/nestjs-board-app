import { Module } from '@nestjs/common';  
import { BoardsModule } from './boards/boards.module'; // Boards 모듈 임포트  
import { BlogModule } from './blog/blog.module'; // Blog 모듈 임포트  
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './configs/database.config';

@Module({  
  imports: [
    ConfigModule.forRoot(),
    BoardsModule,
    BlogModule
  ],  
  controllers: [],  
  providers: [
    {
      provide : 'DATABASE_CONFIG',
      useValue : databaseConfig
    }
  ],
  exports: ['DATABASE_CONFIG']
})  
export class AppModule {}