import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Layouts/Footer'
import Navbar from './components/Layouts/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>
          <div className="container px-3 pb-12 mx-auto">
            Content
          </div>
        </main>
        <Footer />

      </div>
      
      
     

    </Router>
  )
}

export default App
