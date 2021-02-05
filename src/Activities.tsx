import { useState } from 'react';
import ActivityFilter from './ActivityFilter';
import GenericActivity from './GenericActivity';
import RunActivity from './RunActivity';
import { IActivity } from './types';

interface Props {
  activities: IActivity[];
}

export default function Activities(props: Props) {
  const [filteredActivityType, setFilteredActivityType] = useState(undefined);

  // filter if need
  const filteredActivities = filteredActivityType
    ? props.activities.filter((a) => a.type === filteredActivityType)
    : props.activities;

  const renderedActivities = filteredActivities.map((activity) => {
    if (activity.type === 'Run') {
      return <RunActivity activity={activity} />;
    } else {
      return <GenericActivity activity={activity} />;
    }
  });

  return (
    <div className="uk-margin">
      <h3 className="uk-heading-small">Recent Activities 🤸‍♂️</h3>
      <ActivityFilter
        setFilteredActivityType={setFilteredActivityType}
        filteredActivityType={filteredActivityType}
      />{' '}
      <table className="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Type</th>
            <th>Duration</th>
            <th colSpan={2}>Details</th>
          </tr>
        </thead>
        <tbody>{renderedActivities}</tbody>
      </table>
    </div>
  );
}
