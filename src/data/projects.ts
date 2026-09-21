const projects = [
  {
    id: 1,
    slug: "skillforge-ai",
    title: "SkillForge AI",
    featured: true,
    description:
      "An AI-powered online learning platform where students can enroll in courses, watch lessons, and receive instant guidance from an AI mentor. Instructors can create and manage courses through a dedicated dashboard.",
    image: "/images/SkillForge.PNG",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini AI",
    ],
    live: "https://skillforge-ai-eta.vercel.app/",
    frontend: "https://github.com/sanjana-moon/SkillForge",
    backend: "https://github.com/sanjana-moon/skillforge-server.git",
    category: "Full Stack",
    challenges: [
      {
        problem: "Handling AI API failures and model availability issues.",
        solution:
          "Implemented retry logic with fallback AI models and improved API request handling.",
      },
      {
        problem: "Managing authentication and different user roles.",
        solution:
          "Built JWT-based authentication with role-based access control.",
      },
      {
        problem: "Maintaining a scalable application structure.",
        solution:
          "Used reusable components, modular APIs, and organized project architecture.",
      },
    ],
  },
  {
    id: 2,
    slug: "dreamvenue",
    title: "DreamVenue",
    featured: true,
    description:
      "A full-stack venue booking platform that allows customers to browse venues, make reservations, complete payments, and manage bookings through personalized dashboards.",
    image: "/images/DreamVenue.PNG",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    live: "https://dreamvenue.vercel.app/",
    frontend: "https://github.com/sanjana-moon/DreamVenue.git",
    backend: "https://github.com/sanjana-moon/DreamVenue-server.git",
    category: "Full Stack",
    challenges: [
      {
        problem:
          "Preventing multiple bookings for the same venue and date.",
        solution:
          "Added backend validation and database checks before confirming bookings.",
      },
      {
        problem:
          "Managing booking status between customers and vendors.",
        solution:
          "Created role-based dashboards with separate booking management flows.",
      },
      {
        problem:
          "Keeping frontend and backend data types consistent.",
        solution:
          "Used TypeScript interfaces and structured API responses.",
      },
    ],
  },
  {
    id: 3,
    slug: "booksphere",
    title: "Booksphere",
    featured: true,
    description:
      "A full-stack book delivery management platform featuring authentication, role-based dashboards, Stripe payments, book management, and delivery tracking.",
    image: "/images/Booksphere.PNG",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    live: "https://booksphere-ashy.vercel.app/",
    frontend: "https://github.com/sanjana-moon/BookSphere.git",
    backend: "https://github.com/sanjana-moon/booksphere-server.git",
    category: "Full Stack",
    challenges: [
      {
        problem: "Implementing secure payment processing.",
        solution:
          "Integrated Stripe payment gateway with backend verification.",
      },
      {
        problem: "Managing multiple user roles and permissions.",
        solution:
          "Implemented role-based authentication for different dashboard access.",
      },
      {
        problem:
          "Handling large amounts of book data efficiently.",
        solution:
          "Added search, filtering, pagination, and optimized database queries.",
      },
    ],
  },
  {
    id: 4,
    slug: "nestudy",
    title: "Nestudy",
    featured: false,
    description:
      "A full-stack study room booking platform where users can discover study spaces, check room availability, and reserve rooms through a modern and responsive interface.",
    image: "/images/Nestudy.PNG",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    live: "https://nestudy.vercel.app/",
    frontend: "https://github.com/sanjana-moon/Nestudy",
    backend: "https://github.com/sanjana-moon/Nestudy_Server.git",
    category: "Full Stack",
    challenges: [
      {
        problem:
          "Preventing duplicate room bookings for the same time slot.",
        solution:
          "Added backend validation to check room availability before confirming reservations.",
      },
      {
        problem:
          "Providing a smooth room discovery experience.",
        solution:
          "Implemented filtering, responsive room cards, and detailed room information pages.",
      },
      {
        problem:
          "Securing user authentication and protected routes.",
        solution:
          "Used JWT authentication with protected API routes and role-based access control.",
      },
    ],
  },
  {
  id: 5,
  slug: "tilesgallery",
  title: "TilesGallery",
  featured: false,
  description:
    "A responsive frontend tile marketplace where users can explore premium tile collections, browse product details, and enjoy a clean and modern shopping experience.",
  image: "/images/TilesGallery.PNG",
  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
  ],
  live: "https://tiles-gallery-beta.vercel.app/",
  frontend: "https://github.com/sanjana-moon/tiles-gallery.git",
  category: "Frontend",
  challenges: [
    {
      problem:
        "Displaying a large collection of tile products in an organized way.",
      solution:
        "Designed reusable product cards with category filtering and responsive grid layouts.",
    },
    {
      problem:
        "Creating a consistent user experience across different screen sizes.",
      solution:
        "Built a fully responsive interface using Tailwind CSS and mobile-first design principles.",
    },
    {
      problem:
        "Keeping the UI clean and easy to navigate.",
      solution:
        "Used reusable React components and structured layouts to improve usability and maintainability.",
    },
  ],
},
];

export default projects;