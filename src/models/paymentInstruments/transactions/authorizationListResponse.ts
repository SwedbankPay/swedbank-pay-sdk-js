import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { Identifiable } from '../../generics/identifiable';
import { AuthorizationTransaction } from './authorizationTransaction';

export class AuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => AuthorizationTransaction)
    cancellationList: AuthorizationTransaction[];
}