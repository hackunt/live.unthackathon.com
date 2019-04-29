import { Component } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackunt-live';
  drawerOpen = false;

  constructor(private masterService: MasterService) {
    this.masterService.drawerOpen.subscribe(open => this.drawerOpen = open);
  }

  closeDrawer() {
    this.masterService.drawerOpen.next(false);
  }
}
