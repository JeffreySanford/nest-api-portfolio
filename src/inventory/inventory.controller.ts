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

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id.slice(1))
        const idNumber = parseInt(id.slice(1));
        console.log('controller '+ idNumber, typeof id)
        return this.inventoryService.findOne(idNumber);
    }

    @Post()
    create(@Body() item: Item, createInventoryDto: CreateInventoryDto) {
        return this.inventoryService.create(item, createInventoryDto);
    }

    @Patch()
    updateItemQuantity(@Param('inventory') item: Item, @Body('item') updateInventoryDto: UpdateInventoryDto) {
        console.dir('controller path inventory' + item);
        return this.inventoryService.update(item, updateInventoryDto);
    }

    // @Delete(':item')
    // remove(@Param('item') item: string) {
    //     return this.inventoryService.remove(item);
    // }
}
