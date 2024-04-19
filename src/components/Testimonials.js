import React from 'react'
import "./Testimonials.css"
const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla sem. Fusce ut bibendum nunc. In hac habitasse platea dictumst.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla sem. Fusce ut bibendum nunc. In hac habitasse platea dictumst.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla sem. Fusce ut bibendum nunc. In hac habitasse platea dictumst.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Bob Williams',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla sem. Fusce ut bibendum nunc. In hac habitasse platea dictumst.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Eva Brown',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla sem. Fusce ut bibendum nunc. In hac habitasse platea dictumst.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Mike Davis',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla sem. Fusce ut bibendum nunc. In hac habitasse platea dictumst.',
      image: 'https://via.placeholder.com/150',
    }
  ];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <h3>Testimonials</h3> 
            <div className="profile-pic">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            
            <h4>{testimonial.name}</h4>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials