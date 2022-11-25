import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {EmpleadosListComponent} from "./components/empleados/empleados-list/empleados-list.component"
import {EmpleadosAddComponent} from "./components/empleados/empleados-add/empleados-add.component";

// src/app/app.module.ts
const routes: Routes = [
  // {
  //   path: '',
  //   component: EmpleadosListComponent
  // },
  {
    path: 'empleados',
    component: EmpleadosListComponent
  },
  {
    path: 'empleados/add',
    component: EmpleadosAddComponent
  },
  // {
  //   path: 'departamentos',
  //   component: DepartamentosListComponent
  // }
]

// src/app/app.module.ts
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
