import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
         
           provideStorage(() => getStorage()),
            provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-fa6eb",
              "appId":"1:518889483874:web:7ccaea04d78fe7e4252b3b",
              "storageBucket":"app-pokemon-fa6eb.appspot.com",
              "apiKey":"AIzaSyDz9zIzxS1wWUEvQDLzkegssfmhGgEIlOc",
              "authDomain":"app-pokemon-fa6eb.firebaseapp.com",
              "messagingSenderId":"518889483874",
              "measurementId":"G-YV6KMX8GS0"})), 
              provideAuth(() => getAuth()), 
              provideAnalytics(() => getAnalytics()),
               ScreenTrackingService, UserTrackingService,
                provideFirestore(() => getFirestore()),
                 provideStorage(() => getStorage()), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(),
  ]
                 
};
