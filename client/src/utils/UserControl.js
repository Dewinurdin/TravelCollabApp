import axios from "axios";

export default {
 
  // Gets the User with the given id
  getUser: function(id) {
    return axios.get("/api/user" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/user", bookData);
  }
};

