export interface HttpRequestLike {
  headers?: Record<string, string>;
}

export interface HttpHandlerLike {
  handle(request: HttpRequestLike): unknown;
}

export class AuthInterceptor {
  intercept(request: HttpRequestLike, next: HttpHandlerLike): unknown {
    return next.handle(request);
  }
}