import { ChangeDetectionStrategy, Component, effect, input, model, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { History, HistoryForm } from '../../../types/history.interface';

@Component({
  selector: 'app-creating-form',
  imports: [ReactiveFormsModule],
  templateUrl: './creating-form.html',
  styleUrl: './creating-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatingForm {
  public formObj = model.required<HistoryForm>();
  public idEditing = model<string | null>(null);

  public selectedFile: File | null = null;

  public onCancelModal = output<void>();
  public onCreate = output<{ formData: HistoryForm; file: File | null }>();
  public onEdit = output<{ formData: HistoryForm; id: string; file: File | null }>();

  public creatingForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(25)],
    }),
    content: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    categoryId: new FormControl<number | null>(null),
  });

  constructor() {
    effect(() => {
      const data = this.formObj();
      this.creatingForm.patchValue(data, { emitEvent: false });
    });
  }

  protected onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  protected onSubmit() {
    if (this.creatingForm.valid) {
      const id = this.idEditing();
      const rawValue = this.creatingForm.getRawValue();
      const formData: HistoryForm = { ...rawValue, imgSrc: null };

      if (id) {
        this.onEdit.emit({ formData, id, file: this.selectedFile });
      } else {
        this.onCreate.emit({ formData, file: this.selectedFile });
      }

      this.resetForm();
    }
  }

  private resetForm() {
    this.formObj.set({ title: '', content: '', imgSrc: null, categoryId: null });
    this.creatingForm.reset();
    this.selectedFile = null;
    this.onCancel();
  }

  protected onCancel() {
    this.formObj.set({ title: '', content: '', imgSrc: null, categoryId: null });
    this.idEditing.set(null);
    this.onCancelModal.emit();
  }
}
