import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapExampleComponent } from './ngx-bootstrap-example.component';

describe('NgxBootstrapExampleComponent', () => {
	let component: NgxBootstrapExampleComponent;
	let fixture: ComponentFixture<NgxBootstrapExampleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxBootstrapExampleComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxBootstrapExampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
