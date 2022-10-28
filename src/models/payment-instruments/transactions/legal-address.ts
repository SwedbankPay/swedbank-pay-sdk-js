import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class LegalAddress extends BaseModel {
  @v.IsUrl()
  id: URL;

  @v.IsString()
  addressee: string;

  @v.IsString()
  coAddress: string;

  @v.IsString()
  streetAddress: string;

  @v.IsString()
  zipCode: string;

  @v.IsString()
  city: string;

  @v.IsString()
  countryCode: string;
}
