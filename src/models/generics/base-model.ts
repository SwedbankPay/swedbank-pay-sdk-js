import { plainToInstance } from 'class-transformer';
import * as v from 'class-validator';

export class BaseModel {
    static make(data: unknown): BaseModel {
      const asset = plainToInstance(BaseModel, data);
      if (!v.validate(asset)) {
        throw new Error('invalid data.');
      }
      return asset;
    }
  }