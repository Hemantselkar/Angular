import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { Router } from '@angular/router';


@Component({
  selector: 'app-add-lecture',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatRadioModule],
  templateUrl: './add-lecture.component.html',
  styleUrl: './add-lecture.component.scss'
})
export class AddLectureComponent {
  @ViewChild('editorArea') editorArea!: ElementRef<HTMLTextAreaElement>;
  thumbnail :string|null=null;
  video:string | null = null;
  isClick:boolean=false;
  isModule:boolean=false;
  activeFormats = {
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false
  }
    
  constructor(private router:Router){}
  
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

}
