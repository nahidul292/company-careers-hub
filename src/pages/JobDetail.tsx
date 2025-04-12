
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getJobById } from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Briefcase, CalendarDays } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = id ? getJobById(id) : null;

  if (!job) {
    return (
      <Layout>
        <div className="container-custom text-center py-20">
          <h1 className="heading-1 mb-6 text-gray-900">Position Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The job position you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/careers">Browse All Positions</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-company-600 mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Jobs
        </button>
        
        {/* Job Header */}
        <div className="mb-12">
          <h1 className="heading-1 text-gray-900 mb-4">{job.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <Briefcase size={18} className="mr-2" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{job.employmentType}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays size={18} className="mr-2" />
              <span>Posted {format(parseISO(job.datePosted), 'MMMM d, yyyy')}</span>
            </div>
          </div>
          
          <Button asChild size="lg" className="bg-company-600 hover:bg-company-700">
            <Link to={`/apply/${job.id}`}>Apply for This Position</Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Job Description */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Application Process</h2>
              <p className="text-gray-700 mb-4">
                To apply for this position, please submit your application by clicking the button below. Our recruiting team reviews all applications and aims to respond within one week.
              </p>
              <p className="text-gray-700 mb-6">
                The hiring process typically includes an initial interview, a technical assessment, and a final interview with the team you'll be working with.
              </p>
              
              <Button asChild size="lg" className="bg-company-600 hover:bg-company-700">
                <Link to={`/apply/${job.id}`}>Apply for This Position</Link>
              </Button>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="text-gray-900">{job.department}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-gray-900">{job.location}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Employment Type</p>
                  <p className="text-gray-900">{job.employmentType}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Posted Date</p>
                  <p className="text-gray-900">{format(parseISO(job.datePosted), 'MMMM d, yyyy')}</p>
                </div>
              </div>
              
              <hr className="my-6 border-gray-200" />
              
              <h3 className="text-lg font-semibold mb-4">Share This Job</h3>
              
              <div className="flex space-x-3">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" aria-label="Share on LinkedIn">
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" aria-label="Share on Twitter">
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" aria-label="Share via Email">
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 4.8-8-4.8V6l8 4.8L20 6v2.7z" />
                  </svg>
                </button>
              </div>
              
              <hr className="my-6 border-gray-200" />
              
              <h3 className="text-lg font-semibold mb-4">Similar Positions</h3>
              
              <div className="space-y-3">
                {/* This would be populated with actual similar jobs data */}
                <Link 
                  to="/jobs/2" 
                  className="block p-3 hover:bg-gray-100 rounded"
                >
                  <p className="font-medium text-gray-900">Backend Developer</p>
                  <p className="text-sm text-gray-600">Engineering • Remote</p>
                </Link>
                <Link 
                  to="/jobs/4" 
                  className="block p-3 hover:bg-gray-100 rounded"
                >
                  <p className="font-medium text-gray-900">DevOps Engineer</p>
                  <p className="text-sm text-gray-600">Engineering • On-site</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;
