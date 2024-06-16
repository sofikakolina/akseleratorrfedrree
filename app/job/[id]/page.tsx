import { notFound } from 'next/navigation';
import Link from 'next/link';

// Пример данных для описания вакансий
const jobData = [
  { id: 1, title: 'Frontend Developer', company: 'Компания A', location: 'Нью-Йорк, NY', salary: 100000, category: 'удаленная' },
  { id: 2, title: 'Backend Developer', company: 'Компания B', location: 'Сан-Франциско, CA', salary: 120000, category: 'удаленная' },
  { id: 3, title: 'Маркетолог', company: 'Компания C', location: 'Лос-Анджелес, CA', salary: 90000, category: 'маркетинг' },
  { id: 4, title: 'Строитель', company: 'Компания D', location: 'Хьюстон, TX', salary: 70000, category: 'строительство' },
  { id: 5, title: 'Менеджер по продажам', company: 'Компания E', location: 'Чикаго, IL', salary: 80000, category: 'частично-удаленная' },
  // Добавьте больше вакансий по необходимости
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

// Эта функция генерирует статические параметры
export async function generateStaticParams() {
  return jobData.map((job) => ({
    id: job.id.toString(),
  }));
}

// Компонент JobDetail для отображения деталей вакансии
const JobDetail = ({ params }: { params: { id: string } }) => {
  const jobId = parseInt(params.id, 10);
  const job = jobData.find((job) => job.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex min-h-screen" style={{flexDirection:"column", minHeight:"91vh"}}>
      <div className="container mx-auto p-4 flex gap-1 h-full" style={{gap:"20px"}}>
        <div className="w-3/4 pr-4">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <p className="text-lg text-gray-700 mb-2">{job.company}</p>
            <p className="text-lg text-gray-700 mb-2">{job.location}</p>
            <p className="text-lg text-gray-700 mb-2">{job.salary} руб.</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-4">Откликнуться</button>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Описание работы</h2>
              <p>{job.description}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Требования</h2>
              <p>{job.requirements}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Преимущества</h2>
              <p>{job.benefits}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-white shadow p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2">Информация о компании</h3>
            <p>{job.company}</p>
            <p className="text-sm text-gray-500">Москва, Багратионовская, Парк Победы, Фили, улица Барклая, 6с5</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Похожие вакансии</h3>
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
