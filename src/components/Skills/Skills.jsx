import React from "react";
import { SkillsInfo } from "../../constants"; // Import your data
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      // Adjusted padding for better responsiveness across all devices:
      // px-4 for default (mobile), md:px-8 for medium screens, lg:px-16 for large screens.
      className="py-24 pb-24 px-4 md:px-8 lg:px-16 font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8245ec]">SKILLS</h2> {/* Adjusted text color for consistency */}
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div
        // Grid layout for precise control over columns and gaps on different screen sizes:
        // grid-cols-1 for mobile, sm:grid-cols-2 for small screens,
        // md:grid-cols-3 for medium screens (laptops), xl:grid-cols-4 for extra large.
        // gap-4 for default (mobile), lg:gap-6 for large screens.
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 py-10 justify-items-center"
      >
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            // Removed max-w-sm to allow cards to fill their grid column more effectively on larger screens.
            // w-full ensures it takes full width of its grid column.
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10
                       w-full // Ensures the card takes the full width of its allocated grid column
                       rounded-2xl border border-white
                       shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}
            <Tilt
              key={category.title} // Ensure unique key for Tilt if it's reused
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-1
                               bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-1 sm:py-2 sm:px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
