import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'dashboard',pathMatch:'full'
    },
    {
        path:'dashboard',component:DashboardComponent,children:[
            {
                path:'profile/:id',component:ProfileComponent,children:[
                    {
                        path:'edit',component:EditComponent
                    }
                ]
            }
        ]
    },
    {
        path:'header',component:DashboardComponent
    }
];
