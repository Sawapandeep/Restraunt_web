
'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
interface Item {
  category: string
  title: string
  description: string
  image: string
}

interface Review {
  name: string
  username: string
  body: string
  img: string
}

export default function Dashboard() {
  const [items, setItems] = useState<Item[]>([])
  const [newItem, setNewItem] = useState<Item>({
    category: '',
    title: '',
    description: '',
    image: ''
  })

  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState<Review>({
    name: '',
    username: '',
    body: '',
    img: ''
  })

  const loadItems = async () => {
    const res = await fetch('/api/admin/items')
    const data = await res.json()
    setItems(data)
  }

  const loadReviews = async () => {
    const res = await fetch('/api/admin/reviews')
    const data = await res.json()
    setReviews(data)
  }

  const saveItems = async (updated: Item[]) => {
    await fetch('/api/admin/items', {
      method: 'POST',
      body: JSON.stringify(updated),
    })
    setItems(updated)
  }

  const saveReviews = async (updated: Review[]) => {
    await fetch('/api/admin/reviews', {
      method: 'POST',
      body: JSON.stringify(updated),
    })
    setReviews(updated)
  }

  const addItem = () => {
    const required = ['category', 'title', 'description', 'image']
    if (!required.every(key => newItem[key as keyof Item])) return alert('All fields required.')
    saveItems([...items, newItem])
    setNewItem({ category: '', title: '', description: '', image: '' })
  }

  const addReview = () => {
    const required = ['name', 'username', 'body', 'img']
    if (!required.every(key => newReview[key as keyof Review])) return alert('All fields required.')
    saveReviews([...reviews, newReview])
    setNewReview({ name: '', username: '', body: '', img: '' })
  }

  const deleteItem = (i: number) => {
    const updated = items.filter((_, idx) => idx !== i)
    saveItems(updated)
  }

  const deleteReview = (i: number) => {
    const updated = reviews.filter((_, idx) => idx !== i)
    saveReviews(updated)
  }
  const router = useRouter()
 const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }
  useEffect(() => {
    loadItems()
    loadReviews()
  }, [])



 
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
       <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      <h2 className="text-xl mb-2 mt-4">Items</h2>
      <ul className="mb-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded">
            <div className="flex justify-between">
              <span>{item.title} ({item.category})</span>
              <button onClick={() => deleteItem(i)} className="text-red-400 hover:text-red-600">Delete</button>
            </div>
            <p className="text-sm text-gray-300">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="bg-gray-800 p-4 rounded">
        <h3 className="mb-2 text-lg">Add New Item</h3>
        {['category', 'title', 'description', 'image'].map((field) => (
          <input
            key={field}
            className="mb-2 w-full p-2 rounded bg-gray-700 text-white"
            placeholder={field}
            value={newItem[field as keyof Item]}
            onChange={(e) => setNewItem({ ...newItem, [field]: e.target.value })}
          />
        ))}
        <button onClick={addItem} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Add Item
        </button>
      </div>

      <h2 className="text-xl mb-2 mt-8">Reviews</h2>
<ul className="mb-4 space-y-2">
  {reviews.map((review, i) => (
    <li key={i} className="bg-gray-800 p-2 rounded">
      <div className="flex justify-between">
        <span>{review.name} ({review.username})</span>
        <button onClick={() => deleteReview(i)} className="text-red-400 hover:text-red-600">Delete</button>
      </div>
      <p className="text-sm text-gray-300">{review.body}</p>
    </li>
  ))}
</ul>

<div className="bg-gray-800 p-4 rounded">
  <h3 className="mb-2 text-lg">Add New Review</h3>
  {['name', 'username', 'body', 'img'].map((field) => (
    <input
      key={field}
      className="mb-2 w-full p-2 rounded bg-gray-700 text-white"
      placeholder={field}
      value={newReview[field as keyof Review]}
      onChange={(e) => setNewReview({ ...newReview, [field]: e.target.value })}
    />
  ))}
  <button onClick={addReview} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
    Add Review
  </button>
</div>

    </div>
    
  )
}
