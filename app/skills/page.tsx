import { prisma } from '../../lib/db';
import Navbar from '../components/Navbar';

async function getSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: [
      { category: 'asc' },
      { proficiency: 'desc' },
    ],
  });
  return skills;
}

export default async function SkillsPage() {
  const skills = await getSkills();
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Expertise
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h2>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 