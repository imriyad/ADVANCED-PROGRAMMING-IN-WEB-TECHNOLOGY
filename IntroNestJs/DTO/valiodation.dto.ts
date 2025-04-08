import { IsNotEmpty } from "class-validator";

export class check{
@IsNotEmpty({message:"Cannot be empty"});
title:string;
}
