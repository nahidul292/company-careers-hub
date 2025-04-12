
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getJobById } from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ApplicationForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const job = id ? getJobById(id) : null;
  
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
    linkedin: '',
    portfolio: '',
    referral: '',
    isSubmitting: false,
    isSubmitted: false,
    errors: {} as Record<string, string>
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: ''
      }
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState(prev => ({
        ...prev,
        resume: e.target.files![0],
        errors: {
          ...prev.errors,
          resume: ''
        }
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formState.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formState.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formState.resume) {
      errors.resume = 'Resume is required';
    }
    
    if (!formState.coverLetter.trim()) {
      errors.coverLetter = 'Cover letter is required';
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors
      }));
      
      // Show error toast
      toast({
        title: "Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      
      return;
    }
    
    setFormState(prev => ({
      ...prev,
      isSubmitting: true
    }));
    
    // Simulate API call
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true
      }));
      
      // Show success toast
      toast({
        title: "Application Submitted",
        description: "Your application has been successfully submitted. We'll be in touch soon!",
      });
    }, 1500);
  };

  if (formState.isSubmitted) {
    return (
      <Layout>
        <div className="container-custom py-12 max-w-3xl mx-auto">
          <Card className="bg-white border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Application Submitted!
              </CardTitle>
              <CardDescription className="text-gray-600">
                Thank you for applying to {job.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6 pt-2">
              <p className="text-gray-700 mb-6">
                We've received your application for the {job.title} position. Our team will review your application and get back to you soon.
              </p>
              <p className="text-gray-700 mb-10">
                A confirmation email has been sent to {formState.email}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button asChild className="w-full bg-company-600 hover:bg-company-700">
                <Link to="/careers">View More Positions</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
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
          Back to Job Details
        </button>
        
        <div className="max-w-3xl mx-auto">
          {/* Form Header */}
          <div className="mb-10 text-center">
            <h1 className="heading-2 text-gray-900 mb-2">Apply for {job.title}</h1>
            <p className="text-gray-600">
              Complete the form below to apply for this position. Fields marked with * are required.
            </p>
          </div>
          
          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleInputChange}
                    className={formState.errors.fullName ? 'border-red-500' : ''}
                  />
                  {formState.errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={formState.errors.email ? 'border-red-500' : ''}
                  />
                  {formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.email}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className={formState.errors.phone ? 'border-red-500' : ''}
                  />
                  {formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Application Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Application Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="resume">
                    Resume/CV <span className="text-red-500">*</span>
                  </Label>
                  <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    formState.errors.resume ? 'border-red-500' : 'border-gray-300'
                  }`}>
                    {formState.resume ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="p-2 bg-gray-100 rounded">
                          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-medium">{formState.resume.name}</p>
                          <p className="text-xs text-gray-500">
                            {(formState.resume.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormState(prev => ({ ...prev, resume: null }))}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          Drag and drop your resume, or <span className="text-company-600 font-medium">browse</span>
                        </p>
                        <p className="text-xs text-gray-500">
                          Supported formats: PDF, DOCX, DOC (max 5MB)
                        </p>
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                        <label
                          htmlFor="resume"
                          className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                        >
                          Select File
                        </label>
                      </div>
                    )}
                  </div>
                  {formState.errors.resume && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.resume}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="coverLetter">
                    Cover Letter <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formState.coverLetter}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                    className={formState.errors.coverLetter ? 'border-red-500' : ''}
                  />
                  {formState.errors.coverLetter ? (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.coverLetter}</p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">Min. 150 characters</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Additional Information (Optional)</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={formState.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <Label htmlFor="portfolio">Portfolio/Website</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    value={formState.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="referral">How did you hear about this position?</Label>
                  <Input
                    id="referral"
                    name="referral"
                    value={formState.referral}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            
            {/* Submission */}
            <div className="border-t pt-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      By submitting this application, you agree to our privacy policy and consent to the processing of your personal data for the purpose of your application.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-company-600 hover:bg-company-700"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationForm;
