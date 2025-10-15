import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { teamMembers, departments } from '../data/teamData';
import { useLanguage } from '../contexts/LanguageContext';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
}

const Team: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  // Filter team members based on selected department
  const filteredMembers = activeTab === 'all' 
    ? teamMembers 
    : teamMembers.filter((member: TeamMember) => member.department === activeTab);

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Η Ομάδα μας
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Γνωρίστε τους ανθρώπους που κάνουν τη διαφορά
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`
                px-6 py-3 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105
                ${activeTab === dept.id
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }
              `}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member: TeamMember, index: number) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Image Container */}
              <div className="relative pt-8 pb-6 px-6">
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&size=128&background=f59e0b&color=fff';
                    }}
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">
                  {member.role}
                </p>
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full">
                  <p className="text-sm text-gray-600 font-medium">
                    {member.department}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">Δεν βρέθηκαν μέλη της ομάδας</p>
          </div>
        )}
      </div>

      {/* Custom CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Team;

