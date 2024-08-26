import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class AddWorkoutComponent {
  workout: any = {}; // Model to store the workout data
  workoutTypes = [
    'RUN',
    'WALK',
    'HIKE',
    'TREADMILL',
    'ELLIPTICAL',
    'STAIRCLIMBER',
    'BIKE',
    'SWIM',
    'OTHER',
  ];

  constructor(public dialogRef: MatDialogRef<AddWorkoutComponent>) {}

  onSubmit(): void {
    // Pass workout data back to the parent component
    this.dialogRef.close(this.workout);
  }

  close(): void {
    this.dialogRef.close();
  }
}
