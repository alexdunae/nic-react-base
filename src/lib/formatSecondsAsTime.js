// https://stackoverflow.com/a/1322771
export default function formatSecondsAsTime(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}
