import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import project1_img from '../../../assets/project/6.png';
import project2_img from '../../../assets/project/5.png';
import project3_img from '../../../assets/project/4.png';
import project4_img from '../../../assets/project/3.png';
import project5_img from '../../../assets/project/2.png';
import project6_img from '../../../assets/project/1.png';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon

const projectData = [
  { id: 1, title: 'Direct Biz Funding', category: 'Logo Design', image: project1_img, description: 'Logo Design' },
  { id: 2, title: 'Middle Georgia Kitchens', category: 'Web Design', image: project2_img, description: 'Web Design' },
  { id: 3, title: 'Stationary Design', category: 'Graphic Design', image: project3_img, description: 'Graphic Design' },
  { id: 4, title: 'Carbon Compost', category: 'Logo Design', image: project4_img, description: 'Logo Design' },
  { id: 5, title: 'Ace Gutter', category: 'SEO', image: project5_img, description: 'SEO' },
  { id: 6, title: 'Locksmith', category: 'SEO', image: project6_img, description: 'SEO' },
];

const categories = ['All Projects', 'Web Design', 'SEO', 'Logo Design', 'Graphic Design', 'Animation'];

function ProjectSection() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const navigate = useNavigate(); 

  const filteredProjects = activeTab === 'All Projects'
    ? projectData
    : projectData.filter((project) => project.category === activeTab);

  const handleProjectClick = (title) => {
    const projectPath = `/projects/${title.toLowerCase().replace(/ /g, '-')}`; // Converts title to a URL-friendly path
    navigate(projectPath);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold">Our Recent Projects</h2>

        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${activeTab === category ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gap-4 p-4 bg-white border-2 border-gray-200 rounded-lg group"
              onClick={() => handleProjectClick(project.title)}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-yellow-500 opacity-0 group-hover:opacity-100">
                  <FaArrowRight className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="px-6 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
            All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
