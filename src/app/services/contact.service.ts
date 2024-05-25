import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from '../interfaces/contact-form.interfaces';

const base_url = environment.base_url;

 @Injectable({
   providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient){ }

  enviarContacto(formData: ContactForm){
    return this.http.post(`${ base_url }/contact`, formData);
  }

}
