import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2025 - July 2025",
    points: [
      "Builds the User Interface (UI) → Works with HTML, CSS, and JavaScript to create the visible and interactive part of websites/web apps.",
      "Ensures Responsiveness & Performance → Makes websites fast, mobile-friendly, and smooth across different devices and browsers.",
      "Uses Frameworks & Tools → Works with React, Angular, Vue, Tailwind, Git, APIs, etc. to develop modern, scalable apps.",
      "Collaborates with Designers & Backend Developers → Converts UI/UX designs into code and integrates with backend services.",
    ],
  },
  {
    title: "Python Developer",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "Backend Development → Builds server-side logic, APIs, and databases using frameworks like Django or Flask.",
      "Data Handling & Automation → Works with data processing, scripting, and automation to simplify tasks.",
      "AI/ML & Data Science → Uses libraries like NumPy, Pandas, TensorFlow, PyTorch for analytics, AI, and machine learning.",
      "Collaboration & Integration → Works with frontend developers, DevOps, and databases to build complete applications.",
    ],
  },
  {
    title: "Backend Developer",
    companyName: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2025 - August 2025",
    points: [
      "Builds and maintains the server-side logic, APIs, and databases of applications.",
      "Ensures security, performance, and scalability of systems.",
      "Works with languages like Python, Java, Node.js, PHP and frameworks such as Django, Spring, Express.",
      "Collaborates with frontend developers to deliver a complete, functional product.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shweta proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shweta does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shweta optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Apple Clone",
    description:
      "An Apple clone is a project where developers try to recreate the look and feel of Apple’s official website (apple.com). It’s mostly done for practice and portfolio building, not for commercial use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Health Care",
    description:
      "A healthcare website is a digital platform made for hospitals, clinics, doctors, or health-related services to provide medical information, online consultations, and appointment booking to patients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Linked",
    description:
      "LinkedIn is the world’s largest professional networking platform where individuals and businesses connect for career growth, hiring, learning, and professional branding.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
   
  },
];

export { services, technologies, experiences, testimonials, projects };
