import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { HighlightSpanKind } from 'typescript';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  get angularVersion(): string {
    return VERSION.full;
  }

  constructor() {
    // this.navbarToggler = new ElementRef(null);
  }

  ngAfterViewInit(): void {
    /* 		if (this.navbarToggler) {
			console.log('ngAfterViewInit: navbarToggler is defined');
			if (this.navbarToggler.nativeElement) {
				console.log('ngAfterViewInit: navbarToggler.nativeElement is defined');
			} else {
				console.warn('ngAfterViewInit: navbarToggler.nativeElement was undefined or null.');
			}
		} else {
			console.warn('ngAfterViewInit: navbarToggler was undefined or null.');
		} */
  }

  ngOnInit() {}

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
      console.log('collapseNav: in NavigationComponent clicking navbarToggler');
      this.navbarToggler.nativeElement.click();
    } else {
      console.log(
        'collapseNav: navBarTogglerIsVisible() returned false or is undefined.'
      );
    }
  }

  // 2021-03-21 does not work because the ElementRef navbarToggler is always undefined
  private navBarTogglerIsVisible() {
    let isVisible = false;
    if (this.navbarToggler) {
      if (this.navbarToggler.nativeElement) {
        console.log('navbarToggler.nativeElement is defined');
        isVisible = this.navbarToggler.nativeElement.offsetParent !== null;
      } else {
        console.warn('navbarToggler.nativeElement was undefined or null.');
      }
    } else {
      console.warn('navbarToggler was undefined or null.');
    }

    return isVisible;
  }
}
