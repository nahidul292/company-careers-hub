
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';
import { getFeaturedJobs } from '@/data/jobs';
import { ChevronRight, Briefcase, Users, Building, Heart, Star, ArrowRight, TrendingUp, Clock, Globe } from 'lucide-react';

const Index: React.FC = () => {
  const featuredJobs = getFeaturedJobs();

  return (
    <Layout>
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-br from-company-600/10 via-company-100/30 to-company-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]"></div>
        <div className="container-custom min-h-[80vh] flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6 text-gray-900 leading-tight">
              Join Our Team and <br /><span className="text-company-600 relative">
                Make an Impact
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-company-300" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
              We're on a mission to transform how people work together. Discover exciting career opportunities and be part of our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-company-600 hover:bg-company-700 shadow-lg shadow-company-600/20 group transition-all">
                <Link to="/careers" className="flex items-center">
                  Explore Careers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-company-200 hover:bg-company-50 shadow-sm">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-company-${i * 100} flex items-center justify-center text-white text-xs font-medium`}>
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">Join <span className="font-semibold text-gray-800">100+ professionals</span> who already work with us</p>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-company-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-48 h-48 bg-company-300 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-company-600 mb-2">100+</div>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-company-600 mb-2">15+</div>
              <p className="text-gray-600">Open Positions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-company-600 mb-2">12</div>
              <p className="text-gray-600">Global Offices</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-company-600 mb-2">95%</div>
              <p className="text-gray-600">Employee Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-company-100 text-company-800 text-sm font-medium mb-4">Why Work With Us</div>
            <h2 className="heading-2 text-gray-900 mb-4">Join a Team That Cares About Your Growth</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building a team of passionate individuals who want to make a difference in the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-company-200 group">
              <div className="w-14 h-14 rounded-xl bg-company-100 flex items-center justify-center mb-4 group-hover:bg-company-200 transition-colors">
                <Briefcase className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
              <p className="text-gray-600">
                Work on challenging problems that have real impact on how businesses and teams operate.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-company-200 group">
              <div className="w-14 h-14 rounded-xl bg-company-100 flex items-center justify-center mb-4 group-hover:bg-company-200 transition-colors">
                <Users className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Amazing Culture</h3>
              <p className="text-gray-600">
                Join a diverse team that values collaboration, innovation, and personal growth.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-company-200 group">
              <div className="w-14 h-14 rounded-xl bg-company-100 flex items-center justify-center mb-4 group-hover:bg-company-200 transition-colors">
                <TrendingUp className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Professional development is a priority, with clear paths for career advancement.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-company-200 group">
              <div className="w-14 h-14 rounded-xl bg-company-100 flex items-center justify-center mb-4 group-hover:bg-company-200 transition-colors">
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

      {/* Company Culture */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-company-100 text-company-800 text-sm font-medium mb-4">Our Culture</div>
              <h2 className="heading-2 text-gray-900 mb-6">We Believe in Work-Life Balance</h2>
              <p className="text-lg text-gray-600 mb-6">
                At our company, we understand that people do their best work when they're happy and healthy. That's why we promote a culture that values both professional growth and personal wellbeing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Star className="h-5 w-5 text-company-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Flexible Work Arrangements</h3>
                    <p className="text-gray-600">Choose when and where you work best, with remote and hybrid options available.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Star className="h-5 w-5 text-company-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">Access to courses, conferences, and mentorship to help you grow.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Star className="h-5 w-5 text-company-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Global Opportunities</h3>
                    <p className="text-gray-600">With offices in 12 countries, there are plenty of opportunities to grow your career.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild variant="outline" className="border-company-200 hover:bg-company-50">
                  <Link to="/about" className="flex items-center">
                    Learn More About Us
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="relative aspect-square mt-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="Office environment" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="relative aspect-square -mt-16 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="Team member" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="relative aspect-square -mt-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="Office desk" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-company-200 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Featured Jobs with enhanced design */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-company-100 text-company-800 text-sm font-medium mb-4">Open Positions</div>
            <h2 className="heading-2 text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take your career to the next level with these exciting roles. We're looking for talented individuals to join our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Don't see the right fit? We're always looking for talented individuals.</p>
            <Button asChild className="bg-company-600 hover:bg-company-700 shadow-md shadow-company-600/10 group transition-all">
              <Link to="/careers" className="flex items-center">
                Browse All Positions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-company-100 text-company-800 text-sm font-medium mb-4">Testimonials</div>
            <h2 className="heading-2 text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the people who work here about their experiences and why they love being part of our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-company-200 rounded-full flex items-center justify-center text-company-700 font-bold">SL</div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Sarah Lee</h3>
                  <p className="text-sm text-gray-600">Senior Developer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The growth opportunities here are unmatched. I've been able to learn new technologies and advance my career much faster than at previous companies."
              </p>
              <div className="flex text-company-500 mt-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-company-200 rounded-full flex items-center justify-center text-company-700 font-bold">JT</div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">James Taylor</h3>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The collaborative culture here is amazing. Everyone is supportive and willing to help, which makes it a great place to work and develop professionally."
              </p>
              <div className="flex text-company-500 mt-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-company-200 rounded-full flex items-center justify-center text-company-700 font-bold">MJ</div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Maria Johnson</h3>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The work-life balance here is real, not just talk. I feel supported both in my professional goals and my personal life, which makes all the difference."
              </p>
              <div className="flex text-company-500 mt-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="section-padding bg-gradient-to-br from-company-700 to-company-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-company-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-company-500 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-2 mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Take the next step in your career journey. Explore our open positions and find your perfect role.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-company-700 hover:bg-gray-100 shadow-lg">
              <Link to="/careers" className="flex items-center">
                View All Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-3" />
              <div className="text-sm">Flexible Hours</div>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 mb-3" />
              <div className="text-sm">Remote Options</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-3" />
              <div className="text-sm">Great Team</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 mb-3" />
              <div className="text-sm">Growth Path</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
