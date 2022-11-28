import { Component, OnInit } from '@angular/core';
import {Empleado} from "../../../models/empleado.model";
import {EmpleadosService} from "../../../services/empleados.service";

@Component({
  selector: 'app-empleados-add',
  templateUrl: './empleados-add.component.html',
  styleUrls: ['./empleados-add.component.css']
})
export class EmpleadosAddComponent implements OnInit {

  addEmpleadoRequest: Empleado = {
    id: 0,
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    departamentoID: 0,
    email: '',
    telefono: 0,
    direccion: '',
    fechaIngreso: '',
    archivoFoto: 0,
  }
  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
  }

  addEmpleado(){
    this.empleadoService.addEmpleado(this.addEmpleadoRequest)
      .subscribe({
        next: (empleado) => {
          console.log(empleado)
        }
      })
  }

}
