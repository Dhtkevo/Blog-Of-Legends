import Blog from "./components/Blog";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const UserContext = createContext(null);
export const UpdateContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <UpdateContext.Provider value={setUser}>
      <UserContext.Provider value={user}>
        <Blog />
      </UserContext.Provider>
    </UpdateContext.Provider>
  );
}

export default App;
