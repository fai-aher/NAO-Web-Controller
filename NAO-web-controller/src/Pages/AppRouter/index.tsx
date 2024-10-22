import { useRoutes, BrowserRouter } from 'react-router-dom'

import { MainController } from '../MainController'
import { NotFound } from '../NotFound'
import { Welcome } from '../Welcome'
import { SignIn } from '../SignIn'
import { Menu } from '../Menu'


import './AppRouter.css'

const AppRoutes = () => {

  const routes = useRoutes([
    { path: '/', element: <Welcome /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/main-controller', element: <MainController /> },
    { path: '/menu', element: <Menu /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes;
}

function AppRouter() {

  return (

    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  )
}

export { AppRouter }
