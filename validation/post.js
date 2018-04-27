const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // If any of these come in null or undefined it will get set to an empty string because validator only takes strings

  //isEmpty checks for undefined and null

  data.text = !isEmpty(data.text) ? data.text : "";

  // Should we allow the post to be longer?
  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors, // would also be errors:errors so we only need one
    isValid: isEmpty(errors) // since errors is an object and not a string, validator wont work so create a global function called isEmpty.
    // could use the isempty method from lodash but want to minimize libraries used
  };
};
