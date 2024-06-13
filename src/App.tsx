import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/home/Home";
import { Project } from "./screens/project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:projectId",
    element: <Project />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
