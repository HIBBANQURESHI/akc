import React from "react";

const ClientCaseStudy = ({ title, imageUrl, description, stats }) => {
  return (
    <div className="container p-4 mx-auto mb-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Client Case Studies</h2>
        <div className="w-20 h-1 mx-auto my-4 bg-red-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-md lg:w-1/3"
        />

        <div className="text-left lg:w-2/3">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>

          <div className="flex justify-between mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-bold text-red-500">{stat.value}</h4>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCaseStudy;