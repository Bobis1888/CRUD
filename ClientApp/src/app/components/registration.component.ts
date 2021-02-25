import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/User';
import { AccountService } from '../services/account.service';

@Component({
  templateUrl: './registration.component.html',
  providers: [AccountService],
  styleUrls: ['./components.css']
 })
export class RegistrationComponent {

  constructor(private accountService: AccountService) {}

  user = new User();
  hide = false;
  bad = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  // TODO add pass validate
  pass : Array<FormControl> = [new FormControl('', [Validators.required]),new FormControl('', [Validators.required])];

  getErrorMessage() {
    if (this.email.hasError('required') || this.pass[0].hasError('required') || this.pass[1].hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  reg() {
    if (this.email.valid && this.pass[0].valid && this.pass[1].valid) {
      this.accountService.reg(this.user).subscribe((aUser: User) => {
        this.user = aUser;
      });
    }
  }
}
