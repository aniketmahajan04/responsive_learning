import { useState } from "react";

const testimonials = [
  { id: 1, name: "John Doe", text: "This service is amazing! Highly recommended." },
  { id: 2, name: "Jane Smith", text: "I've never been happier with a product. Five stars!" },
  { id: 3, name: "Mike Johnson", text: "The best experience I've ever had. Thank you!" },
];

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-500 text-white rounded-lg shadow-lg text-center">
      <p className="text-lg">{testimonials[current].text}</p>
      <h3 className="mt-4 font-bold">{testimonials[current].name}</h3>
      
      <div className="flex justify-between mt-6">
        <button onClick={prevTestimonial} className="bg-white text-blue-900 px-4 py-2 rounded">Prev</button>
        <button onClick={nextTestimonial} className="bg-white text-blue-900 px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};
