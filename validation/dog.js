const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDogInput(data) {
  let errors = {};

  // If any of these come in null or undefined it will get set to an empty string because validator only takes strings

  //isEmpty checks for undefined and null

  data.dogname = !isEmpty(data.dogname) ? data.dogname : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.breed = !isEmpty(data.breed) ? data.breed : "";

  data.color = !isEmpty(data.color) ? data.color : "";

  data.gender = !isEmpty(data.gender) ? data.gender : "";

  data.loves = !isEmpty(data.loves) ? data.loves : "";

  data.dislikes = !isEmpty(data.dislikes) ? data.dislikes : "";

  if (Validator.isEmpty(data.dogname)) {
    errors.dogname = "Name field is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }

  if (Validator.isEmpty(data.breed)) {
    errors.breed = "Breed field is required";
  }

  if (Validator.isEmpty(data.color)) {
    errors.color = "Color field is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  if (Validator.isEmpty(data.loves)) {
    errors.loves = "Loves field is required";
  }

  if (Validator.isEmpty(data.dislikes)) {
    errors.dislikes = "Dislikes field is required";
  }

  return {
    errors, // would also be errors:errors so we only need one
    isValid: isEmpty(errors) // since errors is an object and not a string, validator wont work so create a global function called isEmpty.
    // could use the isempty method from lodash but want to minimize libraries used
  };
};
