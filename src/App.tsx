import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:projectId",
    element: "",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
