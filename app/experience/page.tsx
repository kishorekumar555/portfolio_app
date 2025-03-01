import { prisma } from '../../lib/db';
import Navbar from '../components/Navbar';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

async function getExperiences() {
  const experiences = await prisma.experience.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });
  return experiences;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h1>
        
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-blue-600 dark:before:bg-blue-500 last:before:hidden"
            >
              <div className="absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-900" />
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h2>
                
                <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                  {experience.company}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span>
                      {formatDate(experience.startDate)} -{' '}
                      {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                    </span>
                  </div>
                  
                  {experience.location && (
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 