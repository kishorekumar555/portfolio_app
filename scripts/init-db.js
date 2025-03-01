const { execSync } = require('child_process');

try {
  // Generate Prisma Client
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Push the schema to the database
  execSync('npx prisma db push', { stdio: 'inherit' });
  
  // Run the seed script
  execSync('npm run seed', { stdio: 'inherit' });
  
  console.log('Database initialization completed successfully');
} catch (error) {
  console.error('Error initializing database:', error);
  process.exit(1);
} 