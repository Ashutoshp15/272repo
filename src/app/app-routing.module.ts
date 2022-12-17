import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLoginComponent } from './home_login/home_login.component';
import { RegisterHomeComponent } from './register_home/register_home.component';
import { FullComponent } from './layouts/full/full.component';



export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./company_full/company_full.module').then(m => m.CompanyFullModule)
      },
      
    ],
  },
 { path:'register',
  component:RegisterHomeComponent
},

  {
    path: 'login',
   component:HomeLoginComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  },

];