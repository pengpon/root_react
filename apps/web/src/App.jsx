import "./App.css";
// import { Button } from "@repo/ui";
// import Test from "@/layouts/Test";
import { createHashRouter, RouterProvider } from "react-router";
import routes from "./routes";

const router = createHashRouter(routes);


function App() {
  return <RouterProvider router={router} />;
}
export default App;
