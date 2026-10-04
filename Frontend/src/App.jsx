import { RouterProvider } from 'react-router'
import './style.css'
import { router } from './app.routes'
import { AuthProvider } from './features/auth/auth.context'

function App() {
  
  return (
   <AuthProvider>
    <RouterProvider router={router}/>
   </AuthProvider>
  )
}

export default App
