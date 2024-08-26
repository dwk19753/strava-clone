export interface Workout {
    id?: number;              // Optional because it may not be available when creating a new workout
    title: string;
    description?: string;      // Optional field
    workoutType: 'RUN' | 'WALK' | 'HIKE' | 'TREADMILL' | 'ELLIPTICAL' | 'STAIRCLIMBER' | 'BIKE' | 'SWIM' | 'OTHER';
    workoutDateTime: string;   // ISO string format or Date object depending on how you handle it
    duration?: string;         // Optional field (e.g., "01:30:00" for 1 hour 30 minutes)
    distance?: number;         // Optional field (e.g., 5.50 for 5.5 miles)
    effortLevel?: number;      // Optional field (e.g., 1-10 scale)
    createdAt?: string;        // Optional because it will be set by the backend
    updatedAt?: string;        // Optional because it will be set by the backend
  }
  