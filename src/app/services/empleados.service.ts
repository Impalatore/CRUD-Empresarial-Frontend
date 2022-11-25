import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Empleado} from "../models/empleado.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getAllEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.baseApiUrl + '/api/empleado');
  }
}
