import React from 'react';
import { motion } from 'framer-motion';

const MeetTheTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nikos Papadopoulos',
      role: 'Logistics Coordinator',
      image: '/team/nikos.jpg',
      description: 'Ensures all shipments arrive on time and with full documentation.'
    },
    {
      name: 'Elena Georgiou',
      role: 'Customs Specialist',
      image: '/team/elena.jpg',
      description: 'Expert in customs clearance and compliance regulations.'
    },
    {
      name: 'Kostas Dimitriadis',
      role: 'Transport Manager',
      image: '/team/kostas.jpg',
      description: 'Oversees all transportation routes and manages carrier relationships.'
    },
    {
      name: 'Maria Ioannou',
      role: 'Customer Service Lead',
      image: '/team/maria.jpg',
      description: 'Dedicated to providing excellent support and client satisfaction.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-xl shadow-md bg-white p-6 text-center transition-transform hover:-translate-y-1">
              <img 
                src={member.image} 
                alt={member.name} 
                className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;