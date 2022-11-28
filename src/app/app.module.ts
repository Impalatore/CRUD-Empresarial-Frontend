import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//CRUD EMPLEADO
import { EmpleadosListComponent } from './components/empleados/empleados-list/empleados-list.component';
import { EmpleadosAddComponent } from './components/empleados/empleados-add/empleados-add.component';
import { EmpleadosEditComponent } from './components/empleados/empleados-edit/empleados-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    EmpleadosAddComponent,
    EmpleadosEditComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
