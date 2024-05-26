import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { UseChildComponent } from './use-child/use-child.component';
import { FormComponent } from './form/form.component';
import { AllowNumbersOnlyDirective } from './allow-numbers-only.directive';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ParentComponent } from './parent/parent.component';
import { LifecycleMethodComponent } from './lifecycle-method/lifecycle-method.component';
import { ChildPassDataComponent } from './child-pass-data/child-pass-data.component';
import { DesignutilityService } from './designutility.service';
import { NoPageComponent } from './no-page/no-page.component';
import { Childrout2Component } from './childrout2/childrout2.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { UsersDataService } from './sheard/services/users-data.service';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';
import { DateFormatePipe } from './pipes/date-formate.pipe';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './sheard/loader/loader.interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DummyComponent } from './dummy/dummy.component';
import { canDeactivateGuard } from './sheard/services/guards/can-deactivate.guard';
import { SpecificModule } from './specific/specific.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonComponent } from './common/common.component';
import { CustomAnotherStyleDirective, CustomStyleDirective } from './sheard/directives/custom-style.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UseChildComponent,
    FormComponent,
    AllowNumbersOnlyDirective,
    ReactiveformComponent,
    ParentComponent,
    LifecycleMethodComponent,
    ChildPassDataComponent,
    NoPageComponent,
    Childrout2Component,
    FooterComponent,
    GetApiComponent,
    PostApiComponent,
    CrudoperationComponent,
    EditUserComponent,
    UsdInrPipe,
    FirstCapitalPipe,
    DateFormatePipe,
    SignupComponent,
    LoginComponent,
    LoaderComponent,
    DummyComponent,
    CommonComponent,
    CustomStyleDirective,
    CustomAnotherStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    ButtonModule,
    PaginatorModule,
    SpecificModule,
    NgxPaginationModule
  ],  
  providers: [DesignutilityService,UsersDataService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
