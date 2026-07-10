import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

interface Sublist{
  label:string,
  route:string
}

interface Navlist{
  label:string,
  icon:string,
  route?:string,
  expanded?:boolean,
  children?:Sublist[],
}


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {



  navlist:Navlist[]=[

  { label: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
  { label: 'Users', icon: 'group', route: '/users' },
  {
    label: 'LMS',
    icon: 'school',
    expanded: true, 
    children: [
      { label: 'Courses', route: '/lms/create' },
      { label: 'Content bank', route: '' },
      { label: 'Categories', route: '' },
      { label: 'Tags', route: '' },
      { label: 'Coupons', route: '' },
      { label: 'Students', route: '' },
      { label: 'Announcement', route: '' },
      { label: 'Quiz Attempts', route: '' },
      { label: 'Enrollment', route: '' }
      ]
    } ,
    { label: 'Bulk Upload', icon: 'upload_file', route: '/users' },
    { label: 'Orders', icon: 'receipt_long', route: '/users' },
    { label: 'Scription', icon: 'credit_card', route: '/users' },
    { label: 'Payment', icon: 'account_balance_wallet', route: '/users' },
  ]


  toogle(link:Navlist){
    if(link.children){
      link.expanded=!link.expanded
    }
  }

}