import React from 'react';

const Home = () => {
  // Placeholder data
  const slides = [
    {image: '/path-to-your-image-1.jpg', title: 'Course 1', description: 'Course 1 description'},
    {image: '/path-to-your-image-2.jpg', title: 'Course 2', description: 'Course 2 description'},
    // Add more as needed
  ];
  
  const testimonials = [
    {name: 'John Doe', testimonial: 'This is a testimonial', image: '/path-to-your-image.jpg'},
    // Add more as needed
  ];
  
  const faqs = [
    {question: 'Question 1', answer: 'Answer 1'},
    // Add more as needed
  ];

  return (
    <div className="space-y-10">
      {/* Hero section */}
      <div className="relative h-96 bg-blue-500">
        {/* Put a hero image here */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl font-bold text-white">Welcome to USACO Coaching!</h2>
            <p className="text-xl text-white">We offer the best courses to ace the USACO.</p>
          </div>
        </div>
      </div>

      {/* Slides section */}
      <div className="p-5 space-y-5">
        {slides.map((slide, index) => (
          <div key={index} className="flex space-x-5">
            <img src={slide.image} alt={slide.title} className="w-1/2 h-60 object-cover" />
            <div className="flex flex-col justify-center space-y-3">
              <h3 className="text-2xl font-bold">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials section */}
      <div className="p-5 space-y-5">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex space-x-5">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 object-cover rounded-full" />
            <div className="flex flex-col justify-center space-y-2">
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p>"{testimonial.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ section */}
      <div className="p-5 space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-bold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
