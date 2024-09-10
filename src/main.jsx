import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth } from "./pages/auth.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { ThemeProvider } from "./components/theme.jsx";
import Student from "./pages/student.jsx";
import Instructor from "./pages/instructor.jsx";
import Dash from "./pages/Dash.jsx";
import RoadMapFlow from "./components/flow-chats/RoadMapFlow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard/*",
    element: <Dashboard />,
  },
  {
    path: "/dash",
    element: <Dash />,
  },
  {
    path: "/webdev",
    element: <RoadMapFlow />,
  },
]);
const clientId = import.meta.env.VITE_CLIENT_ID;
const domain = import.meta.env.VITE_DOMAIN;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "unique_identifier",
        scope: "openid profile email",
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Auth0Provider>
  </StrictMode>
);
