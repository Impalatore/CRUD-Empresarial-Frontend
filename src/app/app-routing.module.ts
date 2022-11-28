import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {EmpleadosListComponent} from "./components/empleados/empleados-list/empleados-list.component"
import {EmpleadosAddComponent} from "./components/empleados/empleados-add/empleados-add.component";
import {EmpleadosEditComponent} from "./components/empleados/empleados-edit/empleados-edit.component";

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosListComponent
  },
  {
    path: 'empleados/add',
    component: EmpleadosAddComponent
  },
  {
    path: 'empleados/edit/:id',
    component: EmpleadosEditComponent
  },
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
