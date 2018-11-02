import React, { Component } from "react";
import classnames from "classnames";

export default class Contact extends Component {

  render() {
    const {className} = this.props;

    return (
      <div id="contact" className={classnames(className, "Contact")}>
        <h2 className="feature-page-section-header">Contact us</h2>
        <form action="https://formspree.io/info@kibaktile.com" method="POST">
          <span className="name">
            <input type="text" placeholder="Name" name="name" />
          </span>
          <span className="email">
            <input type="text" placeholder="Email" name="mail" />
          </span>
          <textarea placeholder="Message" className="body" type="text" name="comment"/>
          <button className="submit" type="submit" value="Send">Send</button>
        </form>
      </div>
    );
  }
}
