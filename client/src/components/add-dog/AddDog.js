import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDog } from "../../actions/profileActions";

class AddDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogname: "",
      age: "",
      breed: "",
      color: "",
      gender: "",
      birthdate: "",
      loves: "",
      dislikes: "",
      favtreats: "",
      allergies: "",
      vaccinations: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const dogData = {
      dogname: this.state.dogname,
      age: this.state.age,
      breed: this.state.breed,
      color: this.state.color,
      gender: this.state.gender,
      birthdate: this.state.birthdate,
      loves: this.state.loves,
      dislikes: this.state.dislikes,
      favtreats: this.state.favtreats,
      allergies: this.state.allergies,
      vaccinations: this.state.vaccinations
    };

    this.props.addDog(dogData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-dog">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back To Dashboard
              </Link>
              <h1 className="display-4 text-center">Add A Dog</h1>

              <p className="lead text-center">
                Feel free to add any dog you have had in the past along with
                your current ones.
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Name"
                  name="dogname"
                  value={this.state.dogname}
                  onChange={this.onChange}
                  error={errors.dogname}
                />
                <TextFieldGroup
                  placeholder="* Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  error={errors.age}
                />
                <TextFieldGroup
                  placeholder="* Breed"
                  name="breed"
                  value={this.state.breed}
                  onChange={this.onChange}
                  error={errors.breed}
                />
                <TextFieldGroup
                  placeholder="* Color"
                  name="color"
                  value={this.state.color}
                  onChange={this.onChange}
                  error={errors.color}
                />
                <TextFieldGroup
                  placeholder="* Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  error={errors.gender}
                />
                <TextFieldGroup
                  placeholder="Birthdate"
                  name="birthdate"
                  type="date"
                  value={this.state.birthdate}
                  onChange={this.onChange}
                  error={errors.birthdate}
                />
                <TextAreaFieldGroup
                  placeholder="* Loves"
                  name="loves"
                  value={this.state.loves}
                  onChange={this.onChange}
                  error={errors.loves}
                />
                <TextAreaFieldGroup
                  placeholder="* Dislikes"
                  name="dislikes"
                  value={this.state.dislikes}
                  onChange={this.onChange}
                  error={errors.dislikes}
                />
                <TextAreaFieldGroup
                  placeholder="Favorite Treats"
                  name="favtreats"
                  value={this.state.favtreats}
                  onChange={this.onChange}
                  error={errors.favtreats}
                />
                <TextAreaFieldGroup
                  placeholder="Allergies"
                  name="allergies"
                  value={this.state.allergies}
                  onChange={this.onChange}
                  error={errors.allergies}
                />
                <TextAreaFieldGroup
                  placeholder="Vaccinations"
                  name="vaccinations"
                  value={this.state.vaccinations}
                  onChange={this.onChange}
                  error={errors.vaccinations}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddDog.propTypes = {
  addDog: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addDog })(withRouter(AddDog));
