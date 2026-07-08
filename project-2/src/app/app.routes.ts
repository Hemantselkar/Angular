import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'home',pathMatch:'full'
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'dashboard',component:DashboardComponent,children:[
           
            {
                path:'addcategory',component:AddComponent
            },
           
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
