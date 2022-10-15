import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-page';
  
  feedBack: FormGroup;

  constructor(private formBuilder: FormBuilder){ 
    this.feedBack = formBuilder.group({
      email: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      sobrenome: this.formBuilder.control(''),
      mensagem: this.formBuilder.control('')
    })
  }

  


  
  

  
}
