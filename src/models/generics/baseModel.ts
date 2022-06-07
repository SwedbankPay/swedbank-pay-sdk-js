import * as v from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class BaseModel {
    static make(data: unknown): BaseModel {
      const asset = plainToInstance(BaseModel, data);
      if (!v.validate(asset)) {
        throw new Error('invalid data.');
      }
      return asset;
    }
  }