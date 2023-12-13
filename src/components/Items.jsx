
export default function Item({ item, onDeleteItem, onIsPacked }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onIsPacked(item.id)} />
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

