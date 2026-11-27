import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Notfound from './Notfound'
import Navbar from './Navbar'
import Products from './Products'
import Productdetails from './Productdetails'

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>,
      children:[
        {
          index:true,
          element : <Home/>
        },

        {
          path:'contact',
          element : <Contact/>
        },

        {
          path:'about',
          element : <About/>
        },

        {
          path:'products',
          element: <Products/>
        },

        {
          path:'products/:id',
          element:<Productdetails/>
        },

        {
          path:'*',
          element:<Notfound/>
        }

      ]
    }
  ]
  )
  
  const App = () => {

  return <RouterProvider router={router}/> 

  
  }


export default App
