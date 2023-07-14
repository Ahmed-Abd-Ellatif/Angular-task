import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleOfComComponent } from '../title-of-com/title-of-com.component';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TitleOfComComponent, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  todos: any;

  constructor(private _service: ServiceService, private _router: Router) {}

  ngOnInit(): void {
    this._service.getAllTodos().subscribe((res) => {
      this.todos = res;
      console.log('test', this.todos);
    });
  }

  viewMore(id: any) {
    this._router.navigate([`products/${id}`]);
  }
}
