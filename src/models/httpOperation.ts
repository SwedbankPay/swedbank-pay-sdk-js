export interface HttpOperation {
    contentType: string;
    href: URL;
    method: HttpMethod;
    rel: LinkRelation;
    request: HttpRequestMessage;
}