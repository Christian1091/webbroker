import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public contactoForm = this.fb.group({
    nombres: ['', Validators.required],
    //correo: ['christianespinoza935@gmail.com', Validators.required],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private contactService: ContactService) {}

  enviarContacto() {
    console.log(this.contactoForm.value);

    // Si se realiza el envio
    this.contactService.enviarContacto( this.contactoForm.value )
    .subscribe( resp => {
      console.log("contacto enviado");
      console.log(resp);
      Swal.fire("Envio Exitoso","", "success");
    }, (err) => console.warn( err ));
  }


}
