import About from './component/About/About';
import Menu from './component/Menu/Menu';
import Profile from './component/Profile/Profile';
import Status from './component/Status/Status';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./component/App/app.scss"
import Layout from './component/Layout/Layout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Layout />}>
      <Route index element={<Menu />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/status' element={<Status />} />
    </Route>
  </Route>
))



function App() {
  

  return (

    <div className='app-container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
