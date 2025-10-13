import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Calculator } from 'lucide-react';

const MeetTheTeam: React.FC = () => {
  const teams = [
    {
      department: 'Import Team',
      icon: <Package className="w-6 h-6" />,
      color: 'blue',
      description: 'Specialists in handling incoming shipments from across Europe',
      members: [
        {
          name: 'Nikos Papadopoulos',
          role: 'Import Operations Manager',
          description: 'Oversees all import logistics and customs clearance.',
          image: '/team/DSC_2161.JPG'
        },
        {
          name: 'Elena Georgiou',
          role: 'Import Coordinator',
          description: 'Manages documentation and compliance for incoming goods.',
          image: '/team/DSC_2196.JPG'
        },
        {
          name: 'Dimitris Kostas',
          role: 'Customs Specialist',
          description: 'Expert in customs regulations and import procedures.',
          image: '/team/DSC_2226.JPG'
        },
        {
          name: 'Anna Nikolaou',
          role: 'Import Logistics Officer',
          description: 'Coordinates warehouse reception and inventory.',
          image: '/team/DSC_2234.JPG'
        }
      ]
    },
    {
      department: 'Export Team',
      icon: <Truck className="w-6 h-6" />,
      color: 'orange',
      description: 'Dedicated to ensuring smooth outbound shipments throughout Europe',
      members: [
        {
          name: 'Kostas Dimitriadis',
          role: 'Export Operations Manager',
          description: 'Manages all export routes and carrier relationships.',
          image: '/team/DSC_2268.JPG'
        },
        {
          name: 'Sofia Papadaki',
          role: 'Export Coordinator',
          description: 'Handles export documentation and shipping schedules.',
          image: '/team/DSC_2288.JPG'
        },
        {
          name: 'Giorgos Alexiou',
          role: 'Export Logistics Specialist',
          description: 'Plans optimal routes and manages carrier networks.',
          image: '/team/DSC_2297.JPG'
        },
        {
          name: 'Maria Stefanou',
          role: 'International Sales Support',
          description: 'Assists clients with export requirements and solutions.',
          image: '/team/DSC_2328.JPG'
        }
      ]
    },
    {
      department: 'Accounting Team',
      icon: <Calculator className="w-6 h-6" />,
      color: 'green',
      description: 'Financial experts ensuring accuracy and transparency',
      members: [
        {
          name: 'Maria Ioannou',
          role: 'Chief Accountant',
          description: 'Oversees all financial operations and compliance.',
          image: '/team/DSC_2334.JPG'
        },
        {
          name: 'Yannis Petrou',
          role: 'Financial Controller',
          description: 'Manages invoicing, payments, and financial reporting.',
          image: '/team/DSC_2346.JPG'
        },
        {
          name: 'Christina Makri',
          role: 'Accounts Payable Specialist',
          description: 'Handles vendor payments and expense tracking.',
          image: '/team/DSC_2383.JPG'
        }
      ]
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
            <motion.div 
              key={index} 
              className="rounded-xl shadow-md bg-white p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden bg-gray-100 ring-4 ring-orange-100">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👤
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;