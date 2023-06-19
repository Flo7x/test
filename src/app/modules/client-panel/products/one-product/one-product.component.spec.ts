/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneProductComponent } from './one-product.component';

describe('OneProductComponent', () => {
  let component: OneProductComponent;
  let fixture: ComponentFixture<OneProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
