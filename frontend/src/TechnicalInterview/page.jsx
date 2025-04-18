import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

const CodeEditor = () => {
  const [code, setCode] = useState(
    `function solve(input) {\n  // your code here\n  return input;\n}`
  );
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [problem, setProblem] = useState(null);
  const [problemStatement, setProblemStatement] = useState("");
  const [samples, setSamples] = useState([]);

  const fetchProblem = async () => {
    try {
      const res = await fetch("https://codeforces.com/api/problemset.problems");
      const data = await res.json();
      const problems = data.result.problems;
      const random = problems[Math.floor(Math.random() * problems.length)];

      setProblem(random);
      setOutput("");
      setStatus("");
      fetchProblemStatement(random.contestId, random.index);
    } catch (error) {
      console.error("Failed to fetch problem list:", error);
    }
  };

  const fetchProblemStatement = async (contestId, index) => {
    try {
      const proxyUrl = `http://localhost:5000/problem/${contestId}/${index}`; // Local backend proxy
      const response = await fetch(proxyUrl);
      const data = await response.json();

      setProblemStatement(data.statement || "<p>Problem not found.</p>");
      setSamples(data.samples || []);
    } catch (error) {
      console.error("Failed to fetch problem statement:", error);
      setProblemStatement("<p>Error loading problem statement.</p>");
    }
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setOutput("");
    setStatus("");
  };

  const runCode = () => {
    try {
      if (!samples.length) {
        setOutput("No sample input/output found.");
        setStatus("⚠️ Cannot test output");
        return;
      }

      const testInput = samples[0].input;
      const expected = samples[0].output;

      const userFunc = new Function("input", code + `\nreturn solve(input);`);
      const result = userFunc(testInput).toString().trim();

      setOutput(result);
      setStatus(
        result === expected.trim()
          ? "✅ Output matches expected"
          : `❌ Mismatch\nExpected: ${expected}`
      );
    } catch (err) {
      setOutput("Error: " + err.message);
      setStatus("❌ Error");
    }
  };

  useEffect(() => {
    fetchProblem();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0f1117] font-sans text-white">
      {/* Left - Problem Statement & Samples */}
      <div className="w-full md:w-1/2 p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 overflow-y-auto">
        <h2 className="text-cyan-300 text-xl mb-1 mt-12">🧩 Problem</h2>
        {problem ? (
          <>
            <h3 className="font-semibold">{problem.name}</h3>
            <div className="mt-2 text-sm text-gray-300">
              {parse(problemStatement)}
            </div>
            <div className="mt-4">
              <h3 className="text-cyan-300 font-semibold mb-2">🧪 Sample Test Cases</h3>
              {samples.map((s, i) => (
                <div key={i} className="mb-3 text-sm">
                  <p className="text-gray-400">Input:</p>
                  <pre className="bg-gray-900 p-2 rounded whitespace-pre-wrap">{s.input}</pre>
                  <p className="text-gray-400 mt-1">Expected Output:</p>
                  <pre className="bg-gray-900 p-2 rounded whitespace-pre-wrap">{s.output}</pre>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Loading problem...</p>
        )}
        <button
          className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
          onClick={fetchProblem}
        >
          🔀 Get New Problem
        </button>
      </div>

      {/* Right - Code Editor & Output */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-cyan-300 text-xl mb-2 mt-12">💻 Code Editor</h2>
        <textarea
          className="w-full h-64 p-3 bg-gray-800 text-white rounded border border-gray-600 resize-none"
          value={code}
          onChange={handleChange}
        />
        <button
          onClick={runCode}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          ▶️ Run Code
        </button>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-cyan-300">📤 Output</h3>
          <pre className="bg-gray-900 p-3 rounded border border-gray-700 text-green-400">
            {output}
          </pre>
          <p className="mt-1 text-sm whitespace-pre-line">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
