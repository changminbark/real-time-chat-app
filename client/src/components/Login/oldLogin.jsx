// THIS IS THE OTHER WAY OF USING FORMIK WITHOUT A USEFIELD FORMIK HOOK IN ANOTHER COMPONENT (TEXTFIELD)

// import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading } from "@chakra-ui/react"
// import { Form, Formik, useFormik } from "formik";
// import * as Yup from "yup"
// import TextField from "./TextField";
// import { useNavigate } from "react-router-dom";

// // For the long way of using formik and the useFormik function, check out the video or look at the documentation

// const oldLogin = () => {
//     const navigate = useNavigate();
//     return (
//         <Formik
//             initialValues={{ username: "", password: "" }}
//             validationSchema={Yup.object({
//                 username: Yup.string()
//                     .required("Username required!")
//                     .min(6, "Username too short!")
//                     .max(28, "Username too long!"),
//                 password: Yup.string()
//                     .required("Password required!")
//                     .min(6, "Password too short!")
//                     .max(28, "Password too long!")
//             })}
//             onSubmit={(values, actions) => {
//                 alert(JSON.stringify(values, null, 2));
//                 actions.resetForm();
//             }}
//         >
//             {(formik) => {
//                 // If we replace the password Formik HTML component with a TextField component that uses the useField hook, then we don't need this formik lambda expression
//                 // but I left it in as a reference to show an easier/simpler way to use Formik by creating a TextField component and the traditional way.
//                 // An even more traditional/long way would be to create a variable with the useFormik and passing in initialValues and a ValidationSchema without a <Formik> HTML object
//                 <VStack
//                     as={Form}
//                     w={{ base: "90%", md: "500px" }}
//                     m="auto"
//                     justify="center"
//                     h="100vh"
//                     spacing="1rem"
//                 >
//                     <Heading>Log In</Heading>

//                     <FormControl isInvalid={formik.errors.username && formik.touched.username}>
//                         <FormLabel fontSize="lg">Username</FormLabel>
//                         <Input
//                             name="username"
//                             placeholder="Enter username"
//                             autoComplete="off"
//                             size="lg"
//                             type="username"
//                             value={formik.values.username}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur} />
//                         <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
//                     </FormControl>

//                     {/* The ...formik destructured object is equivalent to the attribute settings value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} */}

//                     <FormControl isInvalid={formik.errors.password && formik.touched.password}>
//                         <FormLabel fontSize="lg">Password</FormLabel>
//                         <Input
//                             name="password"
//                             placeholder="Enter password"
//                             autoComplete="off"
//                             size="lg"
//                             type="password"
//                             value={formik.values.password}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur} />
//                         <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//                     </FormControl>

//                     <ButtonGroup pt="1rem">
//                         <Button colorScheme="teal" type="submit">Log In</Button>
//                         <Button onClick={() => navigate("/register")}>Create Account</Button>
//                     </ButtonGroup>
//                 </VStack>
//             }}
//         </Formik>
//     )
// }

// export default oldLogin;
