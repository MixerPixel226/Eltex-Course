import { ChangeDetectionStrategy, Component, effect, input, model, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface FormHistory {
  id?: string;
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-creating-form',
  imports: [ReactiveFormsModule],
  templateUrl: './creating-form.html',
  styleUrl: './creating-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatingForm {
  public formObj = model.required<FormHistory>();

  public onCancelModal = output<void>();
  public onCreate = output<FormHistory>();
  public onEdit = output<FormHistory>();

  public creatingForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(25)],
    }),
    desc: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    img: new FormControl('', { nonNullable: true }),
  });

  constructor() {
    effect(() => {
      const data = this.formObj();
      this.creatingForm.patchValue(data, { emitEvent: false });
    });
  }

  onSubmit() {
    if (this.creatingForm.valid) {
      const id = this.formObj().id;
      const formData = this.creatingForm.getRawValue();

      if (id) {
        const values = { ...formData, id: id };
        this.onEdit.emit(values);
      } else {
        this.onCreate.emit(formData);
      }

      this.formObj.set({ title: '', desc: '', img: '' });

      this.creatingForm.reset({ title: '', desc: '', img: '' });
      this.onCancel();
    } else {
      this.creatingForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.formObj.set({ title: '', desc: '', img: '' });
    this.onCancelModal.emit();
  }
}
