import React, { useState, useEffect, useRef } from 'react';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
import $ from 'jquery';
 
function RecruiterAllApplicants() {
  const [applicants, setApplicants] = useState([]);
  const { user } = useUserContext();
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedMenuOption, setSelectedMenuOption] = useState('All');
  const isMounted = useRef(true);
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const tableref=useRef(null);
 
  const fetchAllApplicants = async () => {
    try {
      const response = await axios.get(`${apiUrl}/applyjob/recruiter/${user.id}/appliedapplicants`);
       
        setApplicants(response.data);
       
     
     
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };
  const fetchApplicants = async () => {
    // try {
    //   const params = {
    //     [selectedFilter]: search,
    //   };
 
    //   let apiUrlEndpoint = '/job/search';
    //   const response = await axios.get(apiUrl + apiUrlEndpoint, { params });
 
     
    //     setApplicants(response.data);
     
    // } catch (error) {
    //   console.error('Error fetching job details:', error);
    // }
  };
 
  const fetchApplicantsByStatus = async (status) => {
    // try {
    //   const response = await axios.get(
    //     `${apiUrl}/applyjob/recruiter/${user.id}/appliedapplicants/status/${status}`
    //   );
 
    //   //if (isMounted.current) {
    //     setApplicants(response.data);
    //   //}
    // } catch (error) {
    //   console.error('Error fetching applicants by status:', error);
    // }
  };
 
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
    fetchAllApplicants();
    const $table= window.$(tableref.current);
   // $table.DataTable().destroy();
   
     const timeoutId = setTimeout(() => {  
      $table.DataTable().destroy();
       $table.DataTable({responsive:true});
 
             }, 100);
   
    return () => {
       isMounted.current = false;
     // $table.DataTable().destroy(true);
    };
  }, [user.id]);
 
  const handleFilterChange = (status) => {
    // setSelectedStatus('');
    // setSelectedApplicant(null);
 
    // // Use the callback form of setState to get the updated state
    // setSelectedMenuOption((prevOption) => {
    //   console.log('Status:', status);
    //   console.log('Selected Menu Option:', prevOption);
 
    //   return status;
    // });
 
    // if (status !== 'All') {
    //   fetchApplicantsByStatus(status);
    // } else {
    //   fetchAllApplicants();
    // }
  };
 
  const handleStatusChange = () => {
    // if (selectedApplicant && selectedStatus) {
    //   const applyJobId = selectedApplicant.applyjobid;
 
    //   axios
    //     .put(
    //       `${apiUrl}/applyjob/recruiters/applyjob-update-status/${applyJobId}/${selectedStatus}`
    //     )
    //     .then(() => {
    //       if (isMounted.current) {
    //         const updatedApplicants = applicants.map((application) => {
    //           if (application.applyjobid === applyJobId) {
    //             return { ...application, applicantStatus: selectedStatus };
    //           }
    //           return application;
    //         });
 
    //         setApplicants(updatedApplicants);
    //         setSelectedStatus('');
    //         setSelectedApplicant(null);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error updating status:', error);
    //     });
    // }
  };
 
 
  return (
    <div className="dashboard__content">
      <section className="page-title-dashboard">
        <div className="themes-container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="title-dashboard">
                <div className="title-dash flex2">All Applicants</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-dashboard-setting bg-white">
        <div className="themes-container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="menu-list">
                <div
                  className={`menu-item ${selectedMenuOption === 'All' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('All')}
                >
                  All
                </div>
                <div
                  className={`menu-item ${selectedMenuOption === 'screening' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('screening')}
                >
                  Screening
                </div>
                <div
                  className={`menu-item ${selectedMenuOption === 'shortlisted' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('shortlisted')}
                >
                  Shortlisted
                </div>
                <div
                  className={`menu-item ${selectedMenuOption === 'interviewing' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('interviewing')}
                >
                  Interviewing
                </div>
                <div
                  className={`menu-item ${selectedMenuOption === 'selected' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('selected')}
                >
                  Selected
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dropdown-container">
                <input
                  type="text"
                  placeholder={`Search by ${selectedFilter}`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="filter-option">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  >
                    <option value="jobTitle">Job Title</option>
                    <option value="location">Location</option>
                    <option value="skillName">Skill Name</option>
                    {/* Add other filter options as needed */}
                  </select>
                  <button onClick={fetchApplicants}>Apply Filter</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dropdown-container">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="" disabled>
                    Change Status
                  </option>
                  <option value="screening">Screening</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="selected">Selected</option>
                </select>
                <button onClick={handleStatusChange}>Update Status</button>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section className="flat-dashboard-setting bg-white">
        <div className="themes-container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="profile-setting">
                <div className="table-container">
                  <table ref={tableref} className="responsive-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Job Title</th>
                        <th>Applicant Status</th>
                        <th>Experience</th>
                        <th>Skill Name</th>
                        <th>Qualification</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicants.map((application) => (
                        <tr key={application.email}>
                          <td>
                            <input
                              type="radio"
                              value={application.applyjobid}
                              checked={
                                selectedApplicant &&
                                selectedApplicant.applyjobid === application.applyjobid
                              }
                              onChange={() => setSelectedApplicant(application)}
                              name={`applicantRadio-${application.applyjobid}`}
                            />
                          </td>
                          <td>{application.name}</td>
                          <td>{application.email}</td>
                          <td>{application.mobilenumber}</td>
                          <td>{application.jobTitle}</td>
                          <td>{application.applicantStatus}</td>
                          <td>{application.minimumExperience}</td>
                          <td>{application.skillName}</td>
                          <td>{application.minimumQualification}</td>
                          <td>{application.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default RecruiterAllApplicants;