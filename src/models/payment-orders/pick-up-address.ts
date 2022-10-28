import * as v from 'class-validator';
import { Address } from '../address';

export class PickUpAddress extends Address{
    @v.IsString()
    name: string;
}