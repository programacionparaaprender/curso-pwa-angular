import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { routes } from './app.routes';
import { environment } from '../enviroment/enviroment';
import { enableProdMode } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';

if (environment.production) {
  enableProdMode();
}


export const appConfig: ApplicationConfig = {
  providers: [
    {
         provide: HTTP_INTERCEPTORS,
         useClass: HttpInterceptorService,
         multi: true
    },
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: 'SW_MODULE',
      useValue: ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
      }),
    },
  ]
};
