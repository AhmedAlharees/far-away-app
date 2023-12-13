import { useState } from 'react';
import '../style.css';
import Header from './Header';
import Form from './Form';
import PackageList from './PackageList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleItemDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const isPacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirm = window.confirm('Are you sure you want to delete the list');
    if (confirm) setItems([]);
  };

  return (
    <div className="App">
      <Header />
      <Form onAddItem={handleAddItems} />
      <PackageList
        Items={items}
        onDeleteItem={handleItemDelete}
        onIsPacked={isPacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

