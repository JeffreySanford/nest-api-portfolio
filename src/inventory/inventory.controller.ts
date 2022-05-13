import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InventoryService, Item } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller()
export class InventoryController {
    constructor(private inventoryService: InventoryService) {
        console.log('inventory service construct')
        this.inventoryService = inventoryService;
    }

    @Get()
    findAll() {
        return this.inventoryService.findAll();
    }

    @Get('')
    findOne(@Param('name') name: string) {
        name = name.substring(1)
        return this.inventoryService.findOne(name);
    }

    @Post()
    create(@Body() createInventoryDto: CreateInventoryDto) {
        return this.inventoryService.create(createInventoryDto);
    }

    @Patch('')
    update(@Param('') item: Item, @Body() updateInventoryDto: UpdateInventoryDto) {
       console.dir('controller path inventory' + item);
        return this.inventoryService.update(item, updateInventoryDto);
    }

    // @Delete(':item')
    // remove(@Param('item') item: string) {
    //     return this.inventoryService.remove(item);
    // }
}
