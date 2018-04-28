const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
// const ProfileSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "users"
//   },
//   handle: {
//     type: String,
//     required: true,
//     max: 40
//   },
//   location: {
//     type: String
//   },
//   birthday: {
//     type: Date,
//     required: true
//   },
//   numberofdogs: {
//     type: String
//   },
//   tagline: {
//     type: String
//   },
//   bio: {
//     type: String
//   },
//   instagramUsername: {
//     type: String
//   },

//   dog: [
//     {
//       name: {
//         type: String,
//         required: true
//       },
//       age: {
//         type: String,
//         required: true
//       },
//       breed: {
//         type: String,
//         required: true
//       },
//       color: {
//         type: String,
//         required: true
//       },
//       gender: {
//         type: String,
//         required: true
//       },
//       birthdate: {
//         type: Date,
//         required: true
//       },
//       loves: {
//         type: String,
//         required: true
//       },
//       dislikes: {
//         type: String,
//         required: true
//       },
//       favTreats: {
//         type: String,
//         required: true
//       },
//       allergies: {
//         type: String
//       },
//       vaccinations: {
//         type: String
//       }
//     }
//   ],
//     dogparks: [
//     {
//       name: {
//         type: String,
//         required: true
//       },
//       wastedisposal: {
//         type: Boolean,
//         default: false
//       },
//       description: {
//         type: String
//       }
//     }
//   ],
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
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },

  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
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
