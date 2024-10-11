import React from 'react';

function Home() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side: Text content */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-base mb-6">
            We are committed to providing the best services to our clients, ensuring that all needs are met with professionalism and care.
          </p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2">
          <img
            src="/images/developer.jpg"
            alt="Home"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
