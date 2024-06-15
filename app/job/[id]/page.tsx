import { notFound } from 'next/navigation';
import Header from '../../../components/navigation/Header';
import Link from 'next/link';

// Mock data for job details
const jobData = [
  { id: 1, title: 'Junior Developer', company: 'Company A', location: 'Moscow', salary: '75,000 - 130,000 ₽', description: 'Job description for Junior Developer...', requirements: 'Requirements for Junior Developer...', benefits: 'Benefits for Junior Developer...' },
  { id: 2, title: 'Fullstack Developer', company: 'Company B', location: 'Moscow', salary: '100,000 - 120,000 ₽', description: 'Job description for Fullstack Developer...', requirements: 'Requirements for Fullstack Developer...', benefits: 'Benefits for Fullstack Developer...' },
  // Add more jobs as needed
];

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string;
  benefits: string;
}

// This function generates static params
export async function generateStaticParams() {
  return jobData.map((job) => ({
    id: job.id.toString(),
  }));
}

// JobDetail component to display job details
const JobDetail = ({ params }: { params: { id: string } }) => {
  const jobId = parseInt(params.id, 10);
  const job = jobData.find((job) => job.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div>
      <div className="container mx-auto p-4 flex">
        <div className="w-3/4 pr-4">
          <div className="bg-white shadow p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <p className="text-lg text-gray-700 mb-2">{job.company}</p>
            <p className="text-lg text-gray-700 mb-2">{job.location}</p>
            <p className="text-lg text-gray-700 mb-2">{job.salary}</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-4">Apply Now</button>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
              <p>{job.description}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
              <p>{job.requirements}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
              <p>{job.benefits}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-white shadow p-6 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2">Company Information</h3>
            <p>{job.company}</p>
            <p className="text-sm text-gray-500">Moscow, Багратионовская, Park Pobedy, Фили, улица Барклая, 6с5</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Similar Jobs</h3>
            <ul>
              <li><Link href="#" className="text-blue-500">Middle/Senior Frontend Developer</Link></li>
              <li><Link href="#" className="text-blue-500">Frontend Developer</Link></li>
              <li><Link href="#" className="text-blue-500">Another Job Title</Link></li>
              <li><Link href="#" className="text-blue-500">More similar jobs</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
