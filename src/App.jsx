import { useState } from 'react'
import './App.css'
function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleOperator = (event) => {
    console.log(operator);
    setOperator(event.target.value);
  }

  const handleCalculate = () => {
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);
    let resultValue;
  
    switch(operator){
      case '+':
        resultValue = num1Value + num2Value;
        break;
      case '-':
        resultValue = num1Value - num2Value;
        break;
      case '*':
        resultValue = num1Value * num2Value;
        break;
      case '/':
        resultValue = (num1Value / num2Value).toFixed(2);
        break;
      case '%':
        resultValue = num1Value % num2Value;
        break;
      default:
        resultValue = 'Invalid Operator !, Please select a valid one .';
    }
  
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%'){
      setResult(resultValue);
      setHistory([...history, `${num1Value} ${operator} ${num2Value} = ${resultValue}`]);
    }
    
  }


  const handleClear = () => {
    console.log(history);
    
    setNum1(0);
    setNum2(0);
    setOperator('');
    setResult(0);
    setHistory([]);
  }

  return (
    <>
    <div className='w-screen flex items-center m-auto min-h-screen bg-gradient-to-br from-black to-slate-800 p-12 flex-col gap-12'>
    <div className="title">
    <h1 className='text-2xl md:text-3xl font-bold text-center bg-gradient-to-br from-pink-600 via-purple-400 to-orange-400 bg-clip-text text-transparent font-nunito'>A Calculator App for basic math operations</h1>
    <div className="underline h-1 w-1/2 mx-auto my-2 rounded-lg text-3xl font-bold text-center bg-gradient-to-br from-pink-600 via-purple-400 to-orange-400">

    </div>
    </div>
    <div className="app max-w-3xl text-purple-400 border border-slate-800 rounded-lg p-8 flex flex-col gap-4">
      
      <div className="app-display font-nunito flex flex-col-reverse sm:flex-row gap-4 sm:gap-8 items-end justify-end">
      <select onChange={handleOperator} className='h-fit border-none outline-none cursor-pointer rounded-md px-4 py-1 text-purple-900 font-bold'>
        <option hidden="" value="">Select operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
      </select>
      <div className="operands flex flex-col gap-2 font-nunito">
      <input value={num1} onChange={(event) => setNum1(event.target.value)} type="number" className='border-none outline-none cursor-pointer rounded-md px-6 py-2 text-purple-900' />
      <input value={num2} onChange={(event) => setNum2(event.target.value)} type="number" className='border-none outline-none cursor-pointer rounded-md px-6 py-2 text-purple-900'   />
      </div>
      </div>
      <div className="calculation flex flex-col items-end sm:flex-row justify-between gap-4 sm:gap-8">
      <p className='tracking-wider font-nunito'>Result: <span className='bg-gradient-to-br from-pink-600 via-purple-400 to-orange-400 bg-clip-text text-transparent font-semibold text-2xl'>{result}</span></p>
      <div className="btn-div flex gap-4 font-nunito">
      <button onClick={handleClear} className='hover:bg-red-500 border font-semibold tracking-wide border-red-500 text-red-400 hover:text-white transition-all duration-400 px-5 py-2 text-[0.92rem] rounded-md'>Clear</button>
      <button onClick={handleCalculate} className='hover:bg-green-500 border font-semibold tracking-wide border-green-500 text-green-400 hover:text-white transition-all duration-400 px-5 py-2 text-[0.92rem] rounded-md'>Calculate</button>
      </div>
      </div>
      
      <div className="history flex justify-between flex-col md:flex-row gap-4">
      <h2 className='font-nunito'>Calculation History : </h2>
      <ul className='font-nunito flex gap-4 flex-row-reverse flex-wrap'>
        {
          operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%' ?
          history.map((item, index) => (
            <li key={index}>{item}</li>
          )) : <li>No history available</li>
        }
      </ul>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
