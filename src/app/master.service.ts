import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MasterService {
  drawerOpen = new BehaviorSubject<boolean>(false);

  constructor() { }
}
