'use client';

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

type MenuItem = {
  id: string;
  name: string;
};

export default function Dashboard() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState("");

  // Fetch menu items
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "menu"));
      const data: MenuItem[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<MenuItem, "id">),
      }));
      setItems(data);
    };

    fetchData();
  }, []);

  // Add new item
  const addItem = async () => {
    if (!newItem.trim()) return;
    await addDoc(collection(db, "menu"), { name: newItem });
    setNewItem("");
    location.reload(); // Quick reload; consider using setItems instead
  };

  // Delete item
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "menu", id));
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Enter item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
        />
        <button
          onClick={addItem}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border px-4 py-2 rounded"
          >
            <span>{item.name}</span>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
