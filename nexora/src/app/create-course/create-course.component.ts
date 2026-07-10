import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SideNavComponent } from "../side-nav/side-nav.component";

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCardModule,
    MatRadioModule,

  ],
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  @ViewChild('editorArea') editorArea!: ElementRef<HTMLTextAreaElement>;
  thumbnail :string|null=null;
  video:string | null = null;

  activeFormats = {
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false
  }

  constructor(private router:Router){

  }

  execCmd(command: string, value?: string): void {
    document.execCommand(command, false, value);
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (!input?.files?.length) {
      return;
    }

    const file = input.files[0];
    console.log(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      this.thumbnail = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  removeThumbnail(){
   this.thumbnail = null;
  }


  onVideoSelect(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (!input?.files?.length) {
      return;
    }

    const file = input.files[0];
    if (!file.type.startsWith('video/')) {
      console.warn('Please select a valid video file');
      return;
    }

    this.video = file.name;

    if (this.video) {
      URL.revokeObjectURL(this.video);
    }
    this.video = URL.createObjectURL(file);
  }  

  removeVideo(): void {
    if (this.video) {
      URL.revokeObjectURL(this.video);
    }
    this.video = null;
    this.video = null;
  }



  next(){
    this.router.navigate(['add-curriculuam'])
  }

}
