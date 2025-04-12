
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TeamMember from '@/components/TeamMember';
import { teamMembers, getDepartments } from '@/data/team';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const departments = ['All', ...getDepartments()];
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredMembers = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-company-50 via-white to-company-50 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-gray-900">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a diverse group of passionate individuals working together to transform how teams collaborate worldwide.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Department Filters */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setActiveFilter(department)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === department
                      ? 'bg-company-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>
          
          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="section-padding bg-company-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-company-100 rounded-full mb-6">
              <UserPlus className="h-8 w-8 text-company-600" />
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals to join our growing team. Check out our open positions and apply today.
            </p>
            <Button asChild className="bg-company-600 hover:bg-company-700">
              <Link to="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
