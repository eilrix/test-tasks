import { IsString, MaxLength, MinLength } from 'class-validator';

export class TaskUpdateDto {
  @IsString()
  id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  description: string;
}
