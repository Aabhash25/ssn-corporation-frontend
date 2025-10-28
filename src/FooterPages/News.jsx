"use client";

import React from "react";

const News = ({ newsList }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {newsList && newsList.length > 0 ? (
        <div className="max-w-7xl w-full space-y-6">
          {newsList.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold">{newsItem.title}</h2>
              <p className="text-gray-600 mt-2">{newsItem.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // Message when no news available
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            News Not Available
          </h1>
          <p className="text-gray-600">
            Sorry, we currently don’t have any news to show. Please check back
            later.
          </p>
        </div>
      )}
    </div>
  );
};

export default News;
