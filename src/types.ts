export interface IVitals {
  timestamp: number;
  active_energy: number;
  resting_heartrate: number;
  steps: number;
  vo2_max: number;
}

export interface IActivity {
  id: number;
  name: string;
  type: string;
  duration: number;
  distance: number;
  average_speed: number;
  timestamp: number;
  run_type: 'workout' | 'long-run' | 'default' | null;
}
