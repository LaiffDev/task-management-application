import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CommonModule,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  /**
   * reactive form binded
   * to the form in the template
   */
  AddTaskFormGroup = new FormGroup({
    id: new FormControl(''),
    dueDate: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private dialogRef: MatDialogRef<AddTaskComponent>) {}

  //global variables
  allTasks: [] = [];

  addNewTask() {
    const task = this.AddTaskFormGroup.value;
    this.dialogRef.close(task);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
