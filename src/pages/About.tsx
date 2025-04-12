
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Target, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-company-50 via-white to-company-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6 text-gray-900">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Founded in 2018, YourCompany is on a mission to transform how teams work together in the digital age. We're building tools that enable collaboration, productivity, and creativity.
            </p>
            <Button asChild className="bg-company-600 hover:bg-company-700">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  YourCompany was born out of a shared frustration with the inefficiencies and limitations of existing tools for team collaboration. Our founders, having experienced these challenges firsthand at various organizations, came together with a vision to create something better.
                </p>
                <p>
                  What started as a small team of passionate engineers and designers has grown into a diverse company of over 100 employees across multiple continents. Despite our growth, we remain committed to our original mission: making work better for teams everywhere.
                </p>
                <p>
                  Today, our platform is used by thousands of teams worldwide, from startups to Fortune 500 companies. We're proud of what we've built, but we're even more excited about what's next.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Company office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product decisions to how we interact with each other and our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 text-company-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                We relentlessly focus on our customers' needs, constantly seeking feedback and iterating to deliver exceptional experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <TrendingUp className="h-10 w-10 text-company-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                We're never satisfied with the status quo. We constantly push ourselves to learn, grow, and improve in all aspects of our work.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="h-10 w-10 text-company-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Inclusive Collaboration</h3>
              <p className="text-gray-600">
                We believe the best ideas come from diverse perspectives. We foster an environment where everyone's voice is heard and valued.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Target className="h-10 w-10 text-company-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Purpose-Driven</h3>
              <p className="text-gray-600">
                We're motivated by impact, not just metrics. We make decisions based on long-term vision rather than short-term gains.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-company-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We take pride in our work and hold ourselves to high standards. We strive for excellence in everything we do.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <svg className="h-10 w-10 text-company-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and welcome new ideas. We're not afraid to challenge conventions and explore uncharted territories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 h-96 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-2 text-gray-900 mb-6">Our Approach</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At YourCompany, we believe in a human-centered approach to building technology. We start by deeply understanding the challenges our customers face, then work backward to create intuitive solutions.
                </p>
                <p>
                  We prioritize simplicity and usability, knowing that the best tools are those that feel invisible—enhancing productivity without adding complexity.
                </p>
                <p>
                  Our development process is iterative and collaborative. We work in small cross-functional teams, maintaining close communication with our users throughout the product lifecycle.
                </p>
                <p>
                  This approach has enabled us to build a platform that genuinely improves how teams work, making collaboration more efficient, transparent, and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-company-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-gray-900 mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're looking for passionate individuals who share our values and want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-company-600 hover:bg-company-700">
              <Link to="/careers">Explore Careers</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
