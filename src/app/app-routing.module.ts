import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendItemComponent} from "./pages/send-item/send-item.component";

const routes: Routes = [
  // { path: '', component:  },
  { path: 'send-item', component: SendItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
