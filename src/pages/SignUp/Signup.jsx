import "./Signup.css";
import { NavLink } from "react-router-dom";

export function Signup() {
  return (
    <>
      <div className="signup-page">
        <h2>Sign up</h2>
        <form>
          <label>
            <p>First name</p>
            <input
              type="text"
              className="signup-input"
              placeholder="John"
              name="firstName"
              required
            />
          </label>
          <label>
            <p>Last name</p>
            <input
              type="text"
              className="signup-input"
              placeholder="Doe"
              name="lastName"
              required
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              className="signup-input"
              placeholder="example@booksage.com"
              name="email"
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              className="signup-input"
              placeholder="*******"
              name="password"
              required
            />
          </label>
          <label className="signUp_label_accept">
            <input type="checkbox" required />
            <p>I accept terms and conditions</p>
          </label>
          <button type="submit" className="signUp_btn">
          <p>Sign Up</p>
        </button>
        <NavLink className="navlink" to="/login">
          <button className="signUp_btn_login">
            <p>Already have an account? Login</p>
          </button>
        </NavLink>
        </form>
      </div>
    </>
  );
}
