
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';
import { getFeaturedJobs } from '@/data/jobs';
import { ChevronRight, Briefcase, Users, Building, Heart } from 'lucide-react';

const Index: React.FC = () => {
  const featuredJobs = getFeaturedJobs();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-company-50 via-white to-company-50">
        <div className="container-custom min-h-[70vh] flex flex-col justify-center items-center text-center">
          <h1 className="heading-1 max-w-4xl mb-6 text-gray-900">
            Join Our Team and <span className="text-company-600">Make an Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            We're on a mission to transform how people work together. Discover exciting career opportunities and be part of our journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-company-600 hover:bg-company-700">
              <Link to="/careers">Explore Careers</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building a team of passionate individuals who want to make a difference in the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-company-100 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
              <p className="text-gray-600">
                Work on challenging problems that have real impact on how businesses and teams operate.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-company-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Amazing Culture</h3>
              <p className="text-gray-600">
                Join a diverse team that values collaboration, innovation, and personal growth.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-company-100 flex items-center justify-center mx-auto mb-4">
                <Building className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Professional development is a priority, with clear paths for career advancement.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-company-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Great Benefits</h3>
              <p className="text-gray-600">
                Competitive compensation, health benefits, flexible work arrangements, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="heading-2 text-gray-900">Featured Opportunities</h2>
            <Link 
              to="/careers" 
              className="text-company-600 hover:text-company-700 font-medium flex items-center"
            >
              View All Positions
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">Don't see the right fit? We're always looking for talented individuals.</p>
            <Button asChild className="bg-company-600 hover:bg-company-700">
              <Link to="/careers">Browse All Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-company-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Take the next step in your career journey. Explore our open positions and find your perfect role.
          </p>
          <Button asChild size="lg" className="bg-white text-company-700 hover:bg-gray-100">
            <Link to="/careers">View All Opportunities</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
