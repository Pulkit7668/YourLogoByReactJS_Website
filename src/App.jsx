import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
    </>
  )
}

export default App
