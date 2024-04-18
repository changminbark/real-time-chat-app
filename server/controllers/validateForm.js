const Yup = require("yup");

// The schema here is the shape of the restrictions of the data that is going through the routes/API
const formScehma = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long!"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password too short")
    .max(28, "Password too long!"),
});

// This is a middleware for validating the form
const validateForm = (req, res) => {
  const formData = req.body;
  formScehma
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      // The error that yup returns is an object that has the errors field
      console.log(err.errors);
      // If it resolves the promise, it runs the .then block
    })
    .then((valid) => {
      if (valid) {
        console.log("Form is good");
        next();
      } else {
        res.status(422).send();
      }
    });
};

module.exports = validateForm;
