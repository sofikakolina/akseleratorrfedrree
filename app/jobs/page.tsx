import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Удаленная работа', slug: 'remote' },
  { name: 'Маркетинг', slug: 'marketing' },
  { name: 'Строительство', slug: 'construction' },
  { name: 'Частично удаленная работа', slug: 'partially-remote' },
  // Add more categories as needed
];

const JobsOverviewPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Категории работ</h1>
      <div className="grid gap-4" style={{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}>
        {categories.map((category) => (
          <Link key={category.slug} href={`/jobs/${category.slug}`}>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <h2 className="text-xl font-bold">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobsOverviewPage;
