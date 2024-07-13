// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './index.css';

const socket = io('http://localhost:5000');

const App = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();

    socket.on('dishUpdated', (updatedDish) => {
      setDishes(prevDishes => 
        prevDishes.map(dish => dish._id === updatedDish._id ? updatedDish : dish)
      );
    });

    return () => socket.off('dishUpdated');
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const togglePublish = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/dishes/${id}/toggle`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 animate-pulse">Dish Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {dishes.map(dish => (
          <div key={dish._id} className="bg-white shadow-md rounded-lg p-4 transition duration-300 hover:scale-105">
            <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{dish.dishName}</h2>
            <button 
              onClick={() => togglePublish(dish._id)} 
              className={`mt-4 px-4 py-2 rounded ${dish.isPublished ? 'bg-red-500' : 'bg-green-500'} text-white`}
            >
              {dish.isPublished ? 'Unpublish' : 'Publish'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
