import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-teal-500">
      <h1 className='text-4xl'>Hello World</h1>
      <button className="btn">Click</button>

    </div>
  )
}

export default App
