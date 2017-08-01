import {Component, OnInit, VERSION} from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	private compName: string = 'FooterComponent';
	public angularVersion: string;

	constructor() {
		console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		this.angularVersion = VERSION.full;
		console.log(`${this.compName} - ngOninit - version=${this.angularVersion}`);
	}

}
