export interface HttpResponseException extends Exception {
    httpResponse: HttpResponseMessage;
    problemResponse: Problem;
}