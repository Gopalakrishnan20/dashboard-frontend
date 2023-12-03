import { Component } from '@angular/core';
import { DashboardContentsService } from '../dashboard-contents.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrl: './top-cards.component.css'
})
export class TopCardsComponent {

  topCardData: any;

  constructor(
    private service: DashboardContentsService
  ){  
  }

  ngOnInit(){
    this.service.topCards.subscribe(res =>{
      this.topCardData = res;
      console.log("*** this.topCardData", this.topCardData);
    })
  }

}
