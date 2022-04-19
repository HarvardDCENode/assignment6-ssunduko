import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

/**
 * Define component spec
 */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
});

