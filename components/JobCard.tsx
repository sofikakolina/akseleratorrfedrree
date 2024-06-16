import React from 'react';

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
    <div className="border p-4 mb-4 hover:shadow-lg transition-shadow duration-200 rounded-lg">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.salary}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4">Подробнее</button>
    </div>
  );
};

export default JobCard;
