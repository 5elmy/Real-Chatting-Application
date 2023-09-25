import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main/index.js";




const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path:"/auth",
      element:< MainLayout/>,
      children:[
        {
          path:"login", element:<Login/>
        },
        {
          path:"register", element:<Register/>
        },
        {
          path:"reset-password", element:<ResetPassword/>
        },
        {
          path:"new-password", element:<NewPassword/>
        },
      ]

    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings.jsx")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

const Login = Loadable(
  lazy(()=>import("../pages/auth/Login.jsx"))
)
const ResetPassword = Loadable(
  lazy(()=>import("../pages/auth/ResetPassword.jsx"))
)
const NewPassword = Loadable(
  lazy(()=>import("../pages/auth/NewPassword.jsx"))
)
const Register = Loadable(
  lazy(()=>import("../pages/auth/Register.jsx"))
)
