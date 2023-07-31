import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes:Routes =[ 
  // Path: '/dashboard PagesRouting'
  // Path: '/auth AuthRouting'
  { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'**', component: NotpagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
