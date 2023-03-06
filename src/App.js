import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
// import HomePage  from "./pages/Home";
// import LoginPage  from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;