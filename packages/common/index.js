const Yup = require("yup");

// The schema here is the shape of the restrictions of the data that is going through the routes/API
const formSchema = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long!"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password too short")
    .max(28, "Password too long!"),
});

module.exports = { formSchema };
