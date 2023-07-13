import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TitleOfComComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  carouselData = [
    {
      img: '../../../assets/images/avatar-1.jpg',
      title: 'First slide label',
      desc: 'Some representative placeholder content for the first slide.',
    },
    {
      img: '../../../assets/images/avatar-2.jpg',
      title: 'Second slide label',
      desc: 'Some representative placeholder content for the first slide.',
    },
    {
      img: '../../../assets/images/avatar-3.jpg',
      title: 'Third slide label',
      desc: 'Some representative placeholder content for the first slide.',
    },
  ];
}
