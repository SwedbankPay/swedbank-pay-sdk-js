import { HttpMethod } from "./enums/HttpMethod";
import { LinkRelation } from "./enums/linkRelation";

export interface HttpOperation {
    contentType: string;
    href: URL;
    method: HttpMethod;
    rel: LinkRelation;
    request: string;
}