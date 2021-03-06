import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './recipe.class';

@Controller()
export class RecipesController {
  recipes: Array<Recipe>
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    name = name.substring(1)
    return this.recipesService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(+name, updateRecipeDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.recipesService.remove(+name);
  }
}
