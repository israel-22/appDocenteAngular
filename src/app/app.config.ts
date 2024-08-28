import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-75b64","appId":"1:449740175647:web:3218d7ae665fe13095582a","storageBucket":"app-pokemon-75b64.appspot.com","apiKey":"AIzaSyBoWZGcvEl5cmrXFu_ZTU_6jjENE3GPHak","authDomain":"app-pokemon-75b64.firebaseapp.com","messagingSenderId":"449740175647","measurementId":"G-1YDL6JY42B"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-fa6eb","appId":"1:518889483874:web:7ccaea04d78fe7e4252b3b","storageBucket":"app-pokemon-fa6eb.appspot.com","apiKey":"AIzaSyDz9zIzxS1wWUEvQDLzkegssfmhGgEIlOc","authDomain":"app-pokemon-fa6eb.firebaseapp.com","messagingSenderId":"518889483874","measurementId":"G-YV6KMX8GS0"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ]
};
