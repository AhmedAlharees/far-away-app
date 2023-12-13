import { useState } from 'react';
import Item from './Items';

export default function PackageList({
  Items,
  onDeleteItem,
  onIsPacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === 'input') sortedItems = Items;

  if (sortBy === 'description') {
    sortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortBy === 'packed') {
    sortedItems = Items.slice().sort((a, b) => {
      if (a.packed === b.packed) {
        return 0;
      }
      return a.packed ? 1 : -1;
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onIsPacked={onIsPacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
