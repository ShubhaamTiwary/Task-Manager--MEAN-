import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WebReqInterceptor } from './web-req.interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule),{
    provide : HTTP_INTERCEPTORS, useClass : WebReqInterceptor, multi: true
  }]
};
