import React from 'react';

const resumeData = {
  name: 'Колдин Тимур Эдуардович',
  gender: 'Мужчина',
  age: 21,
  birthDate: '28 мая 2003',
  status: 'Не ищу работу',
  location: 'Щелково, не готов к переезду, не готов к командировкам',
  contacts: {
    phone: '+7 (919) 915-95-21',
    email: 'tk_216621@mail.ru',
  },
  jobTitle: 'Web-программист',
  salary: '100,000 ₽ на руки',
  specialization: 'Программист, разработчик',
  employmentType: 'частичная занятость',
  workSchedule: 'гибкий график, удаленная работа',
  experience: [
    {
      company: 'Rdg',
      position: 'Frontend-разработчик next js',
      duration: 'Сентябрь 2022 — по настоящее время 1 год 10 месяцев',
      description: 'Разработка коммерческих веб-приложений...',
      technologies: 'tailwind, redux, recoil, react-beautiful-dnd, sass/scss, github, figma',
    },
  ],
  skills: [
    'JavaScript', 'HTML', 'Git', 'Bootstrap', 'HTML5', 'Веб-программирование',
    'Node.js', 'Material UI', 'Next.js', 'React.js', 'Redux', 'Recoil', 'Sass',
    'CSS3', 'CSS', 'Linux', 'Адаптивная верстка', 'Английский язык',
  ],
  visibility: 'Сейчас это резюме видно всем компаниям, зарегистрированным на HeadHunter',
  completeness: '74%',
};

const ResumePage: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto p-4 flex" style={{gap:"15px"}}>
        <div className="w-3/4 pr-4">
          <div className="bg-white shadow p-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{resumeData.name}</h1>
            <p className="text-lg text-gray-700 mb-2">{resumeData.gender}, {resumeData.age} лет, родился {resumeData.birthDate}</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.status}</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.location}</p>
            <p className="text-lg text-gray-700 mb-2">Контакты:</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.contacts.phone}</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.contacts.email}</p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{resumeData.jobTitle}</h2>
            <p className="text-lg text-gray-700 mb-2">{resumeData.salary}</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.specialization}</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.employmentType}</p>
            <p className="text-lg text-gray-700 mb-2">{resumeData.workSchedule}</p>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Опыт работы</h2>
              {resumeData.experience.map((job, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-bold">{job.company}</p>
                  <p className="text-lg text-gray-700">{job.position}</p>
                  <p className="text-lg text-gray-700">{job.duration}</p>
                  <p className="text-lg text-gray-700">{job.description}</p>
                  <p className="text-lg text-gray-700">Технологии: {job.technologies}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Ключевые навыки</h2>
              <div className="grid grid-cols-10" style={{gap:"5px"}}>
                {resumeData.skills.map((skill, index) => (
                  <span key={index} style={{paddingRight:"7px"}} className="bg-gray-200 text-gray-800 text-sm pr-1 font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Видимость резюме</h3>
            <p>{resumeData.visibility}</p>
            <h3 className="text-xl font-bold mb-2 mt-4">Завершенность резюме</h3>
            <p>{resumeData.completeness}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
