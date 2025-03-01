import Navbar from './components/Navbar';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Data Analyst | Data Scientist | Data Engineer | AI Developer | Web Developer | App Developer
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16">
        <ArrowDownIcon className="h-6 w-6 text-gray-400 dark:text-gray-500 animate-bounce" />
      </div>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm a passionate developer with expertise in Data Analysis, Data Science, Data Engineering, AI Development, Web Development, and App Development.
            I love to build applications that are useful and help in solving real-world problems.
          </p>
          <Link
            href="/experience"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Learn more about my experience →
          </Link>
        </div>
      </section>
    </main>
  );
} 