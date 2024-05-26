import { SpecificModule } from './specific/specific.module';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './sheard/services/guards/auth.guard';
import { DummyComponent } from './dummy/dummy.component';
import { canDeactivateGuard } from './sheard/services/guards/can-deactivate.guard';


const routes: Routes = [
    // {path: '', component:AppComponent},
    {path: '', component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    { path: 'editUser/:id', component: EditUserComponent ,canActivate: [AuthGuard]},
    {path: 'reactiveform', component:ReactiveformComponent,canActivate: [AuthGuard]},
    {path: 'dummy', component:DummyComponent,canDeactivate:[canDeactivateGuard]},
    // { path: 'admin', loadChildren:()=>import('./admin/admin.module').then
    //   (mod=>mod.AdminModule)
    // },
    { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
    {
      component :NoPageComponent,
      path:'**'
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
