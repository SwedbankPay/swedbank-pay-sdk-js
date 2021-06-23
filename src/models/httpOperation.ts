export interface HttpOperation {
    contentType: string;
    href: Uri;
    method: HttpMethod;
    rel: LinkRelation;
    request: HttpRequestMessage;
}