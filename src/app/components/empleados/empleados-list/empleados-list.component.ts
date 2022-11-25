import { Component, OnInit } from '@angular/core';
import {Empleado} from "../../../models/empleado.model";
import {EmpleadosService} from "../../../services/empleados.service";

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {

  empleados: Empleado[] = [];
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getAllEmpleados()
    .subscribe({
      next: (empleados) => {
        this.empleados = empleados;
        console.log(empleados);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
