import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { AUTH_SERVICE_TOKEN } from '../../../services/auth/auth.token';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [MatFormFieldModule, MatLabel, MatInputModule, MatError, ReactiveFormsModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForm {
  private readonly authService = inject(AUTH_SERVICE_TOKEN);
  private readonly dialogRef = inject(MatDialogRef<AuthForm>);

  public isLogin = signal<boolean>(true);

  public serverError = signal<string | null>(null);

  public title = computed(() => {
    return this.isLogin() ? 'Вход в систему' : 'Регистрация';
  });

  public downTitle = computed(() => {
    return this.isLogin() ? 'У меня нет аккаунта' : 'У меня есть аккаунт';
  });

  public formLogin = new FormGroup({
    login: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  public formRegister = new FormGroup({
    login: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  toggleMode() {
    this.serverError.set(null);
    this.isLogin.update((prev) => !prev);
  }

  onSubmitLogin() {
    if (this.formLogin.valid) {
      this.serverError.set(null);

      this.authService.login(this.formLogin.getRawValue()).subscribe({
        next: (response) => {
          console.log('Успешный вход:', response);
          this.dialogRef.close(response.user);
        },
        error: (err) => {
          const errorMsg = err.error?.message || 'Неверный логин или пароль';
          this.serverError.set(errorMsg);
        },
      });
    }
  }

  onSubmitRegister() {
    if (this.formRegister.valid) {
      this.serverError.set(null);
      console.log('Данные из формы регистрации перед отправкой:', this.formRegister.getRawValue());
      this.authService.register(this.formRegister.getRawValue()).subscribe({
        next: (response) => {
          console.log('Регистрация и вход успешны:', response);
          this.dialogRef.close(response.user);
        },
        error: (err) => {
          const errorMsg =
            err.error?.message || 'Ошибка при регистрации. Возможно, логин или email занят';
          this.serverError.set(errorMsg);
        },
      });
    }
  }
}
