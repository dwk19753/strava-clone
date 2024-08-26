import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../model/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private baseUrl = 'http://localhost:8080/api/workouts';  // URL of the Spring Boot API

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseUrl);
  }

  createWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.baseUrl, workout);
  }

  // Additional methods for update, delete, etc.
}
