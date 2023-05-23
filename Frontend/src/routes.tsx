import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreateMeetingPage from "./pages/CreateMeetingPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "", element: <LoginPage /> },
      { path: "home", element: <HomePage /> },
      {path: "create", element: <CreateMeetingPage />}
    ],
  },
]);

export default router;
