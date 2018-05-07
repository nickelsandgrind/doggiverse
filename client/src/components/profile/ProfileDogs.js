import React, { Component } from "react";
import Moment from "react-moment";

class ProfileDogs extends Component {
  render() {
    const { dog } = this.props;

    const dogItems = dog.map(dog => (
      <li key={dog._id} className="list-group-item text-dark">
        <h3 className="text-primary profiledogsname mb-3">{dog.dogname}</h3>
        <h5>
          <p>
            <span className="text-primary">Age:</span> <span />
            <span className="text-secondary">{dog.age}</span>
          </p>

          <p>
            <span className="text-primary">Breed: </span> <span />
            <span className="text-secondary">{dog.breed}</span>
          </p>
          <p>
            <span className="text-primary">Coat Color: </span> <span />
            <span className="text-secondary">{dog.color}</span>
          </p>
          <p>
            <span className="text-primary">Gender: </span> <span />
            <span className="text-secondary">{dog.gender}</span>
          </p>

          <p>
            {dog.birthdate === "" ? null : (
              <span>
                {" "}
                <span className="text-primary">Birthdate: </span> <span />
                <span className="text-secondary">
                  <Moment format="MM/DD/YYYY">{dog.birthdate}</Moment>
                </span>
              </span>
            )}
          </p>

          <p>
            <span className="text-primary">Loves: </span> <span />
            <span className="text-secondary">{dog.loves}</span>
          </p>
          <p>
            <span className="text-primary">Dislikes: </span> <span />
            <span className="text-secondary">{dog.dislikes}</span>
          </p>

          <p>
            {dog.favtreats === "" ? null : (
              <span>
                <span className="text-primary">Favorite Treats: </span> <span />
                <span className="text-secondary">{dog.favtreats}</span>
              </span>
            )}
          </p>

          <p>
            {dog.allergies === "" ? null : (
              <span>
                <span className="text-primary">Allergies:</span> <span />
                <span className="text-secondary">{dog.allergies}</span>
              </span>
            )}
          </p>
          <p>
            {dog.vaccinations === "" ? null : (
              <span>
                <span className="text-primary">Vaccinations:</span> <span />
                <span className="text-secondary">{dog.vaccinations}</span>
              </span>
            )}
          </p>
        </h5>
        <hr />
      </li>
    ));

    return (
      <div className="row w-100 center">
        <div className="col-md-12">
          <div className="card postcard card-body bg-light mb-3">
            <h2 className="text-center profiledogstitle">My Dogs</h2>
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
