import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'dashboard',pathMatch:'full'
    },
    {
        path:'dashboard',component:DashboardComponent,children:[
            {
                path:'profile',component:ProfileComponent,children:[
                    {
                        path:'edit',component:ProfileComponent
                    }
                ]
            }
        ]
    },
    {
        path:'header',component:DashboardComponent
    }
];
