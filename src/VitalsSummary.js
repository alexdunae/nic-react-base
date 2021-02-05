import formatTimestamp from './lib/formatTimestamp';

export default function VitalsSummary(props) {
  const measurements = props.measurements || [];
  const label = props.label;
  const dataKey = props.dataKey;

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
      <div className="vitals-box vitals-empty">
        <h3>{label}</h3>
        <p>No {label} data to report.</p>
      </div>
    );
  }

  return (
    <div className="vitals-box">
      <h3>{label}</h3>
      <ul className="uk-list">{dataPointsList}</ul>
    </div>
  );
}
