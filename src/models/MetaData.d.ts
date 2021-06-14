import { GenericResource } from "./GenericResource";

export interface MetaData extends GenericResource {
    [property: string]: any //eslint-disable  @typescript-eslint/no-explicit-any
}