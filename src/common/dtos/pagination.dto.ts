import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //! convert to number
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) //! convert to number
  offset?: number;
}
