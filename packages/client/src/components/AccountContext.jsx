import { effect } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// Without the useContext hook, we would have to pass the data down from parent to child via props.
// We want to use the context we created, not the component UserContext below. The component is used in App.js while the context is
// used in the React elements.
export const AccountContext = createContext();

// The children props makes it so that any child component is passed automatically
// Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  const navigate = useNavigate();
  // The useEffect is pretty much a lambda function that runs when the array at the end changes. It runs automatically when the component first mounts.
  useEffect(() => {
    fetch("http://localhost:4000/auth/login", {
      credentials: "include",
    })
      // If server is not running
      .catch((err) => {
        setUser({ loggedIn: false });
        return;
      })
      .then((r) => {
        // If response is not okay
        if (!r || !r.ok || r.status >= 400) {
          setUser({ loggedIn: false });
          return;
        }
        return r.json();
      })
      .then((data) => {
        // If there is no data
        if (!data) {
          setUser({ loggedIn: false });
          return;
        }
        // If there is data of user being logged in, set user data to cookie's session data
        setUser({ ...data });
        navigate("/home");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default UserContext;
