import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users/users.module';

@Module({
  imports: [
      UsersModule,
      RecipesModule,
      RouterModule.register([
        {
          path: '/users',
          module: UsersModule,
        },
        {
          path: '/recipes',
          module: RecipesModule,
        },
        
      ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
