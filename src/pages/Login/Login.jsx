import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { AuthConext } from "../../";

export function Login() {
  const { loginHandler} = useContext(AuthConext);

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const testUserDetails = {
    email: "bijaylaxmi790@gmail.com",
    password: "bijaylaxmi",
  };

  // useEffect(() => {
  //   (async () => {
  //     loginHandler(userDetails.email, userDetails.password);
  //   })();
  // }, [userDetails.email, userDetails.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(userDetails);
  };

  
  return (
    <>
      {/* <h1>Log in page</h1> */}
      <div className="login-page">
        <h3>Log in</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <p>
              {" "}
              Email<span>*</span>
            </p>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="login-details"
              name="email"
              required
              onChange={(e) =>
                setUserDetails((userInput) => ({
                  ...userInput,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label>
            <p>
              {" "}
              Password<span>*</span>
            </p>

            <input
              type="password"
              placeholder="*******"
              className="login-details"
              name="password"
              required
              onChange={(e) =>
                setUserDetails((userInput) => ({
                  ...userInput,
                  password: e.target.value,
                }))
              }
            />
          </label>
          <button className="login-btn btn" type="submit">
            Login
          </button>
          <button
            className="btn testuser-btn"
            type="button"
            onClick={() => setUserDetails(testUserDetails)}
          >
            Login as test user
          </button>
          <h1>OR</h1>
          <NavLink to="/signup">
            <button className="signup-btn btn">Create new account</button>
          </NavLink>
        </form>
      </div>
    </>
  );
}
