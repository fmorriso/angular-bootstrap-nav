import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionExampleComponent } from './accordion-example.component';

describe('AccordionExampleComponent', () => {
	let component: AccordionExampleComponent;
	let fixture: ComponentFixture<AccordionExampleComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AccordionExampleComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccordionExampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
