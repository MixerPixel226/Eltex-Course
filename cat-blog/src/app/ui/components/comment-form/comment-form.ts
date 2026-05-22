import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  commentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  onSend(formDirective: FormGroupDirective): void {
    if (this.commentForm.valid) {
      const formValue: ICommentForm = {
        ...this.commentForm.value,
        articleId: this.idHis,
      };

      this.submitted.emit(formValue);
      formDirective.resetForm();
    }
  }
}
