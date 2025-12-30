import './App.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/navbar.jsx'
import Manager from './components/manager.jsx'
import Footer from './components/footer.jsx'

function App() {
  

  return (
    <>
      <div className=''>
       <Navbar></Navbar>
       <div  className='min-h-[80vh]'>
       <Manager></Manager>
       </div>
        <Footer></Footer>
      </div>
      <Analytics />
    </>
  )
}

export default App
