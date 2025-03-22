import { ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, inject, PLATFORM_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { isPlatformServer } from '@angular/common';



export const appConfig: ApplicationConfig = {
    providers: [
        
        provideAnimations(),
        provideHttpClient(withFetch()),
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes), 
        {
            provide: 'IS_SSR',
            useFactory: () => isPlatformServer(inject(PLATFORM_ID))
        },
        provideClientHydration(), 
        provideAnimationsAsync(), 
        provideClientHydration(withEventReplay())]
};