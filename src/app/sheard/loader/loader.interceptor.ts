import { LoaderService } from './../services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService : LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    return next.handle(request).pipe(
      finalize(()=>{
        setTimeout(()=>{
          this.loaderService.hide();
        },1000)
      })
    )
  }
}
