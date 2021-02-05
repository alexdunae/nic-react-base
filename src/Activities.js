import GenericActivity from './GenericActivity';
import RunActivity from './RunActivity';

export default function Activities(props) {
  const renderedActivities = props.activities.map((activity) => {
    if (activity.type === 'Run') {
      return <RunActivity activity={activity} />;
    } else {
      return <GenericActivity activity={activity} />;
    }
  });

  return (
    <div className="uk-margin">
      <h3 className="uk-heading-small">Recent Activities 🤸‍♂️</h3>
      <table className="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Type</th>
            <th>Duration</th>
            <th colSpan="2">Details</th>
          </tr>
        </thead>
        <tbody>{renderedActivities}</tbody>
      </table>
    </div>
  );
}
