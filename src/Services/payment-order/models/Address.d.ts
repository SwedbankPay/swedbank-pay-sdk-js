import * as v from 'class-validator';
import { BaseModel } from '../../../models/generics/base-model';

export class Address extends BaseModel{
  /**
   * The name of the adressee.
   */
  @v.IsString()
  name?: string;
  /**
   * The street address of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  @v.IsString()
  streetAddress?: string;
  /**
   * The coAddress of the addressee if there is one.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  @v.IsString()
  coAddress?: string;
  /**
   * The city of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  @v.IsString()
  city?: string;
  /**
   * The ZIP code of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  @v.IsString()
  zipCode?: string;
  /**
   * The country code of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  @v.IsString()
  countryCode?: string;
}
