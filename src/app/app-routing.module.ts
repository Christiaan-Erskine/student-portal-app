import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'main', canActivate:[AuthGuard] ,loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  {path:'**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
