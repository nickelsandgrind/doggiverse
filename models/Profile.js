const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },

  location: {
    type: String
  },

  numberofdogs: {
    type: String,
    required: true
  },

  bio: {
    type: String
  },

  dog: [
    {
      dogname: {
        type: String,
        required: true
      },
      age: {
        type: String,
        required: true
      },
      breed: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      birthdate: {
        type: Date
      },
      loves: {
        type: String,
        required: true
      },
      dislikes: {
        type: String,
        required: true
      },
      favtreats: {
        type: String
      },
      allergies: {
        type: String
      },
      vaccinations: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
