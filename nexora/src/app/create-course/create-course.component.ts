import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,MatCardModule,MatRadioModule],
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  @ViewChild('editorArea') editorArea!: ElementRef<HTMLTextAreaElement>;

  activeFormats = {
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false
  }

  execCmd(command: string, value?: string): void {
  
    document.execCommand(command, false, value);
 
  }
}
