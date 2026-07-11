import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-section',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './add-section.component.html',
  styleUrl: './add-section.component.scss'
})
export class AddSectionComponent {
   @ViewChild('editorArea') editorArea!: ElementRef<HTMLTextAreaElement>;

    isModule:boolean=false;
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

    module(){
      this.isModule=true
    }
    addLecture(){
      this.router.navigate(['layout/create/add-lecture'])
    }
}
