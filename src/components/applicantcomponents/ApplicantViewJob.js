import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApplicantViewJob({ selectedJobId }) {
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    const fetchData = async () => {
      try {
        // Simulate fetching data after a delay (replace this with your actual data fetching logic)
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false to indicate the end of the operation, whether successful or not
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);


  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/viewjob/applicant/viewjob/${selectedJobId}`);
        const jobData = response.data;
        setJobDetails(jobData);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchJobDetails function
    fetchJobDetails();
  }, [selectedJobId]);

  return (
    <div>
      {loading ? null : (
        <div className="dashboard__content">
          <section className="page-title-dashboard">
            <div className="themes-container">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="title-dashboard">
                    <div className="title-dash flex2">Full Job Details</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flat-dashboard-setting flat-dashboard-setting2">
            <div className="themes-container bg-white">
              <div className="content-tab">
                <div className="inner">
                  <br />
                  <article className="job-article">
                    {/* Render job details using the jobDetails state */}
                    {jobDetails && (
                      <div className="top-content">
                        {/* Render job details based on the structure of your API response */}
                        <div className="features-job style-2 stc-apply">
                          <div className="job-archive-header">
                            <div className="inner-box">
                              <div className="logo-company">
                                <img src="images/logo-company/cty12.png" alt="images/logo-company/cty12.png" />
                              </div>
                              <div className="box-content">
                                <h4>
                                  <a href={`jobs-single.html`}>{jobDetails.jobRecruiter.companyname}</a>
                                </h4>
                                <h3>
                                  <a href={`jobs-single.html`}>{jobDetails.jobTitle}</a>
                                  <span className="icon-bolt"></span>
                                </h3>
                                <ul>
                                  <li>
                                    <span className="icon-map-pin"></span>
                                    {jobDetails.location}
                                  </li>
                                  <li>
                                    <span className="icon-calendar"></span>
                                    {jobDetails.datePosted} 
                                  </li>
                                </ul>
                                <div className="button-readmore">
                                  <span className="icon-heart"></span>
                                  <a className="btn-apply btn-popup">
                                    <span className="icon-send"></span>
                                    Apply Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="job-archive-footer">
                            <div className="job-footer-left">
                              <ul className="job-tag">
                                <li>
                                  <a href="#">{jobDetails.employeeType}</a>
                                </li>
                                <li>
                                  <a href="#">{jobDetails.remote ? 'Remote' : 'Office-based'}</a>
                                </li>
                              </ul>
                              <div className="star">
                                {Array.from({ length: jobDetails.starRating }).map((_, index) => (
                                  <span key={index} className="icon-star-full"></span>
                                ))}
                              </div>
                            </div>
                            <div className="job-footer-right">
                              <div className="price">
                                <span className="icon-dollar"></span>
                                <p>${jobDetails.minSalary} - ${jobDetails.maxSalary} / year</p>
                              </div>
                              {/* <p className="days">{jobDetails.daysLeft} days left to apply</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {jobDetails && (
                      <div className="inner-content">
                        <h5>Full Job Description</h5>
                        <p>{jobDetails.description}</p>
                      </div>
                    )}
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default ApplicantViewJob;