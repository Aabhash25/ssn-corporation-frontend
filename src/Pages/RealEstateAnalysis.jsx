import React from "react";

const RealEstateAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16 font-roboto">
      {/* Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap");
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16 pt-42">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-black-500 mb-4">
          Real Estate Site Analysis
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-4">
          Analyze your property and surroundings efficiently. Our AI-powered
          tool provides interactive insights on nearby points of interest (POIs)
          and generates detailed reports.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="font-playfair font-bold text-xl mb-2">
              Enter Location
            </h3>
            <p className="text-gray-700 text-center">
              Input your address or location details.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="font-playfair font-bold text-xl mb-2">Set Radius</h3>
            <p className="text-gray-700 text-center">
              Choose search radius and POI categories.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="font-playfair font-bold text-xl mb-2">Analyze</h3>
            <p className="text-gray-700 text-center">
              View interactive map with all POIs.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">
              4
            </div>
            <h3 className="font-playfair font-bold text-xl mb-2">Export</h3>
            <p className="text-gray-700 text-center">
              Generate professional PDF report.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Image Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="/report.png"
          alt="Interactive map analysis"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            Interactive Map Analysis
          </h2>
          <p className="text-gray-700">
            Explore nearby amenities, infrastructure, and points of interest
            with our AI-powered map interface. Quickly gain insights to make
            informed real estate decisions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RealEstateAnalysis;
