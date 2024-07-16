import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Contact from './Components/Contact'
import User from './Components/Username'
import {createBrowserRouter, RouterProvider, useHref} from 'react-router-dom'

// steps
//  1. npm i react-router-dom
//  2. import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//  3. create router and set path and element 
//  4. use <RouterProvider router={router}/> insted of element
//  5. in Navbar use Link tag insted of a tag and use to insted of use href 
//  6. if you want to use parameters import this : import { useParams } from 'react-router-dom'
//  6. and create : const params = useParams(); ,  use like this : {params.username}

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <> <Navbar/> <Home/>  </>
    },
    {
      path:"/login",
      element: <> <Navbar/> <Login/>  </>
    },
    {
      path:"/contact",
      element: <> <Navbar/> <Contact/> </>
    },
    {
      path:"/user/:username",
      element: <> <User/> </>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
