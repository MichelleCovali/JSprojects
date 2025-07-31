import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Careers = () => {
  const jobListings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Strong Python programming skills',
        'Experience with TensorFlow or PyTorch',
        'Master's degree in Computer Science or related field',
      ],
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Computing',
      location: 'Hybrid',
      type: 'Full-time',
      description:
        'Design and implement scalable cloud infrastructure solutions for our clients.',
      requirements: [
        '7+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications',
        'Strong DevOps background',
        'Experience with containerization and microservices',
      ],
    },
    {
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Build modern web applications using the latest technologies and best practices.',
      requirements: [
        '3+ years of full-stack development experience',
        'Proficiency in React and Node.js',
        'Experience with TypeScript',
        'Strong problem-solving skills',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Careers at NovaEdge Solutions - Join Our Team"
        description="Join NovaEdge Solutions and be part of an innovative team driving digital transformation. Explore exciting career opportunities in technology and consulting."
        keywords="careers, job opportunities, tech jobs, digital transformation careers, join NovaEdge"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-gray-600">
                Be part of a team that's shaping the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Requirements:</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-primary mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4"
                              />
                            </svg>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn btn-primary">Apply Now</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8">Why Join NovaEdge?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Growth</h3>
                  <p className="text-gray-600">
                    Continuous learning and career development opportunities
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2">Culture</h3>
                  <p className="text-gray-600">
                    Collaborative and inclusive work environment
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">💪</div>
                  <h3 className="text-xl font-semibold mb-2">Benefits</h3>
                  <p className="text-gray-600">
                    Competitive compensation and comprehensive benefits
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers; 