import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro-materia';

  formRegsitroMateria = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cargahoraria: new FormControl('',Validators.required),
    escola: new FormControl('', Validators.required),
    professor: new FormControl('', [Validators.required]),
    materia: new FormControl('', Validators.required)
  })


}
