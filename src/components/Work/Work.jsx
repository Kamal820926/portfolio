// src/components/Work/Work.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Corrected relative paths for images if your Work.jsx is in src/components/Work/ ---
// Assuming assets/Work1_logo is in src/
import ecom from '../../assets/Work1_logo/ecom.png';
import Online from '../../assets/Work1_logo/Online.png';
import Villa from '../../assets/Work1_logo/Villa.jpeg';
import green from '../../assets/Work1_logo/green.png';

const projects = [
  {
    title: 'Green Vagi (Vegetable Delivery App)',
    description: 'A user-friendly mobile-first web application for ordering fresh, organic vegetables directly from local farms. Features include a dynamic product catalog, order tracking, and delivery scheduling, aiming to connect consumers with sustainable produce.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe API', 'Tailwind CSS'],
    image: green, // Using the imported image
    link: 'https://greencart-eight-cyan.vercel.app/products', // Your specific link for Green Vagi
  },
    
  {
    title: 'E-commerce Platform',
    description: 'A robust full-stack e-commerce application designed for seamless online shopping. Features include user authentication, comprehensive product listings, a fully functional shopping cart, and secure payment processing. Developed to provide a smooth buying and selling experience.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe API', 'Tailwind CSS'],
    image: ecom, // Using the imported image
    link: 'YOUR_ECOM_LIVE_DEMO_LINK_HERE', // Add your live demo link here
  },
  {
    title: 'Online Course Selling Platform',
    description: 'A dedicated platform for instructors to create and sell online courses, and for students to browse and enroll. Includes features like course content management, video streaming integration, user dashboards for students and instructors, and secure payment handling.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe API', 'Tailwind CSS'],
    image: Online, // Using the imported image
    link: 'YOUR_ONLINE_COURSE_LIVE_DEMO_LINK_HERE', // Add your live demo link here
  },
  {
    title: 'Rental Villa Website',
    description: 'A modern and intuitive web application for Browse and booking luxury rental villas. Users can view high-quality images, check availability, filter properties by amenities, and submit booking inquiries. Designed for an engaging user experience.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe API', 'Tailwind CSS'],
    image: Villa,
    link: 'YOUR_VILLA_WEBSITE_LIVE_DEMO_LINK_HERE', // Add your live demo link here
  },
  
];

const Work = () => {
  return (
    <div id="work" className="border-b border-black pb-24"> {/* Added id="work" here */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-bold"
      >
        My Projects
      </motion.h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Description (Left on large screens, Full width on small) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Alternate slide direction
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4"
            >
              <h3 className="mb-2 text-2xl font-semibold text-blue-600">{project.title}</h3>
              <p className="mb-4 text-gray-700 text-center lg:text-left">{project.description}</p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* This is where the project.link is used */}
              {project.link && (
                <a
                  href={project.link} // Use project.link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  View Project
                </a>
              )}
            </motion.div>

            {/* Project Image (Right on large screens, Full width on small) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }} // Alternate slide direction
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center items-center p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-sm rounded-lg shadow-lg border-2 border-black object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;