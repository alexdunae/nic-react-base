import { VITALS } from './lib/placeholderData';
import VitalsSummary from './VitalsSummary';

function App() {
  console.debug(`⚙️ App vitals=${VITALS.length}`, VITALS);

  return (
    <div className="app">
      <div className="vitals-boxes">
        <VitalsSummary measurements={VITALS} label="Steps 🏃" dataKey="steps" />
        <VitalsSummary measurements={VITALS} label="Resting ❤️" dataKey="resting_heartrate" />
        <VitalsSummary measurements={VITALS} label="Activity 🍲" dataKey="active_energy" />
      </div>
    </div>
  );
}

export default App;
