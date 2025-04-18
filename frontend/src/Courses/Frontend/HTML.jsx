import React, { useState } from "react";

const HtmlCourse = () => {
  const htmlData = {
    course: "HTML Course",
    description: "Learn the basics of HTML...",
    author: "Your Name",
    last_updated: "2025-04-18",
    pages: [
      {
        page: 1,
        title: "Introduction to HTML",
        content: [
          {
            section: "What is HTML?",
            details: "HTML stands for HyperText Markup Language..."
          }
        ]
      },
      {
        page: 2,
        title: "HTML Tags",
        content: [
          {
            section: "Basic Tags",
            details: "<p>, <h1>, <a>, <img>..."
          }
        ]
      },
      {
        page: 3,
        title: "Forms",
        content: [
          {
            section: "Input Fields",
            details: "Use <input> for user input..."
          }
        ]
      },
      {
        page: 4,
        title: "Tables",
        content: [
          {
            section: "Creating Tables",
            details: "<table>, <tr>, <td>..."
          }
        ]
      },
      {
        page: 5,
        title: "Semantic HTML",
        content: [
          {
            section: "Why use semantic tags?",
            details: "Improves accessibility and SEO..."
          }
        ]
      }
    ]
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = htmlData.pages.length;
  const pageData = htmlData.pages.find((p) => p.page === currentPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
        {htmlData.course}
      </h2>
      <p className="text-center text-gray-700 mb-10">{htmlData.description}</p>

      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{pageData.title}</h3>
        {pageData.content.map((section, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-medium text-gray-800">{section.section}</h4>
            <pre className="bg-gray-100 p-3 rounded-md whitespace-pre-wrap text-sm mt-1">
              {section.details}
            </pre>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 max-w-md mx-auto">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="text-sm text-gray-500 text-center mt-10">
        Author: {htmlData.author} | Last Updated: {htmlData.last_updated}
      </p>
    </div>
  );
};

export default HtmlCourse;
