import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'; // Make sure to install @heroicons/react
import Team from '../subcomponents/contact/Team';

const ContactUs = () => {
  return (
    <>
      <Team />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-blue-900">
              Get in Touch
            </h2>
            <p className="mt-2 text-md text-blue-600">
              We'd love to hear from you! Please fill out the form below or reach out directly via email or phone.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:support@eduverse.com" className="text-blue-500 hover:text-blue-700">
              <MailIcon className="h-6 w-6" />
            </a>
            <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">
              <PhoneIcon className="h-6 w-6" />
            </a>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-4 py-3 border border-blue-300 placeholder-blue-500 text-blue-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-md transition duration-150 ease-in-out"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-4 py-3 border border-blue-300 placeholder-blue-500 text-blue-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-md transition duration-150 ease-in-out"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none rounded-md relative block w-full px-4 py-3 border border-blue-300 placeholder-blue-500 text-blue-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-md transition duration-150 ease-in-out"
                  placeholder="Your Message"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform transition-transform duration-200 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;