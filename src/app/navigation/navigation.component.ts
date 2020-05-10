import {
	Component,
	ElementRef,
	OnInit,
	VERSION,
	ViewChild,
} from '@angular/core';
/**
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 */
@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
	@ViewChild('navbarToggler', { read: true }) navbarToggler: ElementRef;

	angularVersion: string;

	constructor() {}

	ngOnInit() {
		this.angularVersion = VERSION.full;
	}

	// collapse the "hamburger stack" if it is currently expanded.
	// Should be called on the click event of each navigation anchor.
	// Example:
	/*
	   <li class="nav-item" routerLinkActive="active">
          <a (click)="collapseNav()" class="nav-link" [routerLink]="['/home']">Home</a>
       </li>
       <li class="nav-item" routerLinkActive="active">
           <a (click)="collapseNav()" class="nav-link" [routerLink]="['/about']">About</a>
       </li>
	*/
	collapseNav() {
		if (this.navBarTogglerIsVisible()) {
			console.log('collapseNav in NavigationComponent clicking navbarToggler');
			this.navbarToggler.nativeElement.click();
		}
	}

	private navBarTogglerIsVisible() {
		const isVisible: boolean =
			this.navbarToggler.nativeElement.offsetParent !== null;
		return isVisible;
	}
}
