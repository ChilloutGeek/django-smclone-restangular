import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelistsComponent } from './sidelists.component';

describe('SidelistsComponent', () => {
  let component: SidelistsComponent;
  let fixture: ComponentFixture<SidelistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidelistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
