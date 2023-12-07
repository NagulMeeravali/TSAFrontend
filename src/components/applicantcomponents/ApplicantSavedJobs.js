import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import logoCompany1 from '../../images/cty12.png';

function ApplicantSavedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  const applicantId = user.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/savedjob/getSavedJobs/${applicantId}`);
        const jobsData = response.data;
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching saved jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, [applicantId]);

  return (
    <div>
      {loading ? null : (
        <div className="dashboard__content">
          <section className="page-title-dashboard">
            <div className="themes-container">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="title-dashboard">
                    <div className="title-dash flex2">My Saved Jobs</div>
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
                  <div className="group-col-2">
                  {jobs.length === 0 ? (
                      <div style={{marginLeft:30}}>No Saved jobs available</div>
                    ) : (
                    jobs.map((job) => (
                      <div className="features-job cl2" key={job.id}>
                        <div className="job-archive-header">
                          <div className="inner-box">
                            <div className="logo-company">
                              <img src={logoCompany1} alt={`Company Logo ${job.id}`} />
                            </div>
                            <div className="box-content">
                              <h4>
                                <a href="jobs-single.html">{job.companyname}</a>
                              </h4>
                              <h3>
                                <a href="jobs-single.html">
                                  {job.jobTitle}
                                  <span className="icon-bolt"></span>
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <span className="icon-map-pin"></span>
                                  {job.location}
                                </li>
                                <li>
                                  <span className="icon-calendar"></span>
                                  Posted on{job.datePosted}
                                </li>
                              </ul>
                              <span className="icon-heart"></span>
                            </div>
                          </div>
                        </div>
                        <div className="job-archive-footer">
                          <div className="job-footer-left">
                            <ul className="job-tag">
                              <li>
                                <a href="#">{job.employeeType}</a>
                              </li>
                              <li>
                                <a href="#">{job.remote ? 'Remote' : 'Office-based'}</a>
                              </li>
                            </ul>
                            <div className="star">
                              {Array.from({ length: job.starRating }).map((_, index) => (
                                <span key={index} className="icon-star-full"></span>
                              ))}
                            </div>
                          </div>
                          <div className="job-footer-right">
                            <div className="price">
                              <span></span>
                              <p>&#x20B9; {job.minSalary} - &#x20B9; {job.maxSalary} / year</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default ApplicantSavedJobs;