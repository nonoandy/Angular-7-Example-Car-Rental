import { Component, OnInit, Input } from '@angular/core';

// Displays the week days and higlights the passed ones
@Component({
  selector: 'app-weekstatus',
  templateUrl: './weekstatus.component.html',
  styleUrls: ['./weekstatus.component.scss']
})
export class WeekStatusComponent implements OnInit {

  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

  getClassFor(weekday) {
    if (weekday && this.data.indexOf(weekday) > -1) {
      return 'badge badge-success';
    }
    return 'badge';
  }

}
