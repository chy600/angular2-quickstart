import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: __moduleName,
  selector: 'app-customer',
  templateUrl: 'customer.component.html'
})

export class CustomerConponent implements OnInit {
  @Input() customer: { id: number, name: string };

  myColor = 'gray';


  ngOnInit() { }
}
