import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
export interface Item {
	name: string;
	id: number;
	quantity: number;
}
@Injectable()
export class InventoryService {
	private inventory: Item[] = [];
	constructor() {
		this.config();
	}
	create(item: Item, createUserDto: CreateInventoryDto) {
		this.inventory.push(item);
		return this.inventory;
	}

	findAll(): Array<Item> {
		return this.inventory;
	}

	findOne(id: number): Item {
		console.log('findOne')
		let item: Item;
		this.inventory.map((item: Item) => {
			if (item.id === id) {
				console.log(item.name)
				return item;
			}
		});

		return item;
	}

	update(newItem: Item, updateRecipeDto: UpdateInventoryDto): Array<Item> {
		console.log('service with new item ' + newItem.quantity);
		this.inventory.map((item) => {
			if (newItem) {
				console.dir(newItem);
				console.dir(item);
				if (item.name === newItem.name) {
					console.log('item quantity is ' + item.quantity)
					const index = this.inventory.indexOf(item)
					this.inventory[index] = newItem;

					return this.inventory;
				}
			}
		});

		return this.inventory;
	}

	config() {
		this.inventory.push({ name: 'Butter', id: 0, quantity: 103 });
		this.inventory.push({ name: 'Carmel', id: 1, quantity: 10 });
		this.inventory.push({ name: 'Sugar', id: 2, quantity: 206 });
		this.inventory.push({ name: 'Dried Cranberries', id: 3, quantity: 46 });
	}
}
