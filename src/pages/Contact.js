import React from 'react';

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="space-y-4">
          {/* Name input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="Your Name"
            />
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="you@example.com"
            />
          </div>

          {/* Message input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-white py-2 px-6 rounded-md hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
