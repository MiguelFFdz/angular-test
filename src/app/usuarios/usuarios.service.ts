import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string = environment.baseUrl;
  private endpoint: string = 'usuarios';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseUrl}/${this.endpoint}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  getUsuario(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}/${this.endpoint}/${id}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.baseUrl}/${this.endpoint}`, usuario, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.baseUrl}/${this.endpoint}/${usuario.id}`, usuario, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  deleteUsuario(id: any): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.baseUrl}/${this.endpoint}/${id}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  // Manejo de errores
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error de lado de cliente
      errorMessage = error.error.message;
    } else {
      // Error de lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}
