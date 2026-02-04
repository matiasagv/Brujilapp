import { enableProdMode, importProvidersFrom } from '@angular/core'; // <--- OJO AQUÍ: importProvidersFrom
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// 1. Importar el módulo de Storage
import { IonicStorageModule } from '@ionic/storage-angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    
    // 2. Aquí inicializas el Storage para toda la app
    importProvidersFrom(IonicStorageModule.forRoot()) 
  ],
});