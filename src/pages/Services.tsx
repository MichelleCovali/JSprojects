import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      id: 'ai',
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to transform your business operations.',
      features: [
        'Machine Learning Implementation',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Strategy Consulting',
      ],
      icon: '🤖',
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern enterprises.',
      features: [
        'Cloud Migration',
        'DevOps Implementation',
        'Serverless Architecture',
        'Cloud Security',
        'Cost Optimization',
      ],
      icon: '☁️',
    },
    {
      id: 'software',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business needs.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'API Development',
        'Legacy System Modernization',
        'Quality Assurance',
      ],
      icon: '💻',
    },
  ];

  return (
    <>
      <SEO
        title="Our Services - NovaEdge Solutions"
        description="Explore NovaEdge Solutions' comprehensive range of digital services including AI solutions, cloud computing, and custom software development tailored to your business needs."
        keywords="AI solutions, cloud computing, software development, digital services, technology consulting"
      />
      <div className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600">
                Comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl">{service.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-xl text-gray-600 mb-8">
                          {service.description}
                        </p>
                        <ul className="space-y-4">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals.
              </p>
              <a
                href="/contact"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services; 