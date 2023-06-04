import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  customer: Customer = {
    id: null,
    name: '',
    address: '',
    phoneNumber: ''
  };

 constructor (private CustomerserviceService : CustomerserviceService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.CustomerserviceService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  addCustomer(): void {
    this.CustomerserviceService.createCustomer(this.customer)
      .subscribe(customer => {
        this.customers.push(customer);
        this.customer = {
          id: null,
          name: '',
          address: '',
          phoneNumber: ''
        };
      });
  }

  deleteCustomer(id: number): void {
    this.CustomerserviceService.deleteCustomer(id)
      .subscribe(() => {
        this.customers = this.customers.filter(customer => customer.id !== id);
      });
  }
}
