import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
    {
        path: '',
        component: LoginComponent
    },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
