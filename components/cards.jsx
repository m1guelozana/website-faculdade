"use client"
import React, { useState } from 'react';

const Card = ({ image, name, role, rating, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="w-96 rounded-lg shadow-lg bg-white p-6">
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full" src={image} alt={name} />
        <div className="flex-1">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-gray-600">{role}</div>
        </div>
        <div className="bg-gray-500 text-white text-sm font-bold rounded-full px-3 py-1">{rating}</div>
      </div>
      <button
        className="flex items-center justify-center mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transform transition-transform duration-300"
        onClick={() => setShowDescription(!showDescription)}
      >
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${showDescription ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {showDescription && (
        <p className="text-gray-700 text-base mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
