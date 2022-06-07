import * as v from 'class-validator';
import { BaseModel } from './baseModel';
import { HttpMethod } from "../enums/HttpMethod";
import { LinkRelation } from "../enums/linkRelation";

export class HttpOperation extends BaseModel {
    @v.IsString()
    contentType: string;

    @v.IsUrl()
    href: URL;

    @v.IsEnum(HttpMethod)
    method: HttpMethod;

    @v.IsEnum(LinkRelation)
    rel: LinkRelation;

    @v.IsString()
    request: string;
}