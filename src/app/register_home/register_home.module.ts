import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { RegisterHomeComponent } from "./register_home.component";

const routes: Routes = [
  {
    path: "/register",
    data: {
      title: "Register",
      urls: [{ title: "Register", url: "/register" }, { title: "Register" }],
    },
    component: RegisterHomeComponent,
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
