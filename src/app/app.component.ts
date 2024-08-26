import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewWorkoutsComponent } from './workout/view-workouts/view-workouts/view-workouts.component';
import { AddWorkoutComponent } from './workout/add-workout/add-workout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ViewWorkoutsComponent,
    AddWorkoutComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'strava-clone';
}
