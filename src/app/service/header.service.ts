import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public headerSel = new BehaviorSubject(-1)
  constructor() {}

  getHeaderSel(): Observable<any> {
    return this.headerSel.asObservable()
  }
}
