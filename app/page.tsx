import Head from 'next/head';
import Header from '../components/navigation/Header';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';

// Dummy data for jobs
const jobs = [
  { id: 1, title: 'Junior Developer', company: 'Company A', location: 'Moscow', salary: '75,000 - 130,000 ₽' },
  { id: 2, title: 'Fullstack Developer', company: 'Company B', location: 'Moscow', salary: '100,000 - 120,000 ₽' },
  // Add more jobs as needed
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Search App</title>
        <meta name="description" content="A job search application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex mt-4">
        <Sidebar />
        <JobList jobs={jobs} />
      </main>
    </div>
  );
}
