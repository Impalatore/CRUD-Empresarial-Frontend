import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmpleadosService} from "../../../services/empleados.service";
import {Empleado} from "../../../models/empleado.model";

@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css']
})
export class EmpleadosEditComponent implements OnInit {

  empleadoDetalle: Empleado = {
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

  constructor(private route: ActivatedRoute, private empleadosService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.empleadosService.getEmpleado(Number(id)).subscribe({
            next: (response) => {
              this.empleadoDetalle = response;
            }
          })
        }
      }
    })
  }

  updateEmpleado() {
    this.empleadosService.updateEmpleado(this.empleadoDetalle.id, this.empleadoDetalle).subscribe({
      next: (response) => {
        this.router.navigate(['empleados']).then(r => console.log('Actualización Exitosa'));
      }
    })
  }

  deleteEmpleado(id: number) {
    this.empleadosService.deleteEmpleado(id).subscribe({
      next: (response) => {
        this.router.navigate(['empleados'])
      }
    })
  }

}
