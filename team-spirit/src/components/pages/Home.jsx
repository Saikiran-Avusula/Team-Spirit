// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-[80vh] bg-white flex flex-col items-center pt-10 pb-20">
      {/* Hero Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0 mb-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4 leading-tight">Find your perfect stay</h1>
          <p className="text-lg text-gray-600 mb-6">Hotels, apartments, guest houses, and more. Book your next adventure with Team Spirit!</p>
          <form className="flex flex-col md:flex-row gap-3 md:gap-2 items-center md:items-end">
            <input type="text" placeholder="Where are you going?" className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-blue-400" />
            <input type="date" className="w-full md:w-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-blue-400" />
            <input type="date" className="w-full md:w-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-blue-400" />
            <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Search</button>
          </form>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/hero-hotel.png" alt="Hotel" className="w-80 h-64 object-cover rounded-2xl shadow-lg border border-blue-100 bg-blue-50" />
        </div>
      </div>
      {/* Popular Destinations */}
      <div className="w-full max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center cursor-pointer">
            <img src="/assets/city1.jpg" alt="City 1" className="w-24 h-20 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-700">Mumbai</span>
          </div>
          <div className="bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center cursor-pointer">
            <img src="/assets/city2.jpg" alt="City 2" className="w-24 h-20 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-700">Goa</span>
          </div>
          <div className="bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center cursor-pointer">
            <img src="/assets/city3.jpg" alt="City 3" className="w-24 h-20 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-700">Delhi</span>
          </div>
          <div className="bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center cursor-pointer">
            <img src="/assets/city4.jpg" alt="City 4" className="w-24 h-20 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-700">Bangalore</span>
          </div>
        </div>
      </div>
      {/* Explore by Category */}
      <div className="w-full max-w-5xl px-4 mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="/hotels/luxury" className="bg-white border border-blue-200 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center cursor-pointer">
            <img src="/assets/luxury-hotel.jpg" alt="Luxury Hotels" className="w-16 h-16 object-cover rounded-full mb-2" />
            <span className="font-semibold text-blue-700">Luxury Hotels</span>
          </a>
          <a href="/hotels/budget" className="bg-white border border-green-200 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center cursor-pointer">
            <img src="/assets/budget-hotel.jpg" alt="Budget Hotels" className="w-16 h-16 object-cover rounded-full mb-2" />
            <span className="font-semibold text-green-700">Budget Hotels</span>
          </a>
          <a href="/service-apartments/cityview" className="bg-white border border-purple-200 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center cursor-pointer">
            <img src="/assets/apartment.jpg" alt="Service Apartments" className="w-16 h-16 object-cover rounded-full mb-2" />
            <span className="font-semibold text-purple-700">Service Apartments</span>
          </a>
          <a href="/activities/adventure" className="bg-white border border-orange-200 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center cursor-pointer">
            <img src="/assets/adventure.jpg" alt="Adventure" className="w-16 h-16 object-cover rounded-full mb-2" />
            <span className="font-semibold text-orange-700">Adventure Tours</span>
          </a>
        </div>
      </div>
      {/* Promo Banner */}
      <div className="w-full max-w-5xl px-4 mt-16">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Get up to 20% OFF on your first booking!</h3>
            <p className="text-lg">Sign up now and unlock exclusive deals and coupons.</p>
          </div>
          <a href="/coupons" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-100 transition">View Coupons</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
