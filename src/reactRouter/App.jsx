import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Notfound from './Notfound'
import Navbar from './Navbar'
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>
      <Navbar/>
       <Home/>
      </div>
    },
    {
      path:'/about',
      element:<div>
        <Navbar/>
        <About/>
      </div>
    },

    {
      path:'/contact',
      element:<div>
        <Navbar/>
        <Contact/>
        </div>
    },

     {
      path:'*',
      element:<Notfound/>
    },

  ]

  )
 
  return (
    <div>
      <RouterProvider router={router}/> 

    </div>
  )
}

export default App
