import { Component, OnInit, Input } from '@angular/core';

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
