const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // If any of these come in null or undefined it will get set to an empty string because validator only takes strings

  //isEmpty checks for undefined and null

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors, // would also be errors:errors so we only need one
    isValid: isEmpty(errors) // since errors is an object and not a string, validator wont work so create a global function called isEmpty.
    // could use the isempty method from lodash but want to minimize libraries used
  };
};
