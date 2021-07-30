import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMovieComponent } from './footer-movie.component';

describe('FooterMovieComponent', () => {
  let component: FooterMovieComponent;
  let fixture: ComponentFixture<FooterMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
