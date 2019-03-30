import { Component, OnInit } from '@angular/core';
import { AngularVersionInformationService } from '../shared/angular-version-information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private compName: string = 'FooterComponent';
  public angularVersion: string;

  constructor(private ngVersionInfo: AngularVersionInformationService) {
    console.log(`${this.compName} - constructor`);
  }

  ngOnInit() {
    this.angularVersion = this.ngVersionInfo.versionFull;
    console.log(`${this.compName} - ngOninit - version=${this.angularVersion}`);
  }
}
