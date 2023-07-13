import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOfComComponent } from './title-of-com.component';

describe('TitleOfComComponent', () => {
  let component: TitleOfComComponent;
  let fixture: ComponentFixture<TitleOfComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TitleOfComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleOfComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
