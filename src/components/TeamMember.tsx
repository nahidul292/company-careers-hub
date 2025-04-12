
import React from 'react';
import { TeamMember as TeamMemberType } from '@/data/team';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-company-600 font-medium">{member.role}</p>
            <p className="text-sm text-gray-500">{member.department}</p>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-3">
            {member.bio}
          </p>
          
          {member.socialLinks && (
            <div className="flex space-x-3 pt-2">
              {member.socialLinks.linkedin && (
                <a 
                  href={member.socialLinks.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-company-600"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.socialLinks.twitter && (
                <a 
                  href={member.socialLinks.twitter} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-company-600"
                  aria-label={`${member.name}'s Twitter profile`}
                >
                  <Twitter size={18} />
                </a>
              )}
              {member.socialLinks.github && (
                <a 
                  href={member.socialLinks.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-company-600"
                  aria-label={`${member.name}'s GitHub profile`}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
