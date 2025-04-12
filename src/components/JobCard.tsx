
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '@/data/jobs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${job.featured ? 'border-company-200 shadow-sm bg-company-50/30' : ''}`}>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-900">
              <Link to={`/jobs/${job.id}`} className="hover:text-company-600 transition-colors">
                {job.title}
              </Link>
            </h3>
            {job.featured && (
              <Badge className="bg-company-100 text-company-800 hover:bg-company-200">
                Featured
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{job.employmentType}</span>
            </div>
          </div>
          
          <p className="text-gray-600 line-clamp-2">
            {job.description}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 bg-gray-50 border-t">
        <Link 
          to={`/jobs/${job.id}`}
          className="text-company-600 hover:text-company-700 font-medium flex items-center text-sm"
        >
          View Details
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
