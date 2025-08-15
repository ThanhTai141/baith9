'use client';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:5000"; // hardcode cho test
    axios.get(`${apiUrl}/foods`)
      .then(res => setFoods(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🍔 GrabFood Clone</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food: any) => (
            <div 
              key={food.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col"
            >
              <img 
                src={food.imageUrl || "https://via.placeholder.com/300"} 
                alt={food.name} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{food.name}</h3>
              <p className="text-green-600 font-medium mb-4">{food.price} VND</p>
              <button className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                Đặt món
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
