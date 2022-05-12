import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
      UsersModule,
      RecipesModule,
      InventoryModule,
      RouterModule.register([
        {
          path: '/users',
          module: UsersModule,
        },
        {
          path: '/recipes',
          module: RecipesModule,
        },
        {
          path: '/inventory',
          module: InventoryModule,
        }
      ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
