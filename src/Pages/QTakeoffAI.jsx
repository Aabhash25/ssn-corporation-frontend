import React from "react";

const QTakeoffAI = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16 font-roboto pt-45">
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
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-black-500 mb-4">
          AI-Powered Quantity TakeOff And Cost Estimation
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-4">
          Our AI-enabled Quantity Takeoff (QTO) product automatically analyzes
          2D building plans to extract elements and generate accurate quantity
          takeoffs.
        </p>
        <p className="text-gray-700 text-lg md:text-xl mb-4">
          It reduces manual effort by <strong>75 to 95%</strong>, minimizes
          errors, and accelerates project planning timeline.
        </p>
        <p className="text-gray-700 text-lg md:text-xl">
          It integrates real-time cost data to provide material estimates and
          empower data-driven decision making.
        </p>
        <a
          href="https://www.qtakeoff.ai"
          className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Visit Quantity Takeoff
        </a>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
        <img
          src="/qtakeoff1.webp"
          alt="AI analyzing construction blueprints"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            AI-powered blueprint analysis
          </h2>
          <p className="text-gray-700">
            Our AI solution accurately extracts quantities from construction
            blueprints, enabling faster and more precise project planning.
            <br />
            <br />
            It minimizes human errors, accelerates decision-making, and
            integrates real-time cost data for better project management.
          </p>
        </div>
      </section>

      {/* Proven Results */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-playfair font-bold mb-8">
          Proven Results
        </h2>
        <p className="text-gray-700 mb-12">
          Our AI solutions deliver measurable improvements across key
          performance indicators
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-yellow-500 mb-2">
              95%
            </h3>
            <p className="text-gray-700">Accuracy Rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-yellow-500 mb-2">
              10x
            </h3>
            <p className="text-gray-700">Faster Processing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-yellow-500 mb-2">
              50%
            </h3>
            <p className="text-gray-700">Cost Reduction</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-yellow-500 mb-2">
              24/7
            </h3>
            <p className="text-gray-700">AI Analysis</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QTakeoffAI;
