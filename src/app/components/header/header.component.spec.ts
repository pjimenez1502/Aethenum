import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should show logo', () => {

    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();

  })

  it('should show searchbar', () => {

    expect(fixture.nativeElement.querySelector('[data-test="searchbar"]')).toBeTruthy();

  })
});
