import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMoviesComponent } from './best-movie.component';

describe('BestMoviesComponent', () => {
  let component: BestMoviesComponent;
  let fixture: ComponentFixture<BestMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
