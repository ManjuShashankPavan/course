import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LearningCourses = () => {
  const courseData = {
    html: {
      title: "HTML Course",
      pages: [
        {
          title: "Introduction to HTML",
          content: "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.",
          tips: [
            "HTML documents have a .html extension",
            "Start with <!DOCTYPE html>"
          ],
          quiz: [
            {
              question: "What does HTML stand for?",
              options: ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Home Tool Markup Language"],
              answer: "Hyper Text Markup Language"
            }
          ],
          nextCourse: 'css'
        },
        {
          title: "HTML Tags",
          content: "Common tags include <p>, <h1>, <a>, <div>, and <img>.",
          tips: [
            "<h1> is for main headings",
            "Use semantic tags like <header> and <footer>"
          ],
          quiz: [
            {
              question: "What tag is used for a paragraph?",
              options: ["<p>", "<div>", "<h1>"],
              answer: "<p>"
            }
          ]
        },
        {
          title: "HTML Forms and Tables",
          content: "Forms allow user input, tables organize data.",
          tips: [
            "Use <table> for tabular data only",
            "Form elements need name attributes"
          ],
          quiz: [
            {
              question: "Which tag is used to create a table?",
              options: ["<table>", "<form>", "<input>"],
              answer: "<table>"
            }
          ]
        }
      ],
      nextCourse: 'css'
    },
    css: {
      title: "CSS Course",
      pages: [
        {
          title: "Introduction to CSS",
          content: "CSS stands for Cascading Style Sheets. It styles HTML elements.",
          tips: [
            "CSS can be inline, internal, or external",
            "External CSS is preferred for maintainability"
          ],
          quiz: [
            {
              question: "What does CSS stand for?",
              options: ["Cascading Style Sheets", "Creative Style Sheets", "Cascading Simple Sheets"],
              answer: "Cascading Style Sheets"
            }
          ]
        },
        {
          title: "CSS Selectors",
          content: "Use selectors like .class, #id, or element to apply styles.",
          tips: [
            "Avoid using !important",
            "Specificity determines which styles get applied"
          ],
          quiz: [
            {
              question: "Which of the following is a valid class selector?",
              options: [".class", "#id", "element"],
              answer: ".class"
            }
          ]
        },
        {
          title: "Box Model and Positioning",
          content: "Understand margin, border, padding, and content.",
          tips: [
            "box-sizing: border-box includes padding in width",
            "Position absolute removes from document flow"
          ],
          quiz: [
            {
              question: "Which property controls the layout of the box model?",
              options: ["margin", "border", "box-sizing"],
              answer: "box-sizing"
            }
          ]
        }
      ],
      nextCourse: 'javascript'
    },
    javascript: {
      title: "JavaScript Course",
      pages: [
        {
          title: "Intro to JS",
          content: "JavaScript adds interactivity to websites. It runs in the browser.",
          tips: [
            "JS can manipulate the DOM",
            "ES6 introduced many modern features"
          ],
          quiz: [
            {
              question: "Which method is used to select an element by ID in JS?",
              options: ["getElementById()", "querySelector()", "querySelectorAll()"],
              answer: "getElementById()"
            }
          ]
        },
        {
          title: "Variables and Functions",
          content: "Use let, const, and function() to write JS logic.",
          tips: [
            "Prefer const over let",
            "Arrow functions have shorter syntax"
          ],
          quiz: [
            {
              question: "Which variable declaration keyword is used to prevent reassignment?",
              options: ["let", "const", "var"],
              answer: "const"
            }
          ]
        },
        {
          title: "DOM Manipulation",
          content: "Use document.querySelector() to interact with HTML.",
          tips: [
            "Cache DOM elements in variables",
            "Event listeners handle user interactions"
          ],
          quiz: [
            {
              question: "Which method is used to attach an event listener to an element?",
              options: ["addEventListener()", "attachEvent()", "onClick()"],
              answer: "addEventListener()"
            }
          ]
        }
      ],
      nextCourse: null
    }
  };

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [page, setPage] = useState(0);
  const [completedCourses, setCompletedCourses] = useState({
    html: false,
    css: false,
    javascript: false
  });
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setPage(0);
    setShowCompletionMessage(false);
    setQuizPassed(false);
  };

  const handleNext = () => {
    if (page < courseData[selectedCourse].pages.length - 1) {
      setPage(prev => prev + 1);
      setUserAnswer("");  // Reset quiz answer for next page
      setQuizPassed(false);  // Reset quiz result
    } else {
      setCompletedCourses(prev => ({
        ...prev,
        [selectedCourse]: true
      }));
      const nextCourse = courseData[selectedCourse].nextCourse;
      if (nextCourse) {
        setSelectedCourse(nextCourse);
        setPage(0);
      } else {
        setShowCompletionMessage(true);
      }
    }
  };

  const handlePrev = () => {
    if (page > 0) setPage(prev => prev - 1);
  };

  const handleReset = () => {
    setSelectedCourse(null);
    setPage(0);
    setShowCompletionMessage(false);
    setQuizPassed(false);
    setUserAnswer("");
  };

  const handleQuizAnswer = (answer) => {
    setUserAnswer(answer);
    const correctAnswer = courseData[selectedCourse].pages[page].quiz[0].answer;
    if (answer === correctAnswer) {
      setQuizPassed(true);
    }
  };

  const currentCourse = selectedCourse ? courseData[selectedCourse] : null;
  const currentPage = selectedCourse ? currentCourse.pages[page] : null;
  const isLastPage = selectedCourse && page === currentCourse.pages.length - 1;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700 mt-5">Learning Courses</h1>

      {showCompletionMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">All Courses Completed!</h2>
            <p className="text-gray-700 mb-6">You've finished all available courses. Great job!</p>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              onClick={() => {
                setShowCompletionMessage(false);
                navigate("/LearningCourses");
              }}
            >
              Return to Courses
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {Object.entries(courseData).map(([key, course]) => (
          <button
            key={key}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedCourse === key ? 'bg-indigo-600 text-white shadow-lg transform scale-105' : completedCourses[key] ? 'bg-green-500 text-white' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
            onClick={() => handleCourseClick(key)}
          >
            {course.title}
            {completedCourses[key] && <span className="ml-2">✓</span>}
          </button>
        ))}
      </div>

      {selectedCourse && !showCompletionMessage && (
        <div className="mt-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {currentCourse.title} - Page {page + 1}/{currentCourse.pages.length}
            </h2>
            <button
              onClick={handleReset}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Change Course
            </button>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium text-indigo-600 mb-3">{currentPage.title}</h3>
            <p className="text-gray-700 mb-4">{currentPage.content}</p>

            {currentPage.tips && (
              <div className="bg-blue-50 p-3 rounded border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-1">Quick Tips:</h4>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  {currentPage.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {currentPage.quiz && !quizPassed && (
            <div className="bg-gray-100 p-6 mt-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800">Quiz: {currentPage.quiz[0].question}</h4>
              <div className="space-y-4 mt-4">
                {currentPage.quiz[0].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(option)}
                    className={`px-4 py-2 rounded-lg text-white ${userAnswer === option ? (option === currentPage.quiz[0].answer ? 'bg-green-600' : 'bg-red-600') : 'bg-indigo-600 hover:bg-indigo-700'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {userAnswer && (
                <p className={`mt-4 text-lg ${quizPassed ? 'text-green-600' : 'text-red-600'}`}>
                  {quizPassed ? "Correct!" : "Try Again."}
                </p>
              )}
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`px-4 py-2 rounded ${page === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              {isLastPage ? (currentCourse.nextCourse ? 'Next Course' : 'Finish') : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningCourses;
