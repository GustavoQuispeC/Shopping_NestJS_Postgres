import { IsString, MinLength, IsNumber, IsPositive, IsOptional, IsInt, IsArray, IsIn } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    title: string;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsOptional()
    @IsPositive()
    stock?: number;

    @IsString({ each: true})
    @IsArray()
    sizes: string[];

    @IsString()
    @IsIn(['men','women','kid','unisex'])
    gender: string;
}
