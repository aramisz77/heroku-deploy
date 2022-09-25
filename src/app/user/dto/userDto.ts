import { IsBoolean, IsOptional, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @IsOptional()
  public id?: number;

  @ApiProperty()
  @MaxLength(255)
  public firstName: string;

  @ApiProperty()
  @MaxLength(255)
  public lastName: string;

  @ApiProperty()
  @IsBoolean()
  public isActive: boolean;
}
