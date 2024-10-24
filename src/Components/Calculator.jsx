import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      const evaluatedResult = eval(input); // Evaluate the input string as an arithmetic expression
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error'); // Display error if the expression is invalid
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 text-white min-h-screen p-4">
      {/* Display Section */}
      <div className="w-full max-w-lg bg-black rounded-lg shadow-xl">
        <div className="bg-gray-800 text-right text-4xl px-5 py-5 rounded-t-lg font-mono tracking-wide text-white">
          {input || '0'}
        </div>
        <div className="bg-gray-700 text-right text-3xl px-5 py-3 rounded-b-lg text-gray-400">
          {result || '0'}
        </div>
      </div>

      {/* Calculator Buttons */}
      <div className="grid grid-cols-4 gap-4 mt-8 w-full max-w-lg">
        {/* Button Row 1 */}
        <button
          onClick={() => handleClick('7')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          7
        </button>
        <button
          onClick={() => handleClick('8')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          8
        </button>
        <button
          onClick={() => handleClick('9')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          9
        </button>
        <button
          onClick={() => handleClick('/')}
          className="bg-orange-600 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-orange-500 transition-all duration-200 ease-in-out"
        >
          /
        </button>

        {/* Button Row 2 */}
        <button
          onClick={() => handleClick('4')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          4
        </button>
        <button
          onClick={() => handleClick('5')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          5
        </button>
        <button
          onClick={() => handleClick('6')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          6
        </button>
        <button
          onClick={() => handleClick('*')}
          className="bg-orange-600 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-orange-500 transition-all duration-200 ease-in-out"
        >
          *
        </button>

        {/* Button Row 3 */}
        <button
          onClick={() => handleClick('1')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          1
        </button>
        <button
          onClick={() => handleClick('2')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          2
        </button>
        <button
          onClick={() => handleClick('3')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          3
        </button>
        <button
          onClick={() => handleClick('-')}
          className="bg-orange-600 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-orange-500 transition-all duration-200 ease-in-out"
        >
          -
        </button>

        {/* Button Row 4 */}
        <button
          onClick={() => handleClick('0')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          0
        </button>
        <button
          onClick={() => handleClick('.')}
          className="bg-gray-800 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out"
        >
          .
        </button>
        <button
          onClick={calculate}
          className="bg-green-600 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-green-500 transition-all duration-200 ease-in-out"
        >
          =
        </button>
        <button
          onClick={() => handleClick('+')}
          className="bg-orange-600 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-orange-500 transition-all duration-200 ease-in-out"
        >
          +
        </button>

        {/* Clear Button */}
        <button
          onClick={clearInput}
          className="bg-red-600 text-white text-4xl font-semibold p-6 rounded-xl shadow-lg hover:bg-red-500 transition-all duration-200 ease-in-out col-span-4"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
