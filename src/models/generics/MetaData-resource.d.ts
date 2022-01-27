import * as v from 'class-validator'
import { GenericResource } from "./GenericResource";

export class MetaData extends GenericResource {
    @v.IsArray()
    [property: string]: any //eslint-disable  @typescript-eslint/no-explicit-any
}