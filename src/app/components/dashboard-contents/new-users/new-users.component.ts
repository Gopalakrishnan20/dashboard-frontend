import { Component } from '@angular/core';
import { DashboardContentsService } from '../dashboard-contents.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent {
  userData: any;

  constructor(
    private service: DashboardContentsService
  ){  
  }

  ngOnInit(){
    this.service.users.subscribe(res =>{
      this.userData = res;
      console.log("*** this.userData", this.userData);
      
    })
  }

}
