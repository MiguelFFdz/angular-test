import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/shared/producto';

@Component({
  selector: 'app-productos-details',
  templateUrl: './productos-details.component.html',
  styleUrls: ['./productos-details.component.scss']
})
export class ProductosDetailsComponent implements OnInit, OnChanges {

  @Input() producto = {} as Producto;
  @Output() eventOnSubmitProducto = new EventEmitter<Producto>();

  productoForm: FormGroup;

  constructor(private route:ActivatedRoute, private fb: FormBuilder, private router: Router, private location:Location) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, Validators.required],
      imagen: ['', Validators.compose([Validators.required, Validators.pattern('^(http(s?):\/\/).+')])]
    })
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.productoForm.patchValue(this.producto);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.producto.id?"UPDATE":"CREATE");
    this.producto = Object.assign({}, this.productoForm.value, {id: this.producto.id});
    this.eventOnSubmitProducto.emit(this.producto);
  }

  onReset() {
    this.productoForm.reset();
    this.productoForm.markAsPristine();
    this.producto = {} as Producto;

  }

}
