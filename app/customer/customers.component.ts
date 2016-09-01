import { Component, OnInit } from '@angular/core';

import {CustomerConponent} from "./customer.component";
import {CustomerService} from "./customer.service";

@Component({
  moduleId: __moduleName,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  directives: [CustomerConponent],
  providers: [CustomerService]
})

export class CustomersComponent implements OnInit {
  customers: any[];

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this.customers = this._customerService.getCustomers();
  }
}
