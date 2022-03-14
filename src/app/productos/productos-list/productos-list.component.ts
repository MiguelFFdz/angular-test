import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Producto } from "src/app/shared/producto";
import { ProductosService } from "../productos.service";

@Component({
  selector: "app-productos-list",
  templateUrl: "./productos-list.component.html",
  styleUrls: ["./productos-list.component.scss"]
})
export class ProductosListComponent implements OnInit, OnDestroy {

  productos?: Producto[];

  currentProducto = {} as Producto;

  constructor(private router: Router, private productosService: ProductosService) {
    console.log('Constructor ProductosListComponent:');
  }

  ngOnInit(): void {
    this.loadProductos();
  }

  ngOnDestroy(): void {
    console.log('OnDestroy ProductosListComponent:');
  }

  loadProductos(): void {
    this.productosService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.productos = productos;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onEdit(producto: Producto): void {
    this.currentProducto = Object.assign({}, producto);
  }

  onDelete(id: number): void {
    if (window.confirm('¿Seguro?')) {
      this.productosService.deleteProducto(id).subscribe((data) => {
        console.log('Eliminando: ' + JSON.stringify(data));
        this.loadProductos();
      });
    }
  }

  eventoProducto(producto: Producto): void {
    console.log('Evento Producto: ' + JSON.stringify(producto));
    if(producto.id){
      this.productosService.updateProducto(producto).subscribe({
        next:(data: Producto) => {
          console.log('Actualizando: ' + JSON.stringify(data));
          this.loadProductos();
        }, error: err => {
          console.log(err);
        }
      })
    } else {
      this.productosService.createProducto(producto).subscribe({
        next:(data: Producto) => {
          console.log('Creando: ' + JSON.stringify(data));
          this.loadProductos();
        }, error: err => {
          console.log(err);
        }
      })
    }
  }

}
