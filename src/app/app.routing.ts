import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes : Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
