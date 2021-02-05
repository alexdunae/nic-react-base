import formatSecondsAsTime from './lib/formatSecondsAsTime';
import formatTimestamp from './lib/formatTimestamp';

function GenericActivity(props) {
  const name = props.activity.name;
  const type = props.activity.type;
  const timestamp = props.activity.timestamp;
  const duration = props.activity.duration;

  //   const { name, type, timestamp, duration } = props.activity;

  const formattedDuration = formatSecondsAsTime(duration);

  return (
    <tr>
      <td>{formatTimestamp(timestamp)}</td>
      <th>{name}</th>
      <td>{type}</td>
      <td>{formattedDuration}</td>
      <td colSpan="2">&nbsp;</td>
    </tr>
  );
}

export default GenericActivity;
