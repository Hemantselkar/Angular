import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';

export const routes: Routes = [
    {
        path: '',redirectTo: 'login', pathMatch: 'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'sign-up',component:SignUpComponent
    },
    {
        path:'forgot',component:ForgotComponent
    }
];
