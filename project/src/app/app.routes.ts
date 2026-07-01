import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BLoginComponent } from './b-login/b-login.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { SellerComponent } from './seller/seller.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'home',pathMatch:'full'
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'b-login',component:BLoginComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'login',component:LoginComponent,children:[
            {
                path:'profile',component:ProfileComponent
            },
            {
                path:'orders',component:OrdersComponent
            },
            {
                path:'seller',component:SellerComponent
            }
        ]
    }
];
