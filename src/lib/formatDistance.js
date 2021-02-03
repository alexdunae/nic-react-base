export default function formatDistance(meters = 0) {
  return `${(meters / 1000.0).toFixed(1)}km`;
}
