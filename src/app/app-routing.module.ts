import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LandingComponent } from './core/components/layout/landing/landing.component';
import { LoginComponent } from './users/component/auth/login/login.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path:'',component: LoginComponent,
  },
  {path:'users',loadChildren:() =>  import('./users/users.module').then((m)=> m.UsersModule)
 },
 {path:'dashboard',loadChildren:() =>  import('./dashboard/dashboard.module').then((m)=> m.DashboardModule),
 },
 {path:'**', 
 component:NotFoundComponent 
},
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }