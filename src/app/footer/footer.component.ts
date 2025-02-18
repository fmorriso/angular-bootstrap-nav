import { Component, OnInit } from '@angular/core';
import { AngularVersionInformationService } from '../shared/angular-version-information.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  private compName = 'FooterComponent';
  get angularVersion(): string {
    return this.ngVersionInfo.versionFull;
  }

  constructor(private ngVersionInfo: AngularVersionInformationService) {
    console.log(`${this.compName} - constructor`);
  }

  ngOnInit(): void {
    console.log(`${this.compName} - ngOninit - version=${this.angularVersion}`);
  }
}
