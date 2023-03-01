import { Link } from "react-router-dom";

function Auth() {
  return (
    <div>
      <h2>Auth Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Auth;
