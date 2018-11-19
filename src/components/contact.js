import React, { Component } from "react";
import classnames from "classnames";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Form from "./Form";

export default class Contact extends Component {

  state = {
    name: "",
    email: "",
    comment: ""
  }

  handleChange = (e) => {
    e.preventDefault();

    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { className } = this.props;

    return (
      <div id="contact" className={classnames(className, "Contact")}>
        <h2 className="feature-page-section-header">Contact us</h2>
        <Form>
          <span className="name-input">
            <TextInput placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
          </span>
          <span className="email-input">
            <TextInput placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </span>
          <TextArea placeholder="Message" className="body" name="comment" onChange={this.handleChange} />
        </Form>
      </div>
    );
  }
}
