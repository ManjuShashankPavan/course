import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Java = () => {
  const courses = {
    Java: {
      title: 'Java Programming Masterclass',
      pages: [
        {
          title: 'Introduction to Java',
          content: 'Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
          tips: [
            'Java was originally developed by James Gosling at Sun Microsystems (now owned by Oracle)',
            'The latest versions are Java 20/21 (as of 2023)',
            'Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM)'
          ],
          quiz: {
            question: 'What does WORA stand for in Java?',
            options: [
              'Write Once, Run Anywhere',
              'Write One, Read All',
              'World Object Resource Allocation',
              'Web Oriented Runtime Architecture'
            ],
            correctAnswer: 'Write Once, Run Anywhere',
          }
        },
        {
          title: 'Java Syntax Basics',
          content: 'Java syntax is similar to C and C++, but has fewer low-level facilities than either. The syntax is verbose and strictly typed, which helps prevent many common programming errors. A basic Java program consists of classes containing methods, and methods contain statements.',
          tips: [
            'Every Java application must contain a main() method',
            'Java is case-sensitive - "MyClass" and "myclass" are different',
            'Class names should start with uppercase letter (PascalCase)',
            'Method names should start with lowercase letter (camelCase)'
          ],
          quiz: {
            question: 'Which of these is NOT a valid Java identifier?',
            options: ['myVariable', '_value', '3rdPlace', '$amount'],
            correctAnswer: '3rdPlace',
          }
        },
        {
          title: 'Variables and Data Types',
          content: 'Java is a statically-typed language, meaning all variables must be declared before they can be used. Java has two categories of data types: primitive (byte, short, int, long, float, double, boolean, char) and reference types (objects, arrays, Strings). Variables are containers for storing data values.',
          tips: [
            'Use final keyword to make a variable constant',
            'Local variables must be initialized before use',
            'Java 10 introduced var for local variable type inference',
            'Default values: 0 for numbers, false for boolean, null for objects'
          ],
          quiz: {
            question: 'Which data type would you use for a true/false value?',
            options: ['int', 'String', 'boolean', 'char'],
            correctAnswer: 'boolean',
          }
        },
        {
          title: 'Control Flow Statements',
          content: 'Java provides control flow statements that allow you to control the flow of your program\'s execution based on certain conditions. These include decision-making statements (if-then, if-then-else, switch), looping statements (for, while, do-while), and branching statements (break, continue, return).',
          tips: [
            'Use switch for multiple fixed value conditions',
            'Enhanced for loop (for-each) is great for arrays and collections',
            'Avoid deeply nested control structures when possible',
            'Ternary operator (?:) can simplify simple if-else statements'
          ],
          quiz: {
            question: 'Which loop is guaranteed to execute at least once?',
            options: ['for', 'while', 'do-while', 'enhanced for'],
            correctAnswer: 'do-while',
          }
        },
        {
          title: 'Object-Oriented Programming',
          content: 'Java is fundamentally object-oriented. All code is written inside classes, and everything is an object (except primitives). Key OOP concepts in Java include classes and objects, inheritance, polymorphism, abstraction, and encapsulation. Java supports single inheritance for classes (extends) but multiple inheritance for interfaces (implements).',
          tips: [
            'Follow SOLID principles for good OOP design',
            'Use composition over inheritance when possible',
            'Make fields private and provide public getters/setters',
            'Abstract classes can have both abstract and concrete methods'
          ],
          quiz: {
            question: 'Which OOP concept allows one class to acquire properties of another?',
            options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Abstraction'],
            correctAnswer: 'Inheritance',
          }
        },
      ],
      nextCourse: 'Python',
    },

    Python: {
      title: 'Python Programming Mastery',
      pages: [
        {
          title: 'Introduction to Python',
          content: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its notable use of significant whitespace. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
          tips: [
            'Python 2 was officially discontinued in 2020 - use Python 3',
            'The Zen of Python (import this) outlines Python design principles',
            'Python has a vast standard library (batteries included philosophy)',
            'Indentation (whitespace) is syntactically significant in Python'
          ],
          quiz: {
            question: 'Which of these is NOT a Python design principle?',
            options: [
              'Beautiful is better than ugly',
              'Explicit is better than implicit',
              'Fast is better than slow',
              'Readability counts'
            ],
            correctAnswer: 'Fast is better than slow',
          }
        },
        {
          title: 'Python Syntax Basics',
          content: 'Python has a clean, readable syntax that uses English keywords frequently where other languages use punctuation. Unlike many other languages, it uses indentation (whitespace) to delimit blocks of code. Python is dynamically typed, meaning you don\'t need to declare variable types. Variables are created when you first assign values to them.',
          tips: [
            'Use snake_case for variable and function names',
            'PEP 8 is Python\'s official style guide',
            'Comments start with # and docstrings use triple quotes',
            'Python uses colons (:) to start code blocks'
          ],
          quiz: {
            question: 'Which symbol is used for single-line comments in Python?',
            options: ['//', '#', '--', '/*'],
            correctAnswer: '#',
          }
        },
        {
          title: 'Variables and Data Types',
          content: 'Python is dynamically typed, meaning you don\'t need to declare variable types. The interpreter infers the type at runtime. Python has several built-in data types: numeric (int, float, complex), sequence (str, list, tuple), mapping (dict), set (set, frozenset), and boolean (bool). Variables are references to objects in memory.',
          tips: [
            'Use type() to check variable type',
            'Variables don\'t store values directly - they reference objects',
            'Python uses duck typing ("if it walks like a duck...")',
            'None is Python\'s null equivalent'
          ],
          quiz: {
            question: 'Which of these is mutable in Python?',
            options: ['tuple', 'str', 'list', 'int'],
            correctAnswer: 'list',
          }
        },
        {
          title: 'Control Flow and Functions',
          content: 'Python provides control flow statements including if/elif/else for conditional execution, for and while loops for iteration, and break/continue for loop control. Functions are defined using the def keyword. Python supports first-class functions, meaning functions can be passed as arguments, returned as values, and assigned to variables.',
          tips: [
            'Use range() with for loops for numerical iteration',
            'Functions can have default arguments (def func(arg=default))',
            '*args collects positional arguments, **kwargs collects keyword arguments',
            'Lambda functions are small anonymous functions'
          ],
          quiz: {
            question: 'Which keyword defines a function in Python?',
            options: ['function', 'def', 'fun', 'lambda'],
            correctAnswer: 'def',
          }
        },
        {
          title: 'Python Data Structures',
          content: 'Python has powerful built-in data structures: lists (mutable sequences), tuples (immutable sequences), dictionaries (key-value mappings), and sets (unordered collections of unique elements). Each has specific use cases and methods. Python also supports list comprehensions - a concise way to create lists.',
          tips: [
            'Use lists for ordered collections that need to change',
            'Use tuples for fixed data that shouldn\'t change',
            'Dictionaries are optimized for fast lookups by key',
            'Sets automatically remove duplicates'
          ],
          quiz: {
            question: 'Which data structure uses curly braces {}?',
            options: ['list', 'tuple', 'dict', 'array'],
            correctAnswer: 'dict',
          }
        },
      ],
      nextCourse: null,
    },
  };

  const [courseData, setCourseData] = useState(null);
  const [page, setPage] = useState(0);
  const [completedCourses, setCompletedCourses] = useState({
    Java: false,
    Python: false,
  });
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    setCourseData(courses[course]);
    setPage(0);
    setShowCompletionMessage(false);
    setQuizAnswer(null);
  };

  const handleNext = () => {
    if (page < courseData.pages.length - 1) {
      setPage((prev) => prev + 1);
    } else {
      setCompletedCourses((prev) => ({ ...prev, [courseData.title.split(' ')[0]]: true }));
      const nextCourse = courseData.nextCourse;
      if (nextCourse) {
        setCourseData(courses[nextCourse]);
        setPage(0);
      } else {
        setShowCompletionMessage(true);
      }
    }
    setQuizAnswer(null);
  };

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleQuizAnswer = (answer) => {
    setQuizAnswer(answer);
  };

  const currentPage = courseData ? courseData.pages[page] : null;
  const isLastPage = currentPage && page === courseData.pages.length - 1;
  const isLastCourse = courseData && !courseData.nextCourse;

  const progressPercentage = currentPage
    ? ((page + 1) / courseData.pages.length) * 100
    : 0;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700 mt-5">
        Programming Courses
      </h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-6 py-2 rounded-md ${
            completedCourses.Java
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={() => handleCourseClick('Java')}
        >
          {completedCourses.Java ? '✓ Java Completed' : 'Java Course'}
        </button>
        <button
          className={`px-6 py-2 rounded-md ${
            completedCourses.Python
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={() => handleCourseClick('Python')}
        >
          {completedCourses.Python ? '✓ Python Completed' : 'Python Course'}
        </button>
      </div>

      {courseData && currentPage && (
        <div className="mt-8 space-y-6">
          <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-indigo-600 mb-3">
                {currentPage.title}
              </h3>
              <span className="text-sm text-gray-500">
                Page {page + 1} of {courseData.pages.length}
              </span>
            </div>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{currentPage.content}</p>

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

            {currentPage.quiz && (
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-3">Quiz:</h4>
                <div className="mb-6 p-4 bg-white rounded border border-gray-200">
                  <p className="mb-2 font-medium">{currentPage.quiz.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentPage.quiz.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(option)}
                        className={`px-4 py-2 rounded-md text-left ${
                          quizAnswer === option
                            ? option === currentPage.quiz.correctAnswer
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {quizAnswer === currentPage.quiz.correctAnswer && (
                    <p className="mt-2 text-green-600">✓ Correct!</p>
                  )}
                  {quizAnswer && quizAnswer !== currentPage.quiz.correctAnswer && (
                    <p className="mt-2 text-red-600">
                      ✗ Incorrect. The correct answer is: {currentPage.quiz.correctAnswer}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              className={`px-4 py-2 rounded ${
                page === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
              onClick={handlePrev}
              disabled={page === 0}
            >
              Previous
            </button>

            <button
              className={`px-6 py-2 rounded font-medium ${
                isLastPage
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'
              }`}
              onClick={handleNext}
            >
              {isLastPage
                ? isLastCourse
                  ? 'Complete All Courses'
                  : 'Finish & Start Next Course'
                : 'Next'}
            </button>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-500 h-2.5 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      {showCompletionMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              All Courses Completed!
            </h2>
            <p className="text-gray-700 mb-6">
              Congratulations! You've mastered both Java and Python programming fundamentals.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                onClick={() => {
                  setShowCompletionMessage(false);
                  navigate('/LearningCourses');
                }}
              >
                Return to Courses
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                onClick={() => {
                  setShowCompletionMessage(false);
                  setCourseData(courses.Java);
                  setPage(0);
                  setCompletedCourses({ Java: false, Python: false });
                }}
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Java;