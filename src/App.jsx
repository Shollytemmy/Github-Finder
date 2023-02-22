import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Layouts/Footer'
import Navbar from './components/Layouts/Navbar'
import NotFound from './components/Layouts/NotFound'
import { GithubProvider } from './context/GitHub/GithubContext'
import About from './Pages/About'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>
          <div className="container px-3 pb-12 mx-auto">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />

      </div>
      
      
     

    </Router>
    </GithubProvider>
  )
}

export default App
