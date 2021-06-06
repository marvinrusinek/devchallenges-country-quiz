import { TestBed } from '@angular/core/testing';
import { CountryQuizComponent } from './country-quiz.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountryQuizComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CountryQuizComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'challenge6-quiz-app'`, () => {
    const fixture = TestBed.createComponent(CountryQuizComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('challenge6-quiz-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CountryQuizComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('challenge6-quiz-app app is running!');
  });
});
