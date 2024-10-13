import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";



const Api_Url: string = environment.apiUrl;

export const baseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  if (req.url?.startsWith('/api')) {
    return next(req.clone({
      url: req.url.replace('/api', Api_Url),
      withCredentials: true
    }));
  }

  return next(req);
};
