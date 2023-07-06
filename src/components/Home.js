import React from 'react';
import Image1 from '../images/gong.jpg';
import Image2 from '../images/gong.jpg';
import TestimonialImage from '../images/gong.jpg';

const Home = () => {
  const slides = [
    {image: Image1, title: 'Course 1', description: 'Course 1 description'},
    {image: Image2, title: 'Course 2', description: 'Course 2 description'},
    // Add more as needed
  ];
  
  const testimonials = [
    {name: 'John Doe', testimonial: 'This is a testimonial', image: TestimonialImage},
    // Add more as needed
  ];

  const faqs = [
    {question: 'Question 1', answer: 'Answer 1'},
    // Add more as needed
  ];

  return (
    <div className="space-y-20 bg-gray-100 py-10">
      {/* Hero section */}
      <div className="relative h-96">
        <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl font-bold text-white">Welcome to USACO Coaching!</h2>
            <p className="text-2xl text-white">We offer the best courses to ace the USACO.</p>
          </div>
        </div>
      </div>

      {/* Slides section */}
      <div className="p-5 space-y-10">
        {slides.map((slide, index) => (
          <div key={index} className="flex space-x-5 bg-white p-10 rounded-lg shadow-md">
            <img src={slide.image} alt={slide.title} className="w-1/2 h-60 object-cover rounded-lg" />
            <div className="flex flex-col justify-center space-y-3">
              <h3 className="text-3xl font-bold">{slide.title}</h3>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials section */}
      <div className="p-5 space-y-10 bg-white p-10 rounded-lg shadow-md">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex space-x-5">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 object-cover rounded-full" />
            <div className="flex flex-col justify-center space-y-2">
              <h3 className="text-2xl font-bold">{testimonial.name}</h3>
              <p className="text-lg">"{testimonial.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ section */}
      <div className="p-5 space-y-10 bg-white p-10 rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-2xl font-bold">{faq.question}</h3>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
