export default function sortByNewest(data) {
  return data.sort((a, b) => b.timestamp - a.timestamp);
}
