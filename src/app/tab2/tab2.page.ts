import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  appCrash() {
    this.appCrash();
  }
}
