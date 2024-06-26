import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
import { formSchema } from "@real-time-chat-app/common";
import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";

// For the long way of using formik and the useFormik function, check out the video or look at the documentation

const Login = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        // This fetch POST request that is sent to the backend includes cookies/credentials and the headers tells the backend JSON is being sent
        fetch("http://localhost:4000/auth/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vals),
        })
          .catch((err) => {
            return;
          })
          .then((res) => {
            if (!res || !res.ok || res.status >= 400) {
              return;
            }
            return res.json();
          })
          .then((data) => {
            if (!data) return;
            // We are saving the users here where the loggedIn property is set to true using the context hook.
            setUser({ ...data });
            // If there is a status code
            if (data.status) {
              setError(data.status);
            } else if (data.loggedIn) {
              navigate("/home");
            }
          });
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Log In</Heading>
        <Text as="p" color="red.500">
          {error}
        </Text>
        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
        />

        {/* The ...formik destructured object is equivalent to the attribute settings value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} */}

        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
          type="password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Log In
          </Button>
          <Button onClick={() => navigate("/register")}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;
