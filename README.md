# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and PostgreSQL. Features dynamic content management, dark mode support, and a responsive design.

## 🚀 Live Demo

Visit the live website: [Portfolio Website](https://protfolio-bix4ymjac-kishore-kumar-g-bs-projects.vercel.app)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Fully responsive UI using Tailwind CSS
- **Dark Mode**: System-aware dark mode with next-themes
- **Database Integration**: PostgreSQL database hosted on Neon
- **Dynamic Content**: Server-side rendering with dynamic data fetching
- **Sections**:
  - Projects showcase
  - Skills & expertise
  - Professional experience
  - Contact form
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Built-in SEO support with Next.js

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js 14
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Headless UI
  - Heroicons

- **Backend**:
  - Node.js
  - Prisma ORM
  - PostgreSQL (Neon)

- **Deployment**:
  - Vercel (Hosting)
  - Neon (Database)

## 📦 Project Structure

```
portfolio_app/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── experience/        # Experience page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── lib/                   # Utility functions and database client
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Prisma schema
│   └── seed.ts            # Database seeding script
├── public/                # Static assets
└── styles/                # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or Neon account)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio_app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a .env file in the root directory:
```env
# Database connection
POSTGRES_PRISMA_URL="your-neon-connection-string"
POSTGRES_URL_NON_POOLING="your-neon-non-pooling-connection-string"

# Email configuration (for contact form)
EMAIL_PASSWORD="your-email-app-password"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Seed the database:
```bash
npx prisma db seed
```

6. Run the development server:
```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio.

## 📝 Database Schema

### Project
- `id`: Int (Primary Key)
- `title`: String
- `description`: String
- `imageUrl`: String
- `liveUrl`: String
- `githubUrl`: String
- `tags`: String
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Skill
- `id`: Int (Primary Key)
- `name`: String
- `proficiency`: Int
- `category`: String
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Experience
- `id`: Int (Primary Key)
- `title`: String
- `company`: String
- `location`: String
- `startDate`: DateTime
- `endDate`: DateTime?
- `description`: String
- `createdAt`: DateTime
- `updatedAt`: DateTime

## 🚀 Deployment

### Vercel Deployment

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Database Setup

1. Create a Neon account
2. Create a new project
3. Get connection strings
4. Add connection strings to environment variables

## 🔧 Configuration

### Environment Variables

- `POSTGRES_PRISMA_URL`: Main database connection string
- `POSTGRES_URL_NON_POOLING`: Non-pooling database connection string
- `EMAIL_PASSWORD`: Email app password for contact form

### Prisma Configuration

The `schema.prisma` file contains:
- Database connection
- Model definitions
- Relationships
- Indexes

## 🛠️ Development

### Adding New Features

1. Create new components in `app/components`
2. Add new pages in `app/` directory
3. Update Prisma schema if needed
4. Run migrations
5. Update seed file if required

### Styling

- Use Tailwind CSS classes
- Dark mode: `dark:` prefix
- Responsive design: `sm:`, `md:`, `lg:` prefixes

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🔒 Security

- Environment variables for sensitive data
- API routes protection
- SQL injection prevention with Prisma
- XSS protection with Next.js

## 🧪 Testing

To run tests:
```bash
npm run test
```
## Demo Images

![AI Code Editor - Google Chrome 02-03-2025 14_49_23](https://github.com/user-attachments/assets/2b10a27a-3c90-4a3b-aaa9-643db3b16f88)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support, email your-email@example.com or open an issue on GitHub.

