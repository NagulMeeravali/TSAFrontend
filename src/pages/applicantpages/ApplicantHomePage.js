import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import ApplicantNavBar from '../../components/applicantcomponents/ApplicantNavBar';
import ApplicantLeftNavBar from '../../components/applicantcomponents/ApplicantLeftNavBar';
import ApplicantDashboard from '../../components/applicantcomponents/ApplicantDashboard';
import ApplicantFooter from '../../components/applicantcomponents/ApplicantFooter';
import ApplicantUpdateProfile from '../../components/applicantcomponents/ApplicantUpdateProfile';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ApplicantFindJobs from '../../components/applicantcomponents/ApplicantFindJobs';
import ApplicantViewJob from '../../components/applicantcomponents/ApplicantViewJob';
import ApplicantAppliedJobs from '../../components/applicantcomponents/ApplicantAppliedJobs';
import ApplicantSavedJobs from '../../components/applicantcomponents/ApplicantSavedJobs';
import ApplicantInterviewStatus from '../../components/applicantcomponents/ApplicantInterviewStatus';
import ApplicantChangePassword from '../../components/applicantcomponents/ApplicantChangePassword';
import ApplicantDeleteProfile from '../../components/applicantcomponents/ApplicantDeleteProfile';
import ApplicantJobAlerts from '../../components/applicantcomponents/ApplicantJobAlerts';
import ApplicantResume from '../../components/applicantcomponents/ApplicantResume';


function ApplicantHomePage() {
  const [activeRoute, setActiveRoute] = useState('');
  const [selectedJobId, setSelectedJobId] = useState('');
  const location = useLocation();
  
  const updateActiveRoute = () => {
    const pathname = location.pathname;

    
    switch (pathname) {
      case '/applicanthome':
        setActiveRoute('dashboard');
        break;
      case '/applicant-update-profile':
        setActiveRoute('profile');
        break;
        case '/applicant-find-jobs':
        setActiveRoute('findjobs');
        break;
        case '/applicant-view-job':
          setActiveRoute('viewjob');
        break;
        case '/applicant-applied-jobs':
          setActiveRoute('appliedjobs');
        break;
        case '/applicant-saved-jobs':
          setActiveRoute('savedjobs');
        break;
        case '/applicant-interview-status':
          setActiveRoute('interviewstatus');
        break;
        case '/applicant-change-password':
          setActiveRoute('changepassword');
        break;
        case '/applicant-delete-profile':
          setActiveRoute('deleteprofile');
        break;
        case '/applicant-job-alerts':
          setActiveRoute('jobalerts');
        break;
        case '/applicant-resume':
          setActiveRoute('resume');
        break;
      default:
        setActiveRoute('');
        break;
    }
  };
  React.useEffect(() => {
    updateActiveRoute();
  }, [location.pathname]);

   


  return (
    
    <div  class="dashboard show">
      
     <ApplicantNavBar />

 
        {/* <ApplicantLeftNavBar /> */}
      
     {/* {!isLeftNavVisible && <ApplicantLeftNavBar />} */}
     {activeRoute === 'dashboard' && <ApplicantDashboard />}
     {activeRoute === 'profile' && <ApplicantUpdateProfile />}
     {activeRoute === 'findjobs' && (<ApplicantFindJobs setSelectedJobId={setSelectedJobId} /> )}
     {activeRoute === 'viewjob' && (<ApplicantViewJob selectedJobId={selectedJobId} /> )}
     {activeRoute === 'appliedjobs' && <ApplicantAppliedJobs setSelectedJobId={setSelectedJobId}/>}
     {activeRoute === 'savedjobs' && <ApplicantSavedJobs />}
     {activeRoute === 'interviewstatus' && (<ApplicantInterviewStatus selectedJobId={selectedJobId} /> )}
     {activeRoute === 'changepassword' && <ApplicantChangePassword />}
     {activeRoute === 'deleteprofile' && <ApplicantDeleteProfile />}
     {activeRoute === 'jobalerts' && <ApplicantJobAlerts />}
     {activeRoute === 'resume' && <ApplicantResume />}
      <ApplicantFooter />   
      </div> 
    
  )
}

export default ApplicantHomePage;