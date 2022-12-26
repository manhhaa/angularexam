import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  setShow: boolean = true;
  handleShowSideBar1(){
    this.setShow = !this.setShow;
    console.log(this.setShow)
  }
  setShow2: boolean = true;
  handleShowSideBar2(){
    this.setShow2 = !this.setShow2;
    console.log(this.setShow2)
  }

}
