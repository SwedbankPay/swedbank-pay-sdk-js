import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { AuthorizationTransaction } from './authorizationTransaction';

export class AuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => AuthorizationTransaction)
    cancellationList: AuthorizationTransaction[];
}