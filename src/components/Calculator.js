export const Calculator = () => (
  <div className="bg-white w-2/6 h-2/4 rounded oveflow-hidden">
    <div className="bg-gray-500 h-1/6 flex items-center justify-end p-5">
      <p className="text-2xl text-white">0</p>
    </div>
    <div className="bg-gray-400 h-5/6 grid grid-cols-4 gap-1">
      <button name="AC" className="bg-white w-22">AC</button>
      <button name="DEL" className="bg-white w-22">+/-</button>
      <button name="%" className="bg-white w-22">%</button>
      <button name="/" className="bg-yellow-500 w-22">/</button>
      <button name="7" className="bg-white w-22">7</button>
      <button name="8" className="bg-white w-22">8</button>
      <button name="9" className="bg-white w-22">9</button>
      <button name="*" className="bg-yellow-500 w-22">*</button>
      <button name="4" className="bg-white w-22">4</button>
      <button name="5" className="bg-white w-22">5</button>
      <button name="6" className="bg-white w-22">6</button>
      <button name="-" className="bg-yellow-500 w-22">-</button>
      <button name="1" className="bg-white w-22">1</button>
      <button name="2" className="bg-white w-22">2</button>
      <button name="3" className="bg-white w-22">3</button>
      <button name="+" className="bg-yellow-500 w-22">+</button>
      <button name="0" className="bg-white w-22 col-span-2">0</button>
      <button name="." className="bg-white w-22">.</button>
      <button name="=" className="bg-yellow-500 w-22">=</button>
    </div>
  </div>
);