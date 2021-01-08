import React from "react";
import loginImg from "../images/login.jpeg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
                <div className="form">
                    <form action='../../../../signup' method='post'>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="text">Occupation</label>
              <input type="text" name="occupation" placeholder="occupation" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="text" name="age" placeholder="age" />
            </div>
         
                    <div className="footer">
                        <button type="submit" className="btn">
                            Register
          </button>
                    </div>
                    </form>
        </div>
            </div>
      </div>
    );
  }
}