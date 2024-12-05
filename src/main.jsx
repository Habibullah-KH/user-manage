import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import CreateUser from './Component/CreateUser.jsx'
import AllUser from './Component/AllUser.jsx'
import UpdateUser from './Component/UpdateUser.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<CreateUser/>,
      },
      {
        path:'/allUser',
        element:<AllUser/>,
        loader:()=>fetch(`http://localhost:8000/user`)
      },
      {
        path:'/userEdit/:id',
        element:<UpdateUser/>,
        loader:({params})=>fetch(`http://localhost:8000/user/${params.id}`)
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
