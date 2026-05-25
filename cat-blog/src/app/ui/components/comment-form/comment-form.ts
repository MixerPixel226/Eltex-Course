import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormGroupDirective,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ICommentForm } from '../../../types/comment.interface';
import { AUTH_SERVICE_TOKEN } from '../../../services/auth/auth.token';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './comment-form.html',
  styleUrls: ['./comment-form.scss'],
})
export class CommentFormComponent {
  @Input() idHis!: string;
  @Output() submitted = new EventEmitter<ICommentForm>();

  private fb = inject(FormBuilder);
  public readonly authService = inject(AUTH_SERVICE_TOKEN);

  commentForm: FormGroup;

  constructor() {
    this.commentForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.maxLength(500)]],
    });

    effect(() => {
      const user = this.authService.currentUser();
      if (user && user.username) {
        this.commentForm.patchValue({ username: user.username });
      } else {
        this.commentForm.patchValue({ username: '' });
      }
    });
  }

  onSend(formDirective: FormGroupDirective): void {
    if (this.commentForm.valid) {
      const formValue: ICommentForm = {
        ...this.commentForm.getRawValue(),
        articleId: this.idHis,
      };

      this.submitted.emit(formValue);

      formDirective.resetForm();
      const user = this.authService.currentUser();
      if (user) {
        this.commentForm.patchValue({ username: user.username });
      }
    }
  }
}
