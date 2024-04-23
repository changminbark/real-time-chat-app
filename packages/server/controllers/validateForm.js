const { formSchema } = require("@real-time-chat-app/common");

// This is a middleware for validating the form
const validateForm = (req, res, next) => {
  const formData = req.body;
  formSchema
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      // The error that yup returns is an object that has the errors field
      console.log(err.errors);
      // If it resolves the promise, it runs the .then block
    })
    .then((valid) => {
      if (valid) {
        // console.log("Form is good");
        // res.status(200).send();
      } else {
        res.status(422).send();
      }
    });
};

module.exports = validateForm;
