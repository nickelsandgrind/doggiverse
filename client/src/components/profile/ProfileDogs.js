import React, { Component } from "react";
import Moment from "react-moment";

class ProfileDogs extends Component {
  render() {
    const { dog } = this.props;

    const dogItems = dog.map(dog => (
      <li key={dog._id} className="list-group-item text-dark">
        <h3 className="text-primary mb-3">{dog.dogname}</h3>
        <h5>
          <p>
            Age: <span />
            {dog.age}
          </p>

          <p>
            Breed: <span />
            {dog.breed}
          </p>
          <p>
            Coat Color: <span />
            {dog.color}
          </p>
          <p>
            Gender: <span />
            {dog.gender}
          </p>

          <p>
            {dog.birthdate === "" ? null : (
              <span>
                {" "}
                Birthdate: <span />
                <Moment format="DD/MM/YYYY">{dog.birthdate}</Moment>
              </span>
            )}
          </p>

          <p>
            Loves: <span />
            {dog.loves}
          </p>
          <p>
            Dislikes: <span />
            {dog.dislikes}
          </p>

          <p>
            {dog.favtreats === "" ? null : (
              <span>
                Favorite Treats: <span />
                {dog.favtreats}
              </span>
            )}
          </p>

          <p>
            {dog.allergies === "" ? null : (
              <span>
                Allergies: <span />
                {dog.allergies}
              </span>
            )}
          </p>
          <p>
            {dog.vaccinations === "" ? null : (
              <span>
                Vaccinations: <span />
                {dog.vaccinations}
              </span>
            )}
          </p>
        </h5>
      </li>
    ));

    return (
      <div className="row w-100 center">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h2 className="text-center">My Dogs</h2>
            {dogItems.length > 0 ? (
              <ul className="list-group">{dogItems}</ul>
            ) : (
              <p className="text-center">No Dogs Listed</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDogs;
