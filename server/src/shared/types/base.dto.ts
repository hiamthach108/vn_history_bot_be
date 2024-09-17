import { Transform } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value || undefined)
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  metadata?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  updatedAt?: Date;
}
