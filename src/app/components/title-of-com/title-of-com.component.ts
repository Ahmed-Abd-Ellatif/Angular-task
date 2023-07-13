import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-of-com',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-of-com.component.html',
  styleUrls: ['./title-of-com.component.scss'],
})
export class TitleOfComComponent {
  @Input() titleOfComponent: string = '';
}
