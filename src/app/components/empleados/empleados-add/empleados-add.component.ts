import { Component, OnInit } from '@angular/core';
import {Empleado} from "../../../models/empleado.model";

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
  constructor() { }

  ngOnInit(): void {
  }

  addEmpleado(){
    console.log(this.addEmpleadoRequest);
  }

}
