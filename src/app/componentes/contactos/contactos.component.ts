import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  public formLogin!: FormGroup;
  correo!:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['',
     [
      Validators.required,
      Validators.minLength(8)
     ]],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      telefono:['', 
        [
          Validators.required,
          Validators.minLength(9)
        ]
      ],
      sujeto:['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      mensage:['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    })

    this.loadAPI()
  }

  //function para simular la carga de un API
  loadAPI():any{
    const response = {
      nombre: '',
      email: '',
      sujeto: '',
      mensage: '',
      
      
    };

    this.formLogin.patchValue(response);
    
    
    /*
    this.formLogin.patchValue(
      {
        email:response.email,
        password: response.password,
        term: response.term
      }
    )
     */
    
  }


  send(): any{
    console.log(this.formLogin.value)
    alert('gracias por lenar el formulario');
  }

  

  
}

