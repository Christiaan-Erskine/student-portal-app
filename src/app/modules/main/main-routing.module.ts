import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

const routes: Routes = [
  {path:'', component: MainPageComponent, children:[
    {path:'profile', component: ProfilePageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path:'**', redirectTo:'profile'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
