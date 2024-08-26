import { Component, OnInit } from '@angular/core';
import { Workout } from '../../../model/workout.model';
import { WorkoutService } from '../../workout-service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkoutComponent } from '../../add-workout/add-workout.component';

@Component({
  standalone: true,
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.component.html',
  styleUrls: ['./view-workouts.component.scss'],
  imports: [CommonModule]
})
export class ViewWorkoutsComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadWorkouts();
  }

  loadWorkouts(): void {
    this.workoutService.getWorkouts().subscribe(
      (data: Workout[]) => {
        this.workouts = data;
      },
      error => {
        console.error('Error loading workouts', error);
      }
    );
  }

  openAddWorkoutModal(): void {
    const dialogRef = this.dialog.open(AddWorkoutComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Logic to handle the result, e.g., save the workout
        console.log('Workout data:', result);
        // Here you can call a service method to save the workout
        this.workoutService.createWorkout(result).subscribe(resp => {
          console.log(resp);
        })
      }
    });
  }
}
