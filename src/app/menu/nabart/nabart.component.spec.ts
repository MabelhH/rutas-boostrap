import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabartComponent } from './nabart.component';

describe('NabartComponent', () => {
  let component: NabartComponent;
  let fixture: ComponentFixture<NabartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
