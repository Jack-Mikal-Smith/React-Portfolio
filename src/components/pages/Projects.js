import React from 'react';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  return (
    <div>
      <div className='card border-info border-rounded border-3 m-3 p-3'>
        <h1>Projects Page</h1>
      </div>
      <div>
        <ProjectCard/>
      </div>
    </div>
  );
}
