import React, { useState } from 'react';
import { ShieldIcon, CheckCircleIcon, ClockIcon, XCircleIcon, SearchIcon, FilterIcon, EyeIcon, CheckIcon, XIcon, UploadIcon, CameraIcon, FileTextIcon, UsersIcon, BadgeCheckIcon } from 'lucide-react';
export function Verification() {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSubmitVerification, setShowSubmitVerification] = useState(false);
  const [verificationStep, setVerificationStep] = useState(1);
  const [documentType, setDocumentType] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  // Mock verification requests data
  const verificationRequests = [{
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    type: 'Fisher Registration',
    location: 'Batangas City',
    submittedDate: '2023-05-10',
    status: 'pending',
    documents: ['ID Card', 'Proof of Residence', 'Boat Registration']
  }, {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    type: 'License Renewal',
    location: 'Batangas City',
    submittedDate: '2023-05-09',
    status: 'pending',
    documents: ['Old License', 'ID Card', 'Tax Certificate']
  }, {
    id: 3,
    name: 'Pedro Reyes',
    email: 'pedro@example.com',
    type: 'Boat Registration',
    location: 'San Juan',
    submittedDate: '2023-05-08',
    status: 'pending',
    documents: ['Boat Photos', 'Ownership Papers', 'ID Card']
  }, {
    id: 4,
    name: 'Ana Gonzales',
    email: 'ana@example.com',
    type: 'Fisher Registration',
    location: 'Lipa City',
    submittedDate: '2023-05-05',
    status: 'approved',
    documents: ['ID Card', 'Proof of Residence', 'Tax Certificate'],
    approvedDate: '2023-05-07',
    approvedBy: 'Admin LGU'
  }, {
    id: 5,
    name: 'Roberto Lim',
    email: 'roberto@example.com',
    type: 'License Renewal',
    location: 'Batangas City',
    submittedDate: '2023-05-04',
    status: 'rejected',
    documents: ['Old License', 'ID Card'],
    rejectedDate: '2023-05-06',
    rejectedBy: 'Admin LGU',
    rejectionReason: 'Incomplete documentation. Missing tax certificate.'
  }];
  // Filter verification requests based on active tab and search term
  const filteredRequests = verificationRequests.filter(request => {
    const matchesTab = activeTab === 'all' || request.status === activeTab;
    const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase()) || request.email.toLowerCase().includes(searchTerm.toLowerCase()) || request.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });
  const handleFileUpload = e => {
    const files = Array.from(e.target.files);
    // In a real app, you'd upload these files to a server
    // For this demo, we'll just store the file names
    setUploadedFiles([...uploadedFiles, ...files.map(file => file.name)]);
  };
  const nextStep = () => {
    if (verificationStep < 3) {
      setVerificationStep(verificationStep + 1);
    } else {
      // Submit verification request
      setShowSubmitVerification(false);
      setVerificationStep(1);
      setDocumentType('');
      setUploadedFiles([]);
      // In a real app, you'd submit the data to a server here
    }
  };
  const prevStep = () => {
    if (verificationStep > 1) {
      setVerificationStep(verificationStep - 1);
    } else {
      setShowSubmitVerification(false);
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Verification</h2>
          <p className="text-gray-600 mt-1">
            Review and validate user registration requests
          </p>
        </div>
        <button onClick={() => setShowSubmitVerification(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
          <ShieldIcon className="h-5 w-5 mr-2" />
          Submit Verification
        </button>
      </div>
      {showSubmitVerification ? <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Fisherman ID Verification
              </h3>
              <button onClick={() => setShowSubmitVerification(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Submit your documents to get verified as a registered fisherman
            </p>
          </div>
          {/* Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${verificationStep >= 1 ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500'}`}>
                  <span className="text-sm font-medium">1</span>
                </div>
                <div className={`ml-2 text-sm font-medium ${verificationStep >= 1 ? 'text-teal-600' : 'text-gray-500'}`}>
                  Select Documents
                </div>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${verificationStep >= 2 ? 'bg-teal-500' : 'bg-gray-200'}`}></div>
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${verificationStep >= 2 ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500'}`}>
                  <span className="text-sm font-medium">2</span>
                </div>
                <div className={`ml-2 text-sm font-medium ${verificationStep >= 2 ? 'text-teal-600' : 'text-gray-500'}`}>
                  Upload Files
                </div>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${verificationStep >= 3 ? 'bg-teal-500' : 'bg-gray-200'}`}></div>
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${verificationStep >= 3 ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500'}`}>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className={`ml-2 text-sm font-medium ${verificationStep >= 3 ? 'text-teal-600' : 'text-gray-500'}`}>
                  Review & Submit
                </div>
              </div>
            </div>
          </div>
          {/* Step 1: Select Document Type */}
          {verificationStep === 1 && <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">
                Select Document Type
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button type="button" onClick={() => setDocumentType('fisher_id')} className={`flex flex-col items-center justify-center p-6 border rounded-lg ${documentType === 'fisher_id' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <BadgeCheckIcon className={`h-8 w-8 mb-3 ${documentType === 'fisher_id' ? 'text-teal-500' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">
                    Fisher ID Verification
                  </span>
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    For official registration as a fisherman
                  </p>
                </button>
                <button type="button" onClick={() => setDocumentType('boat')} className={`flex flex-col items-center justify-center p-6 border rounded-lg ${documentType === 'boat' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <FileTextIcon className={`h-8 w-8 mb-3 ${documentType === 'boat' ? 'text-teal-500' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Boat Registration</span>
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    Register your fishing boat
                  </p>
                </button>
                <button type="button" onClick={() => setDocumentType('community')} className={`flex flex-col items-center justify-center p-6 border rounded-lg ${documentType === 'community' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <UsersIcon className={`h-8 w-8 mb-3 ${documentType === 'community' ? 'text-teal-500' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">
                    Community Membership
                  </span>
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    Join fisher community groups
                  </p>
                </button>
              </div>
              {documentType && <div className="mt-6 bg-blue-50 p-4 rounded-md">
                  <h5 className="text-sm font-medium text-blue-800 mb-2">
                    Required Documents
                  </h5>
                  {documentType === 'fisher_id' && <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
                      <li>Valid government-issued ID (front and back)</li>
                      <li>Proof of residence (utility bill, etc.)</li>
                      <li>2x2 ID picture with white background</li>
                      <li>Barangay certification (optional)</li>
                    </ul>}
                  {documentType === 'boat' && <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
                      <li>Clear photos of your boat (front, side, back)</li>
                      <li>Proof of ownership</li>
                      <li>Previous registration (if any)</li>
                      <li>Boat specifications document</li>
                    </ul>}
                  {documentType === 'community' && <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
                      <li>Fisher ID or government-issued ID</li>
                      <li>Proof of fishing activity</li>
                      <li>Community membership application form</li>
                    </ul>}
                </div>}
            </div>}
          {/* Step 2: Upload Files */}
          {verificationStep === 2 && <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">
                Upload Documents
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <UploadIcon className="h-8 w-8 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-500 mb-2">
                    Drag and drop files here
                  </p>
                  <p className="text-xs text-gray-400 mb-3">or</p>
                  <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none cursor-pointer">
                    <input type="file" className="sr-only" multiple onChange={handleFileUpload} />
                    Browse Files
                  </label>
                  <p className="text-xs text-gray-400 mt-2">
                    Supported formats: JPG, PNG, PDF (max 5MB)
                  </p>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <CameraIcon className="h-8 w-8 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-500 mb-2">
                    Take a photo with your camera
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    for ID or documents
                  </p>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    Open Camera
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    Ensure good lighting and clear focus
                  </p>
                </div>
              </div>
              {uploadedFiles.length > 0 && <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">
                    Uploaded Files
                  </h5>
                  <div className="bg-gray-50 rounded-md p-3">
                    <ul className="divide-y divide-gray-200">
                      {uploadedFiles.map((file, index) => <li key={index} className="py-2 flex justify-between items-center">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-700">
                              {file}
                            </span>
                          </div>
                          <button className="text-red-500 hover:text-red-700">
                            <XIcon className="h-4 w-4" />
                          </button>
                        </li>)}
                    </ul>
                  </div>
                </div>}
            </div>}
          {/* Step 3: Review & Submit */}
          {verificationStep === 3 && <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">
                Review & Submit
              </h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h5 className="text-sm font-medium text-gray-900 mb-2">
                  Verification Request Summary
                </h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Document Type:
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {documentType === 'fisher_id' && 'Fisher ID Verification'}
                      {documentType === 'boat' && 'Boat Registration'}
                      {documentType === 'community' && 'Community Membership'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Documents Uploaded:
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {uploadedFiles.length} files
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Submission Date:
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Estimated Processing Time:
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      2-3 business days
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-yellow-800">
                      What happens next?
                    </h5>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        After submission, your documents will be reviewed by
                        local authorities. You'll receive a notification once
                        your verification is approved or if additional
                        information is needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I confirm that all submitted documents are authentic and
                    accurate
                  </label>
                </div>
              </div>
            </div>}
          <div className="mt-6 flex justify-between">
            <button type="button" onClick={prevStep} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              {verificationStep === 1 ? 'Cancel' : 'Back'}
            </button>
            <button type="button" onClick={nextStep} disabled={!documentType && verificationStep === 1} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${!documentType && verificationStep === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 focus:outline-none'}`}>
              {verificationStep === 3 ? 'Submit Verification' : 'Next'}
            </button>
          </div>
        </div> : <div className="bg-white rounded-lg shadow">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-b border-gray-200">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-yellow-100">
                  <ClockIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Pending</h3>
                  <p className="text-2xl font-semibold text-yellow-600">
                    {verificationRequests.filter(r => r.status === 'pending').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-green-100">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Approved
                  </h3>
                  <p className="text-2xl font-semibold text-green-600">
                    {verificationRequests.filter(r => r.status === 'approved').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-red-100">
                  <XCircleIcon className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Rejected
                  </h3>
                  <p className="text-2xl font-semibold text-red-600">
                    {verificationRequests.filter(r => r.status === 'rejected').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Filters and Tabs */}
          <div className="border-b border-gray-200">
            <div className="p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex space-x-4">
                <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                  Pending
                </button>
                <button onClick={() => setActiveTab('approved')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'approved' ? 'bg-green-100 text-green-800' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                  Approved
                </button>
                <button onClick={() => setActiveTab('rejected')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'rejected' ? 'bg-red-100 text-red-800' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                  Rejected
                </button>
                <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'all' ? 'bg-blue-100 text-blue-800' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                  All Requests
                </button>
              </div>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Search requests..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <div className="flex items-center">
                  <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                    <option>All Types</option>
                    <option>Fisher Registration</option>
                    <option>License Renewal</option>
                    <option>Boat Registration</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Verification Requests List */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRequests.map(request => <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {request.name}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {request.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {request.type}
                      </div>
                      <div className="text-xs text-gray-500">
                        {request.documents.length} documents
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {request.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(request.submittedDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : request.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="p-1 rounded-full text-teal-600 hover:bg-teal-50">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        {request.status === 'pending' && <>
                            <button className="p-1 rounded-full text-green-600 hover:bg-green-50">
                              <CheckIcon className="h-5 w-5" />
                            </button>
                            <button className="p-1 rounded-full text-red-600 hover:bg-red-50">
                              <XIcon className="h-5 w-5" />
                            </button>
                          </>}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {filteredRequests.length === 0 && <div className="text-center py-12">
              <ShieldIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No verification requests found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing{' '}
                <span className="font-medium">{filteredRequests.length}</span>{' '}
                results
              </div>
              <div className="flex-1 flex justify-end">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}