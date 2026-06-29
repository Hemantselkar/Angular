import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormsComponent } from './forms/forms.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GetAPIComponent } from './api-demo/get-api/get-api.component';

export const routes: Routes = [
    {
        path:'',component:TicTacToeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'forms', component:FormsComponent
    },
    {
        path:'api-demo/get-api',component:GetAPIComponent
    }
    
];
