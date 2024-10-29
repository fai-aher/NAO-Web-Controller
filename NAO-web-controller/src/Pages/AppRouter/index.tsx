import { useRoutes, BrowserRouter } from 'react-router-dom'

import { MainController } from '../MainController'
import { NotFound } from '../NotFound'
import { Welcome } from '../Welcome'
import { SignIn } from '../SignIn'
import { Menu } from '../Menu'

import { MovementOptions } from '../ActionOptions/Movement'
import { SpeechOptions } from '../ActionOptions/Speech'
import { WalkingOptions } from '../ActionOptions/Walking'
import { ConfigOptions } from '../ActionOptions/RobotConfig'
import { TaskOptions } from '../ActionOptions/Tasks'
import { PerceptionOptions } from '../ActionOptions/Perception'

const AppRoutes = () => {

  const routes = useRoutes([
    { path: '/', element: <Welcome /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/main-controller', element: <MainController /> },
    { path: '/menu', element: <Menu /> },
    { path: '/*', element: <NotFound /> },

    { path: '/action-options/movement', element: <MovementOptions /> },
    { path: '/action-options/speech', element: <SpeechOptions /> },
    { path: '/action-options/walking', element: <WalkingOptions /> },
    { path: '/action-options/robot-config', element: <ConfigOptions /> },
    { path: '/action-options/tasks', element: <TaskOptions /> },
    { path: '/action-options/perception', element: <PerceptionOptions /> },
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
