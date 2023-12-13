

export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const itemsPackedPercentage = numItemsPacked
    ? Math.round((numItemsPacked / numItems) * 100)
    : 0;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you're packed{' '}
        {numItemsPacked} ({itemsPackedPercentage}%)
      </em>
    </footer>
  );
}
