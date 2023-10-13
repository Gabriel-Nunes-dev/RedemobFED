import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  constructor(private http: HttpClient) {

  }
  salvar(candidato: any): Observable<any> {
    return this.http.post<any>('Http://localhost:8080/candidatos',candidato);
  }
}
