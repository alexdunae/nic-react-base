/* eslint-disable jsx-a11y/anchor-is-valid */
import cx from 'classnames';

const ACTIVITY_TYPES = ['Run', 'Swim', 'Yoga', 'WeightTraining'];

// NB: this is our MOST complex component
// NB: destructure props
// NB: filteredActivityType is a prop here, not state
// NB: filteredActivityType matches name of parent's state variable for convenience but does not have to
// NB: there are multiple ways to trigger callbacks, we could even have a function in here to do some formatting etc...
export default function ActivityFilter(props) {
  const filteredActivityType = props.filteredActivityType;
  const setFilteredActivityType = props.setFilteredActivityType;
  let noneSelected = true;

  const options = ACTIVITY_TYPES.map((activityType) => {
    const isSelected = activityType === filteredActivityType;
    if (isSelected) noneSelected = false;
    return (
      <li key={activityType} className={cx({ 'uk-active': isSelected })}>
        <a onClick={() => setFilteredActivityType(activityType)}>{activityType}</a>
      </li>
    );
  });

  options.unshift(
    <li key="all" className={cx({ 'uk-active': noneSelected })}>
      <a href="#" onClick={() => setFilteredActivityType(undefined)}>
        All
      </a>
    </li>,
  );

  return <ul className="uk-subnav uk-subnav-pill">{options}</ul>;
}
