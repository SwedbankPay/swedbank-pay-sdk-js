import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';

export class Urls extends BaseModel {
    @v.IsUrl()
    callbackUrl: URL;

    @v.IsUrl()
    cancelUrl: URL;

    @v.IsUrl()
    completeUrl: URL;

    @v.IsArray()
    @Type( () => URL)
    hostUrls: URL[];
    
    @v.IsUrl()
    logoUrl: URL;

    @v.IsUrl()
    paymentUrl: URL;

    @v.IsUrl()
    termsOfServiceUrl: URL;
}