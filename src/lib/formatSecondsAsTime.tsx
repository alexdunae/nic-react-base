// https://stackoverflow.com/a/1322771
export default function formatSecondsAsTime(seconds: number) {
  const formatted = new Date(seconds * 1000).toISOString().substr(11, 8);
  return <span>{formatted}</span>;
}
