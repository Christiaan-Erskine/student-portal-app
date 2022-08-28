import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) { }

  invalid: boolean = false;

  ngOnInit(): void {
    this.initForm();

    console.log(this.authService.getIsLoggedIn());
    if (this.authService.getIsLoggedIn()) {
      this.router.navigate(['/main']);
    }

  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginUser() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (!result) {
          this.invalid = true;
        }
        else {
          this.invalid = false;
          this.router.navigate(['/main']);
        }
      })
    }
  }
}
