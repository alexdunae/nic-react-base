export default function recentAverage(measurements, dataKey, units) {
  const count = Math.min(3, measurements.length);
  if (count < 0) return '?';
  const sum = measurements.slice(0, count).reduce(function (acc, x) {
    const value = x[dataKey];
    // not found
    if (!value || isNaN(value)) return acc;

    return acc + x[dataKey];
  }, 0);
  return `${(sum / count).toFixed(0)} ${units}`;
}
