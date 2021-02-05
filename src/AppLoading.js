const MESSAGES = {
  restoring: 'Re-combobulating the jigawatts...',
  fetching: 'Fetching any unfetched fetchables...',
  error: "Mission failed! We'll get 'em next time...",
};

export default function AppLoading(props) {
  const loadingStatus = props.loadingStatus;
  const message = MESSAGES[loadingStatus] || 'Huh what?';

  return (
    <div className="app uk-position-center">
      <p className="uk-heading-large uk-text-muted uk-text-light">{message}</p>
    </div>
  );
}
