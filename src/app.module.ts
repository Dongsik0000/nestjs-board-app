import { Module } from '@nestjs/common';  
import { BoardsModule } from './boards/boards.module'; // Boards 모듈 임포트  
import { BlogModule } from './blog/blog.module'; // Blog 모듈 임포트  

@Module({  
  imports: [BoardsModule, BlogModule], // 두 모듈 모두 포함  
  controllers: [],  
  providers: [],  
})  
export class AppModule {}