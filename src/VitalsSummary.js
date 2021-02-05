import formatTimestamp from './lib/formatTimestamp';
import recentAverage from './lib/recentAverage';
export default function VitalsSummary(props) {
  const measurements = props.measurements || [];
  const label = props.label;
  const dataKey = props.dataKey;
  const showSummary = props.showSummary;

  console.log('VitalsSummary', props);

  const dataPointsList = measurements.map((measurement) => {
    const value = measurement[dataKey]; // datapoint.steps

    return (
      <li>
        {formatTimestamp(measurement.timestamp)} {value}
      </li>
    );
  });

  if (measurements.length < 1) {
    return (
      <div className="uk-card uk-card-default uk-card-body">
        <h3>{label}</h3>
        <p>No {label} data to report.</p>
      </div>
    );
  }

  if (showSummary) {
    return (
      <div className="uk-card uk-card-default uk-card-body">
        <h3>{label}</h3>
        <p className="vitals-summary">≈ {recentAverage(measurements, dataKey, 'units')}</p>
      </div>
    );
  }

  return (
    <div className="uk-card uk-card-default uk-card-body">
      <h3>{label}</h3>
      <ul className="uk-list">{dataPointsList}</ul>
    </div>
  );
}
