// ContactMe.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Slide-in animation setup
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation once the component is mounted
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
    });
  };
  console.log(formData.name);
  console.log(formData.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4oqfvy5', 
      'template_mg5pbmb', 
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'U_pNYTRyLVX6jXkDx'
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
        alert('Message sent successfully!');
      },
      (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message, please try again.');
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-black text-white p-8">
      {/* Heading */}
      <div className={`text-center mb-8 transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="text-5xl font-bold mb-4 text-green-400">Contact Us</h2>
        <p className="text-gray-500 text-lg">Feel free to reach out for any inquiries or collaboration.</p>
        <p>Phone : 7018948370</p>
      </div>

      {/* Contact Form */}
      <div className={`w-full max-w-md bg-gray-800  p-8 rounded-lg shadow-sm transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-300" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-300" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-300" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-xl p-3 rounded-md text-white transition duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-3xl text-green-500">Thank you for reaching out!</h3>
            <p className="text-gray-400 mt-4">We will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
