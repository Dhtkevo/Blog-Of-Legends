import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App