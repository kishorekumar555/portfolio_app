const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();

  // Create projects
  await prisma.project.createMany({
    data: [
      {
        title: 'Sign Language Translation App',
        description: 'A Proof of Concept for a Sign Language Translation App using Streamlit and Python',
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600',
        liveUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/kishorekumar555/Sign_language_translation',
        tags: 'Python,Image Processing,Streamlit,OpenCV,Keras,Natural Language Processing,TensorFlow,Transformers,Hugging Face',
      },
      {
        title: 'Job Portal Website',
        description: 'Built a Job Portal Website using HTML,CSS,Bootstrap,JavaScript,PHP,Laravel,MySQL',
        imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600',
        liveUrl: 'https://example-tasks.com',
        githubUrl: 'https://github.com/kishorekumar555/VVConsultancy',
        tags: 'HTML,CSS,Bootstrap,JavaScript,PHP,Laravel,MySQL',
      },
      {
        title: 'LAWD-Lawyer Consultancy Website with AI Chatbot and Summarizer',
        description: 'Built a Lawyer Consultancy Website with AI Chatbot and Summarizer using Streamlit,Python,LLM,Llama,Langchain,Transformers,Hugging Face',
        imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600',
        liveUrl: 'https://example-weather.com',
        githubUrl: 'https://github.com/kishorekumar555/VVConsultancy',
        tags: 'Streamlit,Python,LLM,Llama,Langchain,Transformers,Hugging Face',
      },
    ],
  });

  // Create skills
  await prisma.skill.createMany({
    data: [
      { name: 'Python', proficiency: 90, category: 'Deep Learning' },
      { name: 'Streamlit', proficiency: 85, category: 'Frontend' },
      { name: 'OpenCV', proficiency: 85, category: 'Deep Learning' },
      { name: 'Keras', proficiency: 85, category: 'Deep Learning' },
      { name: 'TensorFlow', proficiency: 85, category: 'Deep Learning' },
      { name: 'Matplotlib', proficiency: 95, category: 'Data Visualization' },
      { name: 'Seaborn', proficiency: 95, category: 'Data Visualization' },
      { name: 'Pandas', proficiency: 95, category: 'Data Analysis' },
      { name: 'Numpy', proficiency: 95, category: 'Data Analysis' },
      { name: 'Scikit-learn', proficiency: 95, category: 'Machine Learning' },
      { name: 'Excel', proficiency: 90, category: 'Data Analysis' },
      { name: 'PowerBI', proficiency: 90, category: 'Data Analysis'},
      { name: 'Langchain', proficiency: 75, category: 'Deep Learning' },
      { name: 'Transformers', proficiency: 75, category: 'Deep Learning' },
      { name: 'Hugging Face', proficiency: 75, category: 'Deep Learning' },
      { name: 'HTML', proficiency: 80, category: 'Frontend' },
      { name: 'CSS', proficiency: 80, category: 'Frontend' },
      { name: 'Bootstrap', proficiency: 80, category: 'Frontend' },
      { name: 'JavaScript', proficiency: 80, category: 'Frontend' },
      { name: 'PHP', proficiency: 90, category: 'Backend' },
      { name: 'Laravel', proficiency: 90, category: 'Backend' },
      { name: 'MySQL', proficiency: 90, category: 'Backend' },
      { name: 'PostgreSQL', proficiency: 80, category: 'Backend' },
      { name: 'MongoDB', proficiency: 80, category: 'Backend' },
      { name: 'Dart', proficiency: 75, category: 'Frontend' },
      { name: 'Flutter', proficiency: 75, category: 'Frontend' },
      { name: 'Git', proficiency: 90, category: 'DevOps' },
      { name: 'Docker', proficiency: 75, category: 'DevOps' },
      { name: 'FastAPI', proficiency: 75, category: 'Backend' },
      { name: 'React', proficiency: 75, category: 'Frontend' },
    ],
  });

  // Create experiences
  await prisma.experience.createMany({
    data: [
      {
        title: 'AI Developer',
        company: 'Uptoskills',
        location: 'Delhi,India',
        startDate: new Date('2025-02-09'),
        description: 'Building a Crowd Surveillance Anomaly Detection System using AI and Computer Vision',
      },
      {
        title: 'PHP Developer',
        company: 'VV Consultancy',
        location: 'Chennai,India',
        startDate: new Date('2024-09-01'),
        endDate: new Date('2025-02-08'),
        description: 'Built a Job Portal Website using HTML,CSS,Bootstrap,JavaScript,PHP,Laravel,MySQL',
      },
      {
        title: 'Data Analyst',
        company: 'Prodigy Infotech',
        location: 'Delhi,India',
        startDate: new Date('2024-06-15'),
        endDate: new Date('2024-07-15'),
        description: 'Built a Data Analysis Dashboard using PowerBI',
      },
    ],
  });

  console.log('Database has been seeded! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 