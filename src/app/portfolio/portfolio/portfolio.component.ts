import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    TitleOfComComponent,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'ProjectName', 'using', 'links'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  ProjectName: string;
  position: number;
  using: string;
  links: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, ProjectName: 'admin panel', using: 'Angular', links: '' },
  { position: 2, ProjectName: 'chat app', using: 'React', links: '' },
  { position: 3, ProjectName: 'video clips', using: 'Vue', links: '' },
  {
    position: 4,
    ProjectName: 'Soundnode audio',
    using: 'Angular',
    links: '',
  },
  {
    position: 5,
    ProjectName: "Create a note's app",
    using: 'React',
    links: '',
  },
  { position: 6, ProjectName: 'Get to grips', using: 'Vue', links: '' },
  {
    position: 7,
    ProjectName: 'Create a Google Maps',
    using: 'Angular',
    links: '',
  },
  { position: 8, ProjectName: 'Build a weather app', using: 'Vue', links: '' },
  { position: 9, ProjectName: 'value tracker', using: 'React', links: '' },
  {
    position: 10,
    ProjectName: 'portfolio blog',
    using: 'Angular',
    links: '',
  },
  { position: 11, ProjectName: 'admin panel', using: 'Vue', links: '' },
  { position: 12, ProjectName: 'chat app', using: 'Angular', links: '' },
  {
    position: 13,
    ProjectName: 'Create a video clips',
    using: 'Vue',
    links: '',
  },
  { position: 14, ProjectName: 'Soundnode audio', using: 'React', links: '' },
  { position: 15, ProjectName: "note's app", using: 'Angular', links: '' },
  { position: 16, ProjectName: 'Get to grips', using: 'Vue', links: '' },
  {
    position: 17,
    ProjectName: 'Create a Google Maps',
    using: 'React',
    links: '',
  },
  { position: 18, ProjectName: 'weather app', using: 'Vue', links: '' },
  { position: 19, ProjectName: 'value tracker', using: 'Angular', links: '' },
  { position: 20, ProjectName: 'portfolio blog', using: 'React', links: '' },
];
