import React from "react";
import firebase from "firebase/app";
import "firebase/database";
// import { getDefaultNormalizer } from "@testing-library/react";
import Axios from "axios";

const config = {
  apiKey: "AIzaSyDc-KU6Ln6IgozqJhOn5SVgG4LrhyhufSY",
  databaseURL: "https://youandmewebcreations-2b76d.firebaseio.com"
};

if (!firebase) {
  firebase.initializeApp(config);
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
      // time: Date.getTime()
    };

    Axios.post(
      "https://us-centrall-youandmewebcreations.cloudfunctions.net/submit",
      data
    )
      .then(res => {
        if (firebase) {
          return firebase
            .database()
            .ref("contacts")
            .push(data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
