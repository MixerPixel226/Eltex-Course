import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-creating-form',
  imports: [ReactiveFormsModule],
  templateUrl: './creating-form.html',
  styleUrl: './creating-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatingForm {
  public creatingForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [] }),
    desc: new FormControl('', { nonNullable: true, validators: [] }),
    img: new FormControl('', { nonNullable: true, validators: [] }),
  });

  public onCancelModal = output<void>();

  onSubmitCreating() {
    if (this.creatingForm.valid) {
      console.log(this.creatingForm.value);
      this.creatingForm.reset();
    }
  }

  onCancel() {
    this.onCancelModal.emit();
  }
}
