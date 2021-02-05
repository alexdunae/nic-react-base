import formatSecondsAsTime from './lib/formatSecondsAsTime';
import formatTimestamp from './lib/formatTimestamp';
import formatPace from './lib/formatPace';
import formatDistance from './lib/formatDistance';

// <RunActivity /> starts here
function RunActivity(props) {
  const { name, duration, timestamp, run_type, distance, average_speed } = props.activity;
  const formattedDuration = formatSecondsAsTime(duration);

  let badge = null;
  switch (run_type) {
    case 'workout':
      badge = '😅';
      break;
    case 'long-run':
      badge = '⏱️';
      break;
    default:
      badge = null;
      break;
  }

  return (
    <tr>
      <td>{formatTimestamp(timestamp)}</td>
      <th>{name}</th>
      <td>Run {badge}</td>
      <td>{formattedDuration}</td>
      <td>{formatDistance(distance)}</td>
      <td>{formatPace(average_speed)}</td>
    </tr>
  );
}
export default RunActivity;
