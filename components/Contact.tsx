import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface FormData {
  name: string;
  country: string;
  contactNumber: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    country: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-8">
              Let's discuss your<br />project.
            </h1>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-black" />
                <a href="tel:+919599312363" className="text-black hover:text-cyan-800">
                  +91 9599312363
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-black" />
                <a href="mailto:info@businesspromoz.com" className="text-black hover:text-cyan-800">
                  info@businesspromoz.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-black" />
                <span className="text-black">
                  Ghaziabad,Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>


          <div className="w-full lg:w-1/2">
            <p className="text-black mb-6">For further details,write to us</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                required
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                required
              />

              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md bg-white h-32 resize-none text-black"
                required
              />

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;