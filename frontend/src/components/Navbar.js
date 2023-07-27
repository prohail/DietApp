import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="z-1">
      <div className="container d-flex justify-content-between py-2">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav>
          {user && (
            <div>
              <span>Welcome {user.name || user.user.name}</span>
              <Link to="/services" className="px-4 fw-semibold">
                Services
              </Link>
              <Link to="/home" className="px-4 fw-semibold">
                Workouts
              </Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="fw-semibold">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
