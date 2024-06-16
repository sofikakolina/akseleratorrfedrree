import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Фильтры</h2>
      
      {/* Типы работ */}
      <div className="mb-4">
        <h3 className="font-semibold">Типы работ</h3>
        <label className="block">
          <input type="checkbox" /> Вечерняя
        </label>
        <label className="block">
          <input type="checkbox" /> Неполный рабочий день
        </label>
        <label className="block">
          <input type="checkbox" /> Полный рабочий день
        </label>
        <label className="block">
          <input type="checkbox" /> Фриланс
        </label>
        <label className="block">
          <input type="checkbox" /> Стажировка
        </label>
      </div>

      {/* Уровень опыта */}
      <div className="mb-4">
        <h3 className="font-semibold">Уровень опыта</h3>
        <label className="block">
          <input type="checkbox" /> Начальный
        </label>
        <label className="block">
          <input type="checkbox" /> Средний
        </label>
        <label className="block">
          <input type="checkbox" /> Старший
        </label>
      </div>

      {/* Уровень зарплаты */}
      <div className="mb-4">
        <h3 className="font-semibold">Уровень зарплаты</h3>
        <label className="block">
          <input type="radio" name="salary" /> Любой
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
      <button className="bg-blue-500 text-white px-4 py-2 mt-4">Применить</button>
    </aside>
  );
};

export default Sidebar;
