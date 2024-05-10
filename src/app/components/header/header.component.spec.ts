import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should display logo', async () => {
    const imgDe : DebugElement = fixture.debugElement;
    const imgElement = imgDe.query(By.css('#logo')).nativeElement;
    
    expect(imgElement).toBeVisible();

  })

  it('should display searchbar', async () => {
    const searchbarDe : DebugElement = fixture.debugElement;
    const searchbarElement = searchbarDe.query(By.css('#search')).nativeElement;

    expect(searchbarElement).toBeVisible();
  })

  // it('should show categories', () => {

  //   expect(fixture.nativeElement.querySelector('[data-test="cd-category"]')).toBeTruthy();
  //   expect(fixture.nativeElement.querySelector('[data-test="book-category"]')).toBeTruthy();
  //   expect(fixture.nativeElement.querySelector('[data-test="movie-category"]')).toBeTruthy();
  //   expect(fixture.nativeElement.querySelector('[data-test="series-category"]')).toBeTruthy();
  //   expect(fixture.nativeElement.querySelector('[data-test="game-category"]')).toBeTruthy();

  // })



});
