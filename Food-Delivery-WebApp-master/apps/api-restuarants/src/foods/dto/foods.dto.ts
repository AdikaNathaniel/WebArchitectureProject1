import { Field, InputType } from "@nestjs/graphql";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateFoodDto {
  @Field()
  @IsNotEmpty({ message: "Product Name is required." })
  @IsString({ message: "Product Name must need to be one string." })
  name: string;

  @Field()
  @IsNotEmpty({ message: "Product description is required." })
  @IsString({ message: "Product description must need to be one string." })
  description: string;

  @Field()
  @IsNotEmpty({ message: "Product price is required." })
  price: number;

  @Field()
  @IsNotEmpty({ message: "Product estimated price is required." })
  estimatedPrice: number;

  @Field()
  @IsNotEmpty({ message: "Product category is required." })
  @IsString({ message: "Product category must need to be one string." })
  category: string;

  @Field(() => [String])
  @IsArray({ message: "Product images must be an array." })
  @ArrayNotEmpty({ message: "Product images array must not be empty." })
  images: string[];
}

@InputType()
export class DeleteFoodDto {
  @Field()
  @IsNotEmpty({ message: "Product id is required." })
  @IsString({ message: "Product id must need to be one string." })
  id: string;
}
