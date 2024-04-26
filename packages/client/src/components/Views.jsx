import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { Text } from "@chakra-ui/react";
import PrivateRoutes from "./PrivateRoutes";
import { useContext } from "react";
import { AccountContext } from "./AccountContext";

const Views = () => {
  // Uses the context for checking whether user is logged in
  const { user } = useContext(AccountContext);
  return user.loggedIn === null ? (
    <Text>Loading...</Text>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Text>Hi welcome home</Text>} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Views;
