import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from '../../shared/services/notas.service';

@Component({
  selector: 'app-notas-formulario',
  templateUrl: './notas-formulario.component.html',
  styles: [
  ]
})

export class NotasFormularioComponent implements OnInit {

  notasForm: FormGroup;

  constructor(private fb: FormBuilder, private notasService: NotasService, private http: HttpClient) {
    this.notasForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.notasForm.value);
    this.notasService.agregarNota(this.notasForm.value);
    this.reset();
  }

  random(){
    this.http.get('https://api.quotable.io/random').subscribe(data =>{
      const nota = data as any;
      let notaRandom = {
        titulo: nota.author,
        descripcion: nota.content
      }
      this.notasForm.patchValue(notaRandom);
      this.notasService.agregarNota(notaRandom);
    });
  }

  reset(): void{
    this.notasForm.reset();
  }


}
