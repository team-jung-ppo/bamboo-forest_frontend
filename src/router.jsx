import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Loginpage from "./components/Loginpage/index.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/login'
      element={<Loginpage />}
    />
  )
)