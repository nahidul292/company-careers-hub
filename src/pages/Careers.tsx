
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import JobCard from '@/components/JobCard';
import { jobs, getDepartments, getLocations, getEmploymentTypes } from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, X } from 'lucide-react';

const Careers: React.FC = () => {
  const departments = getDepartments();
  const locations = getLocations();
  const employmentTypes = getEmploymentTypes();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    employmentType: ''
  });
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      department: '',
      location: '',
      employmentType: ''
    });
    setSearchQuery('');
  };
  
  const filteredJobs = jobs.filter(job => {
    // Apply search query filter
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply department filter
    if (filters.department && job.department !== filters.department) {
      return false;
    }
    
    // Apply location filter
    if (filters.location && job.location !== filters.location) {
      return false;
    }
    
    // Apply employment type filter
    if (filters.employmentType && job.employmentType !== filters.employmentType) {
      return false;
    }
    
    return true;
  });
  
  const hasActiveFilters = filters.department || filters.location || filters.employmentType || searchQuery;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-company-50 via-white to-company-50 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-gray-900">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Explore our current opportunities and find your perfect role. We're looking for passionate individuals to help us build the future of work.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for positions..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 py-6 text-base"
            />
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Filter Opportunities</h2>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="flex items-center text-sm text-gray-600 hover:text-company-600"
                >
                  <X size={16} className="mr-1" />
                  Clear filters
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 mb-4">
                <Filter size={16} className="text-gray-500" />
                <span className="text-sm text-gray-500">Filters:</span>
              </div>
              
              {/* Department Filter */}
              <div className="filter-group mb-4">
                <span className="text-sm font-medium mr-2">Department:</span>
                <div className="flex flex-wrap gap-2">
                  {departments.map(department => (
                    <button
                      key={department}
                      onClick={() => handleFilterChange('department', department)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        filters.department === department
                          ? 'bg-company-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {department}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Location Filter */}
              <div className="filter-group mb-4">
                <span className="text-sm font-medium mr-2">Location:</span>
                <div className="flex flex-wrap gap-2">
                  {locations.map(location => (
                    <button
                      key={location}
                      onClick={() => handleFilterChange('location', location)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        filters.location === location
                          ? 'bg-company-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Employment Type Filter */}
              <div className="filter-group mb-4">
                <span className="text-sm font-medium mr-2">Type:</span>
                <div className="flex flex-wrap gap-2">
                  {employmentTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => handleFilterChange('employmentType', type)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        filters.employmentType === type
                          ? 'bg-company-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              {filteredJobs.length === 0 ? 'No positions found' : 
               filteredJobs.length === 1 ? '1 position found' : 
               `${filteredJobs.length} positions found`}
            </h2>
            {hasActiveFilters && (
              <p className="text-gray-600">
                Showing filtered results. {' '}
                <button 
                  onClick={clearFilters}
                  className="text-company-600 hover:text-company-700 font-medium"
                >
                  View all positions
                </button>
              </p>
            )}
          </div>
          
          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <svg className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Our Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed our hiring process to be thorough yet efficient, giving you the opportunity to showcase your skills and learn about us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-company-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Application</h3>
              <p className="text-gray-600">
                Submit your application through our careers page. We review every application and aim to respond within one week.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-company-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Initial Interview</h3>
              <p className="text-gray-600">
                A 30-45 minute video call with a recruiter to discuss your background, experience, and why you're interested in joining us.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-company-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Technical Assessment</h3>
              <p className="text-gray-600">
                Depending on the role, this could be a take-home assignment, technical interview, or portfolio review to evaluate your skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-company-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Final Interview</h3>
              <p className="text-gray-600">
                Meet with the team you'd be working with to dive deeper into the role and ensure there's a mutual fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No Suitable Positions CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-company-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="heading-3 text-gray-900 mb-4">Don't See a Suitable Position?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We're always on the lookout for exceptional talent. Send us your resume, and we'll keep it on file for future opportunities.
            </p>
            <Button>Submit Your Resume</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
