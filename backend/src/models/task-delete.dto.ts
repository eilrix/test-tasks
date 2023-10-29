import { IsString } from 'class-validator';

export class TaskDeleteDto {
  @IsString()
  id: string;
}
