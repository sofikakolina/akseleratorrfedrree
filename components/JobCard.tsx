import React from 'react';
import Link from 'next/link';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link href={`/job/${job.id}`}>
      <div className="block border p-4 mb-4 hover:bg-gray-100">
        <h3 className="text-xl font-bold">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-gray-600">{job.salary}</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-2">Apply</button>
      </div>
    </Link>
  );
};

export default JobCard;
