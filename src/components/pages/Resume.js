import React from 'react';

 function Resume() {
  return (
    <div className='justify-content-center resume'>
      <div className='card border-info rounded border-3 p-3 m-3'>
        <h2 className='card-title align-items-center'>Jack Smith</h2>
        <h3 className='justify-content-start'>Experience:</h3>
        <h4 className='card-text justify-content-start'>Timber Development</h4>
        <p className='card-text position-start-25'>Position: Intern || Financial Analyst</p>
        <p className='card-text position-start-25'>Responsibilities:</p>
        <ul className='card-text'>
          <li>Financial Analysis of Sales and Acquisitions</li>
          <li>Managing property upgrade projects</li>
          <li>Tenant correspondence</li>
        </ul>
        <h4 className='card-text justify-content-start'>FBC Home Insurance</h4>
        <p className='card-text position-start-25'>Position: Intern</p>
        <p className='card-text position-start-25'>Responsibilities: Contacting and managing new leads</p>
        <h3 className='justify-content-start'>Education:</h3>
        <h4 className='card-text justify-content-start'>UCF Full-Stack Web Development Bootcamp</h4>
        <p className='card-text position-start-25'>Completing in August of 2023</p>
        <h4 className='card-text justify-content-start'>Tallahassee Community College</h4>
        <p className='card-text position-start-25'>Earned AA in Management Dec, 2020</p>
        <p className='card-text position-start-25'>Earned Certificates for Small Business Management and Entrepreneurship</p>
        <h4 className='card-text justify-content-start'>Seminole State College</h4>
        <p className='card-text position-start-25'>Earned Financial Operations and Financial Operations Specialist Technical Certificates</p>
        <h4 className='card-text justify-content-start'>Lake Mary High School</h4>
        <p className='card-text position-start-25'>Graduated: May 2017</p>
        <h3 className='justify-content-start'>Skills and Certifications:</h3>
        <ul>
          <li>MERN Stack Web Development</li>
          <li>Command Line Interface</li>
          <li>Excellent verbal and written communication skills</li>
          <li>Customer service skills</li>
          <li>Organizational skills</li>
          <li>Certified in Adobe Premier</li>
          <li>Proficient in Microsoft Excel</li>
        </ul>
        <h3 className='justify-content-start'>Special Recognition</h3>
        <h4 className='card-text justify-content-start'>Intern of the year at FBC Home Insurance 2020</h4>
      </div>
    </div>
  );
}

export default Resume;
