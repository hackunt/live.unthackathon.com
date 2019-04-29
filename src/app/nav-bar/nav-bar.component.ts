import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private masterService: MasterService) { }

  ngOnInit() {
  }

  toggleDrawer() {
    this.masterService.drawerOpen.next(!this.masterService.drawerOpen.value);
  }

}
