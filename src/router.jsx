import {UnknownErrorBoundary} from "./errors/UnknownErrorBoundary.jsx";
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Loginpage } from "./components/Loginpage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      component={
        <UnknownErrorBoundary>
          <Outlet />
        </UnknownErrorBoundary>
      }
    >
      <Route
        path='/login'
        element={<Loginpage />}
      />
    </Route>,
  ),
);