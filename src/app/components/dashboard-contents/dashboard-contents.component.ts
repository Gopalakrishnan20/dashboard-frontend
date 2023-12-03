import { Component } from '@angular/core';
import { DashboardContentsService } from './dashboard-contents.service';

@Component({
  selector: 'app-dashboard-contents',
  templateUrl: './dashboard-contents.component.html',
  styleUrl: './dashboard-contents.component.css'
})
export class DashboardContentsComponent {

  constructor(
    private service: DashboardContentsService
  ){
    this.getDashBoardData()
  }

  ngOnInit(){
  }

  getDashBoardData(){
    this.service.getDashboardData().subscribe(res =>{
      if(res){
        this.service.topCards.next(res.top_cards);
        this.service.users.next(res.new_users);
        this.service.orderData.next(res.recent_orders);
      }      
    })
  }

}
