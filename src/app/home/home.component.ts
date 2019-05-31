import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  locations: [];

  searchCarForm = this.fb.group({
    location: new FormControl(null, Validators.required),
    start_date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required)
  });

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.api.getLocations().subscribe(res => this.locations = res);
  }

}
