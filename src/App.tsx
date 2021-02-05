import { useState, useEffect } from 'react';
import axios from 'axios';
// get this via AJAX now
// import { VITALS, ACTIVITIES } from './lib/placeholderData';
import VitalsSummary from './VitalsSummary';
import Activities from './Activities';
import AppLoading from './AppLoading';
import { IVitals, IActivity } from './types';

function App() {
  // const [count, setCount] = useState(0);
  const [showSummary, setShowSummary] = useState<boolean>(true);
  const [loadingStatus, setLoadingStatus] = useState<'ready' | 'fetching' | 'error'>('fetching');
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [vitals, setVitals] = useState<IVitals[]>([]);

  const activitiesEndpoint = '/activities.json';
  const vitalsEndpoint = '/vitals.json';

  function toggleSummary() {
    setShowSummary(!showSummary);
  }

  useEffect(function () {
    const activitiesPromise = axios.get(activitiesEndpoint);
    activitiesPromise.then((response) => {
      console.debug('got activity promise response', response);
      setActivities(response.data);
    });

    const vitalsPromise = axios.get(vitalsEndpoint);
    vitalsPromise.then((response) => {
      console.debug('got vitals promise response', response);
      setVitals(response.data);
    });

    const metaPromise = Promise.all([activitiesPromise, vitalsPromise]);
    metaPromise.then(() => {
      setLoadingStatus('ready');
    });
  }, []);

  console.debug(
    `⚙️ App showSummary=${showSummary} loadingStatus=${loadingStatus} activities=${activities.length} vitals=${vitals.length}`,
  );

  if (loadingStatus !== 'ready') {
    return <AppLoading loadingStatus={loadingStatus} />;
  }

  return (
    <div className="app">
      <nav className="navbar">
        <button onClick={toggleSummary} className="uk-button uk-button-primary uk-button-small">
          Toggle summary
        </button>
      </nav>
      <div className="vitals-boxes">
        <VitalsSummary showSummary={showSummary} measurements={vitals} label="Steps 🏃" dataKey="steps" />
        <VitalsSummary showSummary={showSummary} measurements={vitals} label="Resting ❤️" dataKey="resting_heartrate" />
        <VitalsSummary showSummary={showSummary} measurements={vitals} label="Activity 🍲" dataKey="active_energy" />
      </div>

      <hr className="uk-divider-icon" />
      <Activities activities={activities} />
    </div>
  );
}

export default App;
