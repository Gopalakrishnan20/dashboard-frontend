import { Component } from '@angular/core';
import { DashboardContentsService } from '../dashboard-contents.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.css'
})
export class RecentOrdersComponent {
  orderData:any;
  selectedOrderDetails: any

  constructor(
    private service: DashboardContentsService
  ){  
  }

  ngOnInit(){
    this.service.orderData.subscribe(res =>{
      this.orderData = res;
      console.log("*** this.orderData", this.orderData);
    })
  }

  openModal(orderData: any){
    this.selectedOrderDetails = orderData;
  }

}
