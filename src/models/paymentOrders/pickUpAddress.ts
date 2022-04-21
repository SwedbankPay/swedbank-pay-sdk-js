import { Address } from "../address";
import * as v from 'class-validator';

export class PickUpAddress extends Address{
    @v.IsString()
    name: string;
}