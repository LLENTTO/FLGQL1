import { useDarkMode } from "../utils/darkModeContext";
import logo from "./assets/logo.png";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={`navbar mb-4 p-0 ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="Logo" />
            <div>Project MGMT</div>
          </div>
        </a>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}
