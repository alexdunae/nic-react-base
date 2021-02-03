// this would likely be exported from a shared file
export default function formatTimestamp(timestamp) {
  // some error checking, or Typescript
  const date = new Date(timestamp);
  const display = date.toLocaleDateString();
  const attr = date.toISOString();

  // NB React attribute case
  return <time dateTime={attr}>{display}</time>;
}
