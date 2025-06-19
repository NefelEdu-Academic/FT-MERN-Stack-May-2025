import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  newUser: User = { name: '', email: '' };
  constructor(private router: Router){}
  handleSubmit(){
    this.router.navigate(['/display'], {state:{userData: this.newUser}})
  }
}
