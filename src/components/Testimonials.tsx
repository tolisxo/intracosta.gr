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

  // Flatten all team members into one array with department info
  const allMembers = teams.flatMap(team => 
    team.members.map(member => ({
      ...member,
      department: team.department,
      departmentIcon: team.icon,
      color: team.color
    }))
  );

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Main Header */}
        <div className="text-center">
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
            Dedicated professionals across Import, Export, and Accounting departments
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scrolling Team Members */}
      <div className="relative">
        {/* Scroll hint - left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
        
        {/* Scroll hint - right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Scrollable container */}
        <div className="overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex gap-6 w-max"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {allMembers.map((member, index) => {
              const colors = getColorClasses(member.color);
              
              return (
                <motion.div
                  key={index}
                  className="w-72 flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="rounded-xl shadow-md bg-white p-6 text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    {/* Department Badge */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 ${colors.badge} border rounded-full text-sm`}>
                        <span className={colors.icon}>{member.departmentIcon}</span>
                        <span className="font-medium text-gray-700">{member.department}</span>
                      </div>
                    </div>

                    {/* Profile Picture */}
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

                    {/* Member Info */}
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className={`${colors.text} font-medium mb-3 text-sm`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll hint text */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Scroll to see all team members
          </span>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeam;