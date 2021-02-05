import { useState } from 'react';
import { VITALS } from './lib/placeholderData';
import VitalsSummary from './VitalsSummary';

function App() {
  // const [count, setCount] = useState(0);
  const [showSummary, setShowSummary] = useState(true);

  function toggleSummary() {
    setShowSummary(!showSummary);
  }

  console.debug(`⚙️ App showSummary=${showSummary} vitals=${VITALS.length}`);

  return (
    <div className="app">
      <nav className="navbar">
        <button onClick={toggleSummary} className="uk-button uk-button-primary uk-button-small">
          Toggle summary
        </button>
      </nav>
      <div className="vitals-boxes">
        <VitalsSummary showSummary={showSummary} measurements={VITALS} label="Steps 🏃" dataKey="steps" />
        <VitalsSummary showSummary={showSummary} measurements={VITALS} label="Resting ❤️" dataKey="resting_heartrate" />
        <VitalsSummary showSummary={showSummary} measurements={VITALS} label="Activity 🍲" dataKey="active_energy" />
      </div>
    </div>
  );
}

export default App;
