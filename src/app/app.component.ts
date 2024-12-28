
import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { MenuComponent } from './presentation/menu/menu.component';
import { PushNotificationService } from './shared/services/push-notification.service';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    {
          provide: 'SW_MODULE',
          useValue: ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
          }),
    },
  ],
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-pwa-angular';
  constructor(
    //private push: PushNotificationService, 
    //private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    /* if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(event => {
        if (event.type === 'VERSION_READY') {
          if (confirm('Nova versão disponível. Deseja recarregar a página?')) {
            window.location.reload();
          }
        }
      });
    } */

    //this.push.adicionaPushSubscriber();
  }

  /* checkServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        console.log('Service Worker listo:', registration);
      }).catch(err => {
        console.log('Error al registrar el Service Worker:', err);
      });
    }
  } */
}
