import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IComment } from '../../../types/comment.interface';
export interface ICommentForm {
  username: string;
  text: string;
  date: Date;
  idHis: string;
  rating: number;
}

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './comment-form.html',
  styleUrls: ['./comment-form.scss'],
})
export class CommentFormComponent {
  @Input() idHis!: string;
  @Output() submitted = new EventEmitter<IComment>();

  commentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      text: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  onSend(): void {
    if (this.commentForm.valid) {
      const formValue: IComment = {
        ...this.commentForm.value,
        date: new Date(),
        idHis: this.idHis,
        rating: 0,
        id: crypto.randomUUID(),
      };

      this.submitted.emit(formValue);
      this.commentForm.reset();
    }
  }
}
