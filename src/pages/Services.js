import React from 'react';

function Service() {
  const services = [
    {
      image: '/images/developer2.jpg',
      title: 'Service One',
      description: 'We provide excellent service one to meet all your needs with professionalism and care.',
    },
    {
      image: '/images/developer2.jpg',
      title: 'Service Two',
      description: 'Our service two is designed to offer the best solutions tailored to your requirements.',
    },
    {
      image: '/images/developer2.jpg',
      title: 'Service Three',
      description: 'Service three is focused on providing efficient and reliable solutions for your business.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              {/* Circular image */}
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              {/* Service Description */}
              <p className="text-base text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;