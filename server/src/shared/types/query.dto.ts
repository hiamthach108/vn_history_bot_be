import { IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
export class QueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @IsOptional()
  pageSize?: number;

  @ApiPropertyOptional()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional()
  @IsOptional()
  orderBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  isAsc?: boolean;
}
