import sortByNewest from './sortByNewest';

export const VITALS = sortByNewest([
  { timestamp: Date.parse('2020-01-01'), resting_heartrate: 60, steps: 6000, active_energy: 700 },
  { timestamp: Date.parse('2020-02-01'), resting_heartrate: 55, steps: 5000, active_energy: 1200 },
  { timestamp: Date.parse('2020-03-01'), resting_heartrate: 50, steps: 9000, active_energy: 1300 },
  { timestamp: Date.parse('2020-04-01'), resting_heartrate: 70, steps: 10000, active_energy: 700 },
]);

export const ACTIVITIES = sortByNewest([
  {
    id: 1,
    timestamp: Date.parse('2020-01-01'),
    name: 'Lunch 5km',
    type: 'Run',
    distance: 5000,
    duration: 25 * 60,
    average_heart_rate: 150,
    average_speed: 2.982,
  },
  {
    id: 2,
    timestamp: Date.parse('2020-02-01'),
    name: 'Leg Day',
    type: 'WeightTraining',
    duration: 30 * 60,
    average_heart_rate: 120,
  },
  {
    id: 3,
    timestamp: Date.parse('2020-03-01'),
    name: 'Morning Flow',
    type: 'Yoga',
    duration: 40 * 60,
    average_heart_rate: 100.7,
  },
  {
    id: 4,
    timestamp: Date.parse('2020-04-01'),
    name: 'Track Intervals',
    type: 'Run',
    distance: 4000,
    duration: 25 * 60,
    average_heart_rate: 170,
    average_speed: 3.982,
    run_type: 'workout',
  },
]);
