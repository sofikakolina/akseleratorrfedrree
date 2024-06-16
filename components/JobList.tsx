import React from 'react';
import JobCard from './JobCard';
import Link from 'next/dist/client/link';

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
    <div className="w-full bg-white p-4 rounded-lg">
      {jobs.map((job) => (
        <Link key={job.id} href={`/job/${job.id}`}>
          <JobCard key={job.id} job={job} />
        </Link>
      ))}
    </div>
  );
};

export default JobList;
