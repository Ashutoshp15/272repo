import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { HomeLoginComponent } from "./home_login.component";

const routes: Routes = [
  {
    path: "/login",
    data: {
      title: "LOGIN",
      urls: [{ title: "LOGIN", url: "/login" }, { title: "LOGIN" }],
    },
    component: HomeLoginComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class HomeLoginModule {}
