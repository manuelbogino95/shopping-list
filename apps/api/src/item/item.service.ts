import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return this.itemRepository.save(createItemDto);
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.itemRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    return this.itemRepository.save({ ...item, ...updateItemDto });
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.itemRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    return item;
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async remove(id: number): Promise<void> {
    const result = await this.itemRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
  }
}
