import { createContext, useState } from "react";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// Without the useContext hook, we would have to pass the data down from parent to child via props.
// We want to use the context we created, not the component UserContext below. The component is used in App.js while the context is
// used in the React elements.
export const AccountContext = createContext();

// The children props makes it so that any child component is passed automatically
// Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default UserContext;
