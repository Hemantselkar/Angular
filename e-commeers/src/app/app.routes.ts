import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'seller-auth',component:SellerAuthComponent
    },{
        path:'orders',component:OrdersComponent
    }
];
