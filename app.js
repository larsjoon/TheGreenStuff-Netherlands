import React from 'react';

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 font-inter text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white bg-opacity-90 shadow-md py-4 px-6 md:px-12 flex justify-between items-center rounded-b-xl">
        <div className="flex items-center space-x-3">
          <span className="text-3xl text-emerald-600">🌿</span> {/* Eco icon */}
          <h1 className="text-3xl font-bold text-green-700">The Green Stuff</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 md:py-20 flex flex-col items-center justify-center">
        <section className="text-center mb-16 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-800 leading-tight mb-6 animate-fade-in-down">
            Unveiling Tomorrow's Sustainable Innovations
          </h2>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in-up delay-200">
            Welcome to The Green Stuff, where we're crafting the future of eco-conscious living. Prepare to discover revolutionary products designed to harmonize with our planet.
          </p>
          <div className="inline-block bg-emerald-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 animate-bounce-slow">
            <span className="text-lg">Mysteries Unfolding Soon! ✨</span>
          </div>
        </section>

        {/* Products Section - Placeholder */}
        <section className="w-full max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-green-700 mb-12">Secrets Yet to Be Revealed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <img
                src="https://placehold.co/200x150/d1fae5/065f46?text=Innovation+1"
                alt="Placeholder Eco Product 1"
                className="w-full h-auto rounded-lg mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/d1fae5/065f46?text=Image+Error"; }}
              />
              <h4 className="text-2xl font-semibold text-green-600 mb-2">The Unseen Resupply</h4>
              <p className="text-gray-600 mb-4 flex-grow">
                Redefining resource consumption with solutions that anticipate your needs, invisibly.
              </p>
              <span className="bg-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full">
                Guarded Until Launch
              </span>
            </div>

            {/* Placeholder Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <img
                src="https://placehold.co/200x150/bbf7d0/065f46?text=Innovation+2"
                alt="Placeholder Renewable Energy Solution"
                className="w-full h-auto rounded-lg mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/bbf7d0/065f46?text=Image+Error"; }}
              />
              <h4 className="text-2xl font-semibold text-green-600 mb-2">Echoes of Efficiency</h4>
              <p className="text-gray-600 mb-4 flex-grow">
                Harnessing the very essence of energy, transforming the mundane into the magnificent.
              </p>
              <span className="bg-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full">
                Awaiting Revelation
              </span>
            </div>

            {/* Placeholder Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <img
                src="https://placehold.co/200x150/86efac/065f46?text=Innovation+3"
                alt="Placeholder Sustainable Fashion"
                className="w-full h-auto rounded-lg mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/86efac/065f46?text=Image+Error"; }}
              />
              <h4 className="text-2xl font-semibold text-green-600 mb-2">The Wearable Horizon</h4>
              <p className="text-gray-600 mb-4 flex-grow">
                Garments that adapt, evolve, and tell a story of conscious creation.
              </p>
              <span className="bg-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full">
                Unfolding Soon
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-6 md:px-12 text-center rounded-t-xl">
        <p className="text-lg mb-4">
          "Innovating for a Greener Tomorrow, Today."
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Green Stuff. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Committed to sustainability, circularity, and a healthier planet.
        </p>
      </footer>
    </div>
  );
}

export default App;
