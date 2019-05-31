import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getDetails().subscribe((res) => {
      this.details = res;
    });
  }

}
