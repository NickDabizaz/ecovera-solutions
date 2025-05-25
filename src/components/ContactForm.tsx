'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {      // In v1, we'll just log to console and show success message
      console.log('Form submitted:', formData);
      
      // For v1, we could also create a mailto link (uncomment below if needed)
      // const subject = encodeURIComponent('Contact Form Submission from ' + formData.name);
      // const body = encodeURIComponent(
      //   `Name: ${formData.name}\n` +
      //   `Email: ${formData.email}\n` +
      //   `Phone: ${formData.phone || 'Not provided'}\n\n` +
      //   `Message:\n${formData.message}`
      // );
      // window.location.href = `mailto:hello@ecoverasolutions.com?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-clean-white rounded-2xl shadow-lg p-8 text-center">
        <CheckCircle size={64} className="mx-auto mb-4 text-leaf-green" />
        <h3 className="text-2xl font-bold font-rymaneco text-deep-forest mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-charcoal-grey mb-4">
          Your message has been received. We&apos;ll get back to you within 24 hours.
        </p>
        <p className="text-sm text-charcoal-grey">
          This form will reset automatically in a few seconds.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-clean-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold font-rymaneco text-deep-forest mb-2">
          Send us a Message
        </h3>
        <p className="text-charcoal-grey">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-deep-forest mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-leaf-green outline-none transition-colors ${
            errors.name ? 'border-red-500' : 'border-stone-grey'
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle size={16} className="mr-1" />
            {errors.name}
          </div>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-deep-forest mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-leaf-green outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-stone-grey'
          }`}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle size={16} className="mr-1" />
            {errors.email}
          </div>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-deep-forest mb-2">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-stone-grey rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-leaf-green outline-none transition-colors"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-deep-forest mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-leaf-green outline-none transition-colors resize-vertical ${
            errors.message ? 'border-red-500' : 'border-stone-grey'
          }`}
          placeholder="Tell us about your project or how we can help you..."
        />
        {errors.message && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle size={16} className="mr-1" />
            {errors.message}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-leaf-green text-clean-white py-3 px-6 rounded-lg font-medium hover:bg-deep-forest transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-clean-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-xs text-charcoal-grey text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
};

export default ContactForm;
