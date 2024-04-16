

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import './App.css'

function App() {


  return (
    <>
    <Navbar/>
    <Hero /> 
    <Cards 
      img="image 12.png"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
      />
      
    </>
  )
}

export default App
