const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // If any of these come in null or undefined it will get set to an empty string because validator only takes strings

  //isEmpty checks for undefined and null

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors, // would also be errors:errors so we only need one
    isValid: isEmpty(errors) // since errors is an object and not a string, validator wont work so create a global function called isEmpty.
    // could use the isempty method from lodash but want to minimize libraries used
  };
};
