import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/Services/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private _router: Router, private _fb: FormBuilder, private _authService: AuthService) {
    this.form = this._createFormLogin();
  }

  private _createFormLogin(): FormGroup {
    return this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const success = this._authService.login(this.form.value)
      console.log(success)
      if (!success) {
        alert('Giriş bilgilerini kontrol ediniz');
      } else {
        alert('Başarılı bir şekilde giriş yapıldı');
        this._router.navigate(['/campaign']);
      }
    }
  }
}
