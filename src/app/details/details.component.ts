import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  query_input = '';

  trans_type = ['Transmission', 'Manual', 'Automatic'];
  trans_type_input = this.trans_type[0];

  car_type = ['Car', 'Hatchback', 'Sedan', 'SUV', 'Mini SUV'];
  car_type_input = this.car_type[0];

  fuel_type = ['Fuel', 'Petrol', 'Diesel'];
  fuel_type_input = this.fuel_type[0];

  sort_by = ['Sort', 'Price: Low to High', 'Price: High to Low'];
  sort_by_input = this.sort_by[0];

  details: any;

  items: any[] = [];
  page = 1;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getDetails().subscribe((res) => {
      this.details = res;

      this.filter();
    });
  }

  onChangeQuery($event) {
    this.filter();
  }

  onChangeTransType($event) {
    this.filter();
  }

  onChangeCarType($event) {
    this.filter();
  }

  onChangeFuelType($event) {
    this.filter();
  }

  onChangeSortBy($event) {
    this.sort();
  }

  filter() {
    let newItems: any[] = [...this.details];

    if (this.query_input && this.query_input.length > 2) {
      const query = this.query_input.trim().toLowerCase();

      newItems = newItems.filter(x => x['name'].toLowerCase().indexOf(query) > -1);
    }

    if (this.trans_type_input && this.trans_type_input !== this.trans_type[0]) {
      newItems = newItems.filter(x => x['transmission'] === this.trans_type_input);
    }

    if (this.car_type_input && this.car_type_input !== this.car_type[0]) {
      newItems = newItems.filter(x => x['car_Type'] === this.trans_type_input);
    }

    if (this.fuel_type_input && this.fuel_type_input !== this.fuel_type[0]) {
      newItems = newItems.filter(x => x['fuel_Type'] === this.fuel_type_input);
    }

    this.items.length = 0;
    this.items.push(...newItems);
  }

  sort() {
    if (this.sort_by_input && this.sort_by_input !== this.sort_by[0]) {
      switch (this.sort_by_input) {
        case this.sort_by[1]:
          this.items.sort((x: any, y: any) => {
            const xn = x['price'];
            const yn = y['price'];

            if (xn > yn) {
              return 1;
            }
            if (xn < yn) {
              return -1;
            }
            return 0;
          });
          break;

        case this.sort_by[2]:
          this.items.sort((x: any, y: any) => {
            const xn = x['price'];
            const yn = y['price'];

            if (xn > yn) {
              return -1;
            }
            if (xn < yn) {
              return 1;
            }
            return 0;
          });
          break;

        default:
          break;
      }
    }
  }

}
