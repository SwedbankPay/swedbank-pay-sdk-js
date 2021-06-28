import { HttpMethod } from "./HttpMethod";
import { LinkRelation } from "./linkRelation";

export interface HttpOperation {
    contentType: string;
    href: URL;
    method: HttpMethod;
    rel: LinkRelation;
    request: string;
}