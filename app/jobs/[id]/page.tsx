'use client'
import React, { useState, useEffect } from 'react';
import JobCard from '@/components/JobCard';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

const jobData = [
  { id: 1, title: 'Frontend Developer', company: 'Компания A', location: 'Нью-Йорк, NY', salary: 100000, category: 'remote' },
  { id: 2, title: 'Backend Developer', company: 'Компания B', location: 'Сан-Франциско, CA', salary: 120000, category: 'remote' },
  { id: 3, title: 'Маркетолог', company: 'Компания C', location: 'Лос-Анджелес, CA', salary: 90000, category: 'marketing' },
  { id: 4, title: 'Строитель', company: 'Компания D', location: 'Хьюстон, TX', salary: 70000, category: 'construction' },
  { id: 5, title: 'Менеджер по продажам', company: 'Компания E', location: 'Чикаго, IL', salary: 80000, category: 'partially-remote' },
  // Добавьте больше вакансий по необходимости
];

const DetailedJobsPage = ({ params }: { params: { id: string } }) => {
  const category = params.id;
  const russianCategories = {
    remote: "удаленная",
    marketing: "маркетинг",
    construction: "строительство",
    'partially-remote': "частично удаленная"
  };
  const [salaryFilter, setSalaryFilter] = useState<number | null>(null);
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [companyFilter, setCompanyFilter] = useState<string>('');

  const handleSalaryFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryFilter(e.target.value ? parseInt(e.target.value) : null);
  };

  const handleLocationFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationFilter(e.target.value);
  };

  const handleCompanyFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyFilter(e.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    return (
      job.category === category &&
      (salaryFilter === null || job.salary >= salaryFilter) &&
      (locationFilter === '' || job.location.includes(locationFilter)) &&
      (companyFilter === '' || job.company.includes(companyFilter))
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Поиск работы в категории {category && russianCategories[category]}</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Поиск..."
          className="border p-2 w-full"
        />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 pl-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link key={job.id} href={`/job/${job.id}`}>
                  <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                    <JobCard job={job} />
                  </div>
                </Link>
              ))
            ) : (
              <p>No jobs found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedJobsPage;
