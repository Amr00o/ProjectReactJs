import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Start from './Components/Start/Start'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'



export default function App() {
  let routers = createHashRouter([
    {path:'' , element:<Layout/>, children:[
      {index:true , element:<Start/>},
      {path:'about' , element:<About/>},
      {path:'portfolio' , element:<Portfolio/>},
      {path:'contact' , element:<Contact/>},
      {path:'*' , element:<NotFound/>},
  
    ]}
  ])
  
  return <RouterProvider router={routers}></RouterProvider>
  
}