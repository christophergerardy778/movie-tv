import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFullScreenComponent } from './card-full-screen.component';

describe('CardFullScreenComponent', () => {
  let component: CardFullScreenComponent;
  let fixture: ComponentFixture<CardFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
