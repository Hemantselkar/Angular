import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VerifyComponent } from './verify/verify.component';
import { NewPasswordComponent } from './new-password/new-password.component';

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
    },
    {
        path:'verify',component:VerifyComponent
    },
    {
        path:'newPasswored',component:NewPasswordComponent
    }
];
