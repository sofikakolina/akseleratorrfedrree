// components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      
      {/* Job Types */}
      <div className="mb-4">
        <h3 className="font-semibold">Job Types</h3>
        <label className="block">
          <input type="checkbox" /> Evening
        </label>
        <label className="block">
          <input type="checkbox" /> Part-time
        </label>
        <label className="block">
          <input type="checkbox" /> Full-time
        </label>
        <label className="block">
          <input type="checkbox" /> Freelance
        </label>
        <label className="block">
          <input type="checkbox" /> Internship
        </label>
      </div>

      {/* Experience Level */}
      <div className="mb-4">
        <h3 className="font-semibold">Experience Level</h3>
        <label className="block">
          <input type="checkbox" /> Junior
        </label>
        <label className="block">
          <input type="checkbox" /> Mid-level
        </label>
        <label className="block">
          <input type="checkbox" /> Senior
        </label>
      </div>

      {/* Salary Range */}
      <div className="mb-4">
        <h3 className="font-semibold">Salary Range</h3>
        <label className="block">
          <input type="radio" name="salary" /> Any
        </label>
        <label className="block">
          <input type="radio" name="salary" /> 80,000 - 165,000 ₽
        </label>
        <label className="block">
          <input type="radio" name="salary" /> 165,000 - 250,000 ₽
        </label>
        <label className="block">
          <input type="radio" name="salary" /> 250,000 - 330,000 ₽
        </label>
        <label className="block">
          <input type="radio" name="salary" /> 330,000 - 415,000 ₽
        </label>
        <label className="block">
          <input type="radio" name="salary" /> 415,000+ ₽
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
