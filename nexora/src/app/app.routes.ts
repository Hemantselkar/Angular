import { Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AddCurriculuamComponent } from './add-curriculuam/add-curriculuam.component';
import { HeaderComponent } from './header/header.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';

export const routes: Routes = [
    {
        path:'',redirectTo:"layout",pathMatch:'full'
    },
    {
        path:'layout',component:LayoutComponent,children:[
            {
                path:'create',component:CreateCourseComponent,children:[
                    {
                        path:'side-nav',component:SideNavComponent
                    },
                    {
                        path:'add-curriculuam',component:AddCurriculuamComponent
                    },
                    {
                        path:'add-section',component:AddSectionComponent
                    },
                    {
                        path:'add-lecture',component:AddLectureComponent
                    }
                ]
            },
        ]
    },
   
];
