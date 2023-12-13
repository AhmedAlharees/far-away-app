import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [description, setDescriptione] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescriptione('');
    setQuantity(1);
  };

  return (
    <form action="submit" className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        name=""
        id=""
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescriptione(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
