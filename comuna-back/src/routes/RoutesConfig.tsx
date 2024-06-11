import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import IngresoAtlas from "../Components/IngresoAtlas";
import GastoAtlas from "../Components/GastosAtlas";
import ProtectedRoute from "../Components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/nuevo-gasto",
        element: <GastoAtlas />,
      },
      {
        path: "/nuevo-ingreso",
        element: <IngresoAtlas />,
      }    
    ]
  },
]);

export default router