import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NexusCareHealth } from './pages/nexusCareHealth'
import { IndustrialDesign } from './pages/industrialDesign'
import { Home } from './pages/home'

const routers = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/nexuscare',
    element: <NexusCareHealth />
  },
  {
    path: '/industrialdesign',
    element: <IndustrialDesign />
  }
])

export function App() {
  return (
    <RouterProvider router={routers}/>
  )
}
