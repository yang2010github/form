import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.styl']
})
export class AdminComponent implements OnInit {
  orders: any[];

  constructor(private orderService: OrderService ) { }

  ngOnInit() {
    this.orderService.getOrders()
    .subscribe((orders: any[]) => this.orders = orders);
  }

}
