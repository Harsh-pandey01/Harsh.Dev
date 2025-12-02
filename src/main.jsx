import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projectDetail/:id",
        element: <ProjectDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
);
