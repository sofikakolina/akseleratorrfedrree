import React from 'react';
import JobCard from './JobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="w-3/4 bg-white p-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
