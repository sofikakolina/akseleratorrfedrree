import Head from 'next/head';
import Header from '../components/navigation/Header';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';

// Dummy data for jobs
const jobData = [
  { id: 1, title: 'Frontend Developer', company: 'Компания A', location: 'Нью-Йорк, NY', salary: 100000, category: 'удаленная' },
  { id: 2, title: 'Backend Developer', company: 'Компания B', location: 'Сан-Франциско, CA', salary: 120000, category: 'удаленная' },
  { id: 3, title: 'Маркетолог', company: 'Компания C', location: 'Лос-Анджелес, CA', salary: 90000, category: 'маркетинг' },
  { id: 4, title: 'Строитель', company: 'Компания D', location: 'Хьюстон, TX', salary: 70000, category: 'строительство' },
  { id: 5, title: 'Менеджер по продажам', company: 'Компания E', location: 'Чикаго, IL', salary: 80000, category: 'частично-удаленная' },
  // Добавьте больше вакансий по необходимости
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
        <div className="flex w-full items-center p-5 gap-5" style={{flexDirection:"column", padding:"15px", gap:"20px"}}>
          <div>
            <h1 className='font-bold text-2xl'>Ваши рекомендованные вакансии</h1>
          </div>
          <JobList jobs={jobData} />
        </div>
      </main>
    </div>
  );
}
