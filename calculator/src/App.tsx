

function App() {
  return (
    <div>
      <h1 className="text-green-800 font-bold text-center text-3xl mt-5">Calculator</h1>

      <div className="flex justify-center mt-10">
        <div className="bg-green-700 p-4 rounded-lg">
          <input type="text" className="w-80 h-12 text-2xl p-2 text-right" />
          <div className="grid grid-cols-4 gap-2 mt-5">
            <button className="bg-gray-200 text-2xl rounded-lg">7</button>
            <button className="bg-gray-200 text-2xl rounded-lg">8</button>
            <button className="bg-gray-200 text-2xl rounded-lg">9</button>
            <button className="bg-gray-200 text-2xl rounded-lg">/</button>
            <button className="bg-gray-200 text-2xl rounded-lg">4</button>
            <button className="bg-gray-200 text-2xl rounded-lg">5</button>
            <button className="bg-gray-200 text-2xl rounded-lg">6</button>
            <button className="bg-gray-200 text-2xl rounded-lg">*</button>
            <button className="bg-gray-200 text-2xl rounded-lg">1</button>
            <button className="bg-gray-200 text-2xl rounded-lg">2</button>
            <button className="bg-gray-200 text-2xl rounded-lg">3</button>
            <button className="bg-gray-200 text-2xl rounded-lg">-</button>
            <button className="bg-gray-200 text-2xl rounded-lg">0</button>
            <button className="bg-gray-200 text-2xl rounded-lg">.</button>
            <button className="bg-gray-200 text-2xl rounded-lg">=</button>
            <button className="bg-gray-200 text-2xl rounded-lg">+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
