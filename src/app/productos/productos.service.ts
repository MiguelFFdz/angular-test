import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../shared/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;
  private endpoint: string = 'productos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/${this.endpoint}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  getProducto(id: any): Observable<Producto>{
    return this.http.get<Producto>(`${this.baseUrl}/${this.endpoint}/${id}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  createProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.baseUrl}/${this.endpoint}`, producto, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  updateProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.baseUrl}/${this.endpoint}/${producto.id}`, producto, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  deleteProducto(id: any): Observable<Producto>{
    return this.http.delete<Producto>(`${this.baseUrl}/${this.endpoint}/${id}`, this.httpOptions)
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
