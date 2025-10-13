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
          image: '/team/dsc_2161.jpg'
        },
        {
          name: 'Elena Georgiou',
          role: 'Import Coordinator',
          description: 'Manages documentation and compliance for incoming goods.',
          image: '/team/dsc_2196.jpg'
        },
        {
          name: 'Dimitris Kostas',
          role: 'Customs Specialist',
          description: 'Expert in customs regulations and import procedures.',
          image: '/team/dsc_2226.jpg'
        },
        {
          name: 'Anna Nikolaou',
          role: 'Import Logistics Officer',
          description: 'Coordinates warehouse reception and inventory.',
          image: '/team/dsc_2234.jpg'
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
          image: '/team/dsc_2268.jpg'
        },
        {
          name: 'Sofia Papadaki',
          role: 'Export Coordinator',
          description: 'Handles export documentation and shipping schedules.',
          image: '/team/dsc_2288.jpg'
        },
        {
          name: 'Giorgos Alexiou',
          role: 'Export Logistics Specialist',
          description: 'Plans optimal routes and manages carrier networks.',
          image: '/team/dsc_2297.jpg'
        },
        {
          name: 'Maria Stefanou',
          role: 'International Sales Support',
          description: 'Assists clients with export requirements and solutions.',
          image: '/team/dsc_2328.jpg'
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
          image: '/team/dsc_2334.jpg'
        },
        {
          name: 'Yannis Petrou',
          role: 'Financial Controller',
          description: 'Manages invoicing, payments, and financial reporting.',
          image: '/team/dsc_2346.jpg'
        },
        {
          name: 'Christina Makri',
          role: 'Accounts Payable Specialist',
          description: 'Handles vendor payments and expense tracking.',
          image: '/team/dsc_2383.jpg'
        }
      ]
    }
  ];

  // Helper function to get color classes based on department
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          badge: 'bg-blue-50 border-blue-200',
          icon: 'text-blue-600',
          ring: 'ring-blue-100',
          text: 'text-blue-500'
        };
      case 'orange':
        return {
          badge: 'bg-orange-50 border-orange-200',
          icon: 'text-orange-600',
          ring: 'ring-orange-100',
          text: 'text-orange-500'
        };
      case 'green':
        return {
          badge: 'bg-green-50 border-green-200',
          icon: 'text-green-600',
          ring: 'ring-green-100',
          text: 'text-green-500'
        };
      default:
        return {
          badge: 'bg-gray-50 border-gray-200',
          icon: 'text-gray-600',
          ring: 'ring-gray-100',
          text: 'text-gray-500'
        };
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated professionals working across departments to deliver excellence
          </motion.p>
        </div>

        {/* Department Sections */}
        <div className="space-y-16">
          {teams.map((team, teamIndex) => {
            const colors = getColorClasses(team.color);
            
            return (
              <motion.div
                key={teamIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: teamIndex * 0.1 }}
              >
                {/* Department Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} border rounded-full`}>
                      <span className={colors.icon}>{team.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{team.department}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-xl mx-auto">{team.description}</p>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {team.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      className="rounded-xl shadow-md bg-white p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                    >
                      <div className={`mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden bg-gray-100 ring-4 ${colors.ring}`}>
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
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {member.name}
                      </h4>
                      <p className={`${colors.text} font-medium mb-2`}>
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;