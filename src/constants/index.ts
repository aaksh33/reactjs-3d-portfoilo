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
    title: "Next.js Developer",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "A Next.js developer builds modern, fast, and SEO-friendly web applications using the Next.js React framework..",
      "They work with server-side rendering (SSR) and static site generation (SSG) for better performance.",
      "They integrate APIs, style with tools like Tailwind CSS, and ensure responsive design.",
      "Next.js developers often collaborate with teams to create scalable, production-ready web apps.",
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
      "I thought it was impossible to make a website as beautiful as our product, but Aakash proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aakash does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aakash optimized our website, our traffic increased by 50%. We can't thank them enough!",
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
    name: "AI Mentor Mind",
    description:
      "AI Mentor Mind is an AI-powered learning and career guidance platform (or concept) that acts like a virtual mentor. It helps students, developers, and professionals learn AI, coding, and other technical skills step by step.",
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
    name: "Air-Quality Monitor",
    description:
      "An Air Quality Monitor is a device (or system) that measures the level of pollutants and gases in the air to check how clean or polluted the air is.",
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
