import {RouterProvider} from "react-router-dom";
import { router } from './router.jsx'
import {Background} from "./components/common/Background/Background.jsx";

function App() {
  return (
    <>
      <Background />
      <RouterProvider router={router} />
    </>
  )
}

export default App
