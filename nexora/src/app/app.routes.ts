import { Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';

export const routes: Routes = [
    {
        path:'',redirectTo:"create",pathMatch:'full'
    },{
        path:'create',component:CreateCourseComponent
    }
];
