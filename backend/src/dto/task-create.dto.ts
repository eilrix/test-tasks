import { IsString, MaxLength, MinLength } from 'class-validator';

export class TaskCreateDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  description: string;
}
