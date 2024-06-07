import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import IngresoAtlas from "../Components/IngresoAtlas";
import GastoAtlas from "../Components/GastosAtlas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nuevo-gasto",
    element: <GastoAtlas />,
  },
  {
    path: "/nuevo-ingreso",
    element: <IngresoAtlas />,
  }
]);

export default router