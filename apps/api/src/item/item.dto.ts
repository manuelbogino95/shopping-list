import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @IsOptional()
  purchased: boolean;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}
